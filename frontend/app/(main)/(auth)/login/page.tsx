"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Script from "next/script";
import { cn } from "@/utils/helpers";
import { db } from "@/db/index";
import { users } from "@/db/user/schema";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./schema";
// import { signInUser } from "./actions";
import { signIn } from "@/auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormDescription,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";

import ErrorDisclaimer from "@/assets/icons/error-disclaimer.svg";
import { signInUserWithCredentials } from "./actions";
import Link from "next/link";

export default function LoginPage() {
  const turnstileRef = useRef<HTMLDivElement>(null);
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    const result = await signInUserWithCredentials({
      ...values,
      token: (
        turnstileRef?.current?.querySelector(
          'input[name="cf-turnstile-response"]'
        ) as HTMLInputElement
      )?.value,
    });

    console.log(result);
    // if (result.at(1)) {
    //   console.log(result[1]?.message)
    // } else {
    //   console.log(result[0])
    // }
    //   form.setError("root.serverError", {
    //     message: result[1]?.message,
    //   });
  }
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        defer
      />
      <div className="flex justify-center py-[6.25rem] max-w-[80rem] min-h-screen mx-auto">
        <div className="form-container max-w-[min(32.5rem,100%-2rem)] w-full">
          <h4 className="uppercase text-center text-[#252f35] text-[1.75rem] font-semibold mb-2.5">
            Login
          </h4>
          <p className="text-center mb-[2.188rem]">
            If you have an account with us, please log in.
          </p>
          {form?.formState?.errors?.root?.serverError && (
            <p className="error text-[.813rem] flex items-center gap-2 mb-4 text-red-600 rounded-lg">
              <Image alt="" src={ErrorDisclaimer} className="size-4" />
              {form?.formState?.errors?.root?.serverError?.message}
            </p>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl
                      className={cn("", {
                        "border-red-500":
                          form?.formState?.errors?.email?.message,
                      })}
                    >
                      <Input
                        type="email"
                        placeholder="Email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mt-4 mb-2.5">
                    <FormControl
                      className={cn("", {
                        "border-red-500":
                          form?.formState?.errors?.password?.message,
                      })}
                    >
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <div
            ref={turnstileRef}
            className="cf-turnstile"
            data-sitekey="0x4AAAAAAAfBDaKeKDnmrPbD"
            data-theme="light">
            </div> */}

              <Button
                type="submit"
                className="mt-2.5 w-full rounded-full"
                variant="default"
              >
                Login
              </Button>
            </form>
          </Form>
          <div className="mt-[0.9375rem]">
            <p className="text-center ">
              Don't have an account?{" "}
              <Link className="text-blue-600" href="/register">
                Create an account
              </Link>
            </p>
            <p className="text-center">
              <Link className="text-blue-600" href="/forgot">
                Forgot your password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
