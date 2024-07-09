"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";

const sliderSchema = z.object({
  key: z.string().min(2, "Key must be at least 2 characters long"),
  files: z
    .custom<FileList>((files) => files instanceof FileList)
    .refine((files) => files.length > 0, {
      message: "At least one file must be uploaded",
    }),
});

type SliderFormData = z.infer<typeof sliderSchema>;

function SliderForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SliderFormData>({
    resolver: zodResolver(sliderSchema),
  });
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleFileChange = (files: FileList) => {
    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages(imageUrls);
  };

  const onSubmit = async (data: SliderFormData) => {
    const files = Array.from(data.files);
    console.log(data.key);
    try {
      const formData = new FormData();
      const imgs: string[] = [];

      files.forEach((file, index) => {
        formData.append(`file_${index}`, file);
        imgs.push(`/public/uploads/home/${file.name}`);
      });

      await axios.post("http://localhost:3000/api/slider/", {
        key: data.key,
        img: imgs,
      });
      formData.append("targetDIR", "home");

      console.log("Form Data:", formData);

      const res = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(await res.text());
    } catch (e: any) {
      console.error(e);
    }
  };

  return (
    <div>
      <h4 className="text-2xl font-semibold text-black mb-4">
        Add a new slide
      </h4>
      <div className="rounded-sm border border-stroke shadow-default bg-black/20 p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5 mb-5">
            <input
              {...register("key")}
              type="text"
              placeholder="Key"
              className="w-full rounded-lg bg-white border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
            {errors.key && <p>{errors.key.message}</p>}

            <div>
              <Controller
                name="files"
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    multiple
                    onChange={(e) => {
                      field.onChange(e.target.files);
                      e.target.files && handleFileChange(e.target.files);
                    }}
                    className=" rounded-lg bg-white border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                  />
                )}
              />
              {errors.files && <p>{errors.files.message}</p>}
            </div>
          </div>

          {/* Display the selected images */}
          <div className="flex gap-5 ">
            {selectedImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                width={150}
                height={300}
                alt={`Selected ${index}`}
              />
            ))}
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="rounded-md bg-black px-6 py-2  font-medium text-white hover:bg-opacity-90 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SliderForm;
