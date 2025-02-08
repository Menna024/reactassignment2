import './App.css'
import MainLayout from './Components/MainLayout/MainLayout'
import Meals from './Pages/Meals/Meals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TypeContextProvider from './Context/TypeContext'
import AllMealsContextProvider from './Context/AllMealsContext'
import MealsByCategoryContextProvider from './Context/MealsByCategoryContext'
import MealDetailsContextProvider from './Context/MealDetailsContext'
import Meal from './Components/Meal/Meal'

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <MainLayout />,
        children:
          [
            {
              index: true, element: <Meals />
            },
            // {
            //   path:'/ingredients', element: <Ingredients />
            // },
            // {
            //   path:'/area', element: <Area />
            // }
            {
              path: "/category/:name", element: <Meals />
            },
            {
              path: "/mealdetails/:id", element: <Meal />
            }
          ]
      }
    ]
  );

  return (
    <AllMealsContextProvider>
      <MealsByCategoryContextProvider>
        <TypeContextProvider>
          <MealDetailsContextProvider>
            <RouterProvider router={routes}>
            </RouterProvider>
          </MealDetailsContextProvider>
        </TypeContextProvider>
      </MealsByCategoryContextProvider>
    </AllMealsContextProvider>
  )
}

export default App
