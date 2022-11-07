import Image from "next/image";
import React from "react";

import logo from "../public/ACME-logo.png";


export const Nav = () => {
	return (
		<nav className='flex justify-end items-center h-16 bg-slate-100 border-slate-500 border-solid border-[1px] border-opacity-5 '>
			<div className='flex justify-center items-center gap-4 px-5'>
				<div className='flex items-center justify-center rounded-full bg-slate-200 w-8 h-8'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 stroke-red-600'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>
				</div>

				<div className='flex items-center justify-center rounded-full bg-slate-200 w-8 h-8'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 stroke-red-600'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
						/>
					</svg>
				</div>

				<div className='flex items-center justify-center rounded-full bg-slate-200 w-8 h-8'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 stroke-red-600'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
						/>
					</svg>
				</div>
				<div className='w-0 h-6 border-solid border-slate-500 border-[1px]'></div>
				<div className='flex justify-center items-center gap-4'>
					<Image src={logo} alt={"logo"} className={"w-16"} />
					<p className="text-slate-500">Welcome, admin</p>
				</div>
			</div>
		</nav>
	);
};
