<template>
  <section class="links">
    <a v-for="item in linklist" :key="item.title" class="link">
      <img :src="item.img" class="icon" />
      <span class="title">{{ item.title }}</span>
    </a>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LinkSection extends Vue {
  linklist = [
    {
      title: '收藏集',
      img: 'https://b-gold-cdn.xitu.io/v3/static/img/collections.945b9ae.png'
    },
    {
      title: '掘金社区漫游指南',
      img: 'https://b-gold-cdn.xitu.io/v3/static/img/book.75582b2.png'
    },
    {
      title: '下载掘金浏览器插件',
      img:
        'https://b-gold-cdn.xitu.io/v3/static/img/juejin-extension-icon.4b79fb4.png'
    },
    {
      title: '前往掘金翻译计划',
      img: 'https://b-gold-cdn.xitu.io/v3/static/img/juejin-miner.b78347c.png'
    },
    {
      title: '商务合作',
      img: 'https://b-gold-cdn.xitu.io/v3/static/img/juejin-partner.4dd2d8c.png'
    }
  ]
}
</script>

<style lang="less" scoped>
.links {
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  .link {
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
      background: rgb(251, 251, 251);
    }
    .icon {
      width: 3rem;
      margin-right: 0.8rem;
    }
    .title {
      position: relative;
      font-size: 1.16rem;
      line-height: 1;
      color: #333;
    }
  }
}
</style>
