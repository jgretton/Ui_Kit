import React from 'react';

const Card_3 = () => {
	return (
		<div className="flex flex-col max-w-sm rounded-2xl bg-white shadow-md">
			<div className="p-6">
				<h2 className="font-bold text-2xl text-primary">Title</h2>
				<p className="text-sm  text-gray-600 mt-4 leading-5">
					The simply dummy text of the printing and typesetting industry. Lorem Ipsum
					has been the industry's standard dummy text ever since the 1500s.
				</p>
			</div>
			<div className="p-6">
				<button className="w-full bg-primary hover:bg-indigo-800  text-white  text-center py-4 rounded-md font-semibold text-base">
					Learn more
				</button>
			</div>
		</div>
	);
};

export default Card_3;
