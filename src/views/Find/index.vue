<template>
  <div>
    <van-nav-bar title="标题" left-arrow @click-left="$router.back()" />
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker title="标题" :columns="columns" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button block type="primary">确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="方式"
          ><van-picker title="标题" :columns="columns1" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button block type="primary">确定</van-button>
            </van-col>
          </van-row></van-dropdown-item
        >
        <van-dropdown-item title="租金"
          ><van-picker title="标题" :columns="columns2" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button block type="primary">确定</van-button>
            </van-col>
          </van-row></van-dropdown-item
        >
        <van-dropdown-item title="筛选" @open="flag = true"></van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-popup v-model="flag" position="right" style="width: 70%; height: 100%"
      >123</van-popup
    >
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      origin-price="10.00"
    />
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      origin-price="10.00"
    />
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      origin-price="10.00"
    />
  </div>
</template>

<script>
import { getHomeCondition } from '@/api/home'
export default {
  created () {
    this.getHomeCondition()
  },
  data () {
    return {
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ],
      columns1: [
        {
          text: '浙江'
        },
        {
          text: '福建'
        }
      ],
      columns2: [
        {
          text: '浙江'
        },
        {
          text: '福建'
        }
      ],
      flag: false
    }
  },
  methods: {
    async getHomeCondition () {
      try {
        const res = await getHomeCondition()
        console.log(res)
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
</style>
