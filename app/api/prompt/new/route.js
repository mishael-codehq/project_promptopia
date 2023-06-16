/** @format */

import { connectToDb } from "@utils/dataabse";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
	const { userId, prompt, tag } = await req.json();

	try {
		await connectToDb();
		const newPrompt = new Prompt({
			creator: userId,
			prompt,
			tag,
		});

		await newPrompt.save();
		return new Response(JSON.stringify(newPrompt), { status: 201 });
	} catch (error) {
		return new Response("failed to save to database", { status: 500 });
	}
};
