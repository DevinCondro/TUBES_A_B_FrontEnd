<template>
    <v-main class="list">
        <v-card>
            <v-list-item>
                <v-list-item-avatar color="white">   
                <v-img :src="avatar" height="50" width="50" ></v-img>
              </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">Pemesanan Ballroom</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
  
            <v-card-title>
                <v-text-field
                  v-model = "search"
                  append-icon="mdi-magnify"
                  label="Search"
                  hide
                  outlined
                  details
                  style="margin-top: 25px" >
                </v-text-field>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="tambah">Tambah</v-btn>
            </v-card-title>
        </v-card>
  
        <v-card>
            <v-data-table :headers="headers" :items="todos" :search="search">
                <template v-slot:[`item.action`]="{ item }">
                    <v-btn small class="mr-2 blue lighten-3" @click="editItem(item)">edit</v-btn>
                    <v-btn small class="mr-2 blue lighten-3" @click="deleteItem(item)">delete</v-btn>
                </template>
            </v-data-table>
        </v-card>
  
        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Reservasi ballroom</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field
                          v-model="formTodo.namaPemesan"
                          label="Nama Pemesan"
                          required
                        ></v-text-field>
  
                        <v-select
                            v-model="formTodo.tempat"
                            :items="tempat"
                            label="Tempat"
                            required
                        ></v-select>

                        <v-select
                            v-model="formTodo.fasilitas"
                            :items="fasilitas"
                            label="Fasilitas"
                            required
                        ></v-select>

                        <v-select
                          v-model="formTodo.jenisPembayaran"
                          :items="jenisPembayaran"
                          item-value="id"
                          label="Jenis Pembayaran Ballroom"
                          required
                          dense
                        ></v-select>
                    </v-container>
                </v-card-text>
  
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
                    <v-btn v-if="formTodo.update_ballroom==0" color="blue darken-1" text @click="pesan">Save</v-btn>
                    <v-btn v-else color="blue darken-1" text @click="updateBallroom">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-main>
  </template>
    
    <script>
  import axios from 'axios';
  export default {
      name: "ListItem",
      data(){
          return {
              formTodo : {
                update_ballroom: 0,
                  ballroom: null,
                  nama : null,
                  tempat : null,
                  fasilitas : null,
                  jenisPembayaran : null,
              },
              tempat : ["Aula Kecil",
                        "Aula Sedang",
                        "Aula Besar" 
                      ],
              fasilitas : ["Paket A: Massive Size, AC, Table, Chair, Swimming Pool, Beverages",
                        "Paket B: Big Size, AC, Table, Chair, Catering",
                        "Paket C: Massive Size, AC, Table, Chair" 
                      ],
              jenisPembayaran : ["Cash" ,
                        "Credit", 
                        "Transfer"
                      ],        
              search: null,
              dialog: false,
              headers: [
                { text: "Nama Pemesan", value: "namaPemesan"},
                { text: "Tempat",
                  align: "start",
                  sortable: true,
                  value: "tempat",
                },
                { text: "Fasilitas",
                  align: "start",
                  sortable: true,
                  value: "fasilitas",
                },
                { text: "Jenis Pembayaran",
                  align: "start",
                  sortable: true,
                  value: "jenisPembayaran",
                },
                { text: "Action", value: "action" },
            ],
              todos:[],
              avatar: require("../../../assets/avatar.jpg"),
              };
          },
          mounted(){
                  this.showBallroom();
          },
          methods: {
              save(){
                  this.todos.push(this.formTodo);
                  this.resetForm();
                  this.dialog = false;
              },
              cancel(){
                  this.resetForm();
                  this.dialog = false;
              },
              resetForm(){
                  this.formTodo = {
                      ballroom: null,
                      nama : null,
                      tempat : null,
                      fasilitas : null,
                      jenisPembayaran : null,
                      update_ballroom: 0
                  };
              },
              tambah(){
                  this.dialog=true;
              },
              
               showBallroom(){
                  axios.get('http://localhost:8000/api/ballroom', {
                  })
                      .then((response) => {
                      this.todos = response.data.data
                      
                      })
                      .catch((error) => {
                      console.log(error)
                      })
               },
               pesan(){
                  axios.post('http://localhost:8000/api/ballroom', {
                      id_ballroom: this.formTodo.ballroom,
                      namaPemesan: this.formTodo.namaPemesan,
                      tempat: this.formTodo.tempat,
                      fasilitas: this.formTodo.fasilitas,
                      jenisPembayaran: this.formTodo.jenisPembayaran,
                  }).then(() => { 
                    console.log("Tambah Pesanan Ballroom Berhasil")
                  }).then((response) => {
                      console.log(response)
                      this.dialog = false
                      this.showBallroom();
                      })
                      .catch((error) => {
                      console.log(error.response.data)
                      })
               },
               editItem(item){
                  this.formTodo.update_ballroom = item.id
                  this.formTodo.namaPemesan = item.namaPemesan
                  this.formTodo.tempat = item.tempat
                  this.formTodo.fasilitas = item.fasilitas
                  this.formTodo.jenisPembayaran = item.jenisPembayaran
                  this.dialog=true;
               },
              updateBallroom(){
                  axios.put('http://localhost:8000/api/ballroom/' + this.formTodo.update_ballroom, {
                      id_ballroom: this.formTodo.ballroom,
                      namaPemesan: this.formTodo.namaPemesan,
                      tempat: this.formTodo.tempat,
                      fasilitas: this.formTodo.fasilitas,
                      jenisPembayaran: this.formTodo.jenisPembayaran,
                  }).then(() => { 
                    console.log("Update Pesanan Ballroom Berhasil")
                  }).then((response) => {
                    console.log(response)
                    this.dialog = false
                    this.resetForm()
                    this.showBallroom();
                    })
                    .catch((error) => {
                    console.log(error.response.data)
                    })
              },
              deleteItem(item){
                  axios.delete('http://localhost:8000/api/ballroom/' + item.id, {})
                  .then(() => { 
                    console.log("Delete Pesanan Ballroom Berhasil")
                  }).then((response) => {
                    console.log(response)
                    this.showBallroom();
                    })
                    .catch((error) => {
                    console.log(error.response.data)
                    })
              }
          },
      };
  </script>
  <style></style>