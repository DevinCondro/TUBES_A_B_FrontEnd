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
                            src="https://ik.imagekit.io/tvlk/blog/2021/07/Grand-Ballroom-Grand-Hyatt-Jakarta-1024x576.jpg">
                        </v-img>

                        <v-card-title>Kepala Ballroom</v-card-title>

                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>

                                <div class="grey--text ms-4">
                                4.5 (413)
                                </div>
                            </v-row>

                            <div class="my-4 text-subtitle-1">
                                $ • Big Size, Air Conditioner, Table
                            </div>

                            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                                seating.</div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-actions>
                            <v-btn color="deep-purple lighten-2" text @click="pesan">
                                Pesan Ballroom
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
                            src="https://www.myweddinginthailand.com/wp-content/uploads/2019/01/u-sathorn-2.jpg">
                        </v-img>

                        <v-card-title>Lemon Ballroom</v-card-title>

                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating :value="4" color="amber" dense half-increments readonly size="14"></v-rating>

                                <div class="grey--text ms-4">
                                4 (215)
                                </div>
                            </v-row>

                            <div class="my-4 text-subtitle-1">
                                $$ • Massive Size, Air Conditioner, Table, Chair
                            </div>

                            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                                seating.</div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-actions>
                            <v-btn color="deep-purple lighten-2" text @click="pesan">
                                Pesan Ballroom
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
                            src="https://image-tc.galaxy.tf/wijpeg-1c8zex0asl5d6l0vyybfw4pz0/sat-ballroom-classroom.jpg?width=1920">
                        </v-img>

                        <v-card-title>Anggur Ballroom</v-card-title>

                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14">
                                </v-rating>

                                <div class="grey--text ms-4">
                                4.5 (898)
                                </div>
                            </v-row>

                            <div class="my-4 text-subtitle-1">
                                $$$ • Massive Size, Beverages, Drink, Table
                            </div>

                            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                                seating.</div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>


                        <v-card-actions>
                            <v-btn color="deep-purple lighten-2" text @click="pesan">
                                Pesan Ballroom
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
                name: "ballroom.create",
            });
        },
    },
}
</script>
<style></style>