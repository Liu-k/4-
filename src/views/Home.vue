<template>
  <div class="home">
    <div class="main">
      <Router-view></Router-view>
    </div>
    <div class="footer">
      <Router-link v-for='(item,index) in list' :key='index' :to='item.path' tag='span'>{{item.name}}</Router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data () {
    return {
      list:[
        {
          name:'消息',
          path:'/message'
        },
         {
          name:'空间',
          path:'/kong'
        }, {
          name:'我的',
          path:'/my'
        }
      ]
    }
  },
  name: 'home',
  components: {
  
  
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    overflow: auto;
  }
  .footer{
    width: 100%;
    height: 46px;
    display: flex;
    span{
      flex: 1;
      text-align: center;
      line-height: 46px;
    }
  }
}
</style>
