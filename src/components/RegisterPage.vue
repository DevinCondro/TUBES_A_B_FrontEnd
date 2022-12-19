<template>
    <main>
      <v-container fluid fill-height class="posisinya">
        <v-layout flex align-center justify-center>
          <v-flex xs12 sm6 elevation-6>
            <v-toolbar class="blue lighten-1 white">
              <v-toolbar-title>
                <h1 class="judul">Register User</h1>
              </v-toolbar-title>
            </v-toolbar>
  
            <v-card>
              <v-card-text class="pt-4">
                <div>
                  <v-form @submit.prevent="store">
                    <v-text-field
                      placeholder="Name"
                      v-model="registerAkun.name"
                      required
                    ></v-text-field>
                    <v-text-field
                      placeholder="E-mail"
                      v-model="registerAkun.email"
                      required
                    ></v-text-field>
                    <v-text-field
                      placeholder="Tanggal Lahir"
                      v-model="registerAkun.tanggal_lahir"
                      required
                    ></v-text-field>
                    <v-text-field
                      placeholder="Password"
                      v-model="registerAkun.password"
                      :value="pass"
                      :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="() => (value = !value)"
                      :type="value ? 'password' : 'text'"
                      required
                    >
                    </v-text-field>
                    <v-layout justify-end>
                      <v-btn
                        class="mr-2"
                        @click="submit"
                        :class="{
                          'green darken-1 white--text': valid,
                          disabled: !valid,
                        }"
                        >Go
                      </v-btn>
                      <v-btn @click="clear" class="red darken-3 white--text"
                        >Clear
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn class="green darken-3 white--text"
                        type="submit" @click="login">Login
                      </v-btn>
                    </v-layout>
                  </v-form>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </template>
  
  <script>
  /* eslint-disable */
import { reactive, ref } from "vue";
import axios from "axios";
export default {
  data() {
    return {
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },
  setup() {
    const registerAkun = reactive({
      nama: "",
      email: "",
      tanggal_lahir:"",
      password: "",
    });
    const validation = ref([]);
    // const router = default/();
    function store() {
      console.log("Fungsi Store");
      let nama = registerAkun.nama;
      let email = registerAkun.email;
      let tanggal_lahir = registerAkun.tanggal_lahir;
      let password = registerAkun.password;
      axios
        .post("http://127.0.0.1:8000/api/register/", {
          // http://127.0.0.1:8000/api/register   
          nama: nama,
          email: email,
          tanggal_lahir:tanggal_lahir,
          password: password,
        })
      .then(() => {
          // console.log("Berhasil Register, Tunggu verifikasi");
          alert("Register Berhasil !!");
          router.push({ name: "Login" });
        })
        .catch((error) => {
          console.log(error)
          console.log("Gagal");
          alert("Registrasi Gagal !!");
          validation.value = error.response.data;
        });
    }
    return {
      registerAkun,
      store,
    };
  },
};
  </script>
  
  <style>
  .grey--text {
    font-family: "Jolly Lodger";
  }
  .posisinya {
    position: absolute;
    top: 20px;
    left: 0px;
    right: 0px;
  }
  .judul {
    text-align: center;
  }
  </style>