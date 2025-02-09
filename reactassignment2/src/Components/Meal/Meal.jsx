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
        console.log('Meal Details componet');
        console.log(data.meals);
        setMeal(data.meals[0]);
    }

    useEffect(() => {
        console.log('Meal Component mounted');
        getMealDetailsFromAPI();
    }, [id]);

    return (
        <div className='meal-div'>
            {meal && (
                <>
                    <div className='meal-page'>
                        <div key={meal.idMeal} className='meal'>
                            <h3 className='meal-title'>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMeal} className='meal-img' />

                            <div className='meal-btns'>
                                <button className='view-recipe-btn'>Youtube</button>
                                <button className='view-recipe-btn'>Source</button>
                            </div>
                        </div>

                        <div className='meal-ingredients'>
                            <h3>Ingredients</h3>
                            <hr></hr>
                            {
                                Object.keys(meal).map((key, index) => {
                                    if (key.includes('strIngredient') && meal[key] !== '') {
                                        return (
                                            <p key={index}>
                                                <span>{meal[key]}</span>
                                                <span>  {meal[`strMeasure${key.slice(13)}`]}</span>
                                            </p>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>

                    <div className='meal-instruction'>
                        <p>
                            {meal.strInstructions && meal.strInstructions.split('\r\n').map((instruction, index) => (
                                <span key={index}>
                                    {index + 1}. {instruction}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Meal;