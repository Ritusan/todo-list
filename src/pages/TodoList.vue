<template>
  <div class="todolist">
    <header>TodoList</header>
    <section>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="Option A" />
        <el-checkbox label="Option B" />
        <el-checkbox label="Option C" />
        <el-checkbox label="disabled" disabled />
        <el-checkbox label="selected and disabled" disabled />
      </el-checkbox-group>
    </section>
    
    <section class="outer-wrapper">
      <section class="todo-wrapper">
        <header>Todo</header>
        <div>
          <el-button @click="handleAddTodo">+</el-button>
        </div>
        <div class="check-list" v-for="(item,index) in todoList" :key="index">
          <el-checkbox v-model="item.id" :label="item.name" size="large"></el-checkbox>
          <!-- <edit></edit> -->
          <el-icon size="small" color="#A5BEE5">
            <edit></edit>
          </el-icon>
        </div>
      </section>
      <section class="doing-wrapper">
        <header>Doing</header>
        <div class="check-list" v-for="(item,index) in todoList" :key="index">
          <el-checkbox v-model="item.id" :label="item.name" size="large"></el-checkbox>
        </div>
      </section>
      <section class="done-wrapper">
        <header>Done</header>
        <div class="check-list" v-for="(item,index) in todoList" :key="index">
          <el-checkbox v-model="item.id" :label="item.name" size="large"></el-checkbox>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const clientHeight = ref(0)

clientHeight.value = document.documentElement.clientHeight - 60 - 40 - 100 - 10

let mainHeight = clientHeight.value + 'px'

const checkList = ref(['selected and disabled', 'Option A'])
const todoList = reactive([
  {
    id: 1,
    name: 'day1',
  },
  {
    id: 2,
    name: 'day2',
  }
])

const checked1 = ref(true)
const checked2 = ref(false)

const handleAddTodo = () => {
  let obj = {
    id: 3,
    name: 'day3'
  }
  todoList.push(obj)
}

</script>

<style scoped lang="scss">
.todolist {
  .check-list {

  }
  .outer-wrapper {
    display: flex;
    flex-basis: 3;
    .todo-wrapper,
    .doing-wrapper,
    .done-wrapper {
      flex: 1;
      padding: 20px;
      margin: 10px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      height: v-bind('mainHeight');
      overflow: scroll;
    }
  }
}
</style>