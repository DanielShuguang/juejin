<template>
  <div class="content">
    <div class="nav-link">
      <span
        v-for="(item, index) in linkList"
        :key="index"
        @click="checkNav(item.link)"
        :class="`nav-item ${checked === item.link ? 'active' : ''}`"
        >{{ item.title }}</span
      >
    </div>
    <div class="content-list">
      <content-item
        v-for="(item, index) in detail"
        :detail="item"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Watch, Component, Vue } from 'vue-property-decorator'
import ContentItem from './ContentItem.vue'
import { getModule } from 'vuex-module-decorators'
import User from '../store'
@Component({
  components: {
    ContentItem
  }
})
export default class Content extends Vue {
  userStore = getModule(User)
  linkList = [
    { title: '热门', link: 'POPULAR' },
    { title: '最新', link: 'NEWEST' },
    { title: '热榜', link: 'THREE_DAYS_HOTTEST' }
  ]

  checked = 'POPULAR'
  detail = [
    {
      user: '',
      title: '',
      time: '',
      type: [{ title: '' }],
      link: '',
      likeCount: 0,
      commentsCount: 0
    }
  ]

  get category() {
    return this.userStore.category
  }

  @Watch('category')
  watchCategory() {
    this.resetHomeList()
  }

  mounted() {
    this.resetHomeList()
  }

  /**
   * 切换展示内容
   * @param link 切换标签的 link
   */
  checkNav(link: string) {
    this.checked = link
    this.resetHomeList()
  }

  /**
   * 初始化主页数据
   */
  initHomeData() {
    return new Promise(resolve => {
      const url = 'https://web-api.juejin.im/query'
      const data = {
        operationName: '',
        query: '',
        variables: {
          first: 20,
          after: '',
          order: this.checked,
          category: this.userStore.category
        },
        // id 若失效请重新在掘金获取
        extensions: { query: { id: '653b587c5c7c8a00ddf67fc66f989d42' } }
      }
      this.userStore.getHomeDataFromApi({ url, data }).then(() => {
        resolve(true)
      })
    })
  }

  /**
   * 刷新获取到的新数据
   */
  async resetHomeList() {
    await this.initHomeData()
    this.detail = []
    this.userStore.homeData.map(item => {
      let time = new Date(
        item.node.createdAt
          .replace(/-/g, '/')
          .replace('T', ' ')
          .slice(0, 19)
      ).getTime()
      time = (new Date().getTime() - time) % (24 * 3600 * 1000)
      this.detail.push({
        user: item.node.user.username,
        title: item.node.title,
        time: Math.floor(time / (3600 * 1000)).toString(),
        type: item.node.tags,
        link: item.node.originalUrl,
        likeCount: item.node.likeCount,
        commentsCount: item.node.commentsCount
      })
    })
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 700px;
  background: #fff;
  .nav-link {
    width: 100%;
    padding: 1.3rem 1rem;
    color: #71777c;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
    span {
      padding: 0 1.2rem;
      font-size: 1.16rem;
      border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
      cursor: pointer;
      &.active {
        color: #007fff;
      }
    }
  }
}
</style>
