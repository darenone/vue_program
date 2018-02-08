<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="item in productList">
          <h3>{{ item.title }}</h3>
              <p v-if="item.list.length == 0">暂未数据...</p>
              <ul v-else>
                <li v-for="item in item.list">
                  <a :href="item.url" target="_blank">{{ item.name }}</a>
                  <span v-if="item.hot" class="hot-tag">HOT</span>
                </li>
              </ul>
          <div class="hr" v-if="!item.last"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.name }}</a>
          </li>
        </ul>
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
import parrot1 from './../../assets/parrot_1.png'
import parrot2 from './../../assets/parrot_2.png'
import parrot3 from './../../assets/parrot_3.png'
import parrot4 from './../../assets/parrot_4.png'
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
          src: parrot1,
          title: '第一页',
          href: 'detail/analysis'
        },
        {
          src: parrot2,
          title: '第二页',
          href: 'detail/count'
        },
        {
          src: parrot3,
          title: '第三页',
          href: 'detail/publish'
        },
        {
          src: parrot4,
          title: '第四页',
          href: 'detail/forecast'
        }
      ],
      productList: {
        pc: {
          title: '赶集网',
          list: [
            {
              name: '转让自家繁殖的蓝合上 绿合上 乖巧亲人  ',
              url: 'http://sh.ganji.com/niao/2928837883x.htm',
              hot: true
            },
            {
              name: '转让自家繁殖的吸密幼鸟 乖巧亲人',
              url: 'http://sh.ganji.com/niao/2928837478x.htm'
            },
            {
              name: '转让自家繁殖的大体金泰阳幼鸟 可爱亲人',
              url: 'http://sh.ganji.com/niao/2920687032x.htm',
              hot: true
            },
            {
              name: '转让人工繁殖的大体钢果灰积 手养亲人',
              url: 'http://sh.ganji.com/niao/3009281816x.htm'
            }
          ]
        },
        app: {
          title: '58同城',
          last: true,
          list: []
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
  background: #403535;
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
.index-left-block p {
  padding: 10px 15px;
  color: red;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
  line-height: 20px;
}
.index-left-block li a{
  color: blue;
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
  min-height: 505px;
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
