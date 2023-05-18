import { Link } from "react-router-dom";
import logo from '../../assets/kitty-krazy-logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Logout Successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            })
    }

    const navItem = <div className="lg:flex ">
        <div className="lg:flex">
            <li><Link to={'/'} className="font-semibold text-xl md:mt-3">Home</Link></li>
            <li><Link to={'/about'} className="font-semibold text-xl md:mt-3">All Toys</Link></li>
            <li><Link to={'/service'} className="font-semibold text-xl md:mt-3">My Toys</Link></li>
            <li><Link to={'/service'} className="font-semibold text-xl md:mt-3">Add A Toy</Link></li>
            <li><Link to={'/blog'} className="font-semibold text-xl md:mt-3 me-12">Blog</Link></li>
        </div>
        <div>
            <button className="btn btn-secondary mt-4 lg:ms-auto me-3 rancho">
                {user ? <Link onClick={handleLogout} className='text-decoration-none text-white px-3' to='/login'>Logout</Link> : <Link to='/login' className='text-decoration-none text-white' >Login</Link>}
            </button>
        </div>
    </div>

    return (
        <div className="navbar pb-6 lg:justify-between bg-cyan-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 rancho">
                        {navItem}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"><img src={logo} className="w-16 rounded-full" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu rancho">
                    {navItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;