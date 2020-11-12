// ctrl alt N 
//console.log('test');

// 자바스크립트에서 변수 선언
//var name;

//console.log(name);

// ES6 변수, 상수 선언
//var name; // 함수 레벨 스코프
//let name1 = 'abc';  // 변수 선언방법
//const name2 = 'abc';    // final (변경 불가능 - 상수)

//var name = 'abc';
//console.log(name);

//name = 11244;
//console.log(name)

//const n = 10;
//const message = 'test'

//console.log('변수 n의 값: ${n}. 상수 message 의 값 : ${message}')

//const obj = {
    //abc:'abc'
//}
//멤버 접근 연산자(.)member access operator
//console.log(obj.abc)
// 계산된 멤버 접근 연산자([]) computed member access operator
//console.log(obj['abc'])
//obj['alpha'] = 'a'
//obj['beta'] = 'b'
//console.log(obj)

//const obj1 = {
//    abc : 'abc'
//}

//const obj2 = {
//    abc: 'abc'
//}
//console.log(obj1 === obj2)


const a = 10

//if(a > 5){
 //   console.log('a가 5보다 큽니다.')

//}

for(vari = 0; i < 10; i++){
    console.log('${i+1} 번째 출력.')
}

const obj = {
    a: '감자',
    number : 10,
    arr : [1,2,3]
}

for (p in obj){
    console.log(obj[p])

}

const obj = ['감자', 10, [1,2,3]]

for (value of obj) {
    console.log(value)
}

function test(a,b){
    retrun `${a} 와 ${b} 의 합은 ${ a+ b }입니다.`
}
const a = test
const resultMessage = test(1,2)
console.log(resultMessage)

const obj = {
    name : 'chwon',
             say :function  {
                 console.log(`my name is ${this.name}`);
             }
            }
obj.say()

// 동적타이핑
// 1. 값을 보고 타입 추론
// 2. 언제든 식별자의 값이 변경될 수 있음

// 선언 - 식별자를 등록
// 초기화 단계 - 값을 위한 공간을 할당하고 식별자랑 연결함. 초기화 하지 않았다면 undefined

console.log(name1)
console.log(name2)

// 식별자(identifier)
//변수
//함수
//클래스
//식별자 - 실행 컨텍스트에 등록됨

/**
 *  - 특수문자 제외한 숫자, 문자, 언더스코어(_), 달러($) 기호
 *  - 숫자로 식별자 이름 시작은 불가능
 *  - 예약어(keyword, reserverd word)사용 불가능
 * 
 */

 console.log(name);
 var name = 'abc';