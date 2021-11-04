// 클래스 문법 (ES6) in js

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//}

class Person {
    // 클래스 로직
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    welcome() {
        console.log(`안녕 ${this.name}`);
    }
}

var result = new Person('tom');
result.welcome();


// 프로토타입
var user = { name: "judy", age: 59 };
var admin = {};

admin.__proto__ = user;
console.log(admin.name);    // judy
admin.role = 'admin';
console.log(admin);