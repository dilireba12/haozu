<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow  @click-left="$router.back()">
      <template #right> </template>
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        class="login-input"
        v-model="user.username"
        name="账号"
        placeholder="请输入账号"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button round block native-type="submit" class="login-btn"
          >登 录</van-button
        >
        <a href="javascript:;">还没有账号，去注册~</a>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const reg = /^[0-9a-zA-Z]{5,8}$/
      const usm = this.user.username
      const psd = this.user.password
      const res = reg.test(usm)
      const res1 = reg.test(psd)
      if (this.user.username === '' || this.user.password === '') {
        return this.$toast('用户和密码不能为空！')
      } else if (res === false) {
        return this.$toast('用户名格式5-8位的字母和数字')
      } else if (res1 === false) {
        return this.$toast('用户名格式5-8位的字母和数字')
      } else {
        this.$toast.success('登录成功')
      }
      try {
        // const res1 = await login(this.user)
        // console.log(res1)
        const res2 = await login(this.user)
        console.log(res2)
        this.$store.commit('setUser', res2.data.body)
        setTimeout(() => {
          this.$router.push({ path: '/my' })
        }, 1500)
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

<style scoped lang=less>
.van-nav-bar {
  font-size: 18px;
}
.van-field {
  height: 60px;
  width: 100%;
  line-height: 60px;
  padding: 1px 1;
  margin: 20px;
  /* border: 0; */
  color: #000;
  font-size: 17px;
  background-color: transparent;
}
.login-btn {
  text-align: center;
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  border-radius: 5px;
  background-color: #34b074;
}
a {
  display: block;
  text-decoration: none;
  color: #666;
  font-size: 14px;
  text-align: center;
  margin: 30px;
}
</style>
