// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import auth from '../../firebase.init';
// import { signOut } from 'firebase/auth'
// import useAdmin from '../../hooks/useAdmin';
// const Navbar = () => {
//     const [user, loading, error] = useAuthState(auth);
//     const [admin] = useAdmin(user);

//     const logout = () => {
//         signOut(auth);
//         localStorage.removeItem('accessToken');
//     };
//     return (
//         <div className="navbar bg-[#001529] lg:md:px-[130px] px-[20px] shadow-md 
//         border-b-[1px] border-b-[#001529]">
//             <div class="navbar-start">
//                 <Link to="/" className="text-3xl hover:cursor-pointer text-[#fff]">HFconsultancy</Link>
//             </div>
//             <div class="navbar-end text-[#fff]">
//                 <div className="lg:hidden block">
//                     <div class="dropdown">
//                         <label tabindex="0" class="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 shadow-md bg-base-200 rounded-md w-52 lg:md:ml-0 
//                     ml-[-150px]">
//                             <li><Link to="/">Home</Link></li>
//                             <li><Link to="/searchprogram" className="mt-3">Search Programs</Link></li>
//                             <li><Link to="/cart" className="mt-3">Short Listed</Link></li>
//                             {!auth.user ? (
//                                 <>
//                                     <li> <Link to='/login' className='btn btn-ghost rounded-lg'>LOGIN</Link></li>
//                                     <li>  <Link to='/register' className='btn btn-ghost rounded-lg'>Register</Link></li>
//                                 </>
//                             )
//                                 : (
//                                     <>
//                                         <li> <Link to={`/dashboard/${auth?.user?.role === "admin" ? "admin" : "user"}`} className='mt-3'>Dashboard</Link></li>
//                                         <li> <button onClick={logout} className='btn btn-primary rounded-lg'>Logout</button></li>
//                                         <li><button className="btn btn-ghost">{auth?.user?.firstName?.toUpperCase()}</button></li>
//                                     </>
//                                 )}

//                             <li><Link to="/contact" className="mt-3">Contact</Link></li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div className='hidden lg:flex text-[#fff]'>
//                     <ul class="menu menu-horizontal p-0">
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/searchprogram" >Search Programs</Link></li>
//                         <li><Link to="/cart" >Short Listed</Link></li>
//                         <li><Link to="/contact" >Contact</Link></li>
//                         <div className="mr-[-40px] flex items-center">
//                             <li>
//                                 {
//                                     !auth?.user
//                                         ?
//                                         (<>
//                                             <li> <Link to='/login' className='btn btn-ghost rounded-lg'>LOGIN</Link></li>
//                                             <li>  <Link to='/register' className='btn btn-ghost rounded-lg'>Register</Link></li>
//                                         </>)
//                                         :
//                                         (<>
//                                             <li> <Link to={`/dashboard/${auth?.user?.role === "admin" ? "admin" : "user"}`} className=''>Dashboard</Link></li>
//                                             <button className='btn btn-ghost rounded-full'
//                                                 onClick={logout}>Logout</button>
//                                             <li><button className="btn btn-ghost">{auth?.user?.firstName?.toUpperCase()}</button></li>
//                                         </>)
//                                 }
//                             </li>
//                         </div>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;