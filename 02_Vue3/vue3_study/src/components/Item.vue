<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.isCompleted">
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo">删除</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Todo } from '@/types/todo'

export default defineComponent({
  name: 'Item',
  props: {
    todo: {
      type: Object as () => Todo, // 函数返回的是Todo类型
      required: true,
    }
  },

  // 课程中采用 App->List->Item 逐级传递deleteTodo方法，Item调用该方法的方式进行删除。
  // 自己实现时，采用 List 接收 $attrs（vue3中$listeners已被归纳进$attrs）接收 Item 的 delTodo 事件，再向 App 触发该事件的方式实现。
  // 当然也可以逐级向上 emit 事件，Item->List->App

  setup(props, { emit }) {
    // 点击删除按钮
    const delTodo = () => {
      // 提示
      if (window.confirm('确定要删除吗？')) {
        emit('del-todo', props.todo.id)
      }
    }

    return {
      delTodo,
    }
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
  cursor: pointer;
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
