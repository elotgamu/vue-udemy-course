import Home from "./components/Home.vue";
import User from "./components/user/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";

const routes = [
  {
    path: "",
    component: Home,
    name: "home"
  },
  {
    path: "/user",
    component: User,
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      {
        path: ":id/edit",
        component: UserEdit,
        name: "userEdit",
        beforeEnter: (to, from, next) => {
          console.log("Inside router setup");
          next();
        }
      }
    ]
  },
  { path: "*", redirect: { name: "home" } }
];

export default routes;
