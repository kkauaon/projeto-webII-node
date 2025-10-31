const needsAuth = (req, res, next) => {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ error: "Usuário não autenticado" });
    }
};

module.exports = needsAuth;