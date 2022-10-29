import "../styles/globals.css";
import { Sidebar } from "./Sidebar";
import { Nav } from "./Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<title>Next.js 13 - testing</title>
			</head>
			<body>
				<div className='flex w-screen h-screen'>
					<Sidebar />
					<div className='flex flex-col w-full'>
						<Nav />
						<div className='flex justify-center items-center h-full'>{children}</div>
					</div>
				</div>
			</body>
		</html>
	);
}
