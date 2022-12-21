<template>
    <v-main>
        <div class="row" >
            <div class="column" >
                <template>
                    <v-card :loading="loading" class="mx-auto my-12" max-width="374" >
                        <template slot="progress">
                            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                        </template>

                        <v-img height="250"
                            src="https://asset.kompas.com/crops/ICwlIiaLG7z2cuJF8oId14cR39s=/0x0:1000x667/750x500/data/photo/2020/09/01/5f4e4bceb2f04.jpg">
                        </v-img>

                        <v-card-title>Ngelih Resto</v-card-title>

                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>

                                <div class="grey--text ms-4">
                                    5 (132)
                                </div>
                            </v-row>

                            <div class="my-4 text-subtitle-1">
                                $ • Javanese, Resto
                            </div>

                            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                                seating.</div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-actions>
                            <v-btn color="deep-purple lighten-2" text @click="pesan">
                                Pesan Makanan
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </div>
            <v-spacer style="color : white">test</v-spacer>
            
            <div class="column">
                <template>
                    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                        <template slot="progress">
                            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                        </template>

                        <v-img height="250"
                            src="https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/210/2017/11/26025037/tentrem-hotel-yogyakarta-dining-summer-place-image01-800x255.jpg">
                        </v-img>

                        <v-card-title>Hudu Resto</v-card-title>

                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating :value="4" color="amber" dense half-increments readonly size="14"></v-rating>

                                <div class="grey--text ms-4">
                                    4 (215)
                                </div>
                            </v-row>

                            <div class="my-4 text-subtitle-1">
                                $$ • Italian, Resto
                            </div>

                            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                                seating.</div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-actions>
                            <v-btn color="deep-purple lighten-2" text @click="pesan">
                                Pesan Makanan
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </div>
            <v-spacer style="color : white">test</v-spacer>
            <div class="column">
                <template>
                    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                        <template slot="progress">
                            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                        </template>

                        <v-img height="250"
                            src="https://media-cdn.tripadvisor.com/media/photo-s/0f/85/47/c4/coffee-shop-in-the-hotel.jpg">
                        </v-img>

                        <v-card-title>Messi Coffee Shop</v-card-title>

                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14">
                                </v-rating>

                                <div class="grey--text ms-4">
                                    4.5 (413)
                                </div>
                            </v-row>

                            <div class="my-4 text-subtitle-1">
                                $$$ • Argentina, Cafe
                            </div>

                            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                                seating.</div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>


                        <v-card-actions>
                            <v-btn color="deep-purple lighten-2" text @click="pesan">
                                Pesan Makanan
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </div>
        </div>


    </v-main>

</template>
<script>
export default {
    data: () => ({
        show: false,
        loading: false,
        selection: 1,
    }),

    methods: {
        pesan() {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
            this.$router.push({
                name: "makanan.create",
            });
        },
    },
}
</script>
<style></style>