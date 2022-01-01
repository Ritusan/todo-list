<template>
  <div>
    <!-- <div class="chess-board">
      <div class="item">
        <div class="item-blue"></div>
        <div class="item-white"></div>
      </div>
      <div class="item">
        <div class="item-blue"></div>
        <div class="item-white"></div>
      </div>
      <div class="item">
        <div class="item-blue"></div>
        <div class="item-white"></div>
      </div>
      <div class="item">
        <div class="item-blue"></div>
        <div class="item-white"></div>
      </div>
      <div class="item">
        <div class="item-blue"></div>
        <div class="item-white"></div>
      </div>
      <div class="item">
        <div class="item-blue"></div>
        <div class="item-white"></div>
      </div>
    </div>
    <div class="chess-board">
      <div class="item">
        <div class="item-white"></div>
        <div class="item-blue"></div>
      </div>
      <div class="item">
        <div class="item-white"></div>
        <div class="item-blue"></div>
      </div>
      <div class="item">
        <div class="item-white"></div>
        <div class="item-blue"></div>
      </div>
      <div class="item">
        <div class="item-white"></div>
        <div class="item-blue"></div>
      </div>
      <div class="item">
        <div class="item-white"></div>
        <div class="item-blue"></div>
      </div>
      <div class="item">
        <div class="item-white"></div>
        <div class="item-blue"></div>
      </div>
    </div> -->
    <div class="chess-board-wrapper">
      <template v-for="item in itemList" :key="item.index">
        <div class="item-blue"></div>
        <div class="item-white"></div>
      </template>
    </div>
    <p>时间都去哪儿了</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";

const itemArray = []
for(let i = 0; i < 30; i++) {
  itemArray.push(i)
}
const itemList: Array<number> = reactive(itemArray)
</script>

<style scoped lang="scss">
$color-blue: #AFC6F3;
$color-blue2: #A5BEE5;
$color-white: #FFFFFF;
$color-green: #92C682;
$color-orange: #FBC688;
$color-orange2: #EBAE74;
$color-pink: #FCBEB2;
$color-pink2: #FDB8A9;

img {
  width: 200px;
  height: auto;
}
.image-bg {
  width: 300px;
  height: 350px;
  // background-color: $color-blue;
  background-size: cover;
}
.chess-board {
    width: fit-content;
    display: flex;
    justify-content: space-between;
  .item {
    flex: 1;
    display: flex;
  }
  .item-blue,
  .item-white {
    width: 60px;
    height: 60px;
  }
  .item-blue {
    background-color: $color-white;
  }
  .item-white {
    background-color: $color-blue;
  }
}
.chess-board-wrapper {
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  .item-blue,
  .item-white {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
  }
  .item-blue {
    background-color: $color-white;
  }
  .item-white {
    background-color: $color-blue;
  }
}
</style>