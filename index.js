require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

const db = require('./models');

const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);

const commentRouter = require('./routes/Comments');
app.use('/comments', commentRouter);

const userRouter = require('./routes/Users');
app.use('/users', userRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Servidor rodando na porta 3001');
    });
});
