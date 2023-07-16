import React from "react";
import pic from "../images/github_logo.png";
import pic1 from "../images/linkedin_logo.png";
import pic2 from "../images/mail_logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-800">
        <div className="row pb-8">
          <div className="col-4 text-neutral-300	text-4xl p-4 font-momo tracking-tighter	font-mono">
            Socials
          </div>
          <div className="col-8">
            <div className="row py-4 flex justify-end items-end">
              <div className="col-1">
                <a href="https://github.com/fatma-sia27">
                  <img src={pic} alt="" width="50px" />
                </a>
              </div>
              <div className="col-1">
                <a href="https://www.linkedin.com/in/aasia-fatma-7630b71bb/">
                  <img src={pic1} alt="" width="45px" />
                </a>
              </div>
              <div className="col-2">
                <a href="fatma.sia2020@gmail.com">
                  <img src={pic2} alt="" width="60px" />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;