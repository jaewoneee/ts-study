// 타입추론 기본 1
var a;

// b=10 <= default value라는 es6 문법
// 인수가 들어오지 않을 경우, 인자의 기본값을 지정해 주는 것
function getB(b = 10) {
    var c = "hi";
    return b + c;
}

// 타입추론 기본 2
interface Dropdown<T>{
    value: T;
    title: string;
}
var shoppingItem: Dropdown<string> = {
    value: 10,  // err: string이 아니니깐
    title: 'nike'
}

// 타입추론 기본 3
interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
    // value: K;
    // title: string;
}

var detailedItem: DetailedDropdown<string> = {
    description: 'hi',
    tag: 'abc',
    value: 10,   // err: string이 아니니깐
    title:'supreme'
}

// Best Common Type
var arr2 = [1, 2, true];