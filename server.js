import express from "express";
import "dotenv/config";
import routes from "./routes.js";
import morganMiddleware from "./morgan_middleware.js";

const server = express();
const domain = process.env.DOMAIN;
const port = process.env.PORT;

server.use(express.json());
server.use(morganMiddleware);
server.use("/app", routes);

server.listen(port, domain, () => {
  console.log(`server is running on http://${domain}:${port}`);
});
