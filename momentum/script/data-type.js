let arr = [];
//[{id:65, name:'A'}, {id:65, name:'B'}, {id:65, name:'C'}.....E]

for(let i = 65; i<70; i++){
  const newObj = {
    id: i,
    name: String.fromCharCode(i)
  }
  arr.push(newObj);
}



arr = arr.filter(obj => obj.id !== 67);
console.log(arr);


localStorage.setItem('value', arr);

// parse(): JSON 문자열을 매개변수로서 수용하고, 일치하는 자바스크립트 객체로서 변환합니다.
// stringify(): 객체를 매개변수로서 수용하고, JSON 문자열 형태로 변환합니다