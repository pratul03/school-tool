"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomCarousel from "../custom-carousel";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import Logo from "@/components/Logo";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import { KeySquare, MailIcon } from "lucide-react";

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};
export default function LoginPageComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const router = useRouter();
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="absolute mt-10 md:mt-0 left-1/4 top-5 md:left-5">
            <Logo className="font-bold" size="xl" />
          </div>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold mt-[100px] md:mt-0 text-muted-foreground">
              Login to you account
            </h1>
          </div>
          <form
            className="grid gap-4 mx-5 md:mx-2 mt-3 md:mt-0"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. johndoe@gmail.com"
              icon={MailIcon}
            />

            <PasswordInput
              label="Password"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="*********"
              forgotPasswordLink="/forgot-password"
              icon={KeySquare}
            />

            <SubmitButton
              title="Login"
              loading={isLoading}
              loadingTitle="Logging please wait..."
            />
          </form>
          <div className="mt-4 text-center text-sm">
            Create a account real quick!{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
