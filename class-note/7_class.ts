// 클래스 문법
class Person {
    private name2: string;   // 해당 클래스 안에서만 쓸거면 'private'을 붙여준다
    public age: number;
    readonly log: string;   //readonly:값 변경 불가능. 오직 읽기만 가능하다

    // 클래스 로직
    constructor(name, age) {
        this.name2 = name;
        this.age = age;
    }
}

// ※ 클래스 문법 새로 보기 (위와 같음)
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// var capt = new Person('캡틴', 100);