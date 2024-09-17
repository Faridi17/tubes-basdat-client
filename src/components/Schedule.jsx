import React from "react";
import Layout from "../pages/Layout";



const Schedule = () => {
  return (
    <Layout>
      <div>
        <div className="flex flex-col items-center">
          <div>
            <p className="font-bold font-poppins py-2 text-2xl">JADWAL</p>
          </div>
          <div>
            <h2 className="font-bold text-xl  py-2">LRT PALEMBANG kereta jadwal</h2>
            <p>LRT PALEMBANG kereta jalur beroperasian setiap hari. Jam jadwal reguler. 06.00 - 18.45</p>

            <table className="mx-auto w-full">
              <tr className="py-2 block">
                <th className="mr-32 inline-block">Hari</th>
                <th className="mr-32 inline-block">Jam Operasi</th>
                <th className="mr-32 inline-block">Frekuensi</th>
              </tr>
              <tr className="py-2 block">
                <td className="mr-[133px] inline-block font-medium">Sen</td>
                <td className="mr-[130px] inline-block font-medium">06.00 - 18.45</td>
                <td className="mr-[130px] inline-block font-medium">17 min</td>
              </tr>
              <hr className="border-1" />
              <tr className="py-2 block">
                <td className="mr-[138px] inline-block font-medium">Sel</td>
                <td className="mr-[130px] inline-block font-medium">06.00 - 18.45</td>
                <td className="mr-[130px] inline-block font-medium">17 min</td>
              </tr>
              <hr className="border-1" />
              <tr className="py-2 block">
                <td className="mr-[132px] inline-block font-medium">Rab</td>
                <td className="mr-[130px] inline-block font-medium">06.00 - 18.45</td>
                <td className="mr-[130px] inline-block font-medium">17 min</td>
              </tr>
              <hr className="border-1" />
              <tr className="py-2 block">
                <td className="mr-[128px] inline-block font-medium">Kam</td>
                <td className="mr-[130px] inline-block font-medium">06.00 - 18.45</td>
                <td className="mr-[130px] inline-block font-medium">17 min</td>
              </tr>
              <hr className="border-1" />
              <tr className="py-2 block">
                <td className="mr-[130px] inline-block font-medium">Jum</td>
                <td className="mr-[130px] inline-block font-medium">06.00 - 18.45</td>
                <td className="mr-[130px] inline-block font-medium">17 min</td>
              </tr>
              <hr className="border-1" />
              <tr className="py-2 block">
                <td className="mr-[133px] inline-block font-medium">Sab</td>
                <td className="mr-[130px] inline-block font-medium">06.00 - 18.45</td>
                <td className="mr-[130px] inline-block font-medium">17 min</td>
              </tr>
              <hr className="border-1" />
              <tr className="py-2 block">
                <td className="mr-[131px] inline-block font-medium">Min</td>
                <td className="mr-[130px] inline-block font-medium">06.00 - 18.45</td>
                <td className="mr-[130px] inline-block font-medium">17 min</td>
              </tr>
              <hr className="border-1" />

            </table>
          </div>
        </div>
        <div></div>
      </div>
      {/* jadwal end */}

      {/* footer start */}
      <div>
        <div className="absolute mx-auto font-poppins font-bold text-xl right-10 -mt-8">
          <p className="px-10">Senin - Minggu</p>
          <p className="">Pukul 06.00 - 18.45 WIB</p>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
