import React from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginValidation } from "../shared/validation/userValidation";
import Toast from "../components/Toast";
import { signIn } from "../api";
import { Input } from "../shared/input";
import { InlineError } from "../shared/Notification/Error";
import { FiLogIn } from "react-icons/fi";
import { useMutation } from "react-query";
function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidation),
  });
  const mutation = useMutation(signIn, {
    onSuccess: async () => {
      Toast({ message: "Welcome to !", type: "SUCCESS" });
      navigate("/");
    },
    onError: (error) => {
      console.error("Login Error:", error);
      const errorMessage = error.response?.data?.message || "An error occurred";
      Toast({ message: errorMessage, type: "ERROR" });
    },
  });
  //on submit
  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  return (
    <Layout>
      <div className="container mx-auto px-2 flex-colo">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border"
        >
          <img
            src="/images/logo1.png"
            alt="logo"
            className="w-full h-12 object-contain "
          />
          <div className="w-full">
            <Input
              label="Email"
              type="email"
              name="email"
              register={register("email")}
            />
            {errors.email && <InlineError text={errors.email.message} />}
          </div>

          <div className="w-full">
            <Input
              label="Password"
              type="password"
              name="password"
              register={register("password")}
            />
            {errors.password && <InlineError text={errors.password.message} />}
          </div>
          <div className="w-full flex justify-end my-[-12px]">
            <Link
              to={"/forgotPass"}
              className="justify-end mr-2 text-subMain text-sm hover:underline hover:text-gold"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-2 rounded-lg w-full"
          >
            <>
              <FiLogIn />
              Sign In
            </>
          </button>
          <div className="flex gap-3 w-full py-2 border-gray-600 border-2 rounded-lg justify-center items-center bg-white text-gray-400 hover:bg-dry ">
            <img
              className="h-5 w-5 object-cover"
              src="/images/google.png"
              alt="login with google"
            />
            Sign In with Google
          </div>
          <p className="text-center text-border">
            Don't have an account?
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;
