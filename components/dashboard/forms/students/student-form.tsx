"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import FormHeader from "../FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextAreaInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import FormFooter from "../FormFooter";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import FormSelectInput from "@/components/FormInputs/FormSelectInput";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};

export type StudentProps = {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
};
export default function SingleStudentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {
  const parents = [
    {
      label: "John Doe",
      value: "123456",
    },
    {
      label: "Allan Smith",
      value: "1233556",
    },
  ];
  const [selectedParent, setSelectedParent] = useState<any>(null);

  const classes = [
    {
      label: "S1",
      value: "123456",
    },
    {
      label: "S2",
      value: "122456",
    },
  ];

  const [selectedClass, setSelectedClass] = useState<any>(null);

  const sections = [
    {
      label: "S1A",
      value: "123456",
    },
    {
      label: "S1B",
      value: "123356",
    },
    {
      label: "S2A",
      value: "122456",
    },
    {
      label: "S2B",
      value: "122256",
    },
  ];

  const [selectedSections, setSelectedSections] = useState<any>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentProps>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      imageUrl: "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/placeholder.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: StudentProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      if (editingId) {
        setLoading(false);
        toast.success("Updated Successfully!");
        reset();
        router.push("/dashboard/student");
        setImageUrl("/placeholder.svg");
      } else {
        setLoading(false);
        toast.success("Successfully Created!");
        reset();
        setImageUrl("/placeholder.svg");
        router.push("/dashboard/student");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="max-w-full" onSubmit={handleSubmit(saveStudent)}>
      <FormHeader
        href="/students"
        parent=""
        title="Student"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 py-8">
        <div className="sm:col-span-8 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Student Name"
                name="name"
                type="text"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
                type="email"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Date of Birth"
                name="dob"
                type="date"
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Password"
                name="password"
                type="password"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <FormSelectInput
                label="Parent"
                options={parents}
                option={selectedParent}
                setOption={setSelectedParent}
                toolTipText={"Add new Parent"}
                href={"/dashboard/parents/new"}
              />
              <FormSelectInput
                label="Class"
                options={classes}
                option={selectedClass}
                setOption={setSelectedClass}
                toolTipText={"Add class"}
                href={"/dashboard/academics/classes/new"}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <FormSelectInput
                label="Section"
                options={sections}
                option={selectedSections}
                setOption={setSelectedSections}
                toolTipText={"Add new Section"}
                href={"/dashboard/academics/sections/new"}
              />
            </div>
            <div className="grid gap-3">
              <TextArea
                register={register}
                errors={errors}
                label="Description"
                name="description"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 col-span-full">
          <div className="grid auto-rows-max items-start gap-4">
            <ImageInput
              title="Category Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="categoryImage"
            />
          </div>
        </div>
      </div>
      <FormFooter
        href="/categories"
        editingId={editingId}
        loading={loading}
        title="Category"
        parent=""
      />
    </form>
  );
}
