<template>
  <ul class="todo-main">
    <!--vue2 中，v-bind="$attrs"接收父级属性，v-on="$listeners"接收子级事件-->
    <!--vue3 中，$listeners 被并入 $attrs-->
    <item v-bind="$attrs" v-for="todo in todos" :key="todo.id" :todo="todo"></item>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Item from './Item.vue'

export default defineComponent({
  name: 'List',
  inheritAttrs: false,
  components: {
    Item,
  },
  props: ['todos']
})
</script>

<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  padding: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
