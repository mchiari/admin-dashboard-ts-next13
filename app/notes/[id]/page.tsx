import React from "react";

const getNote = async (noteId: string) => {
	const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {
		next: { revalidate: 10 },
	});
	const data = await res.json();
	return data;
};

const NotePage = async ({ params }: any) => {
	const note = await getNote(params.id);
	return (
		<div>
			<h1>notes/{note.id}</h1>
			<h3>{note.title}</h3>
			<h5>{note.title}</h5>
			<p>{note.title}</p>
		</div>
	);
};

export default NotePage;
