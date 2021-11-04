// 1.제네릭 문법
// <T> : 파라미터의 타입을 쓰겠다!

// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText('hello');   //hello
// logText(10);    //10


function logText<T>(text: T): T{
    console.log(text);
    return text;
}

logText<string>('하이');    // T : sting

// ** 제네릭과 유니온 방식의 차이 **
// 유니온 타입을 사용할 경우, 제대로 된 타입 추론이 되지 않는다.
// 제네릭의 경우,
function log<T>(text: T): T{
    return text;
}

const result = log('string');   //result는 string 타입의 변수


// 2-1.제네릭의 타입제한
function logTextLength<T>(text:T[]):T[] {
    console.log(text.length);
    return text;
}

logTextLength(['hello','hi']);

// 2-2.제네릭의 타입제한 : 정의된 타입 이용하기
interface lengthType{
    length: number;
}

function logLength<T extends lengthType>(text:T):T{
    text.length;
    return text;
}
logLength('abc');

// 2-3. 제네릭의 타입제한  : keyof => 키값만 받을 수 있다
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}
getShoppingItemOption(10); // err
getShoppingItemOption('name');

















