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
            name: "dashboard",
            component: importComponent("DashboardLayout"),
            children:[
                {
                    path:"/",
                    name : "Root",
                    component : importComponent("DashboardIndex"),
                },
                {
                    path:"/kamar",
                    name:"kamar.index",
                    component: ()=>import("@/components/ToDoList/PemesananKamar/indexPage.vue"),
                },
                {
                    path:"/kamar/create",
                    name:"kamar.create",
                    component: ()=>import("@/components/ToDoList/PemesananKamar/createPage.vue"),
                },
                {
                    path:"/kamar/edit",
                    name:"kamar.edit",
                    component: ()=>import("@/components/ToDoList/PemesananKamar/editPage.vue"),
                },
                {
                    path:"/makanan",
                    name:"makanan.index",
                    component: ()=>import("@/components/ToDoList/PemesananMakanan/indexPage.vue"),
                },
                {
                    path:"/makanan/create",
                    name:"makanan.create",
                    component: ()=>import("@/components/ToDoList/PemesananMakanan/createPage.vue"),
                },
                {
                    path:"/makanan/edit",
                    name:"makanan.edit",
                    component: ()=>import("@/components/ToDoList/PemesananMakanan/editPage.vue"),
                },
                {
                    path:"/ballroom",
                    name:"ballroom.index",
                    component: ()=>import("@/components/ToDoList/PemesananBallroom/indexPage.vue"),
                },
                {
                    path:"/ballroom/create",
                    name:"ballroom.create",
                    component: ()=>import("@/components/ToDoList/PemesananBallroom/createPage.vue"),
                },
                {
                    path:"/ballroom/edit",
                    name:"ballroom.edit",
                    component: ()=>import("@/components/ToDoList/PemesananBallroom/editPage.vue"),
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
        {
            path: "/verify-email",
            name: "verif",
            component: importComponent("VerifikasiEmail")
        },
    ],
});

export default router;