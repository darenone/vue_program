<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="item in productList">
          <h3>{{ item.title }}</h3>
          <ul>
            <li v-for="item in item.list">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div class="hr" v-if="!item.last"></div>
        </template>
        <p style="color: #563333;width: 90%;background-color: #c5b7b7;margin:0 auto;">本页面所有红色部分是循环的时候在里面添加标识符，通过标识符来动态添加类名或则显示隐藏元素</p>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.name }}</a>
          </li>
        </ul>
        <p style="margin:0 auto;background-color: #b2b2b2;">此部分是利用vue-resource
        插件模拟请求API获得的数据更多具体用法清参见我写的<a href="https://segmentfault.com/a/1190000012560157?_ea=3056314"
        target="_blank" style="color: blue;text-decoration: underline;">这篇文章</a></p>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="invTime" @onchange="dosomething"></slide-show>
      <div class="index-board-list">
        <div
        class="index-board-item"
        v-for="(item, index) in boardList"
        :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">{{ item.urlName }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from './../../components/slideshow/index1.vue'
export default {
  components: {
    slideShow
  },
  created: function () {
    this.$http.get('api/newsList').then((res) => {
      this.newsList = res.data.data
      console.log(this.newsList)
    }, (err) => {
      console.log(err)
    })
  },
  methods: {
    dosomething (data) {
      console.log('当前点击的是第' + data + '页')
    }
  },
  data () {
    return {
      invTime: 5000,
      slides: [
        {
          src: require('./../../assets/1.jpg'),
          title: '第一页',
          href: 'detail/analysis'
        },
        {
          src: require('./../../assets/2.jpg'),
          title: '第二页',
          href: 'detail/count'
        },
        {
          src: require('./../../assets/3.jpg'),
          title: '第三页',
          href: 'detail/publish'
        },
        {
          src: require('./../../assets/4.jpg'),
          title: '第四页',
          href: 'detail/forecast'
        }
      ],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      },
      newsList: [],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          urlName: '开放产品',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '动态添加.line-last去除margin-right',
          id: 'earth',
          toKey: 'count',
          urlName: '品牌营销',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          urlName: '使命必达',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '动态添加.line-last去除margin-right',
          id: 'hill',
          toKey: 'publish',
          urlName: '勇攀高峰',
          saleout: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
  background: red;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(./../../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(./../../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(./../../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(./../../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
  color:red;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
