<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.isCompleted">
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger">删除</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Todo } from '@/types/todo'

export default defineComponent({
  name: 'Item',
  props: {
    todo: Object as () => Todo // 函数返回的是 Todo 类型
  }
})
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 5px;
  color: #fff;
  background-color: #f56c6c;
  border: 1px solid #f56c6c;
  border-radius: 4px;
}

li::before {
  content: inherit;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: lightpink;
}

li:hover button{
  display: inline-block;
}
</style>
