import './Meal.css';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MealDetailsContext } from '../../Context/MealDetailsContext';


const Meal = () => {
    const { getMealDetails } = useContext(MealDetailsContext);
    const [meal, setMeal] = useState([]);
    const { id } = useParams();
    console.log('ID:', id);

    async function getMealDetailsFromAPI() {
        let response = await getMealDetails(id);
        let data = await response;
        console.log(data);
        setMeal(data.meals);
    }

    useEffect(() => {
        console.log('Meal Component mounted');
        getMealDetailsFromAPI();
    }, [id]);

    return (
        <div>
            {meal && (
                <div key={meal.idMeal} className='meal'>
                    <img src={meal.strMealThumb} alt={meal.strMeal} className='meal-img' />
                    <h3 className='meal-title'>{meal.strMeal}</h3>
                    <p className='meal-country'>{meal.strArea}</p>
                    <div className='meal-btns'>
                        <button className='view-recipe-btn'>Youtube</button>
                        <button className='view-recipe-btn'>Source</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Meal;