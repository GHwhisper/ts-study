<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll">
    </label>
    <span><span>已完成 {{ count }}</span> / 全部 {{ todos.length }}</span>
    <button class="btn btn-danger" @click="clearAllCompleted">清除已完成</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Todo } from '@/types/todo'

export default defineComponent({
  name: 'Footer',
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true
    }
  },
  setup(props, { emit }) {
    // 已完成的数量
    // const count = computed(() => props.todos.filter(item => item.isCompleted).length) // 用 filter 更方便
    const count = computed(() => props.todos.reduce((pre, todo) => pre + (todo.isCompleted ? 1 : 0), 0))

    // 全选/全不选
    const isCheckAll = computed({
      get() {
        return count.value > 0 && props.todos.length === count.value
      },
      set(val) {
        emit('check-all', val)
      }
    })

    const clearAllCompleted = () => {
      emit('clear-all-completed')
    }

    return {
      count,
      isCheckAll,
      clearAllCompleted,
    }
  }
})
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

.btn {
  width: 120px;
  height: 28px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}

.btn.btn-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
</style>
