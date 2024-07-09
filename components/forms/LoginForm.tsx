"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";

export enum FormFieldTypes {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  SELECT = "select",
  SKELETON = "skeleton",
  DATE_PICKER = "datePicker",
}

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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="mb-12 space-y-4">
          <h1 className="text-32-bold md:text-36-bold">Hi there 🖐,</h1>
          <p className="text-primary-700">
            Please Provide your login details to continue
          </p>

          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.INPUT}
            name="username"
            label="Username"
            placeholder="emmy"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.INPUT}
            name="email"
            label="Email"
            placeholder="emmyab@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.PHONE_INPUT}
            name="phone"
            label="Phone number"
            placeholder="(234)8110463553"
          />
        </section>
      </form>
    </Form>
  );
};

export default LoginForm;
