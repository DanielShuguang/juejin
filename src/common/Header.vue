<template>
  <div class="header-wrapper">
    <div class="header-content container">
      <a href="" class="logo">
        <img
          src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
          class="logo-img"
        />
      </a>
      <div class="nav-wrapper">
        <router-link
          class="nav-link"
          active-class="active"
          v-for="item in navList"
          :key="item.link"
          :to="item.link"
          >{{ item.title }}</router-link
        >
      </div>
      <div class="search-wrappper">
        <div class="search">
          <input type="text" placeholder="搜索掘金" class="search-input" />
          <img
            src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg"
            class="search-icon"
          />
        </div>
      </div>
      <div class="submit">
        <img
          src="https://b-gold-cdn.xitu.io/v3/static/img/submit-icon.53f4253.svg"
          alt=""
          class="icon"
        />
        <span>写文章</span>
      </div>
      <div class="auth">
        <span class="login">登录</span>
        <span class="register">注册</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Header extends Vue {
  navList = [
    { link: '/home', title: '首页' },
    { link: '/pins', title: '沸点' },
    { link: '/topics', title: '话题' },
    { link: '/books', title: '小册' },
    { link: '/events/all', title: '活动' }
  ]
}
</script>

<style lang="less" scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  .header-content {
    display: flex;
    height: 100%;
    align-items: center;
    .logo {
      margin-right: 2rem;
    }
    .nav-wrapper {
      display: flex;
      height: 100%;
      .nav-link {
        display: inline-block;
        height: 100%;
        padding: 0 1.5rem;
        font-size: 1.33rem;
        line-height: 60px;
        color: #71777c;
        &:hover {
          color: #007fff;
        }
        &.active {
          color: #007fff;
        }
      }
    }
    .search-wrappper {
      display: flex;
      height: 100%;
      width: 307px;
      padding: 0 1.2rem;
      align-items: center;
      justify-content: flex-end;
      .search {
        display: flex;
        width: 156px;
        background: #f9fafb;
        border: 1px solid #e5e6e7;
        border-radius: 1px;
        input {
          width: 10rem;
          height: 33.4px;
          font-size: 1.1rem;
          color: #666;
          background: transparent;
          padding: 0.6rem 1rem;
          border: none;
          &::placeholder {
            color: #aaabab;
          }
        }
      }
    }
    .submit {
      position: relative;
      display: flex;
      height: 100%;
      padding: 0 1.2rem;
      align-items: center;
      cursor: pointer;
      span {
        font-size: 1.33rem;
        color: #0371df;
      }
      &::after {
        position: absolute;
        content: '|';
        font-size: 1.33rem;
        font-weight: bold;
        left: 100%;
        color: hsla(0, 0%, 59.2%, 0.4);
      }
    }
    .auth {
      height: 100%;
      padding-left: 1.2rem;
      line-height: 60px;
      font-size: 1.33rem;
      color: #0371df;
      cursor: pointer;
      .login {
        &::after {
          content: '·';
          font-size: 1.33rem;
          margin: 0 0.3rem;
        }
      }
    }
  }
}
</style>
