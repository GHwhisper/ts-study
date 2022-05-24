// readonly 修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰符后，该属性成员就不能在外部被随意修改了
// 构造函数中，可以对只读属性成员的数据进行修改
// 如果构造函数中没有任何的参数，类中的属性成员此时已经使用 readonly 进行修饰了，外部也是不能对该属性值进行修改的
// 构造函数中的参数可以使用 readonly 进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问但不能修改
// 同理，构造函数中的参数也可以使用 public / private / protected 进行修饰，该类中也会添加对应的属性
(() => {
  // readonly 修饰类中成员属性
  // 定义一个类型
  class Person {
    // 属性
    readonly name: string
    // readonly name: string = '大甜甜'
    // 构造函数
    constructor(name: string) {
      this.name = name
    }
    // constructor() {
    //
    // }
    sayHi() {
      console.log('考尼奇瓦', this.name)
      // 类中的普通方法中，也不能修改 readonly 修饰的成员属性值
      // this.name = '大甜甜'
    }
  }

  // 实例化对象
  const person: Person = new Person('小甜甜')

  console.log(person)
  console.log(person.name)
  // 无法修改，name 是只读的
  // person.name = '大甜甜'
  // console.log(person.name)

  console.log('=====================')

  // readonly 修饰类中的构造函数中的参数（参数属性）
  // 定义一个类型
  class Person1 {
    // 构造函数
    // 构造函数中的 name 参数，一旦使用 readonly 修饰后，那么 name 参数可以叫做 参数属性
    // 构造函数中的 name 参数，一旦使用 readonly 修饰后，那么 Person1 中就有了一个 name 的属性成员
    // 构造函数中的 name 参数，一旦使用 readonly 修饰后，外部也是无法修改类中的 name 属性成员值的
    constructor(readonly name: string = '大甜甜') {
      this.name = name
    }
    // 构造函数中的 name 参数，一旦使用 public 修饰后，那么 Person1 中就有了一个公共的 name 的属性成员。private, protected 同理
    // constructor(public name: string = '大甜甜') {
    //   this.name = name
    // }
  }

  const person1: Person1 = new Person1('小甜甜')
  console.log(person1)
  // person1.name = '真好' // 报错，因为 name 只读
  console.log(person1.name)
})()
