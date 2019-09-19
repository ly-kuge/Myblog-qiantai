import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

function route(path, file, name='', children='') {
    return {
        exact: true,
        path,
        name,
        children,
        component: () => import('../pages' + file)
    }
}


export default new Router({
    routes: [
        route("/sign",'/Sign',"Sign"),// /login路径，路由到登录组件
        route("/wangeditor",'/Wangeditor',"Wangeditor"),// /login路径，路由到登录组件
        {
            path: "/",
            component: () => import('../pages/Layout'),
            redirect: "/index/dashboard",
            children: [
                route("/index/dashboard", "/Dashboard", "Dashboard"),
                route("/article/articlesDetail", "/ArticlesDetail", "ArticlesDetail"),
                route("/author/authorHome", "/AuthorHome", "AuthorHome"),
            ]
        }
    ]
})
