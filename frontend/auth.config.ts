// import GitHub from "next-auth/providers/github";
// import type { NextAuthConfig } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { RegisterSchema } from "./app/register/schema";
// import { eq } from "drizzle-orm";
// import { db } from "@vercel/postgres";
// import { users } from "./db/user/schema";
// import { verifyPassword } from "./utils/passwords";

// export default {
//     session: {
//     strategy: "jwt",
//     },
//     pages: {
//     signIn: "/login",
//     error: "/login",
//     },
//     providers: [
//     Credentials({
//         credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//         },
//         authorize: async (credentials) => {
//         const { email, password } =
//         await RegisterSchema.parseAsync(credentials);
//         const user = await db.query.users.findFirst({
//             where: eq(users.email, email),
//         });
//         if (!user) throw new Error("User not found");
//         const passwordsMatch = await verifyPassword(user?.password, password);
//         if (!passwordsMatch) {
//             throw new Error("Passwords do not match");
//         }
//         return user;
//         },
//     }),
//     ],
// } satisfies NextAuthConfig;
