"use strict";

const express = require("express");
const asyncWrapper = require("async-wrapper-express");

const keycloak = require("../keycloak");

const router = express.Router();

router.get("/public", asyncWrapper(async function(req, res) {
  console.log("Requesting public");

  res.send({
    value: "This is a public object"
  });
}));

router.get("/check-sso", keycloak.checkSso(), (req, res) => {
  console.log("Requesting SSO check");

  res.status(204).end();
});

router.get("/protect", keycloak.protect(), (req, res) => {
  console.log("Requesting protect");

  res.send({
    value: "This is a protected object"
  });
});

console.log("RabbitMQ routes registered");

module.exports = router;