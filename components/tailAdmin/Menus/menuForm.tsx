"use client";
import React, { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  SubmitHandler,
  Controller,
  useFieldArray,
} from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ParamsType } from "@/types/paramTypes";

const itemSchema = z.object({
  name: z.string().min(1, "Name is required"),
  link: z.string().min(1, "Link is required"),
});

const formSchema = z.object({
  key: z.string().min(2, "Key is required"),
  items: z.array(itemSchema),
});

type FormSchema = z.infer<typeof formSchema>;

function MenuForm({
  items,
  params,
  isUpdate = false,
}: {
  items: { name: string; link: string }[];
  params: ParamsType;
  isUpdate?: boolean;
}) {
  const router = useRouter();
  const key = params.key;
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { key, items },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  useEffect(() => {
    reset({ key, items });
  }, [items, reset, key]);

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    if (isUpdate) {
      try {
        const res = await axios.put(`http://localhost:3000/api/menu/${key}`, {
          key: data.key,
          items: data.items,
        });
        router.push("/admin/menus");
        console.log("Response:", res.data);
        // Handle successful response (e.g., redirect or show success message)
      } catch (error) {
        console.log("Error:", error);
        // Handle error (e.g., show error message)
      }
    } else {
      try {
        const res = await axios.post(`http://localhost:3000/api/menu/`, {
          key: data.key,
          items: data.items,
        });
        router.push("/admin/menus");
        console.log("Response:", res.data);
        // Handle successful response (e.g., redirect or show success message)
      } catch (error) {
        console.log("Error:", error);
        // Handle error (e.g., show error message)
      }
    }
    console.log(data);
  };

  return (
    <div className="rounded-sm border border-stroke shadow-default bg-black/20">
      <div className="border-b border-stroke px-6.5 py-4">
        <h3 className="font-medium text-black capitalize">Edit {key} Items</h3>
        
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-6.5">
        <div className="mb-4">
          <label className="mb-3 block text-sm font-medium text-black">
            Key
          </label>
          <Controller
            name="key"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder="Key"
                className="w-full rounded-lg bg-white border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                {...field}
              />
            )}
          />
          {errors.key && (
            <div className="text-rose-800 mb-3 rounded-lg mt-1 max-w-fit">
              {errors.key.message}
            </div>
          )}
        </div>
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-3 w-full mb-4">
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-black">
                Name
              </label>
              <Controller
                name={`items.${index}.name`}
                control={control}
                defaultValue={field.name}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-lg bg-white border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    {...field}
                  />
                )}
              />
              {errors.items?.[index]?.name && (
                <div className="text-rose-800 mb-3 rounded-lg mt-1 max-w-fit">
                  {errors.items[index]?.name?.message}
                </div>
              )}
            </div>
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-black">
                Link
              </label>
              <Controller
                name={`items.${index}.link`}
                control={control}
                defaultValue={field.link}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Link"
                    className="w-full rounded-lg bg-white border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    {...field}
                  />
                )}
              />
              {errors.items?.[index]?.link && (
                <div className="text-rose-800 mb-3 rounded-lg mt-1 max-w-fit">
                  {errors.items[index]?.link?.message}
                </div>
              )}
            </div>
            <div className="flex items-end">
                
              <button
                type="button"
                onClick={() => remove(index)}
                className="flex rounded-md bg-rose-500 px-6 py-2 text-center font-medium text-white hover:bg-opacity-90"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-end pt-4 gap-4">
          <button
            type="button"
            onClick={() => append({ name: "", link: "" })}
            className="flex rounded-md bg-green-600 px-6 py-2 text-center font-medium text-white hover:bg-gray-300"
          >
            Add Item
          </button>
          <button
            type="submit"
            className="flex rounded-md bg-black px-6 py-2 text-center font-medium text-white hover:bg-opacity-90"
            disabled={isSubmitting || !isDirty}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MenuForm;
