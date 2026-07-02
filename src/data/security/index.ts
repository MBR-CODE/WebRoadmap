import jwt from "./jwt";
import oauth from "./oauth";
import https from "./https";
import cors from "./cors";
import authentication from "./authentication";
import authorization from "./authorization";

const security = [
  https,
  cors,
  authentication,
  authorization,
  jwt,
  oauth,
];

export default security;