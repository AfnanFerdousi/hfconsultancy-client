import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate, Link } from "react-router-dom";
import Search from "../forms/Search";
import { useCart } from "../../context/cart";
// import { Badge } from "antd";

const Menu=()=> {
  // context
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  // hooks
 
  const navigate = useNavigate(); 

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  console.log(auth.user)
  return (
    <>
      {/* <ul className="nav d-flex justify-content-between shadow-sm mb-2 sticky-top bg-light">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            HOME
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/searchprogram">
            SEARCH PROGRAM
          </NavLink>
        </li>
        <li className="nav-item mt-1">
          <Badge
            count={cart?.length >= 1 ? cart.length : 0}
            offset={[-5, 11]}
            showZero={true}
          >
            <NavLink className="nav-link" aria-current="page" to="/cart">
              SHORT LISTED
            </NavLink>
          </Badge>
        </li>

        <Search />

        {!auth?.user ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                REGISTER
              </NavLink>
            </li>
          </>
        ) : (
          <div className="dropdown">
            <li>
              <NavLink
                className="nav-link pointer dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {`Hello ${auth?.user?.firstName?.toUpperCase()} ${auth?.user?.lastName?.toUpperCase()}`}
              </NavLink>

              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="nav-link"
                    to={`/dashboard/${
                      auth?.user?.role === "admin" ? "admin" : "user"
                    }`}
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item pointer ms-3">
                  <button onClick={logout} className="btn btn-outline-primary ">
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </div>
        )}
      </ul> */}
      {/* <div className="navbar  bg-[#001529] px-[20px] shadow-md 
         border-b-[1px] border-b-[#001529]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
            <Link to="/" className="text-3xl hover:cursor-pointer text-[#fff]">HFconsultancy</Link>         
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div> */}

      <div className="navbar bg-[#001529] lg:md:px-[50px] px-[20px] shadow-md 
         border-b-[1px] border-b-[#001529]">
        <div class="navbar-start">
          <Link to="/" className="text-3xl hover:cursor-pointer text-[#fff]">HFconsultancy</Link>
        </div>
        <div class="navbar-end text-[#fff]">
          <div className="lg:hidden block">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 shadow-md bg-base-200 rounded-md w-52 lg:md:ml-0 
                     ml-[-150px]">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/searchprogram" className="mt-3">Search Programs</Link></li>
                <li><Link to="/cart" className="mt-3">Short Listed</Link></li>
                {!auth.user ? (
                  <>
                    <li> <Link to='/login' className='btn btn-ghost rounded-lg'>LOGIN</Link></li>
                    {/* <li>  <Link to='/register' className='btn btn-ghost rounded-lg'>Register</Link></li> */}
                  </>
                )
                : auth?.user?.role === "admin" ? (
                  <>
                  <li> <Link to={`/dashboard/${auth?.user?.role}`} className='mt-3'>Dashboard</Link></li>
                  </>
                )
                  : (
                    <>                      
                      <li> <button onClick={logout} className='btn btn-primary rounded-lg'>Logout</button></li>
                      <li><button className="btn btn-ghost">{auth?.user?.firstName?.toUpperCase()}</button></li>
                    </>
                  )}

                <li><Link to="/contact" className="mt-3">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className='hidden lg:flex text-[#fff]'>
            <ul class="menu menu-horizontal p-0">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/searchprogram" >Search Programs</Link></li>
              <li><Link to="/cart" >Short Listed</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
              <div className="flex items-center">
                <li>
                  {
                    !auth?.user
                      ?
                      (<>
                        <li> <Link to='/login' className=''>LOGIN</Link></li>
                        {/* <li>  <Link to='/register' className=''>Register</Link></li> */}
                      </>)
                      : auth?.user?.role === "admin" ? (
                        <>
                         <li> <Link to={`/dashboard/${auth?.user?.role}`} className=''>Dashboard</Link></li>
                        </>
                      )
                      :
                      (<>                       
                        <li><button className=''
                          onClick={logout}>Logout</button></li>
                        <li><span className="font-bold">{auth?.user?.firstName?.toUpperCase()}</span></li>
                      </>)
                  }
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
