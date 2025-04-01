"use server";
import { signIn } from "@/auth";
import { LoginSchema } from "./schema";
import { createServerAction } from "zsa";
import { revalidatePath } from 'next/cache'

export const signInUserWithCredentials = createServerAction()
.input(LoginSchema)
.handler(async ({input}) => {
  // console.log(input?.token)
  await signIn("credentials", {
    redirectTo: "/profile",
    ...input
  })
  // revalidatePath("/login")
})


