<template>
  <v-card color="blue-grey darken-2" class="white--text">
    <v-card-title>推荐作者
      <v-spacer></v-spacer>
      <v-icon @click="alert('12')">refresh</v-icon>
      换一批
    </v-card-title>
    <v-card>
      <v-layout row>
        <v-flex xs12 sm12>
          <v-card>
            <v-list two-line>
              <v-divider inset></v-divider>
              <v-list-tile avatar @click="">
                <v-list-tile-avatar>
                  <img :src="edit">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>ly</v-list-tile-title>
                  <v-list-tile-sub-title>22222写了439.8k字 · 29.1k喜欢</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>

          <v-card>
            <v-list two-line>
              <v-divider inset></v-divider>
              <v-list-tile avatar @click="">
                <v-list-tile-avatar>
                  <img :src="edit">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>1111111111111111</v-list-tile-title>
                  <v-list-tile-sub-title>22222222222222222</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-card>
</template>

<script>
  import edit from '../../assets/1.jpeg'

  export default {
    name: "AecommendAuthor",
    data: () => ({
      edit: edit,
    })
  }
</script>

<style scoped>

</style>
