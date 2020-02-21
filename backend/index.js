"use strict";

const Express = require("express");
const bodyParser = require("body-parser");
const notFoundExpress = require("not-found-express");
const cors = require("cors-express2");

const keycloak = require("./keycloak");

const routes = require("./routes");

let PORT = process.env.PORT || 3005;

const express = Express();

express.use(cors({
  allowWithoutOrigin: true,
  onlyAllowedOrigin: false,
  allowCredentials: true,
  nullOrigin: "null"
}));
express.use(keycloak.middleware());
express.use(bodyParser.json());

express.use("/", routes);
express.use(notFoundExpress());

(async () => {
  await new Promise((resolve) => express.listen(PORT, resolve));

  console.log(`Express listening on port ${PORT}`);
})().catch((err) => {
  console.error(err.toString());
  process.exit(1);
});