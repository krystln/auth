"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Logout = () => {
	const router = useRouter();

	const handleLogout = async (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/auth/logout", {
				method: "POST"
			});

			console.log(response);
			if (response.ok) {
				console.log("Logged out successfully!");
				router.push("/");
			} else {
				console.log("Failed to logout!");
			}
		} catch (error) {
			alert(`Unexpected Error : ${error}`);
		}
	};

	return (
		<button
			onClick={handleLogout}
			className="border border-black py-1.5 px-2 rounded-md">
			Logout
		</button>
	);
};

export default Logout;
