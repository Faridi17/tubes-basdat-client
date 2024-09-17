import React from "react";
import trainImg from "../assets/Train.jpg";
import keretaMini from "../assets/Frame.svg"
import Layout from "../pages/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container w-full box-border h-screen font-sans">
        <div className="flex ">
          <div className="w-2/3">
            <img
              className="w-full h-96 object-cover object-bottom shadow-lg opacity-90 "
              src={trainImg}
              alt=""
            />
          </div>
          <div className="my-auto z-20">
            <p className="w-80 font-bold italic text-3xl h-40 text-center flex items-center -ml-20 mt-20 ">
              LRT PALEMBANG SIAP MEMBANTU ANDA
            </p>
            <p className="absolute w-80 font-bold italic text-3xl h-40 text-center flex items-center -ml-[78px] -mt-[156px] opacity-25">
              LRT PALEMBANG SIAP MEMBANTU ANDA
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap w-60 mt-6 ml-10">
            <img className="w-12 h-12 mr-5" src={keretaMini} alt="" />
            <button className="my-auto -ml-4 py-1 px-3 rounded-full font-bold bg-sky-800 text-white hover:bg-sky-600">
              <a href="https://wa.me/+6283802890120/?text=Min+mau+nanya+nich" target="blank">Hubungi Kami</a>
            </button>
            <p className="mt-2 font-bold text-xl ml-4 ">083177152410</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
