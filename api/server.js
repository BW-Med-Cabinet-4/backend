const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//import routes
const userRouter = require('./users/usersRouter.js');
const authRouter = require('./auth/auth-router');
const ailmentRouter = require('./ailment/ailmentRouter');

const server = express();

server
  .use(helmet())
  .use(express.json())
  .use(cors())
  .use(morgan("combined"));


server.get("/", (req, res) => {
  res.send("SERVER IS ON");
});

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/ailment', ailmentRouter);


module.exports = server;