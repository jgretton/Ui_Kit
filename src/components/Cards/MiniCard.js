import React from 'react';
import Avatar from '../../images/Avatar.png';
const MiniCard = () => {
	return (
		<div className="bg-white max-w-lg shadow-md h-28 rounded-2xl">
			<div className="flex flex-row items-center h-full">
				<img
					src={Avatar}
					alt=""
					className="rounded-full h-16 w-16 object-cover mx-4 my-6 "
				/>
				<div className="flex flex-col mr-10">
					<p className="text-primary text-lg leading-6">Metehan Kaya</p>
					<p className="text-sm text-gray-400">Product Designer</p>
				</div>
				<button className="bg-primary hover:bg-indigo-800 text-white text-base font-bold py-4 px-11 rounded-md mx-4">
					Follow
				</button>
			</div>
		</div>
	);
};

export default MiniCard;
