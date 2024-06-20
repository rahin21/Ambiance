"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

import { Input } from '@chakra-ui/react'

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
});

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    const loginData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (loginData?.error) {
      console.log(loginData.error);
    } else {
      router.push("/admin");
    }
  }
  return (
    <Formik<z.infer<typeof formSchema>>
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => onSubmit(values)}
    >

    <Form {...form}>
        <Field
          control={form.control}
          name="email"
          >
          {({ field }:{field:any}) => (
            
            <FormControl>
                <FormLabel className="">Email:</FormLabel>
                <Input
                  placeholder="Email"
                  type="email"
                  className="text-start placeholder:text-start"
                  {...field}
                />
              <FormErrorMessage />
              </FormControl>
          )}
          </Field>
          <Field
          control={form.control}
          name="password"
          >
          {({ field }:{field:any}) => (
            
            <FormControl>
                <FormLabel className="">Password:</FormLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  className="text-start placeholder:text-start"
                  {...field}
                />
              <FormErrorMessage />
              </FormControl>
          )}
          </Field>
        <Button type="submit">Submit</Button>
    </Form>
    </Formik>
  );
}

export default LoginForm;
