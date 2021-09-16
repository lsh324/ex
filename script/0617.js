// 1. 수금지화목토천해 저장
// 입력 1 하면 출력 수성
//index = 입력받은값 -1


// let planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
// let input = prompt("몇번째 행성을 출력할까요?");


// console.log(planets[input-1]);

// let a = 0;
// if(a>0) {
//   console.log("a는 0보다 큽니다.");
// }
// else{
//   console.log("a는 0보다 작습니다.");
// }

// if(a>0) {
//   console.log("a는 0보다 큽니다.");
// }
// if(0<=a) {
//   console.log("a는 0보다 적숩니다.");
// }




// let height = 170;
// if(height >= 150){
//   console.log('yes');
// }
// else{
//   console.log('no');
// }


//&&(and)
// if(true && true){
//   console.log('두개가 참이여야 참');
// }


//||(and)

// if(true || false){
//   console.log("출력이 될까?");
// }


//선택문 switch~case

// let subject = "java";
// switch( subject){
//   case 'c' : 
//     console.log("c언어");
//     break;
//   case 'java' :
//     console.log("java");
//     break;
//   case 'javascript' :
//     console.log("javascript");
//     break;
//   default :
//     console.log('none');
//     break;
// }


//5의배수인지 확인
// let num = 7;
// if(num%5){
//   console.log("5의 배수가 아닙니다.");
// }
// else{
//   console.log("5의 배수입니다.");
// }

// switch(num%5){
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("5의 배수가 아닙니다.");
//     break;
//   default :
//     console.log("5의 배수입니다.");
//     break;
// }


//반복문
//for, while, do~while
//for 시작과 끝값이 명확할때
//while, do~while 특정한 조건에 의해서 처리될때
//while과 do~while 차이 
//while(조건식){

//}

//do{

//}while(조건식);



// for(초기값 ; 반복조건 ; 반복이 된 후실행되는 문장 ){
//   반복 문장;
// }

// for( a ; b ; c ){
//   d
// }
// e 

//a _> d-> c-> b(true)-> d-> c-> b(false) -> e
// a -> d -> c -> b(false) -> e

// let i = 0;
// for ( i=0 ; i<5 ; i++){
//     console.log('안녕하세요',i);
// }
// console.log("end ==>", i);

//while 로 변경

// let i = 0;
// while(i<5){
//   console.log('안녕하세요', i);
//   i++;
// }

// let seasons = ['봄','여름','가을','겨울'];


// for( let i=0; i<seasons.length; i++){
//   console.log( seasons[i] );
// }

//for of 로 변경
// for ( let i of seasons ){
//   console.log( i );
// }

// for ( let i in seasons){
//   console.log(i);
// }

// for( let i = 0; i<5 ; i++){
//   console.log( i );
//   if( i>2 ) break;
//   console.log('hello , i ')
// }


//1부터 100까지 더하는 프로그램


// let sum = 0;

// for ( let i = 1; i<=100; i++ ){
//   sum+=i;
// }
// console.log("1~100까지의합 = ", sum);


//구구단 2단 출력

// let num = 2;


// for ( let i = 1; i<=9; i++){
//   console.log(i, "단");
//   for ( let j = 1; j<=9; j++){
//     console.log(i, "*", j, "=", i*j);
//   }
// }



// 5를 입력 별이 다섯줄
// 1개 + 2개씩 증가
// const line = 5;

// for ( let i = 1; i<=line; i++){
//   let star = "";
//   for(let k = 1; k<=line-i; k++){
//     star += " ";
//   }
//   for( let j = 1; j<=(i*2)-1; j++){
//     star += "*";
//   } 
//   console.log(star);
// }



// let i = 0;
// while(true){
//   console.log( ' hello' , i);
//   i++;
//   if( i > 10 ) break;
// }



//5 팩토리얼
// let nInput = 5;
// let nFac = 1;
// let i = 2;

// while(i<=nInput){
//   nFac *= i;
//   i++;
  
// }
// console.log(nInput, "!=", nFac);



// 1~100 짝수의 합을 구하시오

// let sum = 0;

// for( let i = 1; i <=100; i++) {
//   if( i%2 == 0){
//     sum += i;
//   }
// }
// console.log(sum);


// 1부터 20까지 (20포함) 모든수 합
// let sum=0;

// for( let i = 10; i <=15; i++) { 
//     sum += Math.floor(i/10)
//     sum += (i%10);
// }
// console.log(sum);

// let num = 1;

// for(let i = 1; i <=9 ; i++){
//   for(let j = 1; j<=9; j++){
//     console.log(i*j);
//   }
// }

// let num = 18234;
// let string = num.toString();
// let sum = 0;
// for(let i = 0; i < string.length; i++){
//   sum += Number(string[i]);
// }  
// console.log(sum);

let num = 3849;
let string = num.toString();
let sum = 0;
for(let i =0; i<string.length; i++){
  sum+=Number(string[i]);
}
console.log(sum);