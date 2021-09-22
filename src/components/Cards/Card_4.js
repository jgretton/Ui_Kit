import React from 'react';

const Card_4 = () => {
	return (
		<div className="flex flex-col max-w-sm rounded-2xl bg-white shadow-md">
			<div className="p-6">
				<h2 className="font-bold text-2xl text-primary">Title</h2>
				<p className="text-sm  text-gray-600 mt-4 leading-5">
					The simply dummy text of the printing and typesetting industry. Lorem Ipsum
					has been the industry's standard dummy text ever since the 1500s.
				</p>
			</div>
			<div className="p-6 flex flex-row">
				<button className="w-2/5 bg-white hover:bg-primary hover:text-white text-primary border-primary border text-center py-4 rounded-md font-semibold text-base">
					Back
				</button>
				<button className="w-3/5 bg-primary hover:bg-indigo-800  text-white  text-center py-4 rounded-md font-semibold text-base ml-4">
					Learn more
				</button>
			</div>
		</div>
	);
};

export default Card_4;
