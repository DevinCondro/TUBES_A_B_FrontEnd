<template>
  <v-main>
    <div class="row">
      <div class="column1">
        <template>
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
          margin-left="100"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://awsimages.detik.net.id/community/media/visual/2022/06/16/kamar-hotel_169.jpeg?w=780&q=90"
          ></v-img>

          <v-card-title>President Suite</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              $$$
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
            >
              Reservasi
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      </div>
      
      <div class="column2">
        <template>
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://i0.wp.com/f1-styx.imgix.net/article/2019/10/15154154/cnn.jpg?fit=2226%2C1449&ssl=1"
          ></v-img>

          <v-card-title>Vice President Suite</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              $$
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
            >
              Reservasi
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      </div>
      
      <div class="column3">
        <template>
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://www.konsultasi-akustik.com/wp-content/uploads/2021/02/interior-modern-comfortable-hotel-room-scaled.jpg"
          ></v-img>

          <v-card-title>Superior Room</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              $$
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
            >
              Reservasi
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      </div>
      
      <div class="column4">
        <template>
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://alexandra.bridestory.com/image/upload/assets/zaky-decoration-1611850926-SkQT4vggu.png"
          ></v-img>

          <v-card-title>Standard Room</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              $
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
            >
              Reservasi
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      </div>
      
      <div class="column5">
        <template>
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://interiordesign.id/wp-content/uploads/2020/01/kamar-hotel-christian-dior.jpg"
          ></v-img>

          <v-card-title>Deluxe Room</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              $$
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
            >
              Reservasi
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
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
        this.$router.push({
          name: "kamar.create",
        });
      },
    },
  }
</script>
<style>
.column1{
  margin-left: auto;
  margin-right: auto;
}

.column2{
  margin-left: auto;
  margin-right: auto;
}

.column3{
  margin-left: auto;
  margin-right:auto;
}

.column4{
  margin-left: 350px;
  margin-right: 5px;
}

.column5{
  margin-left: 50px;
  margin-right: 5px;
}
</style>