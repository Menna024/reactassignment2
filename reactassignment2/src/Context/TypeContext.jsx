import { createContext } from 'react';
import axios from 'axios';

export const TypeContext = createContext();

function getData(dataType) {
    console.log('Inside getData');
    console.log(dataType);
    console.log(`url is`);
    console.log(`https://www.themealdb.com/api/json/v1/1/list.php?${dataType}=list`);
    return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?${dataType}=list`)
        .then((response) => {
            console.log('Response:', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error('Error:', error);
            return error;
        });
}

export default function TypeContextProvider({ children }) {
    return (
        <TypeContext.Provider value={{ getData }}>
            {children}
        </TypeContext.Provider>
    );
}