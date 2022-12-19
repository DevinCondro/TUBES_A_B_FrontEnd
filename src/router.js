import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function importComponent(path){
    return () => import(`./components/${path}.vue`);
}

const router = new VueRouter({
    mode: "history",
    routes:[
        {
            path:"/",
            name: "admin",
            component: importComponent("DashboardLayout"),
            children:[
                {
                    path:"/",
                    name : "Root",
                    component : importComponent("DashboardIndex"),
                },
                {
                    path:"/kamar",
                    name:"PemesananKamar",
                    component: importComponent("ToDoList/PemesananKamar"),
                },
            ],
        },
        {
            path: "/register",
            name: "Register",
            component: importComponent("RegisterPage"),
        },
        {
            path: "/login",
            name: "Login",
            component: importComponent("Login"),
        },
        // {
        //     path: "/home",
        //     name: "Home",
        //     component: importComponent("HomePage"),
        // },
        // {
        //     path: "*",
        //     redirect: "/"
        // },
    ],
});

export default router;