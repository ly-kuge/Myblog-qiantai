import m from './messages'

const MyComponent = {};
MyComponent.install = function (Vue) {
 /* Vue.component("navigation", () => import('./navigation/Navigation.vue'));
  Vue.component("articles", () => import('./article/Articles.vue'));
  Vue.component("recommendAuthor", () => import('./author/AecommendAuthor.vue'));*/
  Vue.prototype.$message = m;
};


Object.deepCopy = function (src) {
  // for(let key in src){
  //   if(!src[key]){
  //     continue;
  //   }
  //   if(src[key].constructor === Array){
  //     dest[key] = [];
  //     Object.deepCopy(src[key],dest[key])
  //   }else if(typeof src[key] === 'object'){
  //     dest[key] = {};
  //     Object.deepCopy(src[key],dest[key])
  //   }
  //   dest[key] = src[key];
  // }
  return JSON.parse(JSON.stringify(src));
};

export default MyComponent;
