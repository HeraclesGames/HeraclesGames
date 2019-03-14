import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/games",
      name: "games",

      component: () =>
        import("./views/Games.vue")
    },
    {
      path: "/info",
      name: "info",
      
      component: () =>
        import("./views/Info.vue")
    },
    {
      path: "/contact",
      name: "contact",
      
      component: () =>
        import("./views/Contact.vue")
    }
  ]
});
