<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row>
      <v-flex xs8>
        <!--轮播-->
        <v-card dark color="primary">
          <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
          </v-carousel>
        </v-card>
        <v-layout row wrap>
          <!--文章列表-->
          <articles></articles>
        </v-layout>
      </v-flex>
      <v-flex xs3>
        <v-flex xs12>
          <v-card color="blue-grey darken-2" class="white--text">
        <v-card-text>广告</v-card-text>
      </v-card>
      </v-flex>
      <v-flex xs12>
        <!--推荐作者-->
        <recommendAuthor></recommendAuthor>
      </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  import articles from '../components/article/Articles'
  import recommendAuthor from '../components/author/AecommendAuthor'



  export default {
    components: {
      articles, recommendAuthor
    },
    data: () => ({

      items: [
        {
          src: '/static/doc-images/carousel/squirrel.jpg'
        },
        {
          src: '/static/doc-images/carousel/sky.jpg'
        },
        {
          src: '/static/doc-images/carousel/bird.jpg'
        },
        {
          src: '/static/doc-images/carousel/planet.jpg'
        }
      ],
    }),
  }
</script>


