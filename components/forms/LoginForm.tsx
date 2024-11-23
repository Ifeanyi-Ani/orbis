"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import CustomFormField, {
  FormFieldType,
} from "@/components/custorm-form-field";
import SubmitButton from "@/components/submit-button";
import { useLoginMutation } from "@/features/auth/services/auth-service";

const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" })
    .email(),
  password: z.string(),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { isLoading }] = useLoginMutation();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await login(values).unwrap();
      toast.success("You successfully loggedin");
    } catch (error: any) {
      if ("data" in error) {
        toast.error(
          <div>
            <Label className="text-destructive">{error?.data?.error}</Label>
            <p>{error?.data?.message}</p>
          </div>
        );
      } else {
        toast.error("An unexpected error occured");
      }
    }
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
        <SubmitButton isLoading={isLoading}>Login</SubmitButton>
      </form>
    </Form>
  );
};

export default LoginForm;
