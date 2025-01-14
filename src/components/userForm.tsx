"use client";

import React from "react";
import userData from "@/data/users.json";

const UserForm = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const userID = formData.get("userID");
		const user = userData.find((user) => user.id === Number(userID));
		if (!user) {
			alert("User not found");
			return;
		} else {
			console.log(`Logged in as ${user.username}`);
		}
	};

	return (
		<div>
			<form
				className="flex items-center justify-center gap-4"
				onSubmit={handleSubmit}>
				<select
					className="border border-black px-4 py-2 rounded-md"
					name="userID">
					{userData.map((user, index) => {
						return (
							<option key={index} value={user.id}>
								{user.username} (role : {user.role})
							</option>
						);
					})}
				</select>
				<button
					type="submit"
					className="border border-black px-4 py-1.5 rounded-md">
					Login
				</button>
			</form>
		</div>
	);
};

export default UserForm;
