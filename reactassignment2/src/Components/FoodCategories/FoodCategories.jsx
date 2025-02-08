import { useEffect, useState, useContext } from 'react';
import './FoodCategories.css';
import { NavLink } from 'react-router-dom';
import { TypeContext } from './../../Context/TypeContext';

const FoodCategories = () => {
    const [type] = useState('c');
    let { getData } = useContext(TypeContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        console.log('Food Categories Component mounted');
        console.log(type);
        getDataFromContext(type);
    }, []);

    async function getDataFromContext(dataType) {
        console.log('Inside getDataFromContext');
        let response = await getData(dataType);
        setCategories(response.meals);
    }

    return (
        <div >
            <h2 className='title'>Learn, Cook, and Eat Your Food</h2>

            <div className='categories'>
                {categories &&
                    <div className='category-list'>
                        <NavLink to={"/"} className='category-item'>
                            <h3>All</h3>
                        </NavLink>

                        {
                            categories.map((category) => (
                                <NavLink key={category.idCategory} to={`/category/${category.strCategory}`} className='category-item'>
                                        <h3>{category.strCategory}</h3>
                                </NavLink>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default FoodCategories;