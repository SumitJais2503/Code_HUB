import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from 'react-icons/pi';
import { MdEditDocument } from 'react-icons/md';
import Logout from './Logout.jsx';

const Sidebar = () => {
	const authUser = false;
	return (
		// aside tags used in sidebarss
		<aside
			className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white'
        // // tailwind glassmorphism generator used
		>
			<nav className='h-full flex flex-col gap-5'>
				<Link to='/' className='flex justify-start'>
					<img className='h-10' src='../../public/CapyhubLogo.png' alt='CapyHub Logo' />
				</Link>

				<Link
					to='/'
					className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800'
				>
					<IoHomeSharp size={20} />
                    {/* prop passed to confirm size */}
                    {/* react-icons used */}
				</Link>

                {/* above two components only when user is authenticated */}

				{authUser && (
					<Link
						to='/likes'
						className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<FaHeart size={22} />
                        {/* prop passed to confirm size */}
                        {/* react-icons used */}
					</Link>
				)}

				{authUser && (
					<Link
						to='/explore'
						className='p-1.5  flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdOutlineExplore size={25} />
                        {/* prop passed to confirm size */}
                        {/* react-icons used */}
					</Link>
				)}

				{!authUser && (
					<Link
						to='/login'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<PiSignInBold size={25} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/signup'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdEditDocument size={25} />
					</Link>
				)}

				{authUser && (
					<div className='flex flex-col gap-2 mt-auto'>
						<Logout />
					</div>
				)}
			</nav>
		</aside>
	);
};

export default Sidebar;