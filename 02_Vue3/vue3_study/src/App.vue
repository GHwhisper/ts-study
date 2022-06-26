<template>
  <h2>自定义 hook 函数操作</h2>
  <h2>x:{{ x }}, y:{{ y }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useMousePosition from './hooks/useMousePosition'

export default defineComponent({
  name: 'App',
  // 需求1：用于再页面中点击页面，把点击的位置的横纵坐标收集起来并展示出来
  setup() {
    const { x, y } = useMousePosition()

    return {
      x,
      y
    }
  }
})
</script>

<style scoped>

</style>
