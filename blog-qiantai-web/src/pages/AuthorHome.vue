<template>
    <v-app>
        <v-container>
            <v-layout row>
                <v-flex xs8>
                    <v-flex xs12>
                        <v-container>
                            <v-layout cloumn>
                                <v-flex xs2>
                                    <v-card flat>
                                        <v-card-text>
                                            <v-avatar size="95%">
                                                <img :src="edit" alt="John">
                                            </v-avatar>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs10>
                                    <v-card flat>
                                        <v-card-title>
                                            <h1>刘灵毓</h1>
                                        </v-card-title>
                                        <v-card-text>
                                            <div>
                                                <span>喜欢(4)</span>
                                                <el-divider direction="vertical"></el-divider>
                                                <span>收藏(5)</span>
                                                <el-divider direction="vertical"></el-divider>
                                                <span>收藏(5)</span>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                    <v-flex xs12>
                        <v-container>
                            <v-layout cloumn>
                                <v-flex xs12>
                                    <v-tabs icons-and-text color="primary" v-model="tab" grow>
                                        <v-tabs-slider color="yellow"></v-tabs-slider>
                                        <v-tab href="#tab-1">
                                            文章
                                            <v-icon>assignment</v-icon>
                                        </v-tab>
                                        <v-tab href="#tab-2">
                                            喜欢
                                            <v-icon>favorite_border</v-icon>
                                        </v-tab>
                                        <v-tab href="#tab-3">
                                            动态

                                            <v-icon>add_alert</v-icon>
                                        </v-tab>
                                        <v-tab href="#tab-4">
                                            最新评论
                                            <v-icon>school</v-icon>
                                        </v-tab>
                                        <v-tab href="#tab-5">
                                            热门
                                            <v-icon>whatshot</v-icon>
                                        </v-tab>
                                        <v-tab-item
                                                v-for="i in 5"
                                                :key="i"
                                                :id="'tab-' + i"
                                        >
                                            <v-card flat>
                                                <v-card-text>
                                                    <div :is="currentView"></div>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                    </v-tabs>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-flex>
                <v-flex xs3>
                    <v-flex xs12>
                        <v-card color="blue-grey darken-2" class="white--text">
                            <v-card-text>广告</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 class="mt-5">
                        <!--推荐作者-->
                        <recommendAuthor></recommendAuthor>
                    </v-flex>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import edit from './../assets/1.jpeg'
    import recommendAuthor from '../components/author/AecommendAuthor'

    export default {
        name: "AuthorHome",
        components: {
            recommendAuthor
        },
        data: () => ({
            edit: edit,
            currentView: "recommendAuthor",
            tab: "tab-3",
        })
    }
</script>

<style scoped>

</style>