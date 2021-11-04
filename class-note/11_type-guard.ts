// 타입 가드
// 'is'

// 타입가드를 위한 intro
interface Developers{
    name: string;
    skill: string;
}
interface Person{
    name: string;
    age: number;
}

function introduce():Developers | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

var tony = introduce();
console.log(tony.skill);    // err : 유니온 연산자의 특징

// 타입 단언을 이용한 타입 가드
if ((tony as Developers).skill) {
    var skill = (tony as Developers).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}

// 타입 가드 정의(is)
function isDeveloper(target:Developers | Person):target is Developers {
    return (target as Developers).skill !== undefined;
}

if (isDeveloper(tony)) {
    // developers 인 경우!
    tony.skill;
    tony.age // err
} else {
    // 아닌 경우!
    tony.age
    tony.skill; // err
}
