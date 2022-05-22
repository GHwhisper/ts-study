// 基础类型
(() => {
  // 「布尔类型」 -- boolean
  console.log('布尔-------------------------')
  let flag: boolean = true
  flag = false
  // flag = 10 报错
  console.log(flag)

  // 「数字类型」 -- number
  console.log('数字-------------------------')
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1, a2, a3, a4)
  // a1 = '哈哈' 报错

  // 「字符串类型」 --- string
  console.log('字符串-----------------------')
  let str1: string = '床前明月光'
  let str2: string = '小明去开窗'
  let str3: string = '遇到一耳光'
  let str4: string = '牙齿掉光光'
  console.log(`${str1},${str2},${str3},${str4}`)
  // str4 = 10 报错

  // 字符串和数字之间能否一起拼接
  let str5: string = '我又这么多的钱'
  let num: number = 1000
  console.log(str5 + num)

  // 总结：ts中变量一开始是什么类型，那么后期赋值，只能用该类型的数据，不允许用其他类型的数据赋值给当前变量

  let und: undefined = undefined
  let nll: null = null
  console.log(und, nll)
  // undefined 和 null 都可以作为其他类型的子类型，把 undefined 和 null 赋值给其他类型的变量，
  // 如：number类型变量
  let num2: number = undefined  // 关闭严格模式时才行，严格模式下会报错
  console.log(num2)

  // 「数组类型」
  console.log('数组-------------------------')
  // 数组定义方式1
  // 语法： let 变量名: 数据类型[] = [值1, 值2, 值3, ...]
  let arr1: number[] = [10, 20, 30, 40, 50]
  // 数组定义方式2（泛型写法）
  // 语法： let 变量名: Array<数据类型> = [值1, 值2, 值3, ...]
  let arr2: Array<number> = [100, 200, 300]
  console.log(arr1, arr2)

  // 注意问题：数组定义后，里面的数据类型必须和定义数组的时候的类型一致，否则报错且不会通过编译

  // 「元组类型」
  // 在定义数组时，类型和数据的个数从一开始就已经限定了
  console.log('元组-------------------------')
  let arr3: [string, number, boolean] = ['小甜甜', 100.12345, true]
  console.log(arr3)
  // 注意问题：元组类型在使用的时候，数据的类型的位置和数据的个数，应该在定义元组的时候的数据类型和位置一致
  console.log(arr3[0].split(''))
  console.log(arr3[1].toFixed(2))

  // 「枚举类型」
  // 枚举中的每个数据值都可以叫元素，每个元素都有自己的编号，编号默认从 0 开始，依次递增加 1
  console.log('枚举-------------------------')
  enum Color {
    red,
    green,
    blue
  }
  // 定义一个 Color 的枚举类型的变量来接受枚举的值
  let color: Color = Color.red
  console.log(color)
  console.log(Color.red, Color.green, Color.blue, Color)
  console.log(Color[2])
  // 例子，枚举中的元素可以是中文的数据值，但不推荐
  enum Gender {
    女,
    男
  }
  console.log(Gender.男)

  // 「any 类型」
  console.log('any-------------------------')
  let str: any = 100
  str = '年少不知富婆好，错把少女当作宝'
  console.log(str)
  // 当一个数组中要存储多个数据，个数不确定，类型不确定，此时也可以使用 any 类型来定义数组
  let arr: any[] = [100, '年少不知软饭香，错吧青春倒插秧', true]
  console.log(arr)
  // 这种情况代码书写时不提示错误，但编译可以通过，运行时才报错，故 any 类型有优点也有缺点
  // console.log(arr[0].split(''))

  // 「void 类型」在函数生命时，小括号后面使用 :void, 代表该函数没有任何返回值
  console.log('void------------------------')
  function showMsg(): void {
    console.log('只要富婆把握住，连夜搬进大别墅')
    // return
    // return undefined
    return null
  }
  console.log(showMsg())
  // 定义一个 void 类型变量，可以接收一个 undefined 或 null, 但是意义不大
  let vd: void = undefined
  console.log(vd)

  // 「object 类型」
  console.log('object----------------------')
  // 定义一个函数，参数时 object 类型，返回值也是 object 类型
  function getObj(obj: object): object {
    console.log(obj)
    return {
      name: '卡卡西',
      age: 27
    }
  }
  // console.log(getObj({name: '佐助', age: 25}))
  // console.log(getObj('123')) // 错误
  // console.log(getObj(new String('123')))
  console.log(getObj(String))

  // 「联合类型」
  // 联合类型（Union Types）表示取值可以为多种类型中的一种
  console.log('联合-------------------------')
  // 定义一个函数得到一个数字或字符串值的字符串形式值
  function getString(str: number | string): string {
    return str.toString()
  }
  console.log(getString(123))

  // 「类型断言」
  // 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。
  // 类型断言语法1：<类型>变量名
  // 类型断言语法2：变量名 as 类型
  console.log('类型断言----------------------')
  // 定义一个函数得到一个数字或字符串值的长度
  function getLength(str: number | string): number {
    // return str.toString().length
    // 若传入的 str 本身就是 string 类型，那么没必要 toString()，故上一行代码不够合理
    if ((<string>str).length) { // 通过类型断言，让编译器知道 程序员知道自己在干什么
      // 存在 str.length 则说明 str 是 string 类型
      // return (<string>str).length
      return (str as string).length
    } else {
      return str.toString().length
    }
  }
  console.log(getLength(12345))

  // 「类型推断」
  // TS会在没有明确的指定类型的时候推测出一个类型
  console.log('类型推断----------------------')
  let txt = 100 // 推断出 number 类型
  // txt = '我真帅' // 报错，因为 txt 已经被推断为 number 类型
  console.log(txt)

  let txt2 // 推断出 any 类型
  txt2 = 200
  txt2 = '我真帅'
  console.log(txt2)
})()
