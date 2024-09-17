import React from "react";
import { NavLink } from 'react-router-dom'
import trainImg from "../assets/Train.jpg";
import biruMiring from "../assets/blueMiring.svg"
import grayMiring from "../assets/grayMiring.svg"
import trainSkeleton from "../assets/trainSkeloton.svg"
import clockSkeleton from "../assets/clockSkeleton.svg"
import ticketSkeleton from "../assets/ticketSkeloton.svg"
import Layout from "../pages/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="w-2/3  ">
          <img
            className="w-full h-96 object-cover object-bottom shadow-lg opacity-90 "
            src={trainImg}
            alt=""
          />
        </div>
        <div className="my-auto z-20">
          <p className="w-80 font-bold italic text-2xl h-40 text-center flex items-center -ml-20 ">
            LRT PALEMBANG SIAP MEMBANTU ANDA
          </p>
          <p className="absolute w-80 font-bold italic text-2xl h-40 text-center flex items-center -ml-[77px] -mt-[157px] opacity-25">
            LRT PALEMBANG SIAP MEMBANTU ANDA
          </p>
        </div>
      </div>
      {/* end isi */}
      
      {/* footer start */}
        <div className="flex">
            <div className="flex ">
                <NavLink to={'/rute'} className="flex ml-[200px] mt-[40px] w-fit">
                    <img className="-mr-[24px]" src={biruMiring} alt="" />
                    <img className="-mt-[18px]" src={grayMiring} alt="" />
                    <img className="absolute w-[25px] mt-2 ml-[50px]" src={trainSkeleton} alt=""/>
                    <a className="px-[60px] py-2 my-auto relative -ml-[178px] font-semibold hover:text-sky-800" href='#'>Rute</a>
                </NavLink>
                <NavLink to={'/jadwal'} className="flex mt-[40px] w-fit">
                    <img className="-mr-[24px]" src={biruMiring} alt="" />
                    <img className="-mt-[16px]" src={grayMiring} alt="" />
                    <img className="absolute w-[25px] mt-2 ml-[50px]" src={clockSkeleton} alt=""/>
                    <a className="px-[60px] py-2 my-auto relative -ml-[185px] font-semibold hover:text-sky-800" href='#'>Jadwal</a>
                </NavLink>
                <NavLink to={'/tiket'} className="flex mt-[40px] w-fit">
                    <img className="-mr-[25px]" src={biruMiring} alt="" />
                    <img className="-mt-[16px]" src={grayMiring} alt="" />
                    <img className="absolute w-[25px] mt-2 ml-[50px]" src={ticketSkeleton} alt=""/>
                    <a className="px-[48px] py-2 my-auto relative -ml-[180px] font-semibold hover:text-sky-800" href='#'>Pesan tiket</a>
                </NavLink>
            </div>
            <div className="absolute mx-auto font-poppins font-bold text-xl mt-12 right-10">
              <p className="px-10">Senin - Minggu</p>
              <p className="">Pukul 06.00 - 18.45 WIB</p>
            </div>
        </div>
    </Layout>
  );
};

export default HomePage;
