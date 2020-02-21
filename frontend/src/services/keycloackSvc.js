import Keycloak from "keycloak-js";

let keycloak = Keycloak("http://localhost:8100/statics/keycloak.json");
  
export default keycloak;

let initPromise;

async function abc() {
  console.log("Initializing...");

  keycloak.onTokenExpired = async() => {
    console.log("Updating token");

    await keycloak.updateToken(30);
  };

  await keycloak.init({
    onLoad: "check-sso",
    promiseType: "native",
    enableLogging: true
  });
}

export async function init() {
  console.log("My init");

  if (initPromise)
    return await initPromise;

  initPromise = abc();

  return await initPromise;
}