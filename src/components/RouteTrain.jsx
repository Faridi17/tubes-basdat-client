import map from "../assets/map.png";
import React from "react";
import Layout from "../pages/Layout";


const Route = () => {
  return (
    <Layout>
      <div>
        <div className="flex flex-col items-center">
          <div>
            <p className="font-bold font-poppins py-2">RUTE</p>
          </div>
          <div>
            <img className="w-[400px] h-[400px]" src={map} alt="" />
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <div className="absolute mx-auto font-poppins font-bold text-xl right-10">
          <p className="px-10">Senin - Minggu</p>
          <p className="">Pukul 06.00 - 18.45 WIB</p>
        </div>
      </div>
    </Layout>
  );
};

export default Route;
