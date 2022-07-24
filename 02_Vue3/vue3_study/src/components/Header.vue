<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Header',

  // 课程中使用的是父组件向子组件传递addTodo方法，子组件调用该方法的方式实现。
  // 自己实现时，采用的是子组件触发事件，父组件监听的方式实现。

  setup(props, { emit }) {
    // 定义一个 ref 类型的数据
    const title = ref('')
    // 回车的时间的回调函数，用来添加数据
    const add = () => {
      // 获取文本框中输入的数据，判断不为空
      const text = title.value
      if (!text.trim()) return
      // 此时有数据，触发事件
      emit('add-todo', text)
      // 清空文本
      title.value = ''
    }

    return {
      title,
      add,
    }
  }
})
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, .8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, .6);
}
</style>
