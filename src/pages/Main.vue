<template>
  <div class="main-page">
    <header-wrapper class="header" />
    <router-view class="view" />
    <suspension-panel />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderWrapper from '../common/Header.vue'
import SuspensionPanel from '@/common/SuspensionPanel.vue'
import { getModule } from 'vuex-module-decorators'
import User from './Home/store'
@Component({
  components: {
    HeaderWrapper,
    SuspensionPanel
  }
})
export default class Main extends Vue {
  userStore = getModule(User)
}
</script>

<style lang="less" scoped>
.main-page {
  height: 100%;
  width: 100%;
  background: #f4f5f5;
  .view {
    margin-top: calc(1.337rem + 60px);
  }
}
</style>
