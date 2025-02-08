import { createContext } from "react";
import  axios  from "axios";

export const MealDetailsContext = createContext();


function getMealDetails(id  ) {
    console.log('Inside getMealDetails');
    console.log(`url is`);
    console.log(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    
    return axios.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => {
            console.log('Response:', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error('Error:', error);
            return error;
        });
}

export default function MealDetailsContextProvider({ children }) {
    return (
       <MealDetailsContext.Provider value={{getMealDetails}}>
            {children}
        </MealDetailsContext.Provider>
    )
}