
export default class FetchRegistration {
  constructor({email, password}) { 
    this.refs = {
      email: email,
      password: password,

      requestOptions: {
        method: 'POST',
        headers: {"accept": "application/json",  "Content-Type": "application/json"},
        body: JSON.stringify({ "email": `${email}`, "password": `${password}` }),
        redirect: 'follow'
      },
    }

    // let myHeaders = new Headers();
    // let raw = JSON.stringify({ "email": `${this.refs.email}`, "password": `${this.refs.password}` });
    // myHeaders.append("Content-Type", "application/json");

    // console.log("Значення для FetchRegistration", raw);
    // console.log("x" myHeaders.append("Content-Type", "application/json"));
  }

  registrationReguest() {
    return fetch("https://callboard-backend.herokuapp.com/auth/register", this.refs.requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
   }
}

// Приклад успішного запиту
// {
//     "email": "user2022@example.com",
//     "registrationDate": "2020-12-10",
//     "id": "5fd1f13c31ecc50017ba7417"
// }
