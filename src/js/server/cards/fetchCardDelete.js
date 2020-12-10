// https://callboard-backend.herokuapp.com/api-docs/#/Call/delete_call__callId_

// Delete user's call

var raw = ""; //callId

var requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};

fetch("https://callboard-backend.herokuapp.com/call/delete", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
