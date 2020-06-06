<template>
  <div class="pins container">
    <!-- 左侧导航栏 -->
    <nav-list />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavList from './components/NavList.vue'
@Component({
  components: {
    NavList
  }
})
export default class Pins extends Vue {}
</script>

<style lang="less" scoped>
.pins {
  background: rgb(244, 245, 245);
}
</style>
