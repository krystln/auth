import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
	const cookieStore = await cookies();

	// if (cookieStore.has("sessionData"))
	// 	console.log("Session Data: ", cookieStore.get("sessionData")!.value);

	cookieStore.delete("sessionData");
	return NextResponse.json(
		{ message: "Logged out successfully!" },
		{ status: 200 }
	);
}

export { handler as POST };
