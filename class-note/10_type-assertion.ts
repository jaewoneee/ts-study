// 타입단언
// 'as'
var a;
a = 20;
a = 'a';
var b = a as string;

// DOM API 조작에 쓰이는 타입 단어
var div = document.querySelector('div') as HTMLDivElement;
if (div) {
    div.innerText
}