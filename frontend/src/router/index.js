import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";
import keycloakSvc from "../services/keycloackSvc";
import { init } from "../services/keycloackSvc";

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    // eslint-disable-next-line no-undef
    mode: process.env.VUE_ROUTER_MODE,
    // eslint-disable-next-line no-undef
    base: process.env.VUE_ROUTER_BASE
  });

  Router.beforeEach(async(to, from, next) => {
    console.log(`Navigating from ${from.fullPath} to ${to.fullPath}`);

    await init();

    console.log("isAuthenticated " + keycloakSvc.authenticated);

    if (to.meta.private) {
      if (!keycloakSvc.authenticated) {
        console.log("Going to login");
        keycloakSvc.login({
          redirectUri: `http://localhost:8100${to.path}`
        });
      }
      else if (keycloakSvc.hasRealmRole("test-user")) {
        console.log(keycloakSvc.token);

        /*let profile = await keycloakSvc.loadUserProfile();
        console.log("profile", profile);*/

        return next();
      }
      else {
        return next("/403");
      }
    }
    
    next();
  
  });

  Router.afterEach((to) => {
    console.log(Router.currentRoute);

    if (Router.currentRoute.hash.includes("session_state")) {
      console.log("Clearing hash");
      Router.replace(to.path);
    }
  });

  return Router;
}
