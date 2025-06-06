import { getServerSession } from "next-auth";
import { authOptions } from "@/config/authOptions";
import { Redirect } from "./redirect";
import { IChildren } from "@/types";

export default async function AuthLayout({ children }: IChildren) {
  const session = await getServerSession(authOptions);
  return (
    <body>
      <main>
        {session && <Redirect>{children}</Redirect>}
        {!session && children}
      </main>
    </body>
  )
}