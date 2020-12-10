//Отримати список категорій та відрендерити в хедер
//https://callboard-backend.herokuapp.com/api-docs/#/Call/get_call_categories


export default class FetchCategoriesList {
  constructor() {
    this.refs = {
      requestOptions: {
        method: 'GET',
        headers: { "accept": "application/json"},
        redirect: 'follow',

      },
    }
  }
  fetchCategoriesListReguest() {
    return fetch("https://callboard-backend.herokuapp.com/call/categories", this.refs.requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}



//response
// [
//     "property",
//     "transport",
//     "work",
//     "electronics",
//     "business and services",
//     "recreation and sport",
//     "free",
//     "trade"
// ]