"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { aboutType, postType } from "@/types/types";
import { useRouter } from "next/navigation";
import { revalidatePost } from "@/app/api/revalidate.ts/route";
import { FaImage, FaImages } from "react-icons/fa6";

const sliderSchema = z.object({
  key: z.string().min(2, "key must be at least 2 characters long"),
  title: z.string().min(2, "title must be at least 2 characters long"),
  thumbnail: z
    .instanceof(File)
    .refine((file) => file instanceof File, {
      message: "Exactly one file must be uploaded",
    }),

  gallery: z
    .custom<FileList>((files) => files instanceof FileList)
    .refine((files) => files.length > 0, {
      message: "At least one file must be uploaded",
    }),
});

type PostFormData = z.infer<typeof sliderSchema>;

function PostForm({ post, isUpdate }: { post?: postType; isUpdate?: boolean }) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(sliderSchema),
  });

  const [selectedImagesThumbnail, setSelectedImagesThumbnail] = useState<
    string[]
  >([]);
  const [selectedImagesGallery, setSelectedImagesGallery] = useState<string[]>(
    []
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleFileChangeThumbnail = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setSelectedImagesThumbnail([imageUrl]);
  };
  const handleFileChangeGallery = (files: FileList) => {
    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImagesGallery(imageUrls);
  };

  const onSubmit = async (data: PostFormData) => {
    const filesThumbnail = data.thumbnail;
    const filesGallery = Array.from(data.gallery);

    try {
      const formData = new FormData();
      const gallery: string[] = [];
      const thumbnail: string[] = [];
      // update
      if (isUpdate) {
        
        filesGallery.forEach((file, index) => {
          formData.append(`file_${index}`, file);
          gallery.push(`/uploads/post/${file.name}`);
        });

        const res1 = await axios.put(
          `http://localhost:3000/api/post/${post?.id}`,
          {
            gallery: gallery,
            title: data.title,
            key: data.key,
            thumbnail: data.thumbnail,
          }
        );
        revalidatePost();
        formData.append("targetDIR", "post");

        const res = await fetch("http://localhost:3000/api/upload", {
          method: "POST",
          body: formData,
        });
        console.log(res1);
        if (!res.ok) throw new Error(await res.text());
        reset({
          key: "",
          title: "",
          gallery: undefined,
          thumbnail: undefined,
        });

        setSelectedImagesGallery([]);
        setSelectedImagesThumbnail([]);
        router.push("/admin/posts");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        
        const gallery: string[] = [];
    
  
        // filesThumbnail.forEach((file, index) => {
        //   formData.append(`file_${index}`, file);
        //   thumbnail.push(`/uploads/post/${file.name}`);
        // });
          formData.append(`file_0`, filesThumbnail);
        const thumbnail = `/uploads/post/${filesThumbnail.name}`
        filesGallery.forEach((file, index) => {
          formData.append(`file_${index+1}`, file);
          gallery.push(`/uploads/post/${file.name}`);
        });
        console.log(thumbnail);
        const res1 = await axios.post("http://localhost:3000/api/post/", {
          title: data.title,
          key: data.key,
          thumbnail: thumbnail,
          gallery: gallery,
        });
        revalidatePost();
        formData.append("targetDIR", "post");

        const res2 = await fetch("http://localhost:3000/api/upload", {
          method: "POST",
          body: formData,
        });
        console.log(res1);
        if (!res2.ok) throw new Error(await res2.text());

        reset({
          key: "",
          title: "",
          thumbnail: undefined,
          gallery: undefined,
        });

        setSelectedImagesGallery([]);
        setSelectedImagesThumbnail([]);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (e: any) {
      console.error(e);
    }
  };

  async function deleteAbout() {
    try {
      axios
        .delete(`http://localhost:3000/api/post/${post?.id}`)
        .catch((error) => {
          console.error(error);
        });

      revalidatePost();
      await axios.delete(`/api/upload`, {
        data: { location: post?.gallery },
      });
    } catch (error) {
      console.log(error);
    }
    router.push("/admin/post/");
  }

  return (
    <div>
      <h4 className="text-2xl font-semibold text-black mb-4">
        Add post information
      </h4>
      <div className="rounded-sm border border-stroke shadow-default bg-black/20 p-5 gap-5">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {isUpdate && (
            <div className="flex flex-col items-center gap-5 m-5">
              {selectedImagesGallery.length > 0 ? (
                selectedImagesGallery.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    width={250}
                    height={300}
                    alt={`Selected ${index}`}
                  />
                ))
              ) : (
                <Image
                  src={post?.gallery[0] || ""}
                  alt="img-home"
                  width={250}
                  height={300}
                />
              )}
              <div>
                <Controller
                  name="gallery"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <input
                        type="file"
                        id="file-upload"
                        ref={fileInputRef}
                        onChange={(e) => {
                          field.onChange(e.target.files);
                          e.target.files &&
                            handleFileChangeGallery(e.target.files);
                        }}
                        className="hidden "
                      />
                      <label
                        htmlFor="file-upload"
                        className="capitalize flex rounded-md bg-rose-500 px-6 py-2 text-center font-medium text-white hover:bg-opacity-90 cursor-pointer"
                      >
                        Change gallery
                      </label>
                    </div>
                  )}
                />
                {errors.gallery && <p>{errors.gallery.message}</p>}
              </div>
            </div>
          )}
          <div className="flex gap-5 mb-5">
            <input
              {...register("key")}
              defaultValue={post?.key}
              type="text"
              placeholder="Key"
              className="w-full rounded-lg bg-white border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
            {errors.key && <p>{errors.key.message}</p>}
            <input
              {...register("title")}
              defaultValue={post?.title}
              type="text"
              placeholder="Title"
              className="w-full rounded-lg bg-white border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div className="flex gap-5">
            <div className="border-2 flex flex-col items-center p-3 max-h-[15.3rem] border-black/40 w-full">
            <Controller
                name="thumbnail"
                control={control}
                render={({ field }) => (
                  <div>
                    <input
                      type="file"
                      id="thumbnail"
                      ref={fileInputRef}
                      onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : null;
                        field.onChange(file);
                        file && handleFileChangeThumbnail(file);
                      }}
                      className="hidden"
                    />
                    <label
                      htmlFor="thumbnail"
                      className="capitalize flex justify-center items-center gap-2 rounded-md bg-rose-500 px-6 py-2 font-medium text-white hover:bg-opacity-90 cursor-pointer "
                    >
                      <FaImage /> Select an image for thumbnail
                    </label>
                  </div>
                )}
              />
              {errors.thumbnail && <p>{errors.thumbnail.message}</p>}

              {/* Display the selected thumbnail images */}
              <div className="flex flex-wrap gap-5 my-3">
                {selectedImagesThumbnail.length > 0 ? (
                  selectedImagesThumbnail.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      width={150}
                      height={300}
                      alt={`Selected ${index}`}
                    />
                  ))
                ) : (
                  <div className="text-center flex justify-center items-center gap-3">
                    <FaImage />
                    <p>No Image Selected</p>
                  </div>
                )}
              </div>
            </div>

            {!isUpdate && (
              <>
                <div className="border-2 flex flex-col items-center p-3 min-h-[15.3rem] border-black/40 w-full">
                  <Controller
                    name="gallery"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <input
                          type="file"
                          id="gallery"
                          multiple
                          ref={fileInputRef}
                          onChange={(e) => {
                            field.onChange(e.target.files);
                            e.target.files &&
                              handleFileChangeGallery(e.target.files);
                          }}
                          className="hidden"
                        />
                        <label
                          htmlFor="gallery"
                          className="capitalize flex justify-center items-center gap-2 rounded-md bg-rose-500 px-6 py-2  font-medium text-white hover:bg-opacity-90 cursor-pointer"
                        >
                          <FaImages /> Select images for gallery
                        </label>
                      </div>
                    )}
                  />
                  {errors.gallery && <p>{errors.gallery.message}</p>}

                  {/* Display the selected gallery images */}
                  <div className="flex flex-wrap gap-5 my-3">
                    {selectedImagesGallery.length > 0 ? (
                      selectedImagesGallery.map((img, index) => (
                        <Image
                          key={index}
                          src={img}
                          width={150}
                          height={300}
                          alt={`Selected ${index}`}
                        />
                      ))
                    ) : (
                      <div className="text-center flex justify-center items-center gap-3">
                        <FaImage />
                        <p>No Image Selected</p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-end gap-5 mt-5">
            {isUpdate && (
              <button
                onClick={deleteAbout}
                className="capitalize flex rounded-md bg-rose-500 px-6 py-2 text-center font-medium text-white hover:bg-opacity-90"
              >
                Delete post
              </button>
            )}
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

export default PostForm;
