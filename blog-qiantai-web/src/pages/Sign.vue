<template>
    <v-app>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-tabs
                                    centered
                                    color="primary"
                                    slider-color="yellow"
                            >
                                <v-tab href="#tab-1">登录</v-tab>
                                <v-tab href="#tab-2">注册</v-tab>
                                <v-tab-item
                                        id="tab-1"
                                >
                                    <login></login>
                                </v-tab-item>
                                <v-tab-item
                                        id="tab-2"
                                >
                                    <register></register>
                                </v-tab-item>
                            </v-tabs>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import login from '../components/user/Login';
    import register from '../components/user/Register';
    export default {
        components: {
            login, register
        },
    };
</script>
