"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { hashPassword } from "@/utils/passwords";
import { createServerAction } from "zsa";
import { RegisterSchema } from "./schema";
import { createUserWithEmailAndPassword, getUserByEmail } from "@/services/users"
import { InvalidEmailOrPassword, SomethingWentWrong } from "@/utils/errors";


export const registerUserWithCredentials = createServerAction().
input(RegisterSchema)
.handler(async({input}) => {
  try {
    const { email, password } = input
    if(await getUserByEmail(email)) throw new InvalidEmailOrPassword();
    await createUserWithEmailAndPassword(email, await hashPassword(password))
    revalidatePath("/register")
  } catch(err) {
    console.log(err)
    throw new SomethingWentWrong();
  }
})