<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @add-todo="addTodo"></Header>
      <List :todos="todos" @del-todo="deleteTodo" @update-complete="updateTodo"></List>
      <Footer :todos="todos" @check-all="checkAll" @clear-all-completed="clearAllCompletedTodos"></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
// 引入直接的子级组件
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import Footer from '@/components/Footer.vue'
// 引入接口
import { Todo } from '@/types/todo'
import { saveTodos, readTodos } from '@/utils/localStorageUtils'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    List,
    Footer,
  },
  // 数据应该用数组来存储，数组中的每个数据都是一个对象，对象中应该有三个属性（id, title, isCompleted）
  // 把数据暂且定义在 App 父级组件

  setup() {
    // 定义一个数组数据
    const state = reactive<{todos: Todo[]}>({
      todos: []
    })
    // 界面加载完后，过会儿读取数据
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos()
      }, 500)
    })

    // 添加数据的方法
    const addTodo = (title: string) => {
      const todo: Todo = {
        id: Date.now(),
        title,
        isCompleted: false
      }
      state.todos.unshift(todo)
    }

    // 删除数据的方法
    const deleteTodo = (id: number) => {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }

    // 修改todo的isCompleted属性状态
    const updateTodo = (id: number, isCompleted: boolean) => {
      const todo = state.todos.find(todo => todo.id === id)
      if (todo) todo.isCompleted = isCompleted
    }

    // 全选或全不选的方法
    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach(todo => todo.isCompleted = isCompleted)
    }

    // 清理所有选中的数据
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter(todo => !todo.isCompleted)
    }

    // 监视操作：如果 todos 数组的数据变化了，直接存储在浏览器缓存中
    // watch(() => state.todos, value => {
    //   // 保存到浏览器的缓存中
    //   saveTodos(value)
    // }, { deep: true })
    // （优化写法）
    watch(() => state.todos, saveTodos, { deep: true })

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos,
    }
  }
})
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
