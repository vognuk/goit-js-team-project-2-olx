import './css/normalize.css';
import './css/reset.css';
import './css/main.min.css';


//Об'єкт реєстрації
import FetchRegistraion from './js/server/auth/fetchRegistration.js';
const fetchRegistration = new FetchRegistraion(
    {
        email: "react1243@goit.com",
        password: "qwerty1",
    }
);
console.log('FetchRegistraion працює', fetchRegistration.registrationReguest());


//Об'єкт отримання списку категорій - ok
import FetchCategoriesList from './js/server/FetchCategoriesList.js';
const fetchCategoriesList = new FetchCategoriesList();
console.log('FetchCategoriesList', fetchCategoriesList.fetchCategoriesListReguest());