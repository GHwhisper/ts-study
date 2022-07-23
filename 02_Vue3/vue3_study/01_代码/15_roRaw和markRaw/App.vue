<template>
  <h2>roRaw 和 markRaw</h2>
  <h3>state: {{ state }}</h3>
  <hr>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from 'vue'

interface UserInfo {
  name: string
  age: number
  likes?: string[]
}

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive<UserInfo>({
      name: '小明',
      age: 20,
    })

    const testToRaw = () => {
      // 把代理对象变成了普通对象了，数据变化，界面不变化
      // const user = state
      const user = toRaw(state)
      user.name += '=='
    }
    const testMarkRaw = () => {
      // state.likes = ['吃', '喝']
      // state.likes[0] += '=='

      const likes = ['吃', '喝']
      // markRaw 标记的对象数据，从此以后都不能再成为代理对象了
      state.likes = markRaw(likes)
      setInterval(() => {
        if (state.likes) {
          state.likes[0] += '='
          console.log('定时器走起来')
        }
      }, 1000)
    }

    return {
      state,
      testToRaw,
      testMarkRaw,
    }
  }
})
</script>

<style scoped>

</style>
