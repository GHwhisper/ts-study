// 静态成员：在类中通过 static 修饰符的属性或者方法，那么就是静态的属性及静态的方法，也称之为静态成员
// 静态成员在使用时是通过 类名.xx 的这种语法来使用的
(() => {
  // 定义一个类
  class Person {
    // 类中默认有一个内置的 name 属性，所以会出现错误的提示信息
    // static name: string

    // 静态属性
    static name1: string
    constructor(name: string) {
      // 此时 this 是实例对象，name1 是静态属性，不同通过实例对象直接调用静态属性来使用
      // this.name1 = name
    }
    sayHi() {
      console.log('萨瓦迪卡')
    }
  }

  const person: Person = new Person('小甜甜')
  // 通过实例对象调用的属性
  // console.log(person.name1)
  // 通过实例对象调用的方法（实例方法）
  // person.sayHi()



  class Person1 {
    // 静态属性
    static name1: string = '小甜甜'
    // 构造函数是不能通过 static 来进行修饰的
    constructor() {
    }
    // 静态方法
    static sayHi() {
      console.log('萨瓦迪卡')
    }
  }
  const person1: Person1 = new Person1()
  // 通过 类名.静态属性 的方式访问该成员数据
  console.log(Person1.name1)
  // 通过 类名.静态属性 的方式设置该成员数据
  Person1.name1 = '佐助'
  console.log(Person1.name1)
  // person1.sayHi() // 静态方法不能通过实例对象去访问
  // 通过 类名.静态方法 的方式来调用内部的静态方法
  Person1.sayHi()
})()
