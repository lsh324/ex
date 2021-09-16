const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

fetch(url).then(response=>{
  return response.json();
}).then( (data)=>{
  console.log( data );
});