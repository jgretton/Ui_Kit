import React from 'react';

const Success = () => {
	return (
		<div className="flex flex-row items-center bg-green-100 rounded-md">
			<span className="py-3 ml-4 text-green-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</span>
			<p className="text-green-500 px-4">
				This is a success alert - check it out!
			</p>
		</div>
	);
};

export default Success;
