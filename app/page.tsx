import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div className='flex justify-center items-center w-full h-full text-3xl text-red-600'>
			<Link href={"/tasks"}>
				<button>go to tasks</button>
			</Link>
		</div>
	);
};

export default page;
