<template>
  <div>
    <wx-button type="primary" >页面主要操作</wx-button>
    <wx-button type="primary" open-type="getUserInfo"
      @getuserinfo="getUserInfo" > getUserInfo </wx-button>
    <wx-button type="primary" :loading="true">Loading</wx-button>
    <wx-button type="primary" :disabled="true">禁止点击</wx-button>
    <wx-button >页面次要操作</wx-button>
    <wx-button type="warn">警告类操作</wx-button>
    <wx-button type="warn" :loading="true">警告类操作</wx-button>
    <wx-button type="warn" :disabled="true">警告类操作</wx-button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  methods: {
    getUserInfo(e) {
      console.log(e)
    }
  }
})
</script>
