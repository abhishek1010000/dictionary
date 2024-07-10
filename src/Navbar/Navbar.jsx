import './Navbar.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to="/">Add new person</NavLink>
        <NavLink to="/retrieve">Retrieve Data</NavLink>
    </div>
  )
}

export default Navbar;