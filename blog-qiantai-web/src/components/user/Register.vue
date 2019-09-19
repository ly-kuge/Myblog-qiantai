<template>
    <div>
        <v-card-text>
            <v-form ref="UserForm" v-model="valid" lazy-validation>
                <v-text-field prepend-icon="person" v-model="user.username" label="用户名" :rules="nameRules" type="text"/>
                <v-text-field
                        prepend-icon="lock"
                        :rules="passwordRules"
                        v-model="user.password"
                        label="密码"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (e1 = !e1)"
                        :type="e1 ? 'text' : 'password'"
                ></v-text-field>
                <v-text-field
                        prepend-icon="lock"
                        :rules="[
                        v => !!v || '确认密码不能为空',
                        () => rePassword==user.password || '2次密码不一致']"
                        v-model="rePassword"
                        label="确认密码"
                        id="rePassword"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (e1 = !e1)"
                        :type="e1 ? 'text' : 'password'"
                ></v-text-field>
                <v-text-field prepend-icon="phone" v-model="user.phone" label="手机号" type="text" :rules="phoneRules"/>
                <v-flex>
                    <v-layout cloumn>
                        <v-flex xs5>
                            <v-text-field prepend-icon="bug_report" v-model="code" label="验证码" type="text"
                                          :rules="codeRules"/>
                        </v-flex>
                        <v-flex xs7>
                            <v-btn round class="mt-3" @click="createCode">{{codeText}}</v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="register">注册</v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    import constant from '../constant';

    export default {
        name: "Register",
        data: () => ({
            nameRules: [
                v => !!v || '姓名不能为空',
                v => (v && v.length <= 30 &&v.length>=4) || '用户名长度只能在4-30之间'
            ],
            passwordRules: [
                v => !!v || '密码不能为空',
                v => (v && v.length <= 30 &&v.length>=4) || '密码长度只能在4-30之间'

            ],

            phoneRules: [
                v => !!v || '电话号码不能为空',
                v => /^1(3|4|5|6|7|8|9)\d{9}$/.test(v) || '电话号码格式错误'
            ],
            codeRules: [
                v => !!v || '验证码不能为空',
                v => (v.length==6) || '验证码的长度只能为6'
            ],
            valid: true,
            urls: {
                sendCode: "/user/send/",
                register: "/user/register"
            },
            user: {},
            rePassword: "",//确认密码
            time: 30,
            code: "",//验证码
            codeFlag: false,
            codeText: '获取验证码',
            dialog: false,
            e1: false
        }),
        methods: {
            createCode() {
                if (this.user.phone == undefined || this.user.phone == "") {
                    this.$message.error("请填手机号码");
                    return;
                }
                this.codeFlag = true;
                var send = function () {
                    this.codeText = `重新发送${this.time}`;
                    this.time--;
                    if (this.time === 28) {
                        this.$http.get(this.urls.sendCode + this.user.phone,).then(resp => {
                            if (resp.data.code == constant.SUCCESS_CODE) {
                                this.$message.success(resp.data.msg);
                            } else if (resp.data.code == constant.FAIL_CODE) {
                                this.$message.error(resp.data.msg);
                            }
                        }).catch(() => {
                            this.$message.error("验证码发送失败！");
                        })
                    }
                    if (this.time === 0) {
                        this.time = 30;
                        this.codeFlag = false;
                        this.codeText = "获取验证码";
                        clearInterval(timer)
                    }
                }.bind(this);
                let timer = setInterval(send, 1000);
            },
            register() {
                let that = this;
                if (this.$refs.UserForm.validate()) {
                    that.user.code = that.code;
                    that.$http.post(that.urls.register, that.$qs.stringify(that.user))
                        .then(resp => {
                            if (resp.data.code == constant.SUCCESS_CODE) {
                                that.$message.success(resp.data.msg);
                            } else if (resp.data.code == constant.FAIL_CODE) {
                                this.$message.error(resp.data.msg);
                            }
                        }).catch(() => {
                        this.$message.error("注册失败！");
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>