import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";
import Layout from "../pages/Layout";
import { BsArrowRightShort } from 'react-icons/bs'
import Mandiri from '../assets/mandiri.png';
import Bni from '../assets/bni.png';
import Bri from '../assets/bri.png';
import Bsi from '../assets/bsi.png';
import Bca from '../assets/bca.png';
import Ovo from '../assets/ovo.png';
import Dana from '../assets/dana.png';

const Ticket = ({ id_ticket, id_train, from_station, to_station, price, time_start, time_end }) => {
  const [payment, setPayment] = useState('')
  const [hidden, setHidden] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const isAuth = Boolean(useSelector((state) => state.token))
  const user = useSelector((state) => state.userLog)

  const optionPayment = (e) => {
    setPayment(e.target.value)
  }

  const handleSubmit = async () => {
    setLoading(true);
    await fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payment_method: payment, id_user: user.id_user, id_ticket, id_train })
    })
    setHidden(true)
    setPayment('')
    window.location.reload();
    setLoading(false)
  }

  return (
    <>
      <div className="bg-slate-50 shadow-md w-fit rounded-xl py-2">
        <div className="flex m-4">
          <div className="mt-3 mr-10 ml-2">
            <p className="font-semibold text-lg text-slate-700">
              Kereta
            </p>
            <p className="text-slate-700 font-medium text-xs">
              {id_train}
            </p>
          </div>
          <div className="h-8 w-[1.5px] mr-1 mt-6 bg-slate-500" />
          <div className="flex justify-around items-center w-60">
            <div>
              <p className="font-semibold text-slate-700">
                {from_station}
              </p>
              <p className="text-slate-700 text-sm">
                {time_start}
              </p>
            </div>
            <div >
              <BsArrowRightShort />
            </div>
            <div>
              <p className="font-semibold text-slate-700">
                {to_station}
              </p>
              <p className="text-slate-700 text-sm">
                {time_end}
              </p>
            </div>
          </div>
          <div className="my-auto px-4">
            <div className="mb-2">
              <p className="text-sky-700 text-lg font-semibold">Rp {price}</p>
            </div>
            <div className="">
              {isAuth ?
                <button onClick={() => setHidden(false)} className="px-4 py-1.5 bg-sky-800 rounded-lg hover:bg-sky-700">
                  <p data-modal-target="crypto-modal" data-modal-toggle="crypto-modal" className="text-white flex justify-center w-full h-full">Pesan Tiket</p>
                </button>
                :
                <button onClick={() => setError(true)} className="px-4 py-1.5 bg-sky-800 rounded-lg hover:bg-sky-700">
                  <p data-modal-target="crypto-modal" data-modal-toggle="crypto-modal" className="text-white flex justify-center w-full h-full">Pesan Tiket</p>
                </button>
              }
            </div>
          </div>
        </div>
      </div>

      {!hidden &&
        <div id="crypto-modal" tabindex="-1" className="fixed backdrop-blur-sm top-0 left-0 right-0 z-[100] w-full p-4 overflow-x-hidden overflow-y-auto h-full">
          <div className="relative max-w-xl max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

            <div className="relative bg-white rounded-lg shadow">
              <button
                onClick={() => {
                  setHidden(true)
                  setPayment('')
                }
                }
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="crypto-modal"
              >
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              <div className="px-6 py-4 border-b rounded-t">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl">
                  Pesan tiket
                </h3>
              </div>

              <div className="px-6 py-3">
                <p className="text-sm font-normal text-gray-500">Pilih metode pembayaran.</p>
                <ul className="p-3 space-y-1 text-sm text-gray-700 grid grid-cols-2 gap-2" aria-labelledby="dropdownHelperRadioButton">
                  <li>
                    <input onChange={optionPayment} type="radio" id="bni" name="payment" value="BNI" className="hidden peer" required />
                    <label for="bni" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-800 peer-checked:text-sky-800 hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <img className="w-20 mb-2" src={Bni} alt="" />
                        <p className="my-auto ml-2">Bank BNI</p>
                      </div>
                      <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </label>
                  </li>
                  <li>
                    <input onChange={optionPayment} type="radio" id="bri" name="payment" value="BRI" className="hidden peer" required />
                    <label for="bri" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-800 peer-checked:text-sky-800 hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <img className="w-20 mb-2" src={Bri} alt="" />
                        <p className="my-auto ml-2">Bank BRI</p>
                      </div>
                      <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </label>
                  </li>
                  <li>
                    <input onChange={optionPayment} type="radio" id="mandiri" name="payment" value="Mandiri" className="hidden peer" required />
                    <label for="mandiri" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-800 peer-checked:text-sky-800 hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <img className="w-20 mb-2" src={Mandiri} alt="" />
                        <p className="my-auto ml-2">Bank Mandiri</p>
                      </div>
                      <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </label>
                  </li>
                  <li>
                    <input onChange={optionPayment} type="radio" id="bsi" name="payment" value="BSI" className="hidden peer" required />
                    <label for="bsi" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-800 peer-checked:text-sky-800 hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <img className="w-20 mb-2" src={Bsi} alt="" />
                        <p className="my-auto ml-2">Bank BSI</p>
                      </div>
                      <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </label>
                  </li>
                  <li>
                    <input onChange={optionPayment} type="radio" id="bca" name="payment" value="BCA" className="hidden peer" required />
                    <label for="bca" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-800 peer-checked:text-sky-800 hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <img className="w-20 mb-2" src={Bca} alt="" />
                        <p className="my-auto ml-2">Bank BCA</p>
                      </div>
                      <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </label>
                  </li>
                  <li>
                    <input onChange={optionPayment} type="radio" id="ovo" name="payment" value="OVO" className="hidden peer" required />
                    <label for="ovo" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-800 peer-checked:text-sky-800 hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <img className="w-20 mb-2" src={Ovo} alt="" />
                        <p className="my-auto ml-2">OVO</p>
                      </div>
                      <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </label>
                  </li>
                  <li>
                    <input onChange={optionPayment} type="radio" id="dana" name="payment" value="Dana" className="hidden peer" required />
                    <label for="dana" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-800 peer-checked:text-sky-800 hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <img className="w-20 mb-2" src={Dana} alt="" />
                        <p className="my-auto ml-2">Dana</p>
                      </div>
                      <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </label>
                  </li>
                </ul>
                <div className="flex flex-col items-end">
                  <p className="mb-2 text-gray-800 font-semibold">
                    Total Pembayaran Rp. {price}
                  </p>
                  {loading ?
                    <button disabled onClick={handleSubmit} className="bg-sky-800 px-4 py-1 rounded-md text-white mb-2 hover:bg-sky-900 transition-all duration-200">
                      Loading...
                    </button>
                    :
                    <button onClick={handleSubmit} className="bg-sky-800 px-4 py-1 rounded-md text-white mb-2 hover:bg-sky-900 transition-all duration-200">
                      Bayar
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>}
        {error &&
          <div id="toast-warning" className={`z-[100] fixed left-1/2 top-2 transform -translate-x-1/2 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow ${hidden}`} role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
              </svg>
              <span className="sr-only">Warning icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">Mohon login terlebih dahulu</div>
            <button onClick={() => setError(false)} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-warning" aria-label="Close">
              <svg className="sr-only">Close</svg>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
        }
    </>
  )
}

const OrderTicket = () => {
  const [ticket, setTicket] = useState([])
  

  useEffect(() => {
    axios.get('http://localhost:5000/tickets')
      .then(res => {
        setTicket(res.data)
      })
      .catch(err => {
        console.log('error: ', err);
      })
  }, [])

  return (
    <Layout>
      <div>
        <div className="flex justify-center mb-4 mt-4">
          <div>
            <p className="font-bold text-sky-900 font-poppins py-2 text-2xl">Pesan Tiket Hari Ini</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-6">
            {ticket.map((t) => (
              // oracle
              // <Ticket id_ticket={t.ID_TICKET} id_train={t.ID_TRAIN} from_station={t.FROM_STATION} to_station={t.TO_STATION} time_start={t.TIME_START} time_end={t.TIME_END} price={t.PRICE} />
              // mysql
              <Ticket id_ticket={t.id_ticket} id_train={t.id_train} from_station={t.from_station} to_station={t.to_station} time_start={t.time_start} time_end={t.time_end} price={t.price} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderTicket;
