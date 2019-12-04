<template>
  <div class="message">
     <input type="text" placeholder="搜索" v-model="val" @input="searchFn(val)"/>
    <Item v-for="item in list" :key='item.id' :msg='item'/>
  </div>
</template>

<script>
import Item from '../components/Item'
import {mapState,mapActions, mapMutations} from 'vuex'
export default {
  data () {
    return {
      val:''
    }
  },
  computed: {
    ...mapState(['list'])
  },
  created () {
    this.getlist()
  },
  methods: {
     ...mapActions(['getlist']),
     ...mapMutations(['searchFn'])
  },
  components: {
    Item
  }
}
</script>

<style lang="scss" scoped>
.message{
  width: 100%;
  height: 100%;
  .item{
    width: 100%;
    height: 50;
    border-bottom: 1px solid #ccc;
  }
}
</style>

