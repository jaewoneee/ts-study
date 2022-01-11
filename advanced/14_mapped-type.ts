type Heroes = 'Hulk'|'Capt'|'Thor';
type HeroAges = {[ p in Heroes ]: number }
const ages:HeroAges = {
    Hulk:33,
    Capt:100,
    Thor:1000
}


// * for in 반복문 형태 생각하면 됨
var arr = ['a','b','c'];
for (var key in arr){
    console.log(key); // 0, 1, 2
}