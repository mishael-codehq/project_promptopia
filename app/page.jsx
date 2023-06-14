/** @format */
import Feed from "@components/feed";

const msg = process.env.GOOGLE_ID

export default function page() {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Discover and Share
				<br />
				<span className="orange_gradient text-center">AI-Powered Prompts</span>
			</h1>

			<p className="capitalize desc text-center">promptopia is an open-source AI prompting tool for the mordern world to discover, create and share creative prompts</p>

			<Feed />
		</section>
	);
}
