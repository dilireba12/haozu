<template>
  <div>
    <!-- 登录页面 -->
    <div class="login" v-if="user && user.token">
      <div>
        <img
          class="login-bg"
          src="http://liufusong.top:8080/img/avatar.png"
          alt=""
        />
        <div class="login-up">
          <div class="login-up1">
            <img
              class="login-img"
              src="http://liufusong.top:8080/img/profile/avatar.png"
              alt=""
            />
          </div>
          <p>好客_46423</p>
          <van-button
            size="mini"
            v-if="this.user && this.user.token"
            @click="logout"
            >退出</van-button
          >
          <p class="bj">编辑个人资料 ▶</p>
        </div>

        <van-grid :column-num="3">
          <van-grid-item icon="star-o" text="我的收藏" />
          <van-grid-item icon="wap-home-o" text="我的出租" />
          <van-grid-item icon="underway-o" text="看房记录" />
          <van-grid-item icon="debit-pay" text="成为房主" />
          <van-grid-item icon="manager-o" text="个人资料" />
          <van-grid-item icon="service-o" text="联系我们" />
        </van-grid>
      </div>
    </div>
    <!-- 未登录页面 -->
    <div class="logout" v-else>
      <img
        class="login-bg"
        src="http://liufusong.top:8080/img/profile/bg.png"
        alt=""
      />
      <div class="login-up">
        <div class="login-up1">
          <img
            class="login-img"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt=""
          />
        </div>
        <p>游客</p>
        <van-button size="small" @click="$router.push('/login')"
          >去登录</van-button
        >
      </div>
      <van-grid :column-num="3">
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="wap-home-o" text="我的出租" />
        <van-grid-item icon="underway-o" text="看房记录" />
        <van-grid-item icon="debit-pay" text="成为房主" />
        <van-grid-item icon="manager-o" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div class="btnImg">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState } from 'vuex'
export default {
  async created () {
    if (this.user && this.user.token) {
      try {
        const res = await getUserInfo()
        console.log('res', res)
        this.getUserInfo = res.data.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      getUserInfo: {}
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出吗' })
        this.$store.commit('setUser', {})
        this.$toast.loading({ message: '加载中...', forbidClick: true })
        this.$toast.setDefaultOptions({ duration: 500 })
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.login {
  .login-bg {
    width: 100%;
    border-style: none;
  }
  .login-up {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 32%;
    bottom: 43%;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    // padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .login-up1 {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      .login-img {
        width: 100%;
        border-radius: 50%;
      }
    }
    p {
      margin-top: -15px;
      margin-bottom: 10px;
    }
    .bj {
      color: #999;
      font-size: 12px;
      margin-top: 20px;
    }
    .van-button {
      border-radius: 30px;
      color: #fff;
      padding: 2px 15px;
      background: #21b97a;
      font-size: 12;
    }
  }
  /deep/.van-grid {
    margin-top: 15px;
    .van-grid-item__icon {
      font-size: 20px;
    }
  }
}
.logout {
  .login-bg {
    width: 100%;
    border-style: none;
  }
  .login-up {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 25%;
    bottom: 55%;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    // padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .login-up1 {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      .login-img {
        width: 100%;
        border-radius: 50%;
      }
    }
    p {
      margin-top: -15px;
      margin-bottom: 10px;
    }
    .van-button {
      width: 70px;
      height: 35px;
      color: #fff;
      font-size: 10px;
      margin-top: 10px;
      border-radius: 5px;
      // box-sizing: border-box;
      background-color: #21b97a;
    }
  }
  /deep/.van-grid {
    margin-top: 150px;
    .van-grid-item__icon {
      font-size: 20px;
    }
  }
}
.btnImg {
  width: 375px;
  text-align: center;
  margin-top: 20px;

  img {
    width: 92%;
    text-align: center;
    border-style: none;
  }
}
</style>
