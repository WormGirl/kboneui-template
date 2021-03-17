<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
})
</script>

<style lang="less">
body,html{
  padding:0;
  margin: 0;
}
</style>
