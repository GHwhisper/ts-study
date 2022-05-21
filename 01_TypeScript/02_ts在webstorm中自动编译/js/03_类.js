// ts 中书写 js 中的类
(() => {
    class Person {
        constructor(firstName, lastName) {
            // 更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
    }
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 实例化对象
    const person = new Person('诸葛', '孔明');
    console.log(showFullName(person));
})();
