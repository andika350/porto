import React from "react";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex justify-end p-2 text-center bg-teal-500 text-slate-200">
      <div className="flex text-md">
        <div className="mx-2 md:mx-3 ">
          <p>&copy;2023 Andika Satrio P.</p>
        </div>
        <a href="mailto:andikapangestu79@gmail.com">
          <AiOutlineMail className="mx-2 my-1" title="Email" />
        </a>
        <a href="https://wa.me/628569911838">
          <AiOutlineWhatsApp className="my-1" title="Whatsapp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
