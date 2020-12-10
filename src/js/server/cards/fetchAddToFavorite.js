//додати картку до обраного та повернути для рендерингу
// Add call to favourites
// https://callboard-backend.herokuapp.com/api-docs/#/Call/post_call_favourite__callId_

// /call/favourite/{callId}

var raw = "";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://callboard-backend.herokuapp.com/call/favourites", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
    .catch(error => console.log('error', error));
  

//     Example Value
// {
//   "newFavourites": [
//     {
//       "title": "Tesla Model X",
//       "imageUrls": [
//         "string"
//       ],
//       "description": "New tesla",
//       "category": "Transport",
//       "price": 1500000,
//       "oldPrice": 1750000,
//       "isOnSale": true,
//       "discountPercents": 14.28571428571429,
//       "phone": "+380000000000",
//       "_id": "507f1f77bcf86cd799439013",
//       "__v": 0
//     }
//   ]
// }
