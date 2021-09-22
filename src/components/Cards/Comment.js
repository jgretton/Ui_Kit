import React from 'react';
import Avatar from '../../images/Avatar.png';

const Comment = () => {
	return (
		<div className="bg-white shadow-md rounded-2xl max-w-sm p-4">
			<div className="flex flex-row items-center w-full">
				<img
					src={Avatar}
					alt=""
					className="rounded-full h-16 w-16 object-cover mr-4"
				/>
				<div className="flex flex-col">
					<p className="text-primary text-lg leading-6">Metehan Kaya</p>
					<p className="text-sm text-gray-400">Product Designer</p>
				</div>
				<div className="flex ml-auto text-indigo-300">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						fill="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						fill="currentColor"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						fill="currentColor"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						fill="currentColor"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						/>
					</svg>
				</div>
			</div>
			<div className="mt-4 ">
				<p className="text-sm text-primary opacity-60 font-semibold leading-5">
					The simply dummy text of the printing and typesetting industry. Lorem Ipsum
					has been the industry's standard dummy text ever since the 1500s.
				</p>
			</div>
			<div className="mt-4 px-4 py-5 bg-gray-100 hover:bg-gray-200 flex flex-row items-center justify-between rounded-lg cursor-pointer">
				<p>Comment</p>
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
						d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Comment;
