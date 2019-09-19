var menus = [
  {
    action: "home",
    title: "首页",
    path:"/index",
    items: [{ title: "统计", path: "/dashboard" }]
  },
  {
    action: "apps",
    title: "商品管理",
    path:"/item",
    items: [
      { title: "分类管理", path: "/category" },
      { title: "品牌管理", path: "/brand" },
      { title: "商品列表", path: "/list" },
      { title: "规格参数", path: "/specification" }
    ]
  },
  {
    action: "chat",
    title: "文章管理",
    path:"/article",
    items: [
      { title: "分类管理", path: "/category" },
      { title: "文章列表", path: "/articles" },
    ]
  },
  {
    action: "person",
    title: "用户管理",
    path:"/user",
    items: [
      { title: "用户列表", path: "/list" },
    ]
  },
  {
    action: "people",
    title: "权限管理",
    path:"/authority",
    items: [
      { title: "权限管理", path: "/list" },
      { title: "角色管理", path: "/role" },
      { title: "人员管理", path: "/member" }
    ]
  },
  {
    action: "outlined_flag",
    title: "日志管理",
    path:"/article",
    items: [
      { title: "日志列表", path: "/category" },
    ]
  },
  {
    action: "settings",
    title: "其他设置",
    path:"/article",
    items: [
      { title: "广告管理", path: "/category" },
      { title: "友情链接管理", path: "/articles" },
    ]
  },

];

export default menus;
