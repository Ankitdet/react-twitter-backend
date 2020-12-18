const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");
const http = require("http");
const chalk = require("chalk");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const SocketIO = require("socket.io");

var corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"],
};

//create express application
const app = express();
app.use(cors(corsOption));

/**
 * MIDDLEWARES
 */

// set up cors to allow us to accept requests from our client
app.use(cors());
//passport authentication strategy for twitter
// initalize passport
app.use(passport.initialize());
require("./config/passport")(passport);
app.use(cors());
app.use(morgan("dev"));
// gzip compression
app.use(compression());

app.use(helmet());
//making body available to read in request object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Redirect to api routes

app.use("/api", require("./routes"));
const server = http.createServer(app);
const io = SocketIO(server);

require("./services/twitterService")(io, app);

const port = process.env.PORT || 5000;

// 🌎 Listen to PORT
server.listen(port, () =>
  console.log(chalk.magenta(`server eavesdropping on port ${port}`))
);
