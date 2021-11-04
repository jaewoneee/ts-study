// 1. 유니온 타입
// '|' <- OR 연산자를 활용한다

function logMessage(value: string | number) {
    if (typeof value === 'number') {
        // value. <= 넘버에 활용할 수 있는 api,속성 목록이 뜬다
    } else {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('Hello World');
logMessage(123);

interface FEDeveloper{
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age: number;
}

function askSomeone(someone: FEDeveloper | Person) {    
    someone.name;
    someone.age; // err => 타입의 공통된 속성만 사용할 수 있다
}

// 2.인터섹션 타입
// '&' <- AND 연산자를 활용한다
function askAnyone(someone: FEDeveloper & Person) {
    someone.name;
    someone.age;
    someone.skill;
}


// 3.유니온과 인터섹션의 차이
// 유니온
askSomeone({ name: 'James', skill: 'vue' });
askSomeone({ name: 'kara', age: 22 });
askSomeone({ name: 'hank', skill: 'java', age: 50 });

// 인터섹션 
askAnyone({ name: 'corner', skill: 'react' }); // err
askAnyone({ name: 'markus', skill: 'spring', age: 30 });


// ** 실무에선 인터섹션보다 유니온을 더 많이 쓴다네요 **