"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils/helpers";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "./schema";
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
import { registerUserWithCredentials } from "./actions";

export default function RegisterPage() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    const result = await registerUserWithCredentials(values)

}
  return (
    <div className="flex justify-center py-[6.25rem] max-w-[80rem] mx-auto">
    <div className="max-w-[min(32.5rem,100%-2rem)] w-full">
      <h4 className="uppercase text-center text-[#252f35] text-[1.75rem] font-semibold mb-2.5">
        Register
      </h4>
      <p className="text-center mb-[2.188rem]">
        If don't have an account, please register.
      </p>
      {form?.formState?.errors?.root?.serverError && (
        <p className="text-[.813rem] flex items-center gap-2 mb-4 text-red-600 rounded-lg">
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
                    "border-red-500": form?.formState?.errors?.email?.message,
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
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="mt-4 mb-2.5">
                <FormControl
                  className={cn("", {
                    "border-red-500":
                      form?.formState?.errors?.confirmPassword?.message,
                  })}
                >
                  <Input type="password" placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mt-2.5 w-full rounded-full"
            variant="default"
          >
            Register
          </Button>
        </form>
      </Form>
    </div>
  </div>
  )
}
