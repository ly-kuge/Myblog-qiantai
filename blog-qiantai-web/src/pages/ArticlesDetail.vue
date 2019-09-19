<template>
  <v-app>
    <v-layout column>
      <v-flex xs12>
        <v-layout>
          <v-flex xs12>
            <v-container fluid grid-list-xl>
              <v-layout row justify-space-around>
                <v-flex xs3>
                </v-flex>
                <v-flex xs6>
                  <v-card dark color="secondary">
                    <v-card-title><h1>一个小时之内，我的五篇文章被49次主动收入</h1></v-card-title>
                    <author></author>
                  </v-card>
                  <v-card>
                    <v-card-text>
                      2222222222222222222222
                    </v-card-text>
                    <!--作者-->
                    <author></author>
                    <v-flex xs12>
                      <v-card>
                        <v-card-text>
                          <v-toolbar
                            color="primary"
                            :card="card"
                          >
                            <v-btn color="success" round>Success</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="error" round>Error</v-btn>
                          </v-toolbar>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12>
                      <commentDialog></commentDialog>
                    </v-flex>
                    <v-flex>
                      <v-toolbar
                        color="primary"
                        :card="card"
                      >
                        <v-spacer></v-spacer>
                        <v-btn color="success" round large>Success</v-btn>
                        <v-btn color="error" round large>Error</v-btn>
                      </v-toolbar>
                    </v-flex>
                    <v-flex xs12>
                        <comment  :comments="commentData"></comment>
                    </v-flex>
                  </v-card>
                </v-flex>
                <v-flex xs3>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  import  author from '../components/author/Author'
  import commentDialog  from '../components/author/CommentDialog'

  import * as CommentData from '../mockdata'
  import comment from '../components/author/comment'
  export default {
    name: "ArticlesDetail",
    components:{
      commentDialog, author,comment
    },
    data: () => ({
      commentData: [],
      card:true
    }),
    methods: {
      add() {
        alert("22");
      }
    },created() {
      this.commentData = CommentData.comment.data;
    }
  }
</script>

<style scoped>

</style>
