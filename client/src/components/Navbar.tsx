import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-center py-4 bg-gray-100 shadow-lg navbar navbar-expand-lg navbar-light">
            <Link to='/'><h1 className='text-4xl'>Assignment Tracker</h1></Link>
        </nav>
    );
};

export default Navbar;