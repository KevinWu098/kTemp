import Link from "next/link";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Loader2, Square } from "lucide-react";

export default async function Home() {
	// const { getUser } = getKindeServerSession();
	// const user = await getUser();

	// const dbUser = user
	//     ? await db.user.findFirst({
	//           where: {
	//               id: user?.id,
	//           },
	//       })
	//     : null;

	return (
		<main className="wrapper flex-center min-h-[calc(100vh-6rem)] text-3xl font-semibold md:text-5xl">
			<Link
				href={"https://github.com/KevinWu098/kTemp"}
				target="_blank"
				referrerPolicy="no-referrer"
				className="underline"
			>
				Hello World 💖
			</Link>
		</main>
	);
}
