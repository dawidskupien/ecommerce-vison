import { db } from "@/db";
import { eq } from "drizzle-orm";
import { users } from "@/db/user/schema"


export async function getUserByEmail(email: string) {
    return await db.query.users.findFirst({
        where: eq(users.email, email)
    })
}
export async function createUserWithEmailAndPassword(email: string, password: string) {
    return await db.insert(users).values({
        email: email,
        password: password,
    });
}