<template>
  <v-flex xs12 sm12>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs8>
            <!--文章列表-->
            <v-card>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="blue-grey darken-2" class="white--text">
                    <div class="headline">Unlimited music now</div>
                    <div>
                      <router-link to="/article/articlesDetail">
                        文/石墨杨 很多想提高写作的朋友问我，我怎么才能提高写作。我问他读了多少书，他说读了一些，心静不下来，读不进去。我想说，这样的状态你怎么能提高写...
                      </router-link>
                    </div>
                    <v-card-actions>
                      <div style="margin-right: 10%">22</div>
                      <v-btn icon disabled>
                        <v-icon>favorite_border</v-icon>
                        11
                      </v-btn>
                      <v-btn icon disabled>
                        <v-icon>chat_bubble</v-icon>
                        22
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <!-- <v-card-media
               src="/static/doc-images/cards/foster.jpg"
               height="125px"
               contain
             ></v-card-media>-->
            <div style="border: 1px solid red"></div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
    export default {
        name: "Articles"
    }
</script>

<style scoped>

</style>
