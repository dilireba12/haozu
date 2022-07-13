<template>
  <div>
    <van-nav-bar
      fiexd
      title="城市列表"
      left-arrow
      @click-left="$router.back()"
    />
    <van-index-bar :index-list="indexList">
      <template v-for="(value, key) in indexList">
        <van-index-anchor :key="key" :index="key">{{ value }}</van-index-anchor>
        <!-- <span :key="key + 'a'">{{
         index === "#" ? "当前城市" :index === "热" ? "热门城市" :index
        }}</span> -->
        <van-cell
          v-for="(item, index) in obj1[value]"
          :key="index + key"
          :title="item.label"
        >
        </van-cell>
      </template>
    </van-index-bar>
  </div>
</template>
<script>
import { getHotCity, getCityList } from '@/api/city'
export default {
  async created () {
    this.getCityList()
    const res = await getHotCity()
    this.cityList = res.data.body
  },
  data () {
    return {
      cityList: [],
      indexList: [],
      obj: {},
      obj1: {}
    }
  },
  methods: {
    async getCityList () {
      try {
        const res = await getCityList()
        console.log(res)
        this.cityList = res.data.body
        this.cityList.forEach((cityName) => {
          if (this.obj[cityName.pinyin[0].toUpperCase()]) {
            this.obj[cityName.pinyin[0].toUpperCase()].push(cityName)
            console.log(cityName)
          } else {
            this.obj[cityName.pinyin[0].toUpperCase()] = [cityName]
          }
        })
        this.obj1 = this.obj
        console.log(this.obj)
        const obj2 = {}
        this.indexList = Object.keys(this.obj)
        this.indexList = this.indexList.sort()
        this.indexList.forEach(item => {
          obj2[item] = []
        })
        console.log('obj2', obj2)
        // this.indexList = this.obj1
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-index-anchor {
  color: #666;
}
</style>
