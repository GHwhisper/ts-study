<template>
  <h2>Child 子级组件</h2>
  <h4>msg: {{ msg }}</h4>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

export default defineComponent({
  name: 'Child',
  // vue2.x 中的声明周期钩子
  beforeCreate() {
    console.log('2.x中的 beforeCreate...')
  },
  created() {
    console.log('2.x中的 created...')
  },
  beforeMount() {
    console.log('2.x中的 beforeMount...')
  },
  mounted() {
    console.log('2.x中的 mounted...')
  },
  beforeUpdate() {
    console.log('2.x中的 beforeUpdate...')
  },
  updated() {
    console.log('2.x中的 updated...')
  },
  // vue2.x 中的 beforeDestroy 和 destroyed 这两个生命周期回调已经在 vue3 中改名了，所以不能再使用了
  beforeUnmount() {
    console.log('2.x中的 beforeUnmount...')
  },
  unmounted() {
    console.log('2.x中的 unmounted...')
  },

  setup() {
    console.log('3.0中的 setup')

    const msg = ref('abc')
    const update = () => {
      msg.value += '==='
    }

    onBeforeMount(() => {
      console.log('3.0中的 onBeforeMount')
    })
    onMounted(() => {
      console.log('3.0中的 onMounted')
    })
    onBeforeUpdate(() => {
      console.log('3.0中的 onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('3.0中的 onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('3.0中的 onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('3.0中的 onUnmounted')
    })

    return {
      msg,
      update
    }
  }
})
</script>

<style scoped>

</style>
