// 타입별칭: 정의한 타입에 대해 '별칭' 부여하는 것

// 1.인터페이스와의 비교
interface Person{
    name: string;
    age: number;
}
type PersonType = {
    name: string;
    age: number;
}

var tom: Person = {
    
}
var sam: PersonType = {
    
}

type MyString = string;
var str: MyString = "Hello";

type Todo = { id: string; title: string; done: boolean };

// 인터페이스와 타입의 가장 큰 차이점
// ** 타입은 확장이 불가능하다! **
// ** 가능하면 타입보다는 인터페이스를 활용하자 **