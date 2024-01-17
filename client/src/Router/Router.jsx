import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../default/Main/Main";
import Home from "../components/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails/CoffeeDetails";


const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/addCoffee',
                    element: <AddCoffee/>
                },
                {
                    path: '/coffeeDetails/:id',
                    element: <CoffeeDetails/>,
                    loader: ({params})=> fetch(`http://localhost:5000/addCoffees/${params.id}`)
                },
                {
                    path: '/updateCoffee/:id',
                    element: <UpdateCoffee/>,
                    loader: ({params})=> fetch(`http://localhost:5000/addCoffees/${params.id}`)
                },
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default Router;