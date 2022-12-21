<template>
  <v-main class="list">
      <v-card>
          <v-list-item>
              <v-list-item-avatar color="white">   
                <v-img :src="avatar" height="50" width="50" ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                  <v-list-item-title class="headline">Reservasi Kamar</v-list-item-title>
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
                  <span class="headline">Reservasi Kamar</span>
              </v-card-title>
              <v-card-text>
                  <v-container>
                      <v-select
                        v-model="formTodo.jenis"
                        :items="jenis"
                        label="Jenis Kamar"
                        required
                      ></v-select>

                      <v-text-field
                          v-model="formTodo.jumlah"
                          label="Jumlah Pesan Kamar"
                          required
                      ></v-text-field>

                      <v-select
                        v-model="formTodo.harga"
                        prefix="Rp"
                        :items="harga"
                        item-value="id"
                        label="Harga Kamar"
                        required
                        dense
                      ></v-select>
                  </v-container>
              </v-card-text>

              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
                  <v-btn v-if="formTodo.update_kamar==0" color="blue darken-1" text @click="pesan">Save</v-btn>
                  <v-btn v-else color="blue darken-1" text @click="updateKamar">Save</v-btn>
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
                update_kamar: 0,
                jenis: null,
                kamar: null,
                jumlah: null,
            },
            jenis : ["President Suite" ,
                      "Vice President Suite", 
                      "Superior Room", 
                      "Standard Room", 
                      "Deluxe Room"
                    ],
            harga : ["1.250.000" ,
                      "1.100.000", 
                      "750.000", 
                      "500.000", 
                      "350.000"
                    ],        
            search: null,
            dialog: false,
            headers: [
                {
                    text: "Tipe Kamar",
                    align: "start",
                    sortable: true,
                    value: "jenis",
                },
                { text: "Jumlah Pesan Kamar", value: "jumlah" },
                { text: "Harga Kamar", value: "harga" },
                { text: "Action", value: "action" },
            ],
            todos:[],
            avatar: require("../../../assets/avatar.jpg"),
            };
        },
        
        mounted(){
                this.showKamar();
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
                    jenis : null,
                    harga : null,
                    kamar: null,
                    jumlah : null,
                    update_kamar: 0
                };
            },
            tambah(){
                this.dialog=true;
            },
            
             showKamar(){
                axios.get('http://localhost:8000/api/kamar', {
                })
                    .then((response) => {
                    this.todos = response.data.data
                    
                    })
                    .catch((error) => {
                    console.log(error)
                    })
             },
             pesan(){
                axios.post('http://localhost:8000/api/kamar', {
                    id_kamar: this.formTodo.kamar,
                    jenis: this.formTodo.jenis,
                    jumlah: this.formTodo.jumlah,
                    harga: this.formTodo.harga,
                }).then(() => { 
                    console.log("Tambah Pesanan Kamar Berhasil")
                  }).then((response) => {
                    console.log(response)
                    this.dialog = false
                    this.showKamar();
                    })
                    .catch((error) => {
                    console.log(error.response.data)
                    })
             },
             editItem(item){
                this.formTodo.update_kamar = item.id
                this.formTodo.jenis = item.jenis
                this.formTodo.jumlah = item.jumlah
                this.formTodo.harga = item.harga
                this.dialog=true;
             },
            updateKamar(){
                axios.put('http://localhost:8000/api/kamar/' + this.formTodo.update_kamar, {
                    id_kamar: this.formTodo.kamar,
                    jenis: this.formTodo.jenis,
                    jumlah: this.formTodo.jumlah,
                    harga: this.formTodo.harga,
                }).then(() => { 
                    console.log("Update Pesan Kamar Berhasil")
                  }).then((response) => {
                    console.log(response)
                    this.dialog = false
                    this.resetForm()
                    this.showKamar();
                    })
                    .catch((error) => {
                    console.log(error.response.data)
                    })
            },
            deleteItem(item){
                axios.delete('http://localhost:8000/api/kamar/' + item.id, {})
                .then(() => { 
                    console.log("Delete Pesanan Kamar Berhasil")
                  }).then((response) => {
                    console.log(response)
                    this.showKamar();
                    })
                    .catch((error) => {
                    console.log(error.response.data)
                    })
            }
        },
    };
</script>
<style></style>