<template>
    <v-app>
        <v-container>
            <v-layout row>
                <v-flex xs8>
                    <el-tabs :tab-position="tabPosition" stretch>
                        <el-tab-pane>
                            <span slot="label"><v-icon class="mr-5" large>assignment</v-icon>基础设置</span>
                            <v-container fluid align-center>
                                <v-flex xs12>
                                    <v-layout row>
                                        <v-flex xs4>
                                            <v-avatar size="100%">
                                                <img :src="edit" alt="John">
                                            </v-avatar>
                                        </v-flex>
                                        <v-flex xs8>
                                            <v-btn class="mt-5" round color="primary">更改头像</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-divider class="my-3"></v-divider>
                                <v-flex xs12 class="mt-3">
                                    <v-layout row>
                                        <v-flex xs4>
                                            <v-subheader>昵称</v-subheader>
                                        </v-flex>
                                        <v-flex xs8>
                                            <el-input v-model="input" clearable placeholder="请输入昵称"></el-input>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-divider class="my-3"></v-divider>
                                <v-flex xs12>
                                    <v-layout row>
                                        <v-flex xs4>
                                            <v-subheader>电子邮件</v-subheader>
                                        </v-flex>
                                        <v-flex xs8>
                                            <div>
                                                <div style="float: left;width:70%">
                                                    <el-input :disabled="true"></el-input>
                                                </div>
                                                <div style="float: left">
                                                    <v-btn @click.native="dialog = true" round color="primary">更改邮件
                                                    </v-btn>
                                                </div>
                                            </div>
                                            <v-dialog v-model="dialog" persistent max-width="30%">
                                                <v-card>
                                                    <v-card-title>
                                                        <span class="headline">更改邮件</span>
                                                        <v-spacer></v-spacer>
                                                        <v-btn icon @click.native="dialog = false">
                                                            <v-icon>close</v-icon>
                                                        </v-btn>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <v-text-field
                                                                name="input-1-3"
                                                                label="请输入你的邮箱"
                                                                single-line
                                                                prepend-icon="email">
                                                        </v-text-field>
                                                        <v-text-field
                                                                name="input-1-3"
                                                                label="输入验证码"
                                                                single-line
                                                                prepend-icon="assignment_turned_in"
                                                        >

                                                        </v-text-field>
                                                        <v-card-actions class="mt-0">
                                                            <v-spacer></v-spacer>
                                                            <v-btn   right color="blue darken-1" flat
                                                                   @click.native="dialog = false">发送验证码
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </v-card-text>
                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn color="blue darken-1" flat
                                                               @click.native="dialog = false">保存
                                                        </v-btn>
                                                        <v-btn color="blue darken-1" flat
                                                               @click.native="dialog = false">取消
                                                        </v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-divider class="my-3"></v-divider>
                                <v-flex xs12>
                                    <v-layout row>
                                        <v-flex xs4>
                                            <v-subheader>手机</v-subheader>
                                        </v-flex>
                                        <v-flex xs8>
                                            <div>
                                                <div style="float: left;width:70%">
                                                    <el-input :disabled="true"></el-input>
                                                </div>
                                                <div style="float: left">
                                                    <v-btn round color="primary" @click="">更改手机</v-btn>
                                                </div>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-divider class="my-3"></v-divider>
                                <v-flex xs12>
                                    <v-layout row>
                                        <v-flex xs4>
                                            <v-subheader>语言设置</v-subheader>
                                        </v-flex>
                                        <v-flex xs8>
                                            <v-radio-group v-model="language" row>
                                                <v-radio
                                                        label="中文简体"
                                                        value="中文简体"
                                                ></v-radio>
                                                <v-radio
                                                        label="中文繁体"
                                                        value="中文繁体"
                                                ></v-radio>
                                            </v-radio-group>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-divider class="my-3"></v-divider>
                                <v-flex xs12>
                                    <v-layout row>
                                        <v-flex xs4></v-flex>
                                        <v-flex xs8>
                                            <v-btn class="mt-5" round color="primary">保存</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-container>
                        </el-tab-pane>
                        <el-tab-pane>
                            <span slot="label"><v-icon class="mr-5" large>perm_identity</v-icon>个人资料</span>
                            <v-container fluid align-center>
                                <v-flex xs12>
                                    <v-layout row>
                                        <v-flex xs4>
                                            <v-subheader>性别</v-subheader>
                                        </v-flex>
                                        <v-flex xs8>
                                            <v-radio-group v-model="sex" row>
                                                <v-radio
                                                        label="男"
                                                        value="男"
                                                ></v-radio>
                                                <v-radio
                                                        label="女"
                                                        value="女"
                                                ></v-radio>
                                            </v-radio-group>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-divider class="my-3"></v-divider>
                                <v-flex xs12 class="mt-3">
                                    <v-layout row>
                                        <v-flex xs4>
                                            <v-subheader>个人简介</v-subheader>
                                        </v-flex>
                                        <v-flex xs8>
                                            <v-text-field
                                                    name="input-7-2"
                                                    round
                                                    textarea
                                                    rows="3"
                                                    label="请输入你的个人简介"
                                                    class="input-group--focused"
                                                    clearable
                                                    multi-line
                                            ></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-divider class="my-3"></v-divider>
                                <v-flex xs12>
                                    <v-layout row>
                                        <v-flex xs4>
                                            <v-subheader>个人网站</v-subheader>
                                        </v-flex>
                                        <v-flex xs8>
                                            <el-input v-model="input" placeholder="http://你的网址"></el-input>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-divider class="my-3"></v-divider>
                                <v-flex xs12>
                                    <v-layout row>
                                        <v-flex xs4></v-flex>
                                        <v-flex xs8>
                                            <v-btn class="mt-5" round color="primary">保存</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-container>
                        </el-tab-pane>
                        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                    </el-tabs>
                </v-flex>
                <v-flex xs3>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>

</template>

<script>
    import edit from './../assets/1.jpeg'

    export default {
        name: "PersonalSettings",
        data: () => ({
            language: "中文简体",
            tabPosition: 'left',
            sex: "男",
            input: "",
            edit: edit,
            dialog: false,
            e1: false,
        }),
        methods: {
            add() {
                alert("2222222222")
            }
        }
    }
</script>

<style scoped>

</style>