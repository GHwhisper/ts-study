// ts 中书写 js 中的类
(() => {
  interface IPerson {
    firstName: string,
    lastName: string
  }

  class Person {
    firstName: string
    lastName: string
    fullName: string

    constructor(firstName: string, lastName: string) {
      // 更新属性数据
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = this.firstName + '_' + this.lastName
    }
  }

  function showFullName(person: IPerson) {
    return person.firstName + '_' + person.lastName
  }

  // 实例化对象
  const person = new Person('诸葛', '孔明')
  console.log(showFullName(person))
})()
