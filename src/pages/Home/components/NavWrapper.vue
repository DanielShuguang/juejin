<template>
  <div class="nav-bar">
    <div class="container">
      <a
        v-for="(item, index) in navBar"
        :key="index"
        :href="item.link"
        @click.prevent="handleClick(item)"
        :class="`nav-item ${item.link === checked ? 'active' : ''}`"
        >{{ item.title }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NavItem } from '../interface'
import { getModule } from 'vuex-module-decorators'
import User from '../store'
@Component
export default class NavWrapper extends Vue {
  userStore = getModule(User)
  navBar = [
    { title: '推荐', link: '' },
    { title: '后端', link: '5562b419e4b00c57d9b94ae2' },
    { title: '前端', link: '5562b415e4b00c57d9b94ac8' },
    { title: 'Android', link: '5562b410e4b00c57d9b94a92' },
    { title: 'IOS', link: '5562b405e4b00c57d9b94a41' },
    { title: '人工智能', link: '57be7c18128fe1005fa902de' },
    { title: '开发工具', link: '5562b422e4b00c57d9b94b53' },
    { title: '代码人生', link: '5c9c7cca1b117f3c60fee548' },
    { title: '阅读', link: '5562b428e4b00c57d9b94b9d' }
  ]

  checked = ''

  /**
   * 点击后更换主页内容并高亮点击链接
   * @param target 点击的目标
   */
  handleClick(target: NavItem) {
    this.checked = target.link
    this.userStore.SET_CATEGORY(target.link)
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  top: 60px;
  height: 46px;
  width: 100vw;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .container {
    height: 100%;
    .nav-item {
      display: inline-block;
      height: 100%;
      padding: 0 1rem;
      line-height: 46px;
      font-size: 1.16rem;
      color: #71777c;
      &:first-of-type {
        padding-left: 0;
      }
      &:active {
        color: #007fff;
      }
      &.active {
        color: #007fff;
      }
    }
  }
}
</style>
