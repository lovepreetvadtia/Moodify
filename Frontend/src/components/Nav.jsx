import { NavLink } from "react-router"

const Nav = () => {
  return (
    <nav>
      <h2 className='button'>Moodify</h2>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
    </nav>
  )
}

export default Nav