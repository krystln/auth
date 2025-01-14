import { cookies } from "next/headers";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import roleAuthData from "@/data/role.json";

export async function middleware(request: NextRequest) {
	const cookieStore = await cookies();

	if (!cookieStore.has("sessionData")) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	const sessionData = JSON.parse(cookieStore.get("sessionData")!.value);
	// console.log(sessionData.role);

	// if (roleAuthData[sessionData.role].includes(request.nextUrl.pathname)) {
	// 	return NextResponse.next();
	// } else {
	// 	return NextResponse.redirect(new URL("/denied", request.url));
	// }

	switch (sessionData.role) {
		case "admin":
			if (roleAuthData.admin.includes(request.nextUrl.pathname)) {
				return NextResponse.next();
			} else {
				return NextResponse.redirect(new URL("/denied", request.url));
			}
		case "user":
			if (roleAuthData.user.includes(request.nextUrl.pathname)) {
				return NextResponse.next();
			} else {
				return NextResponse.redirect(new URL("/denied", request.url));
			}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/settings", "/dashboard", "/orders"]
};
