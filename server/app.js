const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const passportStrategy = require('./middleware/passport-strategy');
const authRouters = require('./routes/auth.routes');
const postRouters = require('./routes/post.routes');
const commentRouters = require('./routes/comment.routes');
const keys = require('./keys');
const app = express();

mongoose.connect(keys.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error));

app.use(passport.initialize());
passport.use(passportStrategy);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRouters);
app.use('/api/post', postRouters);
app.use('/api/comment', commentRouters);

module.exports = app;