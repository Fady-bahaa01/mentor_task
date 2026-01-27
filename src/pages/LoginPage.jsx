import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SocialButtons from "../components/SocialButtons";

export default function LoginPage() {
  let nav = useNavigate();
  const handlsubmit = (value) => {
    let domain = "http://localhost:1337";
    let end = "/api/auth/local";
    let url = domain + end;

    let data = {
      identifier: value.email,
      password: value.password,
    };

    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        toast.success("login sucess");
        const token = res.data.jwt;
        value.checkbox
          ? localStorage.setItem("token", token)
          : sessionStorage.setItem("token", token);
        nav("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.error?.message);
      });
  };

  const validation = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  return (
    <div className="w-full h-[1480px] flex justify-center ">
      <div className="w-xl h-159 mt-15 flex items-center justify-center flex-col">
        <p className="font-sans text-[16px text-[#D9176C] ">Welcome Back!</p>

        <Formik
          initialValues={{ email: "", password: "", checkbox: false }}
          onSubmit={handlsubmit}
          validationSchema={validation}
        >
          <Form className="w-full h-[448px] mt-10 flex  flex-col gap-6 ">
            <div>
              <label
                htmlFor=""
                className="font-sans font-semibold text-[#222222] text-[18px]"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full h-[54px] rounded-lg input text-black font-open font-normal text-[16px] border border-[#222222]/20 bg-white placeholder:text-[#22222280]/50 "
              />
              <ErrorMessage
                name="email"
                component={"p"}
                className="font-sans font-semibold text-[16px] text-red-400"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-sans font-semibold text-[#222222] text-[18px] mb-6"
              >
                Password
              </label>
              <Field
                name="password"
                type="password"
                placeholder="Enter password"
                className="w-full h-[54px] rounded-lg text-black font-open font-normal text-[16px] input border border-[#222222]/20 bg-white placeholder:text-[#22222280]/50"
              />
              <ErrorMessage
                name="password"
                component={"p"}
                className="font-sans font-semibold text-[16px] text-red-400"
              />
            </div>
            <div className="w-full mt-4 flex justify-between">
              <div className=" flex gap-2">
                <Field
                  type="checkbox"
                  name="checkbox"
                  className="checkbox checkbox-error"
                />
                <p className="font-sans text-[14px] text-[#222222] leading-[21.75px]  ">
                  Remember me
                </p>
              </div>
              <Link className="font-sans font-normal text-[16] text-[#D9176C] leading-[21.75px]">
                Forget password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-[48px] bg-[#D9176C] rounded-lg text-[16px] font-sans font-semibold text-white text-center"
            >
              Log in
            </button>

            <div className="w-full flex justify-center items-center mt-10">
              <div>
                <p className="font-sans text-[16px] leading-[21.75px] font-normal text-[#222222]">
                  Don’t have an account?{" "}
                  <span className="font-sans text-[16px] leading-[21.75px] font-semibold text-[#D9176C]">
                    <Link to={"/register"}>Signup</Link>
                  </span>
                </p>
              </div>
            </div>
          </Form>
        </Formik>
        <div className="w-xl flex flex-col items-center h-[148px] mt-[40px]">
          <p className="font-open font-normal text-[14px] text-black/50 leading-[19.5px]">
            or
          </p>
          <div className="w-full h-[104px] mt-6 flex flex-col gap-3">
            <SocialButtons
              icon="https://www.svgrepo.com/show/475656/google-color.svg"
              text="Login with Google"
            />
            <SocialButtons
              icon="https://www.svgrepo.com/show/475647/facebook-color.svg"
              text="Login with Facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
