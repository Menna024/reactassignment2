import './Meals.css';
import FoodCategories from "../../Components/FoodCategories/FoodCategories";
import { AllMealsContext } from "../../Context/AllMealsContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { FaGlobeAmericas } from './../../../node_modules/react-icons/fa'; 
import { MealsByCategoryContext } from '../../Context/MealsByCategoryContext';
import { useNavigate } from 'react-router-dom';

const Meals = () => {
    const { getAllMeals } = useContext(AllMealsContext);
    const { getMealsByCategory} = useContext(MealsByCategoryContext);
    const [meals, setMeals] = useState([]);
    const { name } = useParams();
    const navigate = useNavigate();
    console.log('Name:', name);

    async function getAllMealsFromAPI() {
        console.log('Inside getAllMealsFromAPI');
        let response = await getAllMeals();
        let data = await response;
        console.log(data);
        setMeals(data.meals);
    }

    async function getMealsByCategoryFromAPI() {
        let response = await getMealsByCategory(name);
        let data = await response;
        console.log(data);
        setMeals(data.meals);
    }

    useEffect(() => {
        if (name !== undefined) {
            console.log('Meals Component mounted with name');
            getMealsByCategoryFromAPI();
        }else
        {
            console.log('Meals Component mounted without name');
            getAllMealsFromAPI();
        }
    }, [name]);


    const handleViewRecipe = (mealId) => {
        console.log('Meal ID:', mealId);
        navigate(`/mealdetails/${mealId}`); 
      };

    return (
        <>
            <FoodCategories />
            {meals && name === undefined &&
                <div className='meals'>
                    {
                        meals.map((meal) => (
                            <div key={meal.idMeal} className='meal'>
                                <img src={meal.strMealThumb} alt={meal.strMeal} className='meal-img' />
                                <h3 className='meal-title'>{meal.strMeal}</h3>
                                <p className='meal-country'>
                                    {/* <FaGlobeAmericas /> */}
                                    {meal.strArea}</p>
                                <button className='view-recipe-btn' onClick={() => handleViewRecipe(meal.idMeal)}>View Recipe</button>
                                
                            </div>
                        ))
                    }
                </div>
            }
            {
                meals && name !== undefined &&
                <div className='meals'>
                    {
                        meals.map((meal) => (
                            <div key={meal.idMeal} className='meal'>
                                <img src={meal.strMealThumb} alt={meal.strMeal} className='meal-img' />
                                <h3 className='meal-title'>{meal.strMeal}</h3>
                                <p className='meal-country'>
                                    {/* <FaGlobeAmericas /> */}
                                    {meal.strArea}</p>
                                <button className='view-recipe-btn' onClick={() => handleViewRecipe(meal.idMeal)}>View Recipe</button>
                            </div>
                        ))
                    }   
                </div>
            }

        </>
    );
};

export default Meals;