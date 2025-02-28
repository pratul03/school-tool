"use client";
import {
  BookCheck,
  Calculator,
  Globe,
  Link,
  MailIcon,
  PhoneCall,
  SearchCode,
  Send,
  UserSearchIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import TextArea from "../FormInputs/TextAreaInput";

const ContactUs: React.FC = () => {
  type RegisterInputProps = {
    fullName: string;
    email: string;
    password: string;
    phone: string;
  };
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-green-900 mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-8 pb-4">
          Streamline your processes and empower your team with our products.
          Effortlessly manage employee data, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 space-y-4">
            <div className="bg-green-800 text-white p-6 rounded-2xl">
              <h3 className="font-semibold text-xl mb-2">
                Speak to someone in sales
              </h3>
              <p className="text-sm mb-4 py-4">
                To create a more value-added solution, is essential to an
                analysis of the possibilities of improvement.
              </p>
              <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
                Book Appointment
              </button>
            </div>
            <div className="bg-lime-400 p-6 rounded-2xl">
              <h3 className="font-semibold mb-2 text-xl">
                Contact to our team
              </h3>
              <p className="text-sm mb-4 py-4">
                To create a more value-added solution, is essential to an
                analysis of the possibilities of improvement.
              </p>
              <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
                Send a Mail
              </button>
            </div>
          </div>

          <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">
              Sign up to get your school onboard
            </h3>
            <form
              className="grid gap-4 mx-5 md:mx-2 mt-3 md:mt-0"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextInput
                label="Full Name"
                register={register}
                name="name"
                type="text"
                errors={errors}
                placeholder="Eg. john doe"
                icon={MailIcon}
              />
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Email Address"
                  register={register}
                  name="email"
                  type="email"
                  errors={errors}
                  placeholder="Eg. johndoe@gmail.com"
                  icon={MailIcon}
                />
                <TextInput
                  label="Phone"
                  register={register}
                  name="phone"
                  type="tel"
                  errors={errors}
                  placeholder="Eg. +91 xxxxx xxxxx"
                  icon={PhoneCall}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Institute Name"
                  register={register}
                  name="institute"
                  type="text"
                  errors={errors}
                  placeholder="Rode Island Public School"
                  icon={BookCheck}
                />
                <TextInput
                  label="Country"
                  register={register}
                  name="country"
                  type="text"
                  errors={errors}
                  placeholder="Eg. India"
                  icon={Globe}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="School Website/Social Media Page(fb,linkedIn)"
                  register={register}
                  name="url"
                  type="url"
                  errors={errors}
                  placeholder="https://www.rips.com"
                  icon={Link}
                />
                <TextInput
                  label="Number of Students"
                  register={register}
                  name="students"
                  type="number"
                  errors={errors}
                  placeholder="Eg. 300"
                  icon={Calculator}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Your Role"
                  register={register}
                  name="role"
                  type="text"
                  errors={errors}
                  placeholder="Eg. Assistant Secretary"
                  icon={UserSearchIcon}
                />
                <TextInput
                  label="Product Interest(Which features are you looking for?)"
                  register={register}
                  name="features"
                  type="text"
                  errors={errors}
                  placeholder="Eg. Extra Carriculam Monitoring"
                  icon={SearchCode}
                />
              </div>
              <TextInput
                label="Product Interest(Which features are you looking for?)"
                register={register}
                name="features"
                type="text"
                errors={errors}
                placeholder="Eg. Extra Carriculam Monitoring"
                icon={SearchCode}
              />
              <TextArea
                label="How did you hear about us?"
                register={register}
                name="query"
                errors={errors}
              />
              <SubmitButton
                title="submit"
                loading={isLoading}
                loadingTitle="Logging please wait..."
                buttonIcon={Send}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
