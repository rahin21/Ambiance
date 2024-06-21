"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Center,
} from "@chakra-ui/react";

import { Input } from "@chakra-ui/react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Invalid Email").min(5, "Email is too short"),
  password: z.string().min(6, "Password is too short"),
});
type formSchema = z.infer<typeof formSchema>;

function LoginForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<formSchema> = async (values: formSchema) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    console.log("Submit button clicked");
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email" className="">
          Email:
        </FormLabel>

        <Input
          placeholder="Email"
          type="email"
          className="text-start placeholder:text-start"
          {...register("email")}
        />

        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="password" className="">
          Password:
        </FormLabel>
        <Input
          placeholder="Password"
          type="password"
          className="text-start placeholder:text-start"
          {...register("password")}
        />

        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Center paddingTop={"20px"}>
        <Button type="submit">Submit</Button>
      </Center>
    </form>
  );
}

export default LoginForm;
