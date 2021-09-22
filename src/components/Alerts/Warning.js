import React from 'react';

const Warning = () => {
	return (
		<div className="flex flex-row items-center bg-yellow-100 rounded-md">
			<span className="py-3 ml-4 text-yellow-500">
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
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
			</span>
			<p className="text-yellow-500 px-4">
				This is a warning alert - check it out!
			</p>
		</div>
	);
};

export default Warning;
