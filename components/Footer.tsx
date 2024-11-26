import React from "react";
import mail from "../public/mail.svg";
import insta from "../public/insta.svg";
import discord from "../public/discord.svg";
import { Mynerve } from "next/font/google";
import cc from "../public/cc.svg";
import Image from "next/image";

const mynerve= Mynerve({subsets:["latin"], weight:["400"]});

const Footer = () => {
  return (
    <div className="w-screen h-full p-5 bg-custom-bottom flex flex-col items-center">
      <div className="custom-screen-width rounded-lg bg-custom-footer-bg p-5 flex flex-col items-center">
        <div className="flex flex-col items-center" style={{ width: "80%" }}>
          <p className="textHighlight-shadow pb-2 font-bold">
            I am Jey, hope you liked my editing style. It’s always pleasure to
            work with you!
          </p>
          <div className="footer-divider"></div>
          <div className="flex justify-between pl-5 w-full pt-5">
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
            <div className="w-66 flex flex-col gap-3">
                <input type="text" placeholder="your feedback is valuable" className="w-full pl-3 py-3 rounded-lg text-black"/>
                <div className="flex justify-between items-center">
                    <div></div>
                    <div className="bg-custom-card-bg px-6 py-2 rounded-lg">
                        save
                    </div>
                </div>
            </div>
          </div>
          <div className={`w-full flex items-center justify-center gap-5 ${mynerve.className}`}>
            <Image src={cc} width={20} height={20} alt="copy-rights"/>
            <p className="textHighlight-shadow">All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
