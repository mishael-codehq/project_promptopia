/** @format */

import "@/styles/globals.css";
import React, { Children } from "react";

export const metadata = {
	title: "Promptopia",
	description: "deiscover and share AI prompts",
};

function RootLayout({ children }) {
	return (
		<html>
			<body>
				<div className="main">
					<div className="gradient" />
				</div>

				<main className="app">{children}</main>
			</body>
		</html>
	);
}

export default RootLayout;
