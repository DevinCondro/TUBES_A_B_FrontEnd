<template>
    <v-main class="list">
        <v-card>
            <v-list-item>
                <v-list-item-avatar> <img
                    src="https://assets.pikiran-rakyat.com/crop/0x0:900x814/x/photo/2022/01/06/4103185651.jpg"
                ></v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">To Do List</v-list-item-title>
                    <v-list-item-subtitle>200710729</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-card-title>
                <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                outlined
                hide
                details
                style="margin-top: 30px"></v-text-field>
                <v-spacer></v-spacer>
                <v-select
                    v-model="filter"
                    :items="[`All`,`Urgent`, `Normal`, `Not Important`]"
                    label="Filter"
                    clearable
                    details
                    style="margin-left: 10px"
                ></v-select>
                <v-spacer></v-spacer>
                <v-btn color="success" dark @click="dialog = true"> Tambah </v-btn>
            </v-card-title>
        </v-card>
<v-card>
    <v-data-table :headers="headers" :items="todos" :search="search" :filter="filter" show-expand :single-expand="singleExpand" :expanded.sync="expanded" item-key="task">
        <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length" v-if="item.jenis === 'Urgent'" class="red">
                <v-btn rounded class="red white--text mb-3 mt-2">
                    <v-icon>mdi-fire</v-icon>
                    <span> {{ item.jenis }} </span>
                </v-btn>
                <tr></tr>
                <tr></tr>
                <v-btn rounded class="orange white--text mb-3">
                    <v-icon aria-label="info" aria-hidden="false" color="white">mdi-note-text</v-icon>
                    <span> {{ item.note }} </span>
                </v-btn>
            </td>
            <td :colspan="headers.length" v-if="item.jenis === 'Normal'" class="yellow">
                <v-btn rounded class="yellow white--text mb-3 mt-2">
                    <v-icon>mdi-fire</v-icon>
                    <span> {{ item.jenis }} </span>
                </v-btn>
                <tr></tr>
                <tr></tr>
                <v-btn rounded class="orange white--text mb-3">
                    <v-icon aria-label="info" aria-hidden="false" color="white">mdi-note-text</v-icon>
                    <span> {{ item.note }} </span>
                </v-btn>
            </td>
            <td :colspan="headers.length" v-if="item.jenis === 'Not Important'" class="blue">
                <v-btn rounded class="blue white--text mb-3 mt-2">
                    <v-icon>mdi-fire</v-icon>
                    <span> {{ item.jenis }} </span>
                </v-btn>
                <tr></tr>
                <tr></tr>
                <v-btn rounded class="orange white--text mb-3">
                    <v-icon aria-label="info" aria-hidden="false" color="white">mdi-note-text</v-icon>
                    <span> {{ item.note }} </span>
                </v-btn>
            </td>
        </template> 
        <template v-slot:[`item.jenis`]="{ item }">
            <v-icon v-if="item.jenis==='Urgent'" color="red">mdi-alert-octagon</v-icon>
            <v-icon v-if="item.jenis==='Normal'" color="yellow">mdi-alert-octagon</v-icon>
            <v-icon v-if="item.jenis==='Not Important'" color="blue">mdi-alert-octagon</v-icon>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <v-btn icon outlined big color="red" class="mr-2" @click="editItem(item)">
                <v-icon> mdi-pencil </v-icon>
            </v-btn>
            <v-btn icon outlined big color="green" class="mr-2" @click="deleteItem(item)">
                <v-icon> mdi-delete </v-icon>
            </v-btn>
            <v-dialog v-model="dialogDelete" persistent max-width="350px">
                <v-card>
                    <v-card-title class="text-sm-h6 font-weight-bold"> Are you sure to delete? </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" text @click="deleteItemConfirm"> Yes </v-btn>
                        <v-btn color="red" text @click="closeDelete"> No </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
        <template v-slot:[`item.checkbox`]>
            <v-checkbox value ></v-checkbox>
        </template>
    </v-data-table>
</v-card>
<v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
        <v-card-title class="pink">
            <span class="white--text"> Form Todo </span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-select
                v-model="formTodo.jenis"
                :items="[`Superior`, `Deluxe`, `Standart`]"
                label="jenis"
                required
                ></v-select>

                <v-select
                v-model="formTodo.harga"
                :items="[`Rp. 1.000.000`, `Rp. 500.000`, `Rp. 250.000`]"
                label="jenis"
                required
                ></v-select>
                
                <V-textarea
                v-model="formTodo.jumlah"
                label="jumlah"
                required
                ></v-textarea>

            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="save"> Save</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</v-main>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
    name: "TugasList",
    data() {
        return {
            search: null,
            dialog: false,
            dialogDelete: false,
            filter: null,
            headers: [
                {
                    text: "Task",
                    align: "start",
                    sortable: true,
                    value: "task",
                },
                { text: "jenis", value: "jenis" },
                { text: "jumlah", value: "jumlah" },
                { text: "Actions", value: "actions" },
                { text: "", value: "checkbox"},
        ],
        formTodo: {
            task: null,
            jenis: null,
            note: null,
            jumlah: null,
        },
    };  
},
methods: {
    save() {
        if (this.editedIndex >-1) {
            Object.assign(this.todos[this.editedIndex], this.formTodo)
            this.dialog = false;
            this.editedIndex= -1;
            this.resetForm();
        } else {
            this.todos.push(this.formTodo);
            this.resetForm();
            this.dialog = false; 
        }
    },
    cancel() {
        this.resetForm();
            this.dialog = false;
        },
        deleteItem(item) {
            this.editedIndex = this.todos.indexOf(item)
            this.formTodo = Object.assign({}, item)
            this.dialogDelete = true
        },
        deleteItemConfirm() {
            this.todos.splice(this.editedIndex, 1)
            this.closeDelete()
        },
        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.formTodo = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        editItem (item) {
            this.editedIndex = this.todos.indexOf(item)
            this.formTodo = Object.assign({}, item)
            this.dialog = true
        },
        resetForm() {
            this.formTodo = {
                task: null,
                jenis: null,
                note: null,
                jumlah: null,
            };
            this.index = -1;
        },
    },
    setup() {
        //reactive state
        let kamars = ref([])

        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://127.0.0.1:8000/api/kamar')
            .then(response => {
                //assign state posts with response data
                kamars.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        })
//return
    return {
        kamars
        }
    }
}

</script>
<style>

</style>