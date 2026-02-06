import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { domain } from "..";

export default function AddCode() {
  let nav = useNavigate();
  const handlsubmit = (value) => {
    let url = domain + "/forget-password";

    axios
      .post(url, {
        email: value.email,
      })
      .then((res) => {
        console.log(res);
        toast.success("Password reset email sent");
        nav("/reset-password");
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };

  const validation = Yup.object({
    otp: Yup.array()
      .of(Yup.string().matches(/^[0-9]$/, "Must be a digit"))
      .length(4, "Must be exactly 4 digits"),
  });

  return (
    <div className="w-full h-[1260px] flex justify-center ">
      <div className="w-[480px] h-[310px] mt-15 flex items-center justify-center flex-col">
        <p className="font-sans text-[16px] text-[#D9176C] ">
          Reset your password!
        </p>
        <p className="font-open font-normal text-[14px] text-[#222222]/50 mt-4 leading-[21.75px]">
          Enter the 4 dights code that you received on your email
        </p>

        <Formik
          initialValues={{ otp: ["", "", "", ""] }}
          onSubmit={handlsubmit}
          validationSchema={validation}
        >
          {({ values, setFieldValue }) => (
            <Form className="w-full h-full mt-10 flex items-center  flex-col gap-6 ">
              <div className="w-[312px] h-[60px] flex items-center gap-6">
                {values.otp.map((digit, index) => (
                  <Field
                    key={index}
                    name={`otp[${index}]`}
                    type="text"
                    maxLength="1"
                    className={`w-15 h-15 text-center text-lg font-open text-[#000000] font-semibold
                 border  rounded-[12px]
                 focus:outline-none focus:ring-2 ${digit ? "border-[#222222]" : "border-[#222222]/30"} `}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (!/^\d?$/.test(value)) return;

                      setFieldValue(`otp[${index}]`, value);

                      if (value && index < 3) {
                        document.getElementById(`otp-${index + 1}`).focus();
                      }
                    }}
                    id={`otp-${index}`}
                  />
                ))}
              </div>
              <ErrorMessage
                name="otp"
                component="div"
                className="text-red-500"
              />
              <button
                type="submit"
                className="w-[312px] h-[48px] mt-10 bg-[#D9176C] rounded-lg text-[16px] font-sans font-semibold text-white text-center"
              >
                Reset password
              </button>
              <p className="font-open font-normal text-[16px] text-[#222222]">
                Didn’t receive a code?{" "}
                <Link
                  onClick={() => nav("/reset-password")}
                  to={"/add-code"}
                  className="text-[#D9176C]"
                >
                  Send again
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
