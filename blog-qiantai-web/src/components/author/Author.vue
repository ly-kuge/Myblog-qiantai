<template>
  <v-card>
    <v-list two-line>
      <v-divider inset></v-divider>
      <v-list-tile avatar @click="add">
        <v-list-tile-avatar>
          <img src="">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title><h3>ly</h3></v-list-tile-title>
          <v-list-tile-sub-title>2019.06.16 14:36 字数 436 阅读 26929评论 184喜欢 972</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-card-text>
        <div class="ml-5">
          22222222222222222222222
        </div>
      </v-card-text>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: "Author",
    methods: {
      add() {
        alert("22222222");
      }
    }
  }
</script>

<style scoped>

</style>
