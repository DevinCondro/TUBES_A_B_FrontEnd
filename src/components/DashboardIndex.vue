<template>
    <v-main>
        <!-- Carousel -->
        <v-carousel cycle height="530" widht="100" hide-delimiter-background hide-delimiters show-arrows-on-hover>
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
                <v-img src="require('src/assets/Carousel/to.jpeg')"></v-img>
            </v-carousel-item>
        </v-carousel>
        <!-- Footer -->
        <v-footer fixed dark padless>
            <v-card flat tile class="flex black lighten-1 white--text text-center">
                <v-card-text>
                    <!-- <v-btn v-for="icon in sosmed" :key="icon" class="mx-4 white--text" icon>
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn> -->
                </v-card-text>
                <v-spacer></v-spacer>
                <v-card-text class="white--text pt-0">
                  Hotel bintang 5 yang dikelola keluarga yang terletak di Yogyakarta
                  dengan latar belakang Sungai Mataram yang indah. Bersantailah di taman
                  kami yang menakjubkan, minum anggur & bersantap di Madhang Resto yang
                  nyaman.
                </v-card-text>
                <v-spacer></v-spacer>
                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Kelompok B</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-main>
</template>

<style>
.text {
    font-family: "Franklin Gothic Medium", "Arial Narrow";
}
</style>

<script>
export default {
    data() {
        return {
            items: [
                {
                    src: require('../assets/Carousel/Slide1.jpeg')
                },
                {
                    src: require('../assets/Carousel/Slide2.jpeg')
                },
                {
                    src: require('../assets/Carousel/Slide3.jpeg')
                },
                {
                    src: require('../assets/Carousel/Slide4.jpeg')
                },
                {
                    src: require('../assets/Carousel/Slide5.jpeg')
                },
                {
                    src: require('../assets/Carousel/Slide6.jpeg')
                },
            ],
        }
    }
};
</script>
