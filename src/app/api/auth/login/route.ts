"use server";

import { cookies } from "next/headers";

import userData from "@/data/users.json";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
	const { userID } = await req.json();
	const cookieStore = await cookies();

	// console.log(JSON.stringify(userData));
	// console.log(userID);

	const data = userData.filter(
		(user: {
			id: number;
			username: string;
			access_level: number;
			role: string;
		}) => {
			return user.id === Number(userID);
		}
	);
	// console.log(data);

	// if (!data) {
	// 	return NextResponse.json({ message: "User not found!" }, { status: 404 });
	// }

	cookieStore.set("sessionData", JSON.stringify(data));
	return NextResponse.json(
		{ message: "Logged in successfully!" },
		{ status: 200 }
	);
}

export { handler as POST };
