export default [
  {
    path: "/404",
    name: "404",
    component: (resolve) => require(["./components/views/404"], resolve),
  },
  {
    path: "*",
    redirect: { name: "404" },
  },
];
