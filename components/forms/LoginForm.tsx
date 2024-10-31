"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" })
    .max(50),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
        <section className="">
          <h1 className="text-32-bold md:text-36-bold">Hi there 🖐,</h1>
          <p className="text-muted-foreground/50">
            Please Provide your login details to continue
          </p>
        </section>
        {/* <CustomFormField */}
        {/*   control={form.control} */}
        {/*   fieldType={FormFieldTypes.INPUT} */}
        {/*   name="username" */}
        {/*   label="Username" */}
        {/*   placeholder="emmy" */}
        {/*   iconSrc="/assets/icons/user.svg" */}
        {/*   iconAlt="user" */}
        {/* /> */}

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          type="email"
          name="email"
          label="Email"
          placeholder="emmyab@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
        />

        {/* <CustomFormField */}
        {/*   control={form.control} */}
        {/*   fieldType={FormFieldTypes.PHONE_INPUT} */}
        {/*   name="phone" */}
        {/*   label="Phone number" */}
        {/*   placeholder="(234)8110463553" */}
        {/* /> */}
        <SubmitButton isLoading={false}>Login</SubmitButton>
      </form>
    </Form>
  );
};

export default LoginForm;
