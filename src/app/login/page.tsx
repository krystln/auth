import UserForm from "@/components/userForm";
import React from "react";

import { cookies } from "next/headers";
import Logout from "@/components/logout";

const Page = async () => {
	const cookieStore = await cookies();

	if (!cookieStore.has("sessionData")) {
		return (
			<div className="text-center">
				Select User you want to login as:
				<UserForm />
			</div>
		);
	} else {
		return (
			<div className="text-center flex gap-4 items-center">
				Already Logged in as {cookieStore.get("sessionData")!.value}
				<Logout />
			</div>
		);
	}
};

export default Page;
