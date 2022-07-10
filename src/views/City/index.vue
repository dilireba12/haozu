<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />
    <van-index-bar :index-list="indexList">
      <template v-for="(value, key) in obj1">
        <van-index-anchor :key="key" :index="key">当前城市</van-index-anchor>
        <van-cell
          v-for="(citem, cindex) in value"
          :key="cindex + key"
          :title="citem.name"
        >
        </van-cell>
      </template>
    </van-index-bar>
  </div>
</template>
<script>
import { getCityHot, getCityList } from '@/api/city'
export default {
  created () {
    this.getCityList()
    this.getCityHot()
  },
  data () {
    return {
      cityList: [],
      // indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      obj: {},
      obj1: {}
    }
  },
  methods: {
    async getCityHot () {
      const res = await getCityHot()
      this.cityList = res.data.body
    },
    async getCityList () {
      try {
        const res = await getCityList()
        console.log(res)
        this.cityList = res.data.body
        this.cityList.forEach((cityName) => {
          if (this.obj[cityName.pinyin[0].toUpperCase()]) {
            this.obj[cityName.pinyin[0].toUpperCase()].push(cityName)
            // console.log(cityName)
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
          this.cityList.forEach(el => {
            const first = el.short[0].toUpperCase()
            console.log(first)
            if (item === first) {
              obj2[item].push({
                name: el.label,
                id: el.value
              })
            }
          })
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
