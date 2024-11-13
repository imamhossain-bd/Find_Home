
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProviders/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handelSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>

    </>
    return (
        <div className="px-16">
            <div className="navbar mb-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='font-bold text-lg'>
                        <h2>Find House</h2>
                        <h3>Real Estate</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <p className='ml-4 mt-3 text-base font-medium'>{user?.displayName || "Your Name"}</p>
                                <div className=''>
                                    {
                                        user ?

                                            <button onClick={handelSignOut} className='hover:bg-slate-400 px-3 py-2 rounded-lg ml-3 mb-3 text-base font-medium'>Sign Out</button>
                                            :
                                            <Link to="/login">
                                                <button className='hover:bg-slate-400 rounded-lg px-3 py-2 ml-3 mb-3 text-base font-medium'>Login</button>
                                            </Link>
                                    }

                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default NavBar;