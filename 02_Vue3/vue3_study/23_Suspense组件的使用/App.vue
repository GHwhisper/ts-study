<template>
  <h2>App 父级组件：Suspense 组件</h2>

  <suspense>
    <template #default>
      <!--异步组件-->
      <!--<async-component></async-component>-->
      <async-address></async-address>
    </template>
    <template v-slot:fallback>
      <!--loading的内容-->
      <h2>Loading</h2>
    </template>
  </suspense>

</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
// 引入组件：静态引入和动态引入

// Vue2中动态引入组件的写法：（在Vue3中这种写法不行）
// const AsyncComponent = () => import('./AsyncComponent.vue')

// Vue3中动态引入组件的写法：
// const AsyncComponent = defineAsyncComponent(
//   () => import('./AsyncComponent.vue')
// )

// 静态引入组件
// import AsyncComponent from './AsyncComponent.vue'
import AsyncAddress from './AsyncAddress.vue'

export default defineComponent({
  name: 'App',
  components: {
    // AsyncComponent,
    AsyncAddress,
  }
})
</script>

<style scoped>

</style>
