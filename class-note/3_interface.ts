// 인터페이스 정의하기
interface User{
    name: string;
    age: number;
}

// 1. 변수에 활용한 인터페이스
var jay : User = {
    name: 'jay',
    age:1
}

// 2. 함수에 활용한 인터페이스
function getUser(user:User) {
    console.log(user);
}
const capt = {
    name:'캡틴'
}

getUser(jay);
//getUser(capt);  //error : age가 없으므로


// ** 인터페이스를 가장 많이 활용하는 구간: api
// ** api를 호출하고, ,그 api의 데이터 모양이 어떤지를 명시!


// 3. 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction{
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a:number, b:number):number {
    return a + b;
}

// 4.인덱싱
interface StringArray{
    [index: number]: string;
}
var arr: StringArray = ['a', 'b', 'c'];
arr[0];  // 'a'
//arr[3] = 10; //err : string에 number 할당 불가

// 5.딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    cssFile: /\.css$/,
};

Object.keys(obj).forEach((value) => {
    console.log(value)
});

// 6.인터페이스 확장 : extends
interface Person{
    name: string;
    age: number;
}
// interface Developer{
//     name: string;
//     age: number;
//     language: string;
// }
interface Developer extends Person{
    language: string;
}

// var captain: Developer = {
//     language:'js',       // err : name, age 가 없음
// }
var captain: Developer = {
    name: 'captain',
    age: 100,
    language:'js'
}