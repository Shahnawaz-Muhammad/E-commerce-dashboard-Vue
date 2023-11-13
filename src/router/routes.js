export default [
  {
    name: "Master",
    path: "/",
    component: () => import("../views/layout/Master.vue"),
    redirect: "/dashboard",
    children: [
      {
        name: "dashboard",
        path: "/dashboard",
        component: () => import("../views/Dashboard.vue"),
      },
      {
        name: "analytics",
        path: "/analytics",
        component: () => import("../views/Analytics.vue"),
      },
      {
        name: "inventory",
        path: "/inventory",
        component: () => import("../views/Inventory.vue"),
      },
    ],
  },
];
