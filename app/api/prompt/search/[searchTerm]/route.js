/** @format */

import { connectToDb } from "@utils/dataabse";
import Prompt from "@models/prompt";
import User from "@models/user";



export const GET = async (request, { params }) => {
    const searchTerm = params.searchTerm;

    try {
        await connectToDb();

        const user = await User.find({ username: searchTerm });

        if (user.length === 0) {
            // Handle case where no matching user is found
            return new Response("User not found", { status: 404 });
        }

        const userId = user[0]._id;

        const prompts = await Prompt.find({
            $or: [
                { tag: searchTerm },
                { creator: userId }
            ]
        }).populate("creator");

        console.log(prompts);

        return new Response(JSON.stringify(prompts), {
            status: 200,
        });

    } catch (error) {
        console.error(error);
        return new Response("Failed to fetch prompts", { status: 500 });
    }
};
