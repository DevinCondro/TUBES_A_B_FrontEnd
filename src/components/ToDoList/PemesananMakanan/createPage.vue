<template>
  <v-main class="list">
      <v-card>
          <v-list-item>
              <v-list-item-avatar color="white">   
                <v-img :src="avatar" height="50" width="50" ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                  <v-list-item-title class="headline">Pemesanan Makanan</v-list-item-title>
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
                  <span class="headline">Pemesanan Makanan</span>
              </v-card-title>
              <v-card-text>
                  <v-container>
                      <v-text-field
                        v-model="formTodo.nama"
                        label="Nama Makanan"
                        required
                      ></v-text-field>

                      <v-select
                          v-model="formTodo.jenis"
                          :items="jenis"
                          label="Jenis Makanan"
                          required
                          dense
                      ></v-select>
     
                      <v-text-field
                        v-model="formTodo.jumlah"
                        suffix="Porsi"
                        item-value="id"
                        label="Jumlah Makanan"
                        required
                      ></v-text-field>
                  </v-container>
              </v-card-text>

              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
                  <v-btn v-if="formTodo.update_makanan==0" color="blue darken-1" text @click="pesan">Save</v-btn>
                  <v-btn v-else color="blue darken-1" text @click="updateMakanan">Save</v-btn>
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
                update_makanan: 0,
                makanan: null,
                nama : null,
                jenis : null,
                jumlah : null
            },
            jenis : ["Makanan Ringan" ,
                      "Makanan Berat", 
                      "Minuman"
                    ],       
            search: null,
            dialog: false,
            headers: [
                { text: "Nama Makanan", value: "nama"},
                { text: "Jenis Makanan",
                  align: "start",
                  sortable: true,
                   value: "jenis",
                  },
                { text: "Jumlah Makanan", value: "jumlah" },
                { text: "Action", value: "action" },
            ],
            todos:[],
            avatar: require("../../../assets/avatar.jpg"),
            };
        },
        mounted(){
                this.showMakanan();
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
                    makanan: null,
                    nama : null,
                    jenis : null,
                    jumlah : null,
                    update_makanan: 0
                };
            },
            tambah(){
                this.dialog=true;
            },
            
             showMakanan(){
                axios.get('http://localhost:8000/api/makanan', {
                })
                    .then((response) => {
                    this.todos = response.data.data
                    
                    })
                    .catch((error) => {
                    console.log(error)
                    })
             },
             pesan(){
                axios.post('http://localhost:8000/api/makanan', {
                    id_makanan: this.formTodo.makanan,
                    nama: this.formTodo.nama,
                    jenis: this.formTodo.jenis,
                    jumlah: this.formTodo.jumlah,
                }).then(() => { 
                    console.log("Tambah Pesanan Makanan Berhasil")
                  }).then((response) => {
                    console.log(response)
                    this.dialog = false
                    this.showMakanan();
                    })
                    .catch((error) => {
                    console.log(error.response.data)
                    })
             },
             editItem(item){
                this.formTodo.update_makanan = item.id
                this.formTodo.nama = item.nama
                this.formTodo.jenis = item.jenis
                this.formTodo.jumlah = item.jumlah
                this.dialog=true;
             },
            updateMakanan(){
                axios.put('http://localhost:8000/api/makanan/' + this.formTodo.update_makanan, {
                    id_makanan: this.formTodo.makanan,
                    nama: this.formTodo.nama,
                    jenis: this.formTodo.jenis,
                    jumlah: this.formTodo.jumlah,
                }).then(() => { 
                    console.log("Update Pesanan Makanan Berhasil")
                  }).then((response) => {
                    console.log(response)
                    this.dialog = false
                    this.resetForm()
                    this.showMakanan();
                    })
                    .catch((error) => {
                    console.log(error.response.data)
                    })
            },
            deleteItem(item){
                axios.delete('http://localhost:8000/api/makanan/' + item.id, {
                }).then(() => { 
                    console.log("Delete Pesanan Makanan Berhasil")
                  }).then((response) => {
                    console.log(response)
                    this.showMakanan();
                    })
                    .catch((error) => {
                    console.log(error.response.data)
                    })
            }
        },
    };
</script>
<style></style>