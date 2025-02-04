"use client";
import React, { useState } from "react";
import mail from "../public/mail.svg";
import insta from "../public/insta.svg";
import discord from "../public/discord.svg";
import { Mynerve } from "next/font/google";
import cc from "../public/cc.svg";
import Image from "next/image";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const mynerve = Mynerve({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [content, setContent] = useState<string>(""); // Managed state for content
  const [name, setName] = useState<string>(""); // Managed state for name

  const handleFirst = () => {
    if (content.trim()) {
      setIsSubmit(true);
    } else {
      toast.error("Please provide some feedback.");
    }
  };

  const handleSecond = async () => {
    const toastId = toast.loading("Sending feedback...");
    if (!name.trim()) {
      toast.error("Please enter your name.", {id:toastId});
      return;
    }
    try {
      const response = await axios.post("/api/feedback", {
        name: name,
        content: content,
      });
      if (response.data.msg === "success") {
        toast.success("Sent successfully", {id:toastId});
        setIsSubmit(false); // Reset after successful submission
        setContent(""); // Clear the content
        setName(""); // Clear the name
      }
    } catch (error) {
      toast.error("Couldn't send!", {id:toastId});
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full p-5 bg-custom-bottom flex flex-col items-center">
      <div className="custom-screen-width rounded-lg bg-custom-footer-bg p-2 md:p-5 flex flex-col items-center">
        <div className="flex flex-col items-center" style={{ width: "90%" }}>
          <p className="textHighlight-shadow pb-2 font-bold text-center">
            I am Jey, hope you liked my editing style. It’s always a pleasure
            to work with you!
          </p>
          <div className="footer-divider"></div>
          <div className="flex flex-col md:flex-row md:justify-between pl-5 w-full pt-5 gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 w-auto">
                <Image src={mail} height={20} width={20} alt="mail" />
                <p>jeyshreemen.info@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 w-auto">
                <Image src={insta} height={20} width={20} alt="insta" />
                <p>jey_g_r</p>
              </div>
              <div className="flex items-center gap-2 w-auto">
                <Image src={discord} height={20} width={20} alt="discord" />
                <p>jey0061 #0</p>
              </div>
            </div>
            {!isSubmit ? (
              <div className="w-66 flex flex-col gap-3 py-5 md:py-0">
                <input
                  type="text"
                  placeholder="your feedback is valuable"
                  className="w-full pl-3 py-3 rounded-lg text-black"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <div className="flex justify-between items-center">
                  <div></div>
                  <div
                    className="bg-custom-card-bg px-6 py-2 rounded-lg cursor-pointer"
                    onClick={handleFirst}
                  >
                    Submit
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-66 flex flex-col gap-3 py-5 md:py-0">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full pl-3 py-3 rounded-lg text-black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="flex justify-between items-center">
                  <div
                    className="bg-custom-card-bg px-6 py-2 rounded-lg cursor-pointer"
                    onClick={() => setIsSubmit(false)}
                  >
                    Cancel
                  </div>
                  <div
                    className="bg-custom-card-bg px-6 py-2 rounded-lg cursor-pointer"
                    onClick={handleSecond}
                  >
                    Send
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`w-full flex items-center justify-center gap-5 ${mynerve.className}`}
          >
            <Image src={cc} width={20} height={20} alt="copy-rights" />
            <p className="textHighlight-shadow">All rights reserved</p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Footer;
