<template>
  <v-app>
    <v-layout column>
      <v-flex xs12 sm12>
        <navigation @done="setTheme"></navigation><!--导航条组件-->
      </v-flex>
      <v-flex xs12>
        <router-view/>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>

  import navigation from '../components/navigation/Navigation';

  export default {
    components: {
      navigation
    },
    data: () => ({
    }),
    methods:{
      setTheme(theme) {
        this.$vuetify.theme = theme;
      }
    }
  }
</script>


