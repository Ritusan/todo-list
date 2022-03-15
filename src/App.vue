<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <top-bar></top-bar>
  <div class="main-wrapper">
    <router-view></router-view>
  </div>
  <!-- <my-time></my-time> -->
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MyTime from './components/MyTime.vue'
import TopBar from './components/TopBar.vue'

const clientHeight = ref(0)

clientHeight.value = document.documentElement.clientHeight - 60 - 40

let mainHeight = clientHeight.value + 'px'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>

<style lang="scss" scoped>
.main-wrapper {
  padding: 20px 20px 10px 20px;
  min-height: v-bind('mainHeight');
}
</style>
