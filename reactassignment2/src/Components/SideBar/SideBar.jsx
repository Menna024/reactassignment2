import './SideBar.css';
import logo from './../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='side-bar'>
            <img src={logo} className='logo-img'/>
            <div className='side-bar-item-0'>
                <NavLink to={'/'} className='nav-link' 
                // onClick={() => setType('meals')}
                >Meals</NavLink>
            </div>
            <div className='side-bar-item-1'>
                <NavLink to={'/'} className='nav-link'
                // onClick={() => setType('ingredients')}
                >Ingredient</NavLink>
            </div>
            <div className='side-bar-item-2'>
                <NavLink to={'/'} className='nav-link'
                // onClick={() => setType('areas')}
                >Areas</NavLink>
            </div>
        </div>
    );
};

export default SideBar;