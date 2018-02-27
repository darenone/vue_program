<template>
  <div id="app">
    <div class="app-head">
      <div class="app-head-inner">
          <router-link :to="{path: '/'}">
            <img src="./assets/logo.png">
          </router-link>
          <div class="head-nav">
            <ul class="nav-list">
              <li @click="show('showA')">登陆</li>
              <li class="nav-pile">|</li>
              <li @click="show('showB')">注册</li>
              <li class="nav-pile">|</li>
              <li @click="show('showC')">关于</li>
            </ul>
          </div>
        </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <div class="app-foot">
        <p>2018年</p>
      </div> 
    </div>
    <my-dialog v-if="showA" @close="close('showA',false)" :switchShow="showA">
      <p>登录</p>
    </my-dialog> 
    <my-dialog v-if="showB" @close="close('showB',false)" :switchShow="showB">
      <p>注册</p>
    </my-dialog> 
    <my-dialog v-if="showC" @close="close('showC',false)" :switchShow="showC">
      <p>利用vue做的一个实例项目,功能不断丰富中...</p>
    </my-dialog> 
  </div>  
</template>

<script>
import myDialog from './components/dialog/index.vue'
export default {
  components: {
    myDialog
  },
  name: 'app',
  data () {
    return {
      showA: false,
      showB: false,
      showC: false
    }
  },
  methods: {
    // login () {
    //   this.showA = !this.showA
    // },
    // register () {
    //   this.showB = !this.showB
    // },
    // about () {
    //   this.showC = !this.showC
    // },
    show (name) {
      this[name] = !this[name]
    },
    close (name, obj) {
      this[name] = obj
    }
  }
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #7d7d7d;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 100px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #0c0c0f;
  clear: both;
  color:white;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
