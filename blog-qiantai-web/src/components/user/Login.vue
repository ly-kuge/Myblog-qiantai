<template>
    <div>
        <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field prepend-icon="person" v-model="user.username" label="用户名" :rules="nameRules"
                              type="text"/>
                <v-text-field
                        prepend-icon="lock"
                        v-model="user.password"
                        :rules="passwordRules"
                        label="密码"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (e1 = !e1)"
                        :type="e1 ? 'text' : 'password'"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="doLogin">登录</v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    import constant from '../constant';

    export default {
        name: "Login",
        data: () => ({
            user: {},
            valid: true,
            urls: {login: "/auth/accredit"},
            nameRules: [
                v => !!v || '姓名不能为空',
                v => (v && v.length <= 30 &&v.length>=4) || '用户名长度只能在4-30之间'
            ],
            passwordRules: [
                v => !!v || '密码不能为空',
                v => (v && v.length <= 30 &&v.length>=4) || '密码长度只能在4-30之间'

            ],
            e1: false,
        }),
        methods: {
            doLogin() {
                let that = this;
                if (this.$refs.form.validate()) {
                    that.$http.post(that.urls.login, that.$qs.stringify(that.user)
                    ).then(resp => { // 这里使用箭头函数
                        if (resp.data.code == constant.SUCCESS_CODE) {
                            that.$router.push({
                                path:"/"
                            })

                        } else if (resp.data.code == constant.FAIL_CODE) {
                            this.$message.error(resp.data.msg);
                        }
                    }).catch(() => {
                        this.$message.error("登录失败！");
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>