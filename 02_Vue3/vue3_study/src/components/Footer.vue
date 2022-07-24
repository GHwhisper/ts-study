<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox">
    </label>
    <span><span>已完成 0</span> / 全部 2</span>
    <button class="btn btn-danger">清除已完成</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
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
