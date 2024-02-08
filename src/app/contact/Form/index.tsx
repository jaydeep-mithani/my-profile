"use client";

import { ReactNode, SyntheticEvent, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

import emailjs from "@emailjs/browser";
import styles from "./contactForm.module.css";
import Loader from "@/components/Loader";
import Dialogue from "@/components/Dialogue";
import {
  faBug,
  faClipboardList,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

interface formDataInterface {
  fullname: string;
  email: string;
  subject: string;
  msg: string;
}

const ContactForm = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDialogue, setShowDialogue] = useState<{
    visible: boolean;
    message: string | ReactNode;
    title: string;
  }>({
    visible: false,
    message: "",
    title: "",
  });
  const [formData, setFormData] = useState<formDataInterface>({
    fullname: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [formError, setFormError] = useState<formDataInterface>({
    fullname: "",
    email: "",
    subject: "",
    msg: "",
  });

  //Name validation
  const handleNameChange = (e: any) => {
    const { value } = e.target;
    setFormData({ ...formData, fullname: value });

    if (value === "")
      setFormError({ ...formError, fullname: "Please enter your name below." });
    else if (value.length < 3)
      setFormError({
        ...formError,
        fullname: "Name should be 3 or more characters.",
      });
    else setFormError({ ...formError, fullname: "" });
  };

  //Email validation
  const handleEmailChange = (e: any) => {
    const { value } = e.target;
    setFormData({ ...formData, email: value });

    if (value === "")
      setFormError({
        ...formError,
        email: "Please enter your email address below.",
      });
    else if (
      !value
        .trim()
        .toLowerCase()
        .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    )
      setFormError({
        ...formError,
        email: "Below email is invalid. Please enter a valid email address.",
      });
    else setFormError({ ...formError, email: "" });
  };

  //Subject Validation
  const handleSubjectChange = (e: any) => {
    const { value } = e.target;
    setFormData({ ...formData, subject: value });

    if (value === "")
      setFormError({ ...formError, subject: "Please mention a subject" });
    else setFormError({ ...formError, subject: "" });
  };

  //Massage Validation
  const handleMessageChange = (e: any) => {
    const { value } = e.target;
    setFormData({ ...formData, msg: value });

    if (value === "")
      setFormError({
        ...formError,
        msg: "Please add a message regarding the subject.",
      });
    else if (value.trim().split(" ").length < 11)
      setFormError({
        ...formError,
        msg: "Please elaborate the details a little...",
      });
    else setFormError({ ...formError, msg: "" });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(formRef.current);

    if (
      formError.email === "" &&
      formError.fullname === "" &&
      formError.msg === "" &&
      formError.subject === "" &&
      formData.email !== "" &&
      formData.fullname !== "" &&
      formData.msg !== "" &&
      formData.subject !== ""
    ) {
      setIsLoading(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID + "",
          process.env.NEXT_PUBLIC_TEMPLATE_ID_MESSAGE + "",
          formRef.current ? formRef.current : "",
          {
            publicKey: process.env.NEXT_PUBLIC_KEY + "",
          }
        )
        .then(
          () => {
            emailjs
              .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID + "",
                process.env.NEXT_PUBLIC_TEMPLATE_ID_ACKNOWLEDGE + "",
                formRef.current ? formRef.current : "",
                {
                  publicKey: process.env.NEXT_PUBLIC_KEY + "",
                }
              )
              .then(
                () => {
                  setIsLoading(false);
                  setShowDialogue({
                    visible: true,
                    message: (
                      <div className="flex items-center justify-center gap-4 w-full flex-col md:flex-row px-6">
                        <div>
                          <FontAwesomeIcon
                            className="text-green-500 text-4xl md:text-6xl"
                            icon={faCircleCheck}
                            bounce
                          />
                        </div>
                        <div className="text-xl md:text-2xl font-semibold text-center">
                          I have recieved your message.
                        </div>
                      </div>
                    ),
                    title: "Thank You!",
                  });
                  setFormData({
                    fullname: "",
                    email: "",
                    subject: "",
                    msg: "",
                  });
                },
                (error) => {
                  setIsLoading(false);
                  setShowDialogue({
                    visible: true,
                    message: (
                      <div className="flex items-center justify-center gap-4 w-full flex-col md:flex-row px-6">
                        <div>
                          <FontAwesomeIcon
                            className="text-[#ff9c1a] text-4xl md:text-6xl"
                            icon={faTriangleExclamation}
                            beatFade
                          />
                        </div>
                        <div className="text-xl md:text-2xl font-semibold text-center">
                          I couldn't send you an acknoledgement, but rest
                          assured, I've recieved your message.
                        </div>
                      </div>
                    ),
                    title: "Oops!",
                  });
                  setFormData({
                    fullname: "",
                    email: "",
                    subject: "",
                    msg: "",
                  });
                  console.log("ERROR MESSAGE:", error);
                }
              );
          },
          (error) => {
            setIsLoading(false);
            setShowDialogue({
              visible: true,
              message: (
                <div className="flex items-center justify-center gap-4 w-full flex-col md:flex-row px-6">
                  <div>
                    <FontAwesomeIcon
                      className="text-[red] text-4xl md:text-6xl"
                      icon={faBug}
                      beatFade
                    />
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-center">
                    I'm looking into it, meanwhile please use another contact
                    method. Thank you!
                  </div>
                </div>
              ),
              title: "I apologise, Something went wrong.",
            });
            setFormData({
              fullname: "",
              email: "",
              subject: "",
              msg: "",
            });
            console.log("ERROR MESSAGE:", error);
          }
        );
    } else {
      setShowDialogue({
        visible: true,
        message: (
          <div className="flex items-center justify-center gap-4 w-full flex-col md:flex-row px-6">
            <div>
              <FontAwesomeIcon
                className="text-[#ff9c1a] text-4xl md:text-6xl"
                icon={faClipboardList}
                shake
              />
            </div>
            <div className="text-xl md:text-2xl font-semibold text-center">
              Please check if all the details are correctly filled.
            </div>
          </div>
        ),
        title: "Something doesn't seem right.",
      });
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      {showDialogue.visible && (
        <Dialogue
          title={showDialogue.title}
          onClose={() =>
            setShowDialogue({ visible: false, message: "", title: "" })
          }
        >
          {showDialogue.message}
        </Dialogue>
      )}
      <form ref={formRef} action="" onSubmit={handleSubmit} noValidate>
        <div className="px-3 py-2 rounded-xl mb-5 bg-[#f8f4f1]">
          <div className="font-semibold flex items-center gap-3">
            <h5>Name</h5>
            <h6 className="text-[#ff9951] text-sm font-bold">
              {formError.fullname}
            </h6>
          </div>
          <div className={`relative w-full ${styles.inp}`}>
            <input
              className="px-2 py-1 bg-transparent outline-none w-full placeholder:text-[#00000055] placeholder:font-medium"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="enter your full name"
              value={formData.fullname}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="px-3 py-2 rounded-xl mb-5 bg-[#f8f4f1]">
          <div className="font-semibold flex items-center gap-3">
            <h5>Email</h5>
            <h6 className="text-[#ff9951] text-sm font-bold">
              {formError.email}
            </h6>
          </div>
          <div className={`relative w-full ${styles.inp}`}>
            <input
              className="px-2 py-1 bg-transparent outline-none w-full placeholder:text-[#00000055] placeholder:font-medium"
              type="email"
              name="email"
              id="email"
              placeholder="enter your email address"
              value={formData.email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="px-3 py-2 rounded-xl mb-5 bg-[#f8f4f1]">
          <div className="font-semibold flex items-center gap-3">
            <h5>Subject</h5>
            <h6 className="text-[#ff9951] text-sm font-bold">
              {formError.subject}
            </h6>
          </div>
          <div className={`relative w-full ${styles.inp}`}>
            <input
              className="px-2 py-1 bg-transparent outline-none w-full placeholder:text-[#00000055] placeholder:font-medium"
              type="text"
              name="subject"
              id="subject"
              placeholder="enter the message subject"
              value={formData.subject}
              onChange={handleSubjectChange}
            />
          </div>
        </div>
        <div className="px-3 py-2 rounded-xl mb-5 bg-[#f8f4f1]">
          <div className="font-semibold flex items-center gap-3">
            <h5>Message</h5>
            <h6 className="text-[#ff9951] text-sm font-bold">
              {formError.msg}
            </h6>
          </div>
          <div className={`relative w-full ${styles.inp}`}>
            <textarea
              className="px-2 py-1 bg-transparent outline-none w-full placeholder:text-[#00000055] placeholder:font-medium"
              name="msg"
              id="msg"
              rows={5}
              placeholder="please write a message I'll be glad to hear it"
              value={formData.msg}
              onChange={handleMessageChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded-full flex items-center justify-center gap-2 w-full lg:w-auto theme-gradient"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          <span>Send</span>
        </button>
      </form>
    </>
  );
};

export default ContactForm;
