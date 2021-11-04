// JS 문자열 선언
var string = 'Hello';

//TS 문자열 / 숫자 / 배열 선언
let str: string = "Hello";

let num: number = 12;

let array: Array<number> = [1, 2, 3]  // = let array: number[] = [1,2,3];
let food: Array<string> = ['감자탕', '김치찌개'];

// TS 튜플 : 배열 순서에 따른 타입 지정
let home: [string, number] = ['songpa', 55];

// TS 객체
let obj: object = {};
let person: object = {
    name: 'thor',
    age: 1000
}
let person2: { name: string, age: number } = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;





