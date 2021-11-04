// 타입 호환
// 1. 인터페이스
interface Store {
    name: string;
    popularity: string;
}
interface Address{
    name: string;
}

var store: Store;
var address: Address;
store = address;   // err 
// => A타입속성 < B타입속성 : 오른쪽의 타입 속성이 왼쪽의 타입 속성보다 더 많아야 한다.
address = store;    // corrct

// 2. 함수
var add = function (c:number) {
    // ...
}

var sum = function (c: number, d:number) {
    // ...
}

add = sum;  // err
// 왼쪽의 함수가 오른쪽의 함수보다 구조적으로 커야 함.
// sum은 인자를 두 개 가지고, add는 한 개 가지므로 sum이 구조적으로 더 크다
sum = add;

// 3. 제네릭
interface Empty<T>{
    //..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
interface NotEmpty<T>{
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;