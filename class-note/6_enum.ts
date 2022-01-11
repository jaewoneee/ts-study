// 이넘
// 1. 숫자형 이넘
enum Shoes{
    Nike,   // 0
    Adidas  // 1
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 2.문자형 이넘
enum Fruit{
    banana = "yellow",
    apple = "red",
};
var item = Fruit.banana; // "yellow"

// 예제
enum Answer {
    Yes = "Y",
    No = "N"
}

function askQuestion(answer:Answer) {
    if (answer === Answer.Yes) {
        console.log('네');
    } else {
        console.log('아뇨');
    }
}