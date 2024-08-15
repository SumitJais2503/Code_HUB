import { MdLogout } from "react-icons/md";

const Logout = () => {
	return (
		<>
			<img
				src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>
			{/* user img */}

			<div className='cursor-pointer flex items-center p-2 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white mt-auto'>
				<MdLogout size={22} />
			</div>
			{/* to logout */}
		</>
	);
};

export default Logout;