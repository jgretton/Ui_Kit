import React from 'react';

const Search = () => {
	return (
		<div className="max-w-lg">
			<label htmlFor="" className="relative w-full">
				<input
					placeholder="Search"
					type="text"
					name=""
					id=""
					className=" text-primary bg-indigo-100 rounded-md placeholder-current pl-4 pr-12 py-5"
				/>
				<button className="absolute h-6 w-6 right-4 top-1/2 transform -translate-y-1/2">
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
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</label>
		</div>
	);
};

export default Search;
