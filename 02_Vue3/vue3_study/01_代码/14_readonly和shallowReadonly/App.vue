<template>
  <h2>readonly 和 shallowReadonly</h2>
  <h3>state: {{ state3 }}</h3>
  <h3>person: {{ person }}</h3>
  <hr>
  <button @click="update">更新数据</button>
  <button @click="update2">更新数据2</button>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, ref, shallowReadonly } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: '佐助',
      age: 20,
      car: {
        name: '奔驰',
        color: 'yellow'
      }
    })
    // 只读的数据 --- 深度的只读
    // const state2 = readonly(state)
    // 只读的数据 --- 浅只读的
    const state3 = shallowReadonly(state)
    const update = () => {
      // state2.name += '=='
      // state2.car.name += '=='

      // state3.name += '==='
      state3.car.name += '==='
    }

    const person = ref({
      name: '小明',
      age: 22,
      car: {
        name: '奥迪',
        color: 'white',
      }
    })
    // const person2 = readonly(person)
    const person2 = shallowReadonly(person)
    const update2 = () => {
      // person2.value.name += '==='
      person2.value.car.name += '==='
    }

    return {
      // state,
      // state2,
      state3,
      update,
      person,
      update2
    }
  }
})
</script>

<style scoped>

</style>
