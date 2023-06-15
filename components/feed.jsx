/** @format */

"use client";

import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

export default function Feed() {
	const [searchText, setSearchText] = useState("");
	const [posts, setPosts] = useState([]);

	const handleSearchChange = (e) => {
		const value = e.target.value;
		setSearchText(value);
	};

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("/api/prompt");
			const data = await response.json();

			setPosts(data);
		};

		fetchPosts();
	}, []);

	return (
		<section className="feed">
			<form className="relative w-full flex-center">
				<input
					type="text"
					placeholder="search for a tag or a username"
					value={searchText}
					onChange={handleSearchChange}
					required
					className="search_input peer"
				/>
			</form>

			<PromptCardList data={posts} handleTagClick={() => {}} />
		</section>
	);
}

const PromptCardList = ({ data, handleTagClick }) => {
	return (
		<div className="mt-16 prompt_layout">
			{data.map((post) => (
				<PromptCard
					key={post._id}
					post={post}
					handleTagClick={handleTagClick}
				/>
			))}
		</div>
	);
};
