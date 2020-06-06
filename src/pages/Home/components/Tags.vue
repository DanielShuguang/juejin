<template>
  <div class="tags-section">
    <div class="header">
      <div class="title">热门标签</div>
      <div class="right">
        <a href="" class="tag-link" target="_blank">查看全部</a>
      </div>
    </div>
    <div class="content">
      <div class="tag-list">
        <a
          v-for="item in tags"
          :key="item"
          :href="'/tags/' + item"
          target="_blank"
          class="tag"
        >
          {{ item }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Tags extends Vue {
  tags = [
    '架构',
    '开源',
    '算法',
    'GitHub',
    '面试',
    '代码规范',
    '产品',
    '掘金翻译计划'
  ]
}
</script>

<style lang="less" scoped>
.tags-section {
  background: #fff;
  margin-bottom: 1.5rem;
  .header {
    height: 45px;
    line-height: 45px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    .title {
      font-size: 14px;
      flex-grow: 1;
      padding-right: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tag-link {
      line-height: 45px;
      color: #007fff;
    }
  }
  .content {
    word-break: break-word;
    .tag-list {
      padding: 15px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .tag {
        margin-right: 12px;
        margin-bottom: 12px;
        background-color: #f3f6f3;
        cursor: pointer;
        height: 30px;
        color: inherit;
        line-height: 30px;
        padding-left: 22px;
        padding-right: 22px;
        border-radius: 30px;
        &:hover {
          color: #fff;
          background: rgb(0, 204, 0);
        }
      }
    }
  }
}
</style>
