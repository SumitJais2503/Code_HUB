import React from "react";
import Repo from "./Repo";

const Repos = ({repos, alwaysFullWidth = false}) => {
	const className = alwaysFullWidth ? 'w-full' : 'lg-w-2/3 w-full';
	return (
		<div className={`${className} bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200'>
				{repos?.map((repo) => (
					<Repo key={repo.id} repo={repo} />
				))}
				{repos?.length === 0 && <p className="flex items-center justify-center h-32">No Repos found!</p>}
			</ol>
		</div>
	);
};

export default Repos;