import { ErrorMessage, Field, Formik, Form } from "formik";
import ContactCard from "./ContactCard";
import axios from "axios";
import * as Yup from "yup";

export default function Massage() {
  const handlsubmit = (value) => {
    let url = "https://bookstore.eraasoft.pro/api/contacts/store";
    let data = {
      name: value.name,
      email: value.email,
      subject: value.subject,
      message: value.message,
    };

    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        toast.success("Your message has been sent");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.error?.message);
      });
  };

  const validation = Yup.object({
    email: Yup.string().required().email(),
    name: Yup.string().required(),
    subject: Yup.string().required(),
    message: Yup.string().required(),
  });
  return (
    <div className="w-[1096px] h-[554px] flex gap-[192px]">
      <div className="w-[592px] h-full">
        <h2 className="font-open font-bold text-[40px] text-white">
          Have a Questions? <br /> Get in Touch
        </h2>
        <p className="font-open font-normal text-white/50 text-[18px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </p>
        <Formik
          onSubmit={handlsubmit}
          initialValues={{ name: "", email: "", message: "", subject: "" }}
          validationSchema={validation}
        >
          <Form className="w-full h-[422px] flex flex-col items-center  mt-15">
            <div className="w-full h-13.5 flex justify-between">
              <div className="flex gap-2 flex-col">
                <Field
                  name="name"
                  type="text"
                  className="w-70 h-full rounded-lg input text-white font-open font-normal text-[16px]  border border-white/20 bg-transparent placeholder:text-white/50"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component={"p"}
                  className="font-sans font-semibold text-[16px] text-red-400"
                />
              </div>
              <div className="flex-col flex gap-2">
                <Field
                  name="email"
                  type="email"
                  className="w-70 h-full rounded-lg input text-white font-open font-normal text-[16px]  border border-white/20 bg-transparent placeholder:text-white/50"
                  placeholder="Email Address"
                />
                <ErrorMessage
                  name="email"
                  component={"p"}
                  className="font-sans font-semibold text-[16px] text-red-400"
                />
              </div>
            </div>
            <Field
              name="subject"
              type="text"
              className="w-full h-13.5 mt-6 rounded-lg input text-white font-open font-normal text-[16px]  border border-white/20 bg-transparent placeholder:text-white/50 "
              placeholder="Subject"
            />
            <ErrorMessage
              name="subject"
              component={"p"}
              className="font-sans font-semibold text-[16px] text-red-400 mt-2"
            />
            <Field
              name="message"
              type="text"
              className="w-full h-[152px] mt-6 rounded-lg input text-white font-open font-normal text-[16px]  border border-white/20 bg-transparent placeholder:text-white/50 "
              placeholder="Your Message"
            />

            <ErrorMessage
              name="message"
              component={"p"}
              className="font-sans font-semibold text-[16px] text-red-400 mt-2"
            />
            <button
              type="submit"
              className="w-[200px] h-[48px] rounded-lg bg-[#D9176C] font-open font-semibold text-white text-[18px] flex justify-center items-center mt-10"
            >
              Send Message
            </button>
          </Form>
        </Formik>
      </div>
      <ContactCard />
    </div>
  );
}
