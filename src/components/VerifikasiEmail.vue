<template>
    <div>
      <h1>Verifying Email For You....
        Please Wait.
      </h1>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  // import { mapActions } from "vuex";
  import axios from "axios";
  import route from "../router";
  
  export default {
    methods: {
      verifyEmail(payload) {
        console.log("params", payload);
        axios
          .get(" http://127.0.0.1:8000/api/email-verification", {
            params: payload,
          })
          .then((response) => {
            console.log(response);
            route.push({ name: "Login" });
          })
          .catch((error) => {
            reject(error);
          });
        console.log("test");
      },
    },
    created() {
      console.log("Created");
      this.verifyEmail({ ...this.$route.query });
    },
  };
  </script>
  
  <style>
  </style>