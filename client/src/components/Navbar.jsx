import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { isAuthenticated, logout, user } = useAuth();
    console.log(user)

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to='/'>
                <h1 className="text-2xl font-bold">Product Manager</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                            Welcome {user.first_name}
                        </li>
                        <li>
                            <Link to='/add-product'
                                className="bg-indigo-500 px-4 py-1 rounded-sm">
                                Add a product
                            </Link>
                        </li>
                        <button>
                            <Link to='/' onClick={() => {
                                logout();
                            }}>Logout</Link>
                        </button>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'
                                className="bg-indigo-500 px-4 py-1 rounded-sm">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'
                                className="bg-indigo-500 px-4 py-1 rounded-sm">
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar