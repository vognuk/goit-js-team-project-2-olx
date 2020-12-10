var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://callboard-backend.herokuapp.com/user", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
    // Приклад відповіді

//     {
//   "email": "user@example.com",
//   "id": "507f1f77bcf86cd799439011",
//   "registrationDate": "2020-12-31",
//   "favourites": [
//     {
//       "title": "Red Shirt",
//       "imageUrls": [
//         "string"
//       ],
//       "description": "New red shirt, made from cotton",
//       "category": "Trade",
//       "price": 0,
//       "oldPrice": null,
//       "isOnSale": false,
//       "discountPercents": null,
//       "phone": "+380000000000",
//       "_id": "507f1f77bcf86cd799439012",
//       "__v": 0
//     }
//   ],
//   "calls": [
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
