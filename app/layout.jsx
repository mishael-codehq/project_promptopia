/** @format */

import "@/styles/globals.css";
import React, { Children } from "react";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
	title: "Promptopia",
	description: "deiscover and share AI prompts",
};

function RootLayout({ children }) {
	return (
		<html>
			<body>
				<Provider>
					<div className="main">
						<div className="gradient" />
					</div>

					<main className="app">
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
}

export default RootLayout;
