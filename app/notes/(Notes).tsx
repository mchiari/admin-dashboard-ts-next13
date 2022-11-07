"use client"

import { useState } from "react";

export const Note = ({note}: any) => {
	const { id, title, content, done, created } = note || {};
	// const [checked, setChecked] = useState(done);

	return (
		// <Link href={`/notes/${id}`}>
		<div key={id} className='flex flex-col gap-4 bg-slate-200 m-8'>
			<div className='flex justify-end items-center bg-slate-500 text-slate-100 p-2'>
				{/* <Switch checked={checked} onClick={() => setChecked(!checked)} /> */}
				<h2>{title}</h2>
			</div>
			<div className='flex flex-col w-64 gap-4 p-4 flex-wrap'>
				<h5>{content}</h5>
				<p>created at {created}</p>
			</div>
		</div>
		// </Link>
	)
};

const Switch = (props: any) => {
	return (
		<div
        onClick={props.onClick}
			className={`flex justify-start align-center w-8 h-4 bg-slate-200 rounded-md cursor-pointer transition-all`}
		>
			<div className={`flex w-4 rounded-full bg-slate-400 border-[1px] border-solid border-slate-100 ${
				props.checked ? "" : "translate-x-4"
			}`}></div>
		</div>
	);
};