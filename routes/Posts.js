const express = require('express');
const router = express.Router();
const { Posts, Users } = require('../models');
const needsAuth = require('../middlewares/needsAuth');

router.get('/', async (req, res) => {
    const listOfPosts = await Posts.findAll({
        include: [{
            model: Users,
            attributes: ['username']
        }],
        order: [['createdAt', 'DESC']]
    });
    res.json(listOfPosts);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id, {
        include: [{
            model: Users,
            attributes: ['username']
        }]
    });
    res.json(post);
});

router.post('/', needsAuth, async (req, res) => {
    const post = req.body;

    const postData = {
        title: post.title,
        posttext: post.posttext,
        UserId: req.session.user.id,
    };

    await Posts.create(postData);
    res.json(postData);
});

module.exports = router;
