import morgan from "morgan";
import logger from "./logger.js";

const stream = {
  write: (message) => logger.http(message),
};

const skip = () => {
  const env = process.env.ENV;
  return env !== "DEVELOPMENT";
};

const morganMiddleware = morgan(
  ":remote-addr :method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;
