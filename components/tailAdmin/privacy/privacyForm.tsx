"use client";
import { revalidatePrivacyTerm } from "@/constants/revalidate/route";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  description: z.string().min(1, "Description is required"),
});

type FormSchema = z.infer<typeof formSchema>;

function PrivacyTermForm({
  privacyTerms,
  isUpdate = false,
  privacy,
  terms
}: {
    privacyTerms?: {
    id:string;
    key: string;
    description: string;
  };
  isUpdate?: boolean;
  privacy?: boolean;
  terms?: boolean;
}) {
  const router = useRouter();
  let key:string;
  
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });


  if(privacy){
    key = "privacy";
  }  
  if(terms){
    key = "terms";
  }  
  // console.log(key);

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    if (isUpdate) {
 
      try {
        const res = await axios.put(`/api/privacy-term/${key}`, {
          key: privacyTerms?.key,
          description: data.description,
        });
        revalidatePrivacyTerm();
        privacy&&  router.push("/admin/privacy/");
        terms&&  router.push("/admin/terms-of-services/");

        // Handle successful response (e.g., redirect or show success message)
      } catch (error) {
        console.log("Error:", error);
        // Handle error (e.g., show error message)
      }

    } else {

      
      try {
        const res = await axios.post(`/api/privacy-term/`, {
          key: key,
          description: data.description,
        });
        revalidatePrivacyTerm();
        console.log("Response:", res.data);
        // Handle successful response (e.g., redirect or show success message)
      } catch (error) {
        console.log("Error:", error);
        // Handle error (e.g., show error message)
      }
      reset({
        description:''
      })
    }
  };
  async function deleteHandler() {
    axios
      .delete(`/api/privacy-term/${key}`)
      .then((response) => {
        console.log(`${response}`);
        revalidatePrivacyTerm();
        privacy&&  router.push("/admin/privacy/");
        terms&&  router.push("/admin/terms-of-services/");
        
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="rounded-sm border border-stroke shadow-default bg-black/20">
      <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-6.5">
        <div className="flex gap-3 w-full mb-4">
          <div className="w-full">
            <label className="mb-3 block text-base font-medium text-black">
              Description
            </label>
            <Controller
              name={`description`}
              control={control}
              defaultValue={privacyTerms?.description}
              render={({ field }) => (
                <textarea
                  placeholder="description"
                  className="w-full rounded-lg bg-white border-[1.5px] min-h-[10rem] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                  {...field}
                />
              )}
            />
            {errors.description && (
              <div className="text-rose-800 mb-3 rounded-lg mt-1 max-w-fit">
                {errors.description.message}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4 gap-4">
          {isUpdate && (
            <button
              type="button"
              onClick={deleteHandler}
              className="flex rounded-md bg-rose-600 px-6 py-2 text-center font-medium text-white hover:bg-gray-300"
            >
              Delete
            </button>
          )}
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

export default PrivacyTermForm;
