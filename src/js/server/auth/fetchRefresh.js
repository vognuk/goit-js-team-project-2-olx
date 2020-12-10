var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"sid":"5fd1f13c31ecc50017ba7417"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://callboard-backend.herokuapp.com/auth/refresh", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
// {
//     "message": "No token provided"
// }
