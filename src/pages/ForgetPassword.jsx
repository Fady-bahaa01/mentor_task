import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { domain } from "..";

export default function ForgetPassword() {
  let nav = useNavigate();
  const handlsubmit = (value) => {
    let url = domain + "/forget-password";

    let data = {
      email: value.email,
    };

    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        toast.success("Password reset email sent");
        nav("/add-code");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.error?.message);
      });
  };

  const validation = Yup.object({
    email: Yup.string().required().email(),
  });

  return (
    <div className="w-full h-[1260px] flex justify-center ">
      <div className="w-xl h-159 mt-15 flex items-center justify-center flex-col">
        <p className="font-sans text-[16px] text-[#D9176C] ">
          Forget Password?
        </p>
        <p className="font-open font-normal text-[14px] text-[#222222]/50 mt-4 leading-[21.75px]">
          Enter your email to reset your password
        </p>

        <Formik
          initialValues={{ email: "" }}
          onSubmit={handlsubmit}
          validationSchema={validation}
        >
          <Form className="w-full h-[275px] mt-10 flex  flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="font-sans font-semibold text-[#222222] text-[18px] "
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

            <button
              type="submit"
              className="w-full h-[48px] mt-10 bg-[#D9176C] rounded-lg text-[16px] font-sans font-semibold text-white text-center"
            >
              Send reset code
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
