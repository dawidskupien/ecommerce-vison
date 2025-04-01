import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/db/index";
import { users } from "@/db/user/schema";
import { verifyPassword } from "@/utils/passwords";
import { LoginSchema } from "./app/(main)/(auth)/login/schema";
import { InvalidEmailOrPassword } from "@/utils/errors";
import { getUserByEmail } from "@/services/users";

// TODO: rate limiting, brute force protection, add cloudflare turnstile or recaptcha, check owasp

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await LoginSchema.parseAsync(credentials);
          const user = await getUserByEmail(email);
          if (!user) throw new InvalidEmailOrPassword();
          if (!(await verifyPassword(user?.password, password))) {
            await verifyPassword(password, "RANDOM_STRING"); // (timing attack mitigation)
            throw new InvalidEmailOrPassword();
          }
          return user;
        } catch (error) {
          throw new InvalidEmailOrPassword();
        }
      },
    }),
  ],
});
