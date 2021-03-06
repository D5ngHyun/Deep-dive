/**
 * 변수선언의 실행시점과 변수 호이스팅
 */

console.log(score);

var score = 5;

console.log(score);


/**
 * 
 * 자바스크립트 특성상 인터프리터 언어이기에 코드를 한줄마다 기계어로 번역해 해석을 하기때문에 5번째줄에서는 score라는 변수가없어 참조에러가 나와야한다.
 * 그렇지만 에러가 나오지않고 undefined 라는 값이 나온다.
 * 
 * 자바스크립트 엔진은 코드를 한줄마다 실행하기전에 소스코드 평가과정을 거치는데, 모든 선언문(var, let, const, function 등등)을 먼저 찾고 실행하기때문에
 * 5라인에서는 참조에러가 안나오는것이다. 마치 5번째줄 전에 변수를 선언하고 값을 안넣은상태고 끌어올리다라는 뜻으로 변수 호이스팅이라고 한다.
 * 
 */