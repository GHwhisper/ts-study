// 接口，接口是对象的状态(属性)和行为(方法)的抽象(描述)
// 接口，是一种类型，一种规范，一种规则，一个能力，一种约束
(() => {
  // 定义一个接口，该接口作为 person 对象的类型使用，限定或约束该对象中的属性数据
  interface IPerson {
    readonly id: number // readonly 只读
    name: string
    age: number
    sex?: string // ? 可选属性
  }

  // 定义一个对象，该对象的类型为 IPerson
  const person: IPerson = {
    id: 1,
    name: '小甜甜',
    age: 18,
    sex: '女'
  }

  console.log(person)
})()
