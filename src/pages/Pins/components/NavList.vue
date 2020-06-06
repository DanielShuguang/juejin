<template>
  <div class="nav-list">
    <a
      v-for="(item, index) in list"
      :key="index"
      :class="`nav-item ${item.title === checked ? 'active' : ''}`"
      @click="handleClick(item)"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NavItem } from '../../Home/interface'
import { getModule } from 'vuex-module-decorators'
import PinsStore from '../store'
@Component
export default class NavList extends Vue {
  pinsStore = getModule(PinsStore)
  list = [
    { title: '推荐', link: '' },
    { title: '热门', link: '' },
    { title: '关注', link: '' },
    { title: '开源推荐', link: '' },
    { title: '内推招聘', link: '' },
    { title: '掘金相亲', link: '' },
    { title: '上班摸鱼', link: '' },
    { title: '应用安利', link: '' },
    { title: '开发工具', link: '' },
    { title: 'New资讯', link: '' }
  ]

  checked = '推荐'

  created() {
    const data = {
      operationName: '',
      query: '',
      variables: { size: 20, after: '', afterPosition: '' },
      extensions: { query: { id: '249431a8e4d85e459f6c29eb808e76d0' } }
    }
    const url = 'https://web-api.juejin.im/query'
    this.pinsStore.getPinsDataFromApi({ url, data })
  }

  /**
   * 点击切换展示标签
   */
  handleClick(target: NavItem) {
    this.checked = target.title
  }
}
</script>

<style lang="less" scoped>
.nav-list {
  display: flex;
  flex-direction: column;
  padding: 1.33rem 1rem;
  max-width: 9.33rem;
  border-radius: 0.2rem;
  background-color: #fff;
  position: fixed;
  top: 6.67rem;
  width: 9.33rem;
  transition: all 0.2s linear;
  .nav-item {
    height: 2.58rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.16rem;
    color: #909090;
    padding: 0 1rem;
    margin-top: 0.83rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s, color 0.2s;
    cursor: pointer;
    &:first-of-type {
      margin-top: 0;
    }
    &.active {
      color: #fff;
      background: rgb(0, 127, 255);
    }
  }
}
</style>
