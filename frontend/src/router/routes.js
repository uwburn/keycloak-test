
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "public" },
      { path: "public", component: () => import("pages/Public.vue"), meta: { private: false } },
      { path: "protected", component: () => import("pages/Protected.vue"), meta: { private: true } },
      { path: "403", component: () => import("pages/403.vue") }
    ]
  }
];

// Always leave this as last one
// eslint-disable-next-line no-undef
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
