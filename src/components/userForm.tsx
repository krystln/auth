"use client";

import React from "react";
import userData from "@/data/users.json";
import { useRouter } from "next/navigation";

const UserForm = () => {
	const [userId, setUserId] = React.useState<number>(1);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				body: JSON.stringify({ userID: Number(userId) })
			});

			if (response.ok) {
				console.log("Logged in successfully!");
				router.push("/");
			} else {
				alert("Failed to login!");
			}
		} catch (error) {
			alert(`Unexpected Error : ${error}`);
		}
	};

	return (
		<div>
			<form
				className="flex items-center justify-center gap-4"
				onSubmit={handleSubmit}>
				<select
					className="border border-black px-4 py-2 rounded-md"
					name="userID"
					onChange={(e) => {
						setUserId(Number(e.target.value));
						// alert(`Selected User ID : ${e.target.value}`);
					}}>
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
