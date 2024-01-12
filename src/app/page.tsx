import HeroContent from "@/components/HeroContent";
import LoginComponent from "@/components/LoginComponent";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Loader2, Square } from "lucide-react";

export default async function Home() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const dbUser = user
        ? await db.user.findFirst({
              where: {
                  id: user?.id,
              },
          })
        : null;

    const dbCalendar = user
        ? await db.calendar.findFirst({
              where: {
                  userId: user.id,
              },
              include: {
                  weekSquares: true,
              },
          })
        : null;

    const birthday = dbUser?.birthday === undefined ? null : dbUser.birthday;
    const finalYear = dbUser?.finalYear === undefined ? null : dbUser.finalYear;
    const weekSquares =
        dbCalendar?.weekSquares === undefined ? null : dbCalendar.weekSquares;

    return (
        <main className="wrapper mt-24 flex flex-col gap-x-24 min-h-[calc(100vh-6rem)]">
            <div>
                <div
                    className="relative -ml-2.5 h-fit w-fit"
                    aria-hidden={true}
                >
                    <Square fill="text-primary" size={112} />
                    <div className="absolute left-1/2 top-1/2 z-10 h-fit w-fit -translate-x-1/2 -translate-y-1/2 transform">
                        <Loader2
                            className="animate-spin text-white duration-50000"
                            fill="text-primary"
                            size={64}
                        />
                    </div>
                </div>
                <div className="w-fit gap-y-8 mb-2 flex flex-col justify-between gap-x-24">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-7xl font-bold whitespace-nowrap">
                            {user ? `${user.given_name}'s ` : null}Life, Squared
                        </h1>
                    </div>
                    <LoginComponent />
                </div>
            </div>

            <HeroContent
                dbBirthday={birthday}
                dbFinalYear={finalYear}
                dbWeekSquares={weekSquares}
            />
        </main>
    );
}
