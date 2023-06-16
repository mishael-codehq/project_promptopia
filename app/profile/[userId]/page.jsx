/** @format */

"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter,usePathname } from "next/navigation";
import Profile from "@components/Profile";
import React from "react";

export default function UserProfile() {
	const { data: session } = useSession();

	const [posts, setPosts] = useState([]);

	const router = useRouter();

const pathName = usePathname()

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${pathName}/posts`);
			const data = await response.json();
			setPosts(data);
		};

		session?.user.id && fetchPosts();
	}, [session]); 

	console.log(pathName)

	return (
		<Profile
			name={""}
			desc="welcome to your personalized profile page"
			data={posts}
			handleEdit={()=> {}}
			handleDelete={()=> {}}
		/>
	);
}

