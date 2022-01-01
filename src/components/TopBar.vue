<template>
  <div class="topbar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Todo List</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Color Center</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
      <el-menu-item index="5">Home</el-menu-item>
    </el-menu>
    <div class="user-avatar">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="default"></el-avatar>
    </div>
  </div>
  <div class="h-6"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { mapMutations } from 'vuex'

const activeIndex = ref('1')
const activeIndex2 = ref('1')

const router = useRouter()

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  switch (key) {
    case '1':
      router.push('/todolist')
      break
    case '2-1':
      router.push('/color')
      break
    case '5':
      router.push('/')
      break
    default:
      router.push('/')
      break
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  position: relative;
  .user-avatar {
    position: absolute;
    right: 15px;
    top: 9px;
    height: 40px;
  }
}
</style>
