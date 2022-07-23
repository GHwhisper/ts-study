<template>
  <h2>toRef 的使用及特点</h2>
  <h3>state: {{ state }}</h3>
  <h3>age: {{ age }}</h3>
  <h3>money: {{ money }}</h3>
  <hr>
  <button @click="update">更新数据</button>

  <hr>
  <child :age="age"></child>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'
import Child from '@/components/Child.vue'

export default defineComponent({
  name: 'App',
  components: {
    Child,
  },
  setup() {
    const state = reactive({
      age: 5,
      money: 100
    })
    // 把响应式数据 state 对象中的某个属性 age 变成了 ref 对象了
    const age = toRef(state, 'age')
    // 把响应式对象中的某个属性使用 ref 进行包装，变成了一个 ref 对象
    const money = ref(state.money)
    console.log(age)
    console.log(money)
    const update = () => {
      state.age += 2
      // age.value += 3

      // money.value += 10
    }

    return {
      state,
      age,
      money,
      update,
    }
  }
})
</script>

<style scoped>

</style>
