import React, { useEffect } from "react";

import PocketBase from "pocketbase";
import Link from "next/link";
// import { Note } from "./(Notes)";

export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
fetchCache = 'auto',
runtime = 'nodejs',
preferredRegion = 'auto'

const getNotes = async () => {
	const db = new PocketBase('http://127.0.0.1:8090');
	const data = await db.records.getList('notes')

	// const res = await fetch(
	// 	"http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
	// 	{ cache: "no-store" }
	// );
	// const data = await res.json();
	return data?.items as any[];
};

const NotesPage = async () => {
	const notes = await getNotes();

	console.log(notes);

	return (
		<div>
			<h1>Notes page</h1>
			<div className='flex flex-wrap'>
				{notes.map((note) => {
					return <Note key={note.id} note={note} />;
				})}
			</div>
		</div>
	);
};

const Note = ({ note }: any) => {
	const { id, title, content, done, created } = note || {};
	// const [checked, setChecked] = useState(done);

	return (
		// <Link href={`/notes/${encodeURIComponent(id)}`}>
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
	);
};

export default NotesPage;
