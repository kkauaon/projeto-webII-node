const express = require('express');
const router = express.Router();
const { Comments, Users } = require('../models');
const needsAuth = require('../middlewares/needsAuth');

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comments.findAll({
        where: { PostId: postId },
        include: [
            {
                model: Users,
                attributes: ['username'],
            },
        ],
    });
    res.json(comments);
});

router.post('/', needsAuth, async (req, res) => {
    const comment = req.body;

    const commentData = {
        commentBody: comment.commentBody,
        PostId: comment.PostId,
        UserId: req.session.user.id,
    };

    const saved = await Comments.create(commentData);

    res.json({...saved.dataValues, User: { username: req.session.user.username } });
});

module.exports = router;
