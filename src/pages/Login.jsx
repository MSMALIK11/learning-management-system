import React, { useState } from "react";
import InputControl from "@/components/Fields/InputConrtrol";
import Heading from "@/components/Fields/Heading";
import Button from "@/components/Fields/Button";
import { useMutation } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
import { toast } from "react-toastify";
import faceBookIcon from "../assets/icons/facebook.svg";
import googleIcon from "../assets/icons/googlesvg.svg";
import api from "../services";
const Login = () => {
  const [isLoading, setIsloading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // // Mutations
  const mutation = useMutation({
    mutationFn: async () => await api.auth.login(formData),
    onSuccess: (data) => {
      const user = data.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      setIsloading(false);
      toast.success("Login Successfully ✌️");

      navigate("/");
    },
    onError: (error) => {
      const errorMessage = error.response.data.message;
      setIsloading(false);
      toast.error(errorMessage);
      console.error("Error::while user trying login", errorMessage);
    },
  });
  const handleChange = (name, value) => {
    // const { name, value } = event.target;
    // console.log(event);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    setIsloading(true);
    mutation.mutate();
  };
  return (
    <div className="h-screen bg-gray-300 flex items-center justify-center ">
      <div className="px-8 py-10 rounded-md w-[420px]  shadow-lg bg-white">
        <Heading title="Sign in " className=" !text-lg !text-gray-900" />
        <Heading
          title="to continue to Online Course Portal"
          className=" !text-lg !text-gray-400"
        />
        <div className="flex flex-col gap-4 mt-6 ">
          <div className="flex gap-4 border border-gray-200 hover:bg-gray-200 transition 0.2s cursor-pointer px-4 py-2 rounded-lg">
            <img src={faceBookIcon} alt="" />
            <p>Continue with Facebook</p>
          </div>
          <div className="flex gap-4 border border-gray-200 hover:bg-gray-200 transition 0.2s cursor-pointer px-4 py-2 rounded-lg">
            <img src={googleIcon} alt="" />
            <p>Continue with Googel</p>
          </div>
          <div className="crossLine"></div>
        </div>
        <div className="flex flex-col gap-3">
          <InputControl
            label="Email"
            name="email"
            placeholder="Enter Email.."
            onChange={handleChange}
          />
          <InputControl
            label="Password"
            placeholder="Enter Password.."
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end">
          <Button
            label="Continue"
            onClick={handleSubmit}
            className={"gradient-btn h-[40px] w-full mt-6 "}
          />
        </div>
        <h1 className="text-sm mt-6">
          No Account?
          <NavLink className="text-blue-500 ms-1" to="/register">
            Sign up
          </NavLink>
        </h1>
      </div>
      <Loader isVisible={isLoading} />
    </div>
  );
};

export default Login;
