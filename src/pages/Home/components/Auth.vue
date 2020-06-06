<template>
  <section class="auth-section">
    <div class="title">
      掘金 - juejin.im
    </div>
    <div class="slogan">
      一个帮助开发者成长的社区
    </div>
    <div class="input-group">
      <input
        type="text"
        maxlength="20"
        placeholder="用户名"
        v-model="userInfo.userName"
      />
      <input
        type="text"
        maxlength="64"
        placeholder="手机号"
        v-model="userInfo.phoneNumber"
      />
      <input
        type="password"
        maxlength="64"
        autocomplete="new-password"
        placeholder="密码（不少于 6 位）"
        v-model="userInfo.password"
      />
    </div>
    <button class="btn submit-btn" @click="handleRegisterClick">
      立即注册
    </button>
    <div class="agreement-box">
      注册登录即表示 <br />
      同意<a href="" target="_blank">用户协议</a> 、<a href="" target="_blank"
        >隐私政策</a
      >
    </div>
    <div class="alert-dialog" :style="`display: ${regChecked ? '' : 'none'}`">
      请输入正确的{{ regChecked }}
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import User from '../store'
@Component
export default class Auth extends Vue {
  userStore = getModule(User)
  /**
   * 用户注册信息填写
   */
  userInfo = {
    userName: '',
    phoneNumber: '',
    password: ''
  }

  regChecked = ''

  /**
   * 点击注册按钮
   */
  handleRegisterClick() {
    const { userName, phoneNumber, password } = this.userInfo
    if (!/^1[3456789]\d{9}$/.test(phoneNumber)) {
      this.regChecked = '手机号'
    } else if (!userName) {
      this.regChecked = '用户名'
    } else if (!password || password.length < 6) {
      this.regChecked = '密码'
    }
    setTimeout(() => {
      this.regChecked = ''
    }, 3000)
  }
}
</script>

<style lang="less" scoped>
.auth-section {
  padding: 1.333rem;
  margin-bottom: 1.5rem;
  background: #fff;
  border-radius: 2px;
  overflow: hidden;
  .title {
    margin-bottom: 0.5rem;
    font-size: 1.167rem;
    font-weight: 600;
    color: #2e3135;
  }
  .slogan {
    margin-bottom: 0.5rem;
    font-size: 1.167rem;
    color: #2e3135;
  }
  .input-group {
    input {
      width: 100%;
      margin-bottom: 0.833rem;
      padding: 0.7rem 0.6rem;
      font-size: 1.167rem;
      background: #fbfbfb;
      border: 1px solid #f4f4f4;
      border-radius: 2px;
      outline: none;
    }
  }
  .submit-btn {
    padding: 0.7rem 0;
    width: 100%;
    font-size: 1.167rem;
    background: #007fff;
    color: #fff;
    border-radius: 2px;
    border: none;
    outline: none;
    appearance: none;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
    &:hover {
      background: rgb(3, 113, 223);
    }
  }
  .agreement-box {
    margin-top: 1.667rem;
    font-size: 1.167rem;
    line-height: 1.5;
    color: #767676;
    a {
      color: #007fff;
    }
  }
  .alert-dialog {
    position: fixed;
    top: 28px;
    right: 28px;
    padding: 1rem 2rem;
    max-width: 15rem;
    font-size: 1.167rem;
    background: #f6e3e3;
    color: #ee3333;
    border: 1px solid #e99;
    box-shadow: 0 1px 1px 0 hsla(0, 0%, 80.4%, 0.5);
    border-radius: 2px;
  }
}
</style>
