"use strict";

const Keycloak = require("keycloak-connect");

// No store is needed (fallback to bearer store) as it is a non-interactive API
const keycloak = new Keycloak({});

// Export as a singleton, so we can easily access the configured instance
module.exports = keycloak;