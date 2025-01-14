"use client";

import Link from "next/link";
import React from "react";

import LinkData from "@/data/linkData.json";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const Links = () => {
	const pathname = usePathname();

	return (
		<div className="flex items-center justify-center gap-4">
			{LinkData.map((link, index) => (
				<Link
					key={index}
					href={link.url}
					className={twMerge(
						"hover:underline",
						pathname === link.url ? "underline" : ""
					)}>
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default Links;
