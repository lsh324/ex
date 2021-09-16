const success = (position) => {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = 'cdae6f6e0f0ea44b1e4c7cf708a01ffb';
  const url = `https://api.openweathermap.org/data/2.5/weather?lang=kr&lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url).then( (response)=>{
    return response.json();
  }).then( (data) => {
    console.log(data);
    const weatherDiv = document.querySelector('.weather');
    let div = document.createElement('div');
    div.innerText = data.name;
    weatherDiv.appendChild(div);
    const img = document.createElement('img');
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherDiv.appendChild(img);
    let span = document.createElement('span');
    span.innerText = String(Math.round(data.main.temp)+'℃');
    span.style.fontSize = '40px';
    weatherDiv.appendChild(span);
    div = document.createElement('div');
    div.innerText = data.weather[0].main;
    weatherDiv.appendChild(div);
    //console.log(data.weather[0].main);
    //console.log(data.main.temp);//현재온도
  });
}
const error = () => {
  alert('당신의 위치 정보를 알아 올 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(success, error);