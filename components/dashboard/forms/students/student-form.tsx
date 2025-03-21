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
import DateInput from "@/components/FormInputs/DateInput";
import PhoneInput from "@/components/FormInputs/PhoneInput";
import { Phone } from "lucide-react";
import CountrySelectInput from "@/components/FormInputs/CountrySelectInput";

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
  country: string;
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
  const gender = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
  ];

  const [selectedGender, setSelectedGender] = useState<any>(null);
  const defaultCountry = {
    name: "India",
    code: "IN",
    dialCode: "+91",
  };
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  // Handler for country change
  const handleCountryChange = (country: {
    name: string;
    code: string;
    dialCode: string;
  }) => {
    setSelectedCountry(country);
    setValue("country", country.name); // Update form value
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<StudentProps>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      imageUrl: "",
      country: "",
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

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              <TextInput
                register={register}
                errors={errors}
                label="Student First Name"
                name="firstName"
                type="text"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Student Last Name"
                name="lastName"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              <FormSelectInput
                label="Parent"
                options={parents}
                option={selectedParent}
                setOption={setSelectedParent}
                toolTipText={"Add new Parent"}
                href={"/dashboard/parents/new"}
              />

              <DateInput
                register={register}
                errors={errors}
                label="Date of Birth"
                name="dob"
                toolTipText="Please enter your date of birth."
                placeholder="Select a date"
              />
              <FormSelectInput
                isSearchable={false}
                label="Gender"
                options={gender}
                option={selectedGender}
                setOption={setSelectedGender}
                toolTipText={"Select Gender"}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              <PhoneInput
                register={register}
                errors={errors}
                label="Phone Number"
                name="phone"
                placeholder="Eg. 09xx 845x 67"
                icon={Phone}
                toolTipText="Enter your phone number with country code"
                selectedCountry={selectedCountry}
                onCountryChange={handleCountryChange}
              />
              <CountrySelectInput
                label="Country"
                selectedCountry={selectedCountry}
                onChange={handleCountryChange}
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Student Password"
                name="password"
                type="password"
                toolTipText="This password is for students"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <FormSelectInput
                label="Class"
                options={classes}
                option={selectedClass}
                setOption={setSelectedClass}
                toolTipText={"Add class"}
                href={"/dashboard/academics/classes/new"}
              />
              <FormSelectInput
                label="Section"
                options={sections}
                option={selectedSections}
                setOption={setSelectedSections}
                toolTipText={"Add new Section"}
                href={"/dashboard/academics/sections/new"}
              />
            </div>

            <div className="grid gap-3 text-left">
              <TextArea
                register={register}
                errors={errors}
                label="Description"
                name="description"
              />
            </div>
            <div className="grid">
              <ImageInput
                title="Category Image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="categoryImage"
              />
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        href="/students"
        editingId={editingId}
        loading={loading}
        title="Category"
        parent=""
      />
    </form>
  );
}
