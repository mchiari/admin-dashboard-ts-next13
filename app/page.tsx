import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const HomePage = () => {

	return (
		<div className='flex justify-center items-center w-full h-full text-3xl text-red-600'>
			<h1>homepage</h1>
			{/* <button><Link href='/notes'>go to notes</Link></button> */}
		</div>
	);
};

export default HomePage;
