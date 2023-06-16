/** @format */

"use client";

import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

export default function Feed() {
	const [searchText, setSearchText] = useState("");
	const [posts, setPosts] = useState([]);

	const handleSearchChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setSearchText(value);
	};

	const fetchSearchedPosts = async (searchTerm) => {
		const response = await fetch(`/api/prompt/search/${searchTerm}`);
		const data = await response.json();

		setPosts(data);

		setTimeout(() => {
			setSearchText("");
		}, 2000);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		fetchSearchedPosts(searchText);
	};

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("/api/prompt/");
			const data = await response.json();0 

			setPosts(data)
		};

		fetchPosts();
	}, []);

	return (
		<section className="feed">
			<form className="relative w-full flex-center" onSubmit={handleFormSubmit}>
				<input
					type="text"
					placeholder="search for username to see prompts by that user"
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
