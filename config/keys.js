const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "Xit3fm1ZSqHYUuBlSsBbUbRlv",
  TWITTER_CONSUMER_SECRET: "DmGyzfv0UpdqMknXhpMQ8FJGXPJ0HNXt0qRD6D3Hjcd8exFKGP",
  TWITTER_ACCESS_TOKEN: "744821118943399940-Km6a2SKR6UPMklQslfpvvrAcDU3m2Bp",
  TWITTER_ACCESS_TOKEN_SECRET: "bnlJSqDP2x1FjlZW8gs1hJt38m7ZlzYLuNiZQZF7ElDaI"
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const ENV = process.env.NODE_ENV;

const SERVER_URL =
window.location.origin === "https://react-twitter-frontend.herokuapp.com"
    ? "https://react-twitter-backend-new.herokuapp.com"
    : "http://localhost:5000";

const SOCKET_URL = "127.0.0.1";

const SOCKET_PORT = 5001;

const JWT_SECRET = "3hmPDIfMO97zziRU";

const ERROR_CODES = {
  INVALID_SHAPE: "INVALID_SHAPE",
  NOT_FOUND: "NOT_FOUND",
  EXISTS: "EXISTS",
  INVALID_AUTH: "INVALID_AUTH",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  NOT_AUTHORIZED: "NOT_AUTHORIZED"
};

const KEYS = {
  ...TWITTER_TOKENS,
  ...SESSION,
  JWT_SECRET,
  ERROR_CODES,
  SERVER_URL,
  SOCKET_URL,
  SOCKET_PORT,
  ENV
};

module.exports = KEYS;
