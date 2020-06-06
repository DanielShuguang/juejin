<template>
  <aside class="welcome-aside">
    <!-- 登录框 -->
    <auth-section />
    <!-- 标签框 -->
    <tags-section />
    <!-- 二维码 -->
    <qr-code />
    <!-- 链接 -->
    <link-section />
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AuthSection from './Auth.vue'
import TagsSection from './Tags.vue'
import QrCode from './QrCode.vue'
import LinkSection from './LinkSection.vue'
@Component({
  components: {
    AuthSection,
    TagsSection,
    QrCode,
    LinkSection
  }
})
export default class Aside extends Vue {}
</script>

<style lang="less" scoped>
.welcome-aside {
  width: 240px;
  margin-left: 20px;
}
</style>
