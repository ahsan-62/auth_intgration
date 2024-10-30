import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {


  const{user,logOut}=useContext(AuthContext);

  const handleLogout=()=>{

    logOut();
  }

    const navLinks=<>

    <li><NavLink to="/">Home</NavLink></li>
    {
      !user&& <><li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li></>
    }
    {
      user&&<>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/orders">Orders</NavLink></li>
      </>
    }
    
    </>

    return (
        <div className="bg-green-500 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLinks}
            
            </ul>
          </div>
          <NavLink to="/"><a className="text-xl btn btn-ghost">Auth Integration Firebase</a></NavLink>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user&& <>
              <div className="flex gap-3 ">
              <p>{user.email}</p> 
              <button className="btn btn-primary " onClick={handleLogout}>LogOut</button> </div>           
            </>
          }
        </div>
      </div>
    );
};

export default Navbar;