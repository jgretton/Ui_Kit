import React from 'react';

const Upload = () => {
	return (
		<div>
			<div className="w-full rounded-2xl shadow-md bg-white p-4">
				<div className="flex flex-row items-center">
					<div className="relative">
						<div className="w-14 h-14 rounded-full border border-indigo-100 flex items-center">
							<div className="h-12 w-12 bg-indigo-100 text-primary rounded-full flex items-center text-center m-auto">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 m-auto"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className="ml-4 flex flex-col my-3 w-full">
						<div className="">
							<p className="text-sm text-indigo-200">
								<span className="text-xl text-primary mr-1">21%</span> Uploading...{' '}
							</p>
						</div>
						<div className="h-2 rounded-md bg-indigo-100 mt-4 w-full">
							<div
								className="bg-primary h-full rounded-md"
								style={{ width: '21%' }}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Upload;
