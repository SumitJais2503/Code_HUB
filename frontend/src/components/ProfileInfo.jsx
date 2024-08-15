import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { formatMemberSince } from '../utils/functions.js';

const ProfileInfo = ({userProfile}) => {
	// const userProfile = {
		// avatar_url: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
		// bio: "Coder",
		// email: "sample@gmail.com",
		// followers: 0,
		// following: 0,
		// html_url: "https://github.com/Utsav081203",
		// location: "Somewhere, Earth",
		// name: "Sample",
		// public_gists: 0,
		// public_repos: 0,
		// twitter_username: "sample",
		// login: "sample",
	// };

	const memberSince = formatMemberSince(userProfile?.created_at);

	return (
		<div className='lg:w-1/3 w-full flex flex-col gap-2 lg:sticky md:top-10'>
			<div className='bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white rounded-lg p-4'>
				<div className='flex gap-4 items-center'>
					{/* user avatar */}
					<a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
						<img src={userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt='' />
					</a>
					{/* github url */}
					<div className='flex gap-2 items-center flex-col'>
						<a
							href={userProfile?.html_url}
							target='_blank'
							rel='noreferrer'
							className='bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 text-white font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2'
						>
							<FaEye size={16} />
							View on Github
						</a>
					</div>
				</div>

				{/* user bio */}
				{userProfile?.bio ? (
					<div className='flex items-center gap-2'>
						<TfiThought />
						<p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
					</div>
				) : null}

				{/* location */}
				{userProfile?.location ? (
					<div className='flex items-center gap-2'>
						<IoLocationOutline />
						{userProfile?.location}
					</div>
				) : null}

				{/* twitter username */}
				{userProfile?.twitter_username ? (
					<a
						href={`https://twitter.com/${userProfile.twitter_username}`}
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 hover:text-sky-500'
					>
						<FaXTwitter />
						{userProfile?.twitter_username}
					</a>
				) : null}

				{/* member since date */}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Member since</p>
					<p className=''>{memberSince}</p>
				</div>

				{/* email address */}
				{userProfile?.email && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Email address</p>
						<p className=''>{userProfile.email}</p>
					</div>
				)}

				{/* full name */}
				{userProfile?.name && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Full name</p>
						<p className=''>{userProfile?.name}</p>
					</div>
				)}

				{/* username */}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Username</p>
					<p className=''>{userProfile?.login}</p>
				</div>
			</div>

			<div className='flex flex-wrap gap-2 mx-4'>
				{/* followers count */}
				<div className='flex items-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white rounded-lg p-2 flex-1 min-w-24'>
					<RiUserFollowFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Followers: {userProfile?.followers}</p>
				</div>

				{/* following count */}
				<div className='flex items-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white rounded-lg p-2 flex-1 min-w-24'>
					<RiUserFollowLine className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Following: {userProfile?.following}</p>
				</div>

				{/* number of public repos */}
				<div className='flex items-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white rounded-lg p-2 flex-1 min-w-24'>
					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Public repos: {userProfile?.public_repos}</p>
				</div>

				{/* number of public gists */}
				<div className='flex items-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white rounded-lg p-2 flex-1 min-w-24'>
					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Public gists: {userProfile?.public_gists}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;