let i = 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //example
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(++i)
        return this.greetbutother()
        // stack overflow
    }

    greetbutother(){
        this.greet()
        return this.greet()
    }
}

const john = new Person('John Doe', 30);
john.greet();
john.greetbutother()
// 4752
//function formatNumber(fn, number, numericSeparator) {
//                      ^
//
// RangeError: Maximum call stack size exceeded