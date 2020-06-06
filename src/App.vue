<template>
  <main-page />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainPage from '@/pages/Main.vue'
@Component({
  components: {
    MainPage
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
@import './assets/styles/reset.less';
@import './assets/styles/mixin.less';
@import './assets/font-awesome/less/font-awesome.less';
</style>
