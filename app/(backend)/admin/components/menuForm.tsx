"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
const menuSchema = z.object({
  name: z.string().min(3),
  link: z.string().min(3),
});

type menuSchemaType = z.infer<typeof menuSchema>;

function MenuForm() {
    const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<menuSchemaType>({
    defaultValues: { name: "", link: "/" },
    resolver: zodResolver(menuSchema),
  });

  const onSubmit: SubmitHandler<menuSchemaType> = (data) => {
    console.log(data);
    axios
      .post("/api/auth/menu", data)
      .then(function (response) {
        console.log(response);
        router.push("/admin/menu")
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form flex flex-col">
      <label htmlFor="name">menu</label>
      <input className="input" placeholder="name" {...register("name")} />
      {errors.name && <span>{errors.name.message}</span>}
      <br />
      <label htmlFor="link"> link</label>
      <input className="input" placeholder="/link" {...register("link")} />

      {errors.link && <span>{errors.link.message}</span>}
      <br />
      <button type="submit">submit!</button>
    </form>
  );
}

export default MenuForm;
