// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
        <van-tabbar-item replace to="/home" icon="wap-home-o">
        首页
        </van-tabbar-item>
        <van-tabbar-item replace to="/find" icon="search">找房</van-tabbar-item>
        <van-tabbar-item replace to="/zixun" icon="more-o" >
        资讯
        </van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="user-o">
        我的
        </van-tabbar-item>
      </van-tabbar>
<!-- #EAD38F -->
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {

    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>
