var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"email":"user2022@example.com","password":"qwerty2022"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://callboard-backend.herokuapp.com/auth/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
// 201
    
// {
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQxZjEzYzMxZWNjNTAwMTdiYTc0MTciLCJzaWQiOiI1ZmQxZjJkYTMxZWNjNTAwMTdiYTc0MWYiLCJpYXQiOjE2MDc1OTQ3MTQsImV4cCI6MTYwNzU5ODMxNH0.KrV5pephbL_81fuVpdWLy4DXe5ybr3NO-T_Gf5pW7Ko",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQxZjEzYzMxZWNjNTAwMTdiYTc0MTciLCJzaWQiOiI1ZmQxZjJkYTMxZWNjNTAwMTdiYTc0MWYiLCJpYXQiOjE2MDc1OTQ3MTQsImV4cCI6MTYxMDIyMjcxNH0.YdWKgUY3whFKuV-C1nmFIeN2nS6g0bMszdpzLxxDJjI",
//     "sid": "5fd1f2da31ecc50017ba741f",
//     "user": {
//         "email": "user2022@example.com",
//         "registrationDate": "2020-12-10",
//         "id": "5fd1f13c31ecc50017ba7417",
//         "favourites": [],
//         "calls": []
//     }
// }