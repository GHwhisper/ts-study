// 接口：是一种能力，一种约束而已

(() => {
  interface IPerson {
    firstName: string
    lastName: string
  }

  function showFullName(person: IPerson) {
    return person.firstName + '_' + person.lastName
  }

  const person = {
    firstName: '东方',
    lastName: '不败'
  }

  console.log(showFullName(person))
})()
