<template>
    <div id="app">
        <div id="login">
            <div id="form">
                <div id="description">
                    <h2 align="center" >WELCOME</h2>
                    <div class="d-flex flex-column justify-space-between align-center">
                        <v-img :src="require('../assets/logobaru.png')" aspect-ratio="1.2" height="300" width="300"></v-img>
                    </div>
                    <p>Don't have an account yet ? Click here to <a @click="register"><u><i style="color:gold">Register</i></u></a></p>
                </div>
                <form @submit.prevent="login">
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model="email" placeholder="@gmail.com" autocomplete="off">

                    <label for="password">Password</label>&nbsp;
                    <i class="fas" :class="[passwordFieldIcon]" @click="hidePassword = !hidePassword"></i>
                    <input :type="passwordFieldType" id="password" v-model="password" placeholder="**********">

                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import router from "../router"
export default {
name: "LoginPage",
components: {
    // Something
},
data() {
    return {
        email: "",
        passwordFieldIcon: "",
        passwordFieldType: "",
        password: "",
        rules: {
            emailRules: [(v) => !!v || "E-mail tidak boleh kosong dan format harus valid"],
            passwordRules: [(v) => !!v || "Password tidak boleh kosong"],
        },
        
    };
},
setup() {
        const user = reactive({ 
            email: '', 
            password:'',
        });
        //state validation
        const validation = ref([]);
        function login() { 
            let email = user.email
            let password = user.password
            axios.post('http://localhost:8000/api/login', { 
                email: email,
                password: password,
                withCredentials: true
            }).then(() => { 
              alert("register test")
              console.log("Register Berhasil")
              router.push("dashboard")
            }).catch(error => { 
              console.log("Gagal ya gaes yak")
                //assign state validation with error 
                validation.value = error.response.data 
            }) 
        }
        return{
            user,
            validation,
            login
        }
    },
methods: {
    register() {
        this.$router.push({
            name: "Register",
        });
    },
}
}

</script>

<style>
* {
box-sizing: border-box;
font-family: Verdana, sans-serif;
}

html,
body {
height: 100%;
margin: 0;
padding: 0;
width: 100%;
}

div#app {
width: 100%;
height: 100%;
}

div#app div#login div#form {
background-color: #1f1f1f;
border-radius: 20px 20px 20px 20px ;
color: #ecf0f1;
width: 500px;
padding: 35px;
}

div#app div#login {
align-items: center;
background : radial-gradient(circle, black, #baa360);
display: flex;
justify-content: center;
width: 100%;
height: 100%;
}

div#app div#login div#description v-img,
div#app div#login div#description p {
    margin: 0;
}

div#app div#login div#description p {
font-size: 0.8em;
color: #ecf0f1;
margin-top: 10px;
text-align-last: center;
}

div#app div#login div#form label,
div#app div#login div#form input {
outline: none;
width: 100%;
}

div#app div#login div#form input {
background-color: transparent;
border: none;
color: #ecf0f1;
font-size: 1em;
margin-bottom: 20px;
}

div#app div#login div#form ::placeholder {
color: #ecf0f1;
opacity: 1;
}

div#app div#login div#form button {
background-color: #baa360;
cursor: pointer;
padding: 10px;
transition: background-color 0.2s ease-in-out;
width: 100%;
}

div#app div#login div#form button:hover {
background-color: #0a0a0a;
}

@media screen and (max-width: 600px) {
div#app div#login {
align-items: unset;
background-color: unset;
display: unset;
justify-content: unset;
}

div#app div#login div#form {
border-radius: unset;
box-shadow: unset;
width: 100%;
}

div#app div#login div#form form {
margin: 0 auto;
max-width: 280px;
width: 100%;
}
}
</style>