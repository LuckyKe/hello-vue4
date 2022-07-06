import Vue from 'vue';
import VueRouter from "vue-router";
//导入视图组件
import Main from "../views/Main";
import Login from "../views/Login";
//导入子模块
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";

//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  routes: [
    {
      //首页
      path: '/main/:name',
      component: Main,
      props: true,
      //写入子模块
      children: [
        //:id
        {
          path: '/user/profile/:id',
          name: 'UserProfile',
          component: UserProfile,
          props: true
        },
        {
          path: '/user/list',
          component: UserList
        }
      ]
    },
    {
      //登录页
      path: '/login',
      component: Login
    },
    {
      path: '/goHome',
      redirect: '/main'
    }
  ]
})
