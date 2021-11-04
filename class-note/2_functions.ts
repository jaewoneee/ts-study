// 함수의 파라미터에 타입을 정의하는 방식
function addNumber(a: number, b: number) {
    return a + b;
}

addNumber(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function divide(): number{
    return 2;
}

// 함수에 타입을 정의하는 기본적인 방식
function divideNum(a: number, b: number): number{
    return a / b;
}

divideNum(20, 10, 5);   // 불필요한 인자의 존재를 인식하는 ts쨩

// 함수의 옵셔널 파라미터
// 있어도, 없어도 되는 파라미터의 뒤에 '?' 를 붙이면 된다
function log(a: string, b?: string, c?: number) {
    
}
log('hello WOrld');
// log(3);  에러 : a 타입은 반드시 들어가야 하니깐
