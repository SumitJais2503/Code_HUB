import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Search from '../components/Search.jsx';
import SortRepos from '../components/SortRepos.jsx';
import ProfileInfo from '../components/ProfileInfo.jsx';
import Repos from '../components/Repos.jsx';
import Spinner from '../components/Spinner.jsx';

const HomePage = () => {
	const [userProfile, setUserProfile] = useState(null);
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [sortType, setSortType] = useState('recent');
	

	const getUserProfileAndRepos = useCallback(async(username = 'Utsav081203') => {
		// will return callback function but a memoized version of it.
		// if depedencies don't change between renders, returns same function instance.
		setLoading(true);
		try {
			const userRes = await fetch(`https://api.github.com/users/${username}`, {
				headers: {
					// authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`, NOT SECURE AFTER BUILD
				},
			});
			const userProfile = await userRes.json();
			setUserProfile(userProfile);

			const repoRes = await fetch(userProfile.repos_url);
			const repos = await repoRes.json();
			setRepos(repos);
			return {userProfile, repos};
		} catch(error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	}, []);
	// empty array ensures the function is ONLY CREATED ONCE
	// when not added, everytime it re mounts, the function is created again and infinite loop continues

	useEffect(()=> {
		getUserProfileAndRepos();
	}, [getUserProfileAndRepos]);
	// could have lead to infinite loop but memoized using useCallback().

	const onSearch = async(e, username) => {
		e.preventDefault();
		setLoading(true);
		setRepos([]);
		setUserProfile(null);
		const {userProfile, repos} = await getUserProfileAndRepos(username);
		setUserProfile(userProfile);
		setRepos(repos);
		setLoading(false);
	}

	const onSort = (sortType) => {
		if(sortType === 'recent') {
			repos.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
		}
		else if(sortType === 'stars') {
			repos.sort((a,b) => b.stargazers_count - a.stargazers_count);
		}
		else if(sortType === 'forks') {
			repos.sort((a,b) => b.forks_count - a.forks_count);
		}
		setSortType(sortType);
		setRepos([...repos]);
	};

	return (
		<div className='m-4'>
			<Search onSearch={onSearch}/>
			{repos.length>0 && !loading && <SortRepos onSort={onSort} sortType={sortType} />}
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        {/* for large width screens lg:flex-row and for small width screens one above other */}
				{userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
				{repos.length>=0 && !loading && <Repos repos={repos} />}
        		{loading && <Spinner />}
			</div>
		</div>
	);
};

export default HomePage;
