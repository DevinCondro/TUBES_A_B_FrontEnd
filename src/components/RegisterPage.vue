<template>
    <main>
        <v-container fluid fill-height class="posisinya">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm6 elevation-6>
              <v-toolbar color="black ">
                <v-toolbar-title >
                  <h1>Register User</h1>
                </v-toolbar-title>
              </v-toolbar>
              
              <v-card>
                <div class="card">
                <v-card-text class="pt-4">
                    <v-form @submit.prevent="store">
                      <!-- Input nama -->
                      <v-text-field
                        v-model="user.nama"
                        :rules="[rules.required]"
                        label="Nama"
                      ></v-text-field>

                      <!-- Input Email -->
                      <v-text-field
                        v-model="user.email"
                        :rules="[rules.required]"
                        label="E-mail"
                      ></v-text-field>
                      
                      <!-- Input Tanggal -->
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="user.tanggal_lahir"
                            label="Tanggal Lahir"
                            prepend-icon="mdi-calendar"
                            :rules="[rules.required]"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="user.tanggal_lahir"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(user.tanggal_lahir)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>

                      <!-- Input Password -->
                      <v-text-field
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required]"
                        :type="show2 ? 'text' : 'password'"
                        nama="input-10-2"
                        label="Password"
                        class="input-group--focused"
                        @click:append="show2 = !show2"
                      ></v-text-field> 

                      <v-layout justify-end>
                        <v-btn
                          class="green darken-3 white--text"
                          type="submit"
                          >Register
                        </v-btn>
                      </v-layout>
                    </v-form>
                </v-card-text>
              </div>
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
import router from "../router"
export default {
  data () {
      return {
        show2: true,
        menu: false,
        password: 'Password',
        date: new Date().toISOString().substr(0, 10),
        rules: {
          required: value => !!value || 'Required',
        },
      }
    },
    setup() {
        const user = reactive({ 
            nama: '', 
            email: '', 
            tanggal_lahir: '',
            password:'',
        });
        //state validation
        const validation = ref([]);
        function store() { 
            let nama = user.nama
            let email = user.email
            let tanggal_lahir = user.tanggal_lahir
            let password = user.password
            // let type = 1
            axios.post('http://localhost:8000/api/register', { 
                nama: nama,
                email: email,
                tanggal_lahir: tanggal_lahir,
                password: password,
                // type: type 
            }).then(() => { 
              alert("register test")
              console.log("Register Berhasil")
              router.push("Login")
              
            }).catch(error => { 
              console.log("Gagal ya gaes yak")
                //assign state validation with error 
                validation.value = error.response.data 
            }) 
        }
        return{
            user,
            validation,
            store
        }

    },
    methods: {
        movepage(link) {
            this.$router.push(link) 
            window.location.reload()
        },
        submit() {
            const formData = new FormData()
            formData.append('nama', this.nama);
            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('tanggal_lahir',this.tanggal_lahir);
            // formData.append('type',this.type);
            if(this.$refs.form.validate()) {
                this.$http
                .post(this.$api + "/register", formData) .then((response)=> {
                    this.error_message = response.data.message;
                    this.color = "green"
                    this.clear()
                    this.snackbar = true;
                    this.$router.push({
                        nama: "LoginPage",
                    });
                })
                .catch((error)=>{
                    this.error_message = error.response.data.message;
                    this.snackbar = true;
                    this.color = "red"
                });
            }
        },
        clear() {
            this.$refs.formData.reset();
        },
    }
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

  h1 {
    text-align: center;
    color: rgb(255, 255, 255);
  }

  .card {
    background-color: rgb(253, 241, 225);
  }
  
  </style>