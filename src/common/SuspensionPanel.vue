<template>
  <div class="panel">
    <button
      class="btn to-top-btn"
      v-show="topBtnVisible"
      @click="handleTopClick"
    >
      <i class="fa fa-caret-up icon" aria-hidden="true"></i>
    </button>
    <button class="btn meiqia-btn">
      <i class="fa fa-commenting icon" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class SuspensionPanel extends Vue {
  topBtnVisible = false

  created() {
    window.onscroll = () => this.scrollFunction()
  }

  /**
   * 监听页面滑动
   */
  scrollFunction() {
    const isScroll =
      document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
    this.topBtnVisible = isScroll
  }

  /**
   * 返回顶部
   */
  handleTopClick() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
</script>

<style lang="less" scoped>
.panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;
  .btn {
    margin: 1rem 0 0;
    padding: 0;
    width: 3.33rem;
    height: 3.33rem;
    line-height: 1;
    font-size: 1.6rem;
    color: #909090;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
  .icon {
    font-size: 1.3rem;
    &.fa-commenting {
      color: #007fff;
    }
  }
}
</style>
