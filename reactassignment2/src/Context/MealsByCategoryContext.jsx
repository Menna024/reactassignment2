import { createContext } from "react";
import  axios  from "axios";

export const MealsByCategoryContext = createContext();


function getMealsByCategory(category) {
    console.log('Inside getMealsByCategory');
    console.log(`url is`);
    console.log(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    
    return axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((response) => {
            console.log('Cat Response:', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error('Error:', error);
            return error;
        });
}

export default function MealsByCategoryContextProvider({ children }) {
    return (
       <MealsByCategoryContext.Provider value={{getMealsByCategory}}>
            {children}
        </MealsByCategoryContext.Provider>
    )
}