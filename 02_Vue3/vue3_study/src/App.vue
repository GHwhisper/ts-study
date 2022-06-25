<template>
  <h2>reactive 的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <hr>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据

  /*
    reactive
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
   */

  setup() {
    const obj = {
      name: '小明',
      age: 20,
      wife: {
        name: '小甜甜',
        age: 18,
        cars: ['奔驰', '宝马', '奥迪']
      }
    }
    // 把数据变成响应式的数据
    // 返回的是一个 Proxy 的代理对象，被代理的目标对象就是 obj 对象
    // user 现在是代理对象，obj是目标对象
    // user 对象的类型是 Proxy
    const user = reactive(obj)
    console.log(user)

    // function updateUser() {}
    const updateUser = () => {
      // 直接使用目标对象的方式来更新目标对象中的成员的值，是不行的，只能使用代理对象的方式来更新数据（响应式数据）
      // obj.name += '==='

      user.name += '=='
      user.age += 2
      user.wife.name += '++'
      user.wife.cars[0] = '玛莎拉蒂'
    }

    return {
      user,
      updateUser
    }
  }
});
</script>
