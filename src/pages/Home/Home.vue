<template>
  <div class="home">
    <!-- 分类顶栏 -->
    <nav-wrapper />
    <div class="container">
      <!-- 文章列表 -->
      <Content />
      <!-- 首页侧边栏 -->
      <welcome-aside />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavWrapper from './components/NavWrapper.vue'
import Content from './components/Content.vue'
import WelcomeAside from './components/Aside.vue'
import Component from 'vue-class-component'
@Component({
  components: {
    NavWrapper,
    Content,
    WelcomeAside
  }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home {
  .container {
    display: flex;
    margin-top: calc(1.337rem + 106px);
    background: #f4f5f5;
  }
}
</style>
