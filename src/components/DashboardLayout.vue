<template>
    <div class="dashboard">
      <v-navigation-drawer class="fullheight" width="256" v-model="drawer" absolute temporary color="white">
        <v-list-item>
          <v-list-item-content>
            <v-img max-height="100" max-width="100" :src="logo" style="margin-left:60px"></v-img>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" tag="router-link"
            :to="item.to">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar color="black" dark height="100">
        <v-app-bar-nav-icon @click="drawer = true" color="white"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <v-img :src="title" height="80" width="80" ></v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="green" @click="login"><v-icon style="margin-right:6px;" size="140%">mdi-login</v-icon>LOGIN</v-btn>
      </v-app-bar>
  
      <div class="fullheight pa-5">
        <router-view></router-view>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "DashboardIndex",
    data() {
      return {
        drawer: false,
        group: null,
        items: [
          { title: "Pemesanan Kamar", to: "/kamar" },
          { title: "Pemesanan Makanan", to: "/makanan" },
          { title: "Pemesanan Ballroom", to: "/ballroom" },
        ],
        logo: require("../assets/logobaru.png"),
        title: require("../assets/logobaru.png"),
      };
    },
    methods: {
      login() {
        this.$router.push({
          name: "Login",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .fullheight {
    min-height: 100vh !important;
  }
  </style>