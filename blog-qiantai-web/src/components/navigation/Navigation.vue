<template>
    <v-toolbar
            color="primary"
            :card="card"
    >
        <v-spacer></v-spacer>
        <v-toolbar-title>LY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title>首页</v-toolbar-title>
        <v-toolbar-title>
            <v-text-field
                    color="secondary"
                    placeholder="搜索"
                    :clearable="clearable"
                    :auto-grow="autoGrow"
                    :autofocus="autofocus"
                    append-icon="search"
            ></v-text-field>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <el-popover
                placement="bottom"
                width="150"
                trigger="click">
            <v-btn
                    color="#9575CD"
                    @click="themeMapKey='lavender'"
                    round>
                淡紫色
            </v-btn>
            <v-btn
                    color="#FF80AB"
                    @click="themeMapKey='pink'"
                    round>
                粉红色
            </v-btn>
            <el-button slot="reference">
                <v-icon>spa</v-icon>
            </el-button>
        </el-popover>
        <!--<div v-if='user && user.username'>-->
            <v-btn icon color="primary" @click="toLogin()" class="ml-4">登录
                <v-icon></v-icon>
            </v-btn>
            <v-btn icon color="primary" @click="toRegister()">注册
                <v-icon></v-icon>
            </v-btn>
      <!--  </div>-->
      <!--  <div v-else>-->
            <v-menu offset-y class="ml-4">
                <v-btn slot="activator" color="primary" fab>
                    <v-avatar size="55%">
                        <img :src="edit" alt="John">
                    </v-avatar>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="(item, index) in items" :key="index" :to="item.src">
                        <v-list-tile-title>
                            <v-icon>perm_identity</v-icon>
                            {{ item.title }}
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
       <!-- </div>-->
        <v-toolbar-title>
            <v-btn round outline>写博客
                <font-awesome-icon icon="pen-alt"/>
            </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
    import {themeMap} from '../../theme'
    import edit from '../../assets/1.jpeg'
    import constant from '../constant';

    export default {
        name: "Navigation",
        props: {
            app: Object,
        },
        data: () => ({
            card: true,
            clearable: true,//启用自动清除
            autoGrow: true,//自动增长
            autofocus: true,//自动聚焦
            themeMapKey: "pink",
            edit: edit,
            user: null,
            items: [
                {title: '我的主页', src: "/article/articlesDetail"},
                {title: 'Click Me', src: "/author/authorHome"},
                {title: 'Click Me', src: "/author/personalSettings"},
                {title: 'Click Me 2', src: "/article/articlesDetail"}
            ]
        }),
        methods: {
            toRegister(){
                this.toLogin();
            },
            toLogin() {
                const login = this.$router.resolve({path: '/sign'});
                window.open(login.href, '_blank');
            },
            setTheme(themeMapKey) {
                this.$emit("done", themeMap.get(themeMapKey));
            },
        },
        watch: {
            themeMapKey(newValue, oldValue) {
                this.setTheme(newValue);
            }
        },
        mounted() {
            this.setTheme(this.themeMapKey);
        },
        created() {
            let that = this;
          /*  this.$http.get("/auth/verify").then(resp => { // 这里使用箭头函数
                if (resp.data.code == constant.SUCCESS_CODE) {
                    that.user = resp.data;
                } else if (resp.data.code == constant.FAIL_CODE) {
                    that.$message.error(resp.data.msg);
                }
            }).catch(() => {
                that.$message.error("系统繁忙请稍后再试！");
            })*/
        }
    }
</script>

<style scoped>

</style>
