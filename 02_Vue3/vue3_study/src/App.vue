<template>
  <h2>App 父级组件</h2>
  <h3>msg: {{ msg }}</h3>
  <button @click="msg += '==='">更新数据</button>
  <hr>
  <child :msg="msg"></child>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 引入子级组件Child
import Child from './components/Child.vue'

export default defineComponent({
  name: 'App',
  // 注册组件
  components: {
    Child,
  },
  setup() {
    // 定义一个 Ref 类型的数据
    const msg = ref('what are you doing')
    return {
      msg,
    }
  }
})
</script>

<style scoped>

</style>
