<template>
  <div
    class="content-item"
    @mouseenter="mouseEnterOrLeave"
    @mouseleave="mouseEnterOrLeave"
  >
    <a :href="detail.link" target="_blank">
      <div class="header">
        <span class="spacial">专栏</span>
        <span class="type"> · {{ detail.user }}</span>
        <span class="time"> · {{ detail.time }}小时前 · </span>
        <span class="keyword" v-for="(item, index) in detail.type" :key="index">
          {{ item.title }}
          <span v-if="detail.type.length > index + 1"> · </span>
        </span>
      </div>
      <p class="title">
        {{ detail.title }}
      </p>
      <div class="info-row">
        <div class="item like">
          <img
            src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg"
            class="icon"
          />
          <span class="count">{{ detail.likeCount }}</span>
        </div>
        <div class="item comment">
          <img
            src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"
            class="icon"
          />
          <span class="count">{{ detail.commentsCount }}</span>
        </div>
        <div class="item share" v-show="shareBtnVisible">
          <img
            src="https://b-gold-cdn.xitu.io/v3/static/img/share.1d55e69.svg"
            class="icon"
          />
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { DetailInfo } from '../interface'
import { Prop, Component } from 'vue-property-decorator'
@Component
export default class ContentItem extends Vue {
  /**
   * 每条专栏的概要信息
   */
  @Prop({ type: Object as PropType<DetailInfo> })
  detail!: DetailInfo

  shareBtnVisible = false

  mouseEnterOrLeave() {
    this.shareBtnVisible = !this.shareBtnVisible
  }
}
</script>

<style lang="less" scoped>
.content-item {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgb(252, 252, 252);
  }
  .header {
    span {
      color: #b2bac2;
      &.spacial {
        font-weight: 500;
        color: #b71ed7;
      }
    }
  }
  .title {
    margin: 0.5rem 0 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
  }
  .info-row {
    display: inline-flex;
    white-space: nowrap;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 0 0.8rem;
      height: 2rem;
      font-size: 1.083rem;
      line-height: 1;
      white-space: nowrap;
      color: #b2bac2;
      border-radius: 1px;
      border: 1px solid #edeeef;
      .conut {
        color: #b2bac2;
        margin-left: 0.2em;
        font-weight: 700;
      }
    }
  }
}
</style>
