/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-head-element */

import "../styles/globals.css";
import { Sidebar } from "./Sidebar";
import { Nav } from "./Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
				<link rel="icon" type="image/x-icon" href="/ACME-logo.png" />
				<title>ACME Inc.</title>
				
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
