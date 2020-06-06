<template>
  <div class="qrcode">
    <a href="" class="app-link">
      <img
        src="https://b-gold-cdn.xitu.io/v3/static/img/welcome.6f27533.png"
        class="qr-img"
      />
      <div class="content-box">
        <div class="headline">
          <strong>下载掘金客户端</strong>
        </div>
        <div class="desc">
          一个帮主开发者成长的社区
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class QrCode extends Vue {}
</script>

<style lang="less" scoped>
.qrcode {
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .app-link {
    display: flex;
    align-items: center;
    padding: 1.3rem;
    background: transparent;
    .qr-img {
      margin-right: 0.5rem;
      width: 4.167rem;
      height: 4.167rem;
    }
    .content-box {
      .headline {
        strong {
          font-size: 1.167rem;
          font-weight: 600;
          color: #333;
        }
      }
      .desc {
        margin-top: 0.5rem;
        font-size: 1rem;
        color: #909090;
      }
    }
  }
}
</style>
