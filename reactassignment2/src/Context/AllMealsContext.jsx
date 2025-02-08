import { createContext } from "react";
import  axios  from "axios";

export const AllMealsContext = createContext();


function getAllMeals() {
    // console.log('Inside getMeals    ');
    // console.log(`url is`);
    // console.log(`http://www.themealdb.com/api/json/v1/1/search.php?s=`);
    return axios.get(`http://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then((response) => {
            console.log('Response:', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error('Error:', error);
            return error;
        });
}

export default function AllMealsContextProvider({ children }) {
    return (
       <AllMealsContext.Provider value={{getAllMeals}}>
            {children}
        </AllMealsContext.Provider>
    )
}