import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>

            <Link to='/'>Home</Link>
            <Link to='/addCoffee'> Add Coffee</Link>
            <Link to='/updateCoffee'>Update Coffee</Link>
            
        </div>
    );
};

export default Header;