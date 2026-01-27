import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SocialButtons from "../components/SocialButtons";

export default function RegisterPage() {
  const navigate = useNavigate();
  const handlsubmit = (values) => {
    let url = "http://localhost:1337/api/auth/local/register";

    let data = {
      username: `${values.firstname + values.lastname}`,
      email: values.email,
      password: values.password,
    };

    axios
      .post(url, data)
      .then((res) => {
        const token = res.data.jwt;
        toast.success("Register success");
        values.checkbox
          ? localStorage.setItem("token", token)
          : sessionStorage.setItem("token", token);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.error?.message);
      });
  };

  const validation = Yup.object({
    firstname: Yup.string().required("First name required"),
    lastname: Yup.string().required("Last name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().min(6, "Min 6 chars").required("Password required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password required"),
  });

  return (
    <div className="w-full h-370 flex justify-center ">
      <div className="w-xl h-198.75 mt-15 flex items-center justify-center flex-col">
        <p className="font-sans text-[16px text-[#D9176C] ">Welcome Back!</p>

        <Formik
          initialValues={{
            email: "",
            password: "",
            checkbox: false,
            firstname: "",
            lastname: "",
            confirmpassword: "",
          }}
          onSubmit={handlsubmit}
          validationSchema={validation}
        >
          <Form className="w-full h-[607px]  mt-10 flex  flex-col gap-6 ">
            <div className="flex gap-4 ">
              <div className="flex gap-2 flex-col">
                <label
                  htmlFor=""
                  className="font-sans font-semibold text-[#222222] text-[18px]"
                >
                  First name
                </label>
                <Field
                  name="firstname"
                  type="text"
                  className="w-70 h-13.5 rounded-lg input text-black font-open font-normal text-[16px]  border border-[#222222]/20 bg-white placeholder:text-[#22222280]/50"
                  placeholder="john"
                />
                <ErrorMessage
                  name="firstname"
                  component={"p"}
                  className="font-sans font-semibold text-[16px] text-red-400"
                />
              </div>
              <div className="flex-col flex gap-2">
                <label
                  htmlFor=""
                  className="font-sans font-semibold text-[#222222] text-[18px]"
                >
                  Last name
                </label>
                <Field
                  name="lastname"
                  type="text"
                  className="w-70 h-13.5 rounded-lg input bg-white text-black font-open font-normal text-[16px]  border border-[#222222]/20 placeholder:text-[#22222280]/50"
                  placeholder="smith"
                />
                <ErrorMessage
                  name="lastname"
                  component={"p"}
                  className="font-sans font-semibold text-[16px] text-red-400"
                />
              </div>
            </div>
            <div className="flex-col flex gap-2">
              <label
                htmlFor=""
                className="font-sans font-semibold text-[#222222] text-[18px]"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="examole@gmail.com"
                className="w-full h-13.5 rounded-lg input bg-white text-black font-open font-normal text-[16px]  border border-[#222222]/20 placeholder:text-[#22222280]/50"
              />
              <ErrorMessage
                name="email"
                component={"p"}
                className="font-sans font-semibold text-[16px] text-red-400"
              />
            </div>
            <div className="flex-col flex gap-2">
              <label
                htmlFor=""
                className="font-sans font-semibold text-[#222222] text-[18px] "
              >
                Password
              </label>
              <Field
                name="password"
                type="password"
                placeholder="Enter password"
                className="w-full h-13.5 rounded-lg input bg-white text-black font-open font-normal text-[16px]  border border-[#222222]/20 placeholder:text-[#22222280]/50"
              />
              <ErrorMessage
                name="password"
                component={"p"}
                className="font-sans font-semibold text-[16px] text-red-400"
              />
            </div>
            <div className="flex-col flex gap-2">
              <label
                htmlFor=""
                className="font-sans font-semibold text-[#222222] text-[18px] "
              >
                Confirm password
              </label>
              <Field
                name="confirmpassword"
                type="password"
                placeholder="Enter password"
                className="w-full h-13.5 rounded-lg input bg-white text-black font-open font-normal text-[16px] border border-[#222222]/20 placeholder:text-[#22222280]/50"
              />
              <ErrorMessage
                name="confirmpassword"
                component={"p"}
                className="font-sans font-semibold text-[16px] text-red-400"
              />
            </div>
            <div className="w-full  flex justify-between">
              <div className=" flex h-5.25 gap-2">
                <Field
                  type="checkbox"
                  name="checkbox"
                  className="checkbox checkbox-error"
                />
                <p className="font-sans text-[14px] text-[#222222] leading-[21.75px]  ">
                  Agree with{" "}
                  <span className="text-[#D9176C]">Terms & Conditions</span>
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[#D9176C] rounded-lg text-[16px] font-sans font-semibold text-white text-center"
            >
              Sign up
            </button>

            <div className="w-full flex justify-center items-center ">
              <div>
                <p className="font-sans text-[16px] leading-[21.75px] font-normal text-[#222222]">
                  Already have an account?{" "}
                  <span className="font-sans text-[16px] leading-[21.75px] font-semibold text-[#D9176C]">
                    <Link to={"../"}>Login</Link>
                  </span>
                </p>
              </div>
            </div>
          </Form>
        </Formik>
        <div className="w-xl flex flex-col items-center h-37 mt-10">
          <p className="font-open font-normal text-[14px] text-black/50 leading-[19.5px]">
            or
          </p>
          <div className="w-full h-26 mt-6 flex flex-col gap-3">
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
