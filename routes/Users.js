const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');

router.get('/me', async (req, res) => {
    res.json(req.session.user);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await Users.findByPk(id);

    if (user) {
        delete user.password;
    }

    res.json(user);
});

router.post('/register', async (req, res) => {
    const body = req.body;

    if (body.username == null || body.password == null) {
        return res.status(400).json({ error: "Nome de usuário e senha são obrigatórios" });
    }

    if (body.username.length < 3) {
        return res.status(400).json({ error: "Nome de usuário deve ter pelo menos 3 caracteres" });
    }

    if (body.username.length > 15) {
        return res.status(400).json({ error: "Nome de usuário deve ter no máximo 15 caracteres" });
    }

    if (body.password.length < 6) {
        return res.status(400).json({ error: "Senha deve ter pelo menos 6 caracteres" });
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const userData = {
        username: body.username,
        password: hashedPassword,
    };

    const result = await Users.create(userData);

    req.session.user = result;

    res.status(201).json(result);
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username } });

    if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.json(user);
    } else {
        res.status(401).json({ error: "Nome de usuário ou senha inválidos" });
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.json({ message: "Logout bem-sucedido" });
});

module.exports = router;
