// 클래스 문법
class Person {
    private name: string;   // 해당 클래스 안에서만 쓸거면 'private'을 붙여준다
    public age: number;
    readonly log: string;   //readonly:값 변경 불가능. 오직 읽기만 가능하다

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}