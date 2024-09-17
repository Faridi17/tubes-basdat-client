import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { setLogout } from '../state';
import { CgUserlane } from 'react-icons/cg'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineTwitter, AiOutlineClose } from 'react-icons/ai'
import { FaSquareFacebook } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { TbTrain } from 'react-icons/tb'
import { BsArrowRightShort, BsQrCode } from 'react-icons/bs';
import { MdOutlineRemoveShoppingCart } from "react-icons/md"


const Order = ({ firsname, lastname, date_time, order_date, id_order, id_train, id_ticket, time_start, time_end, from_station, to_station }) => {
    const [isClick, setIsClick] = useState(false)

    return (
        <div className=''>
            <div className='flex items-center justify-between mb-4'>
                <div className='ml-5'>
                    <p className='text-xs text-gray-500'>{order_date}</p>
                    <p className='mt-1 text-slate-900'>
                        Berhasil melakukan pembelian ticket dengan nomor pesanan {id_order}
                    </p>
                </div>
                <div onClick={() => setIsClick(!isClick)} className='mr-6 w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg cursor-pointer text-slate-700 hover:text-slate-900'>
                    <IoIosArrowDown className={isClick ? 'rotate-180 transition-all duration-300' : 'transition-all duration-300'} />
                </div>
            </div>
            <div className={isClick ? 'h-96 transition-all duration-300 flex flex-col items-center' : 'h-0 overflow-hidden transition-all duration-300 flex flex-col items-center'}>
                <div className='w-96 bg-slate-50 shadow-sm rounded-md mt-6'>
                    <div className='bg-sky-900 p-3 rounded-t-md flex justify-between'>
                        <div className='flex items-center'>
                            <div className='ml-0.5'>
                                <TbTrain className='text-slate-100 text-lg' />
                            </div>
                            <p className='text-slate-100'>
                                Ticket
                            </p>
                        </div>
                        <div>
                            <p className='text-slate-300 text-[11.5px]'>
                                Id Tiket
                            </p>
                            <p className='text-slate-100 text-sm text-end'>
                                {id_ticket}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-around items-center mx-auto w-60 mt-2 py-2">
                        <div>
                            <p className="font-semibold text-slate-700">
                                {from_station}
                            </p>
                            <p className="text-slate-700 text-[14px]">
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
                            <p className="text-slate-700 text-[14px]">
                                {time_end}
                            </p>
                        </div>
                    </div>
                    <dir className='border-b rounded-t' />
                    <div className='flex justify-between items-center'>
                        <div className='ml-6'>
                            <div className='mb-3'>
                                <p className='text-[11.3px] font-semibold text-slate-500'>
                                    Nama Penumpang
                                </p>
                                <p className='text-[13.8px] font-medium text-slate-800'>
                                    {firsname} {lastname}
                                </p>
                            </div>
                            <div className='mb-3'>
                                <p className='text-[11.3px] font-semibold text-slate-500'>
                                    Id Kereta
                                </p>
                                <p className='text-[13.8px] font-medium text-slate-800'>
                                    {id_train}
                                </p>
                            </div>
                            <div className='mb-5'>
                                <p className='text-[11.3px] font-semibold text-slate-500'>
                                    Tanggal Tiket
                                </p>
                                <p className='text-[13.8px] font-medium text-slate-800'>
                                    {date_time}
                                </p>
                            </div>
                        </div>
                        <div className='mr-6 mb-5'>
                            <BsQrCode className='text-7xl text-sky-900' />
                        </div>
                    </div>
                </div>
            </div>
            <dir className='w-[600px] mx-auto border-b rounded-t' />
        </div>
    )
}

const Layout = ({ children }) => {
    const [click, setClick] = useState(false)
    const [clickCart, setClickCart] = useState(false)
    const [orderUser, setOrderUser] = useState([])
    const isAuth = Boolean(useSelector((state) => state.token))
    const user = useSelector((state) => state.userLog)
    const dispatch = useDispatch()

    const OrderHistory = () => {
        useEffect(() => {
            axios.get(`http://localhost:5000/orders/${user.id_user}`)
                .then(res => {
                    setOrderUser(res.data)
                })
                .catch(err => {
                    console.log('err: ', err);
                })
        }, [user.ID_USER])
    }

    if (isAuth) {
        OrderHistory()
    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className='fixed top-0 w-full z-40'>
                    <div className="w-full flex justify-between p-2 bg-white">
                        <div className="flex items-center ml-5 my-auto">
                            <TbTrain className='mt-0.5 text-3xl text-sky-950' />
                            <p className="my-auto ml-2.5 text-xl text-sky-950 font-semibold font-poppins">
                                LRT Palembang
                            </p>
                        </div>
                        {isAuth ?
                            <div className='flex gap-2 items-center'>
                                <div
                                    onClick={() => {
                                        setClickCart(true)
                                        setClick(false)
                                    }}
                                    className='w-9 h-9 cursor-pointer mt-0.5 bg-slate-50 flex items-center justify-center rounded-xl hover:bg-slate-100'
                                >
                                    <PiShoppingCartSimpleBold className='text-xl text-sky-900' />
                                </div>
                                <div
                                    className="flex mr-3 items-center gap-2 cursor-pointer p-1 bg-slate-50 hover:bg-gray-100 rounded-lg"
                                    onClick={() => setClick(!click)}
                                >

                                    <div className='mt-1'>
                                        <CgUserlane className='text-sky-900 text-lg' />
                                    </div>
                                    <p>
                                        <span className="text-sky-950 text-14 font-medium">Hi,</span>{' '}
                                        <span className="text-sky-950 font-bold ml-1 text-14">
                                            {/* oracle */}
                                            {/* {user.FIRSTNAME} */}
                                            {/* mysql */}
                                            {user.firstname}
                                        </span>
                                    </p>
                                    <IoIosArrowDown className={click ? 'mt-0.5 transition-all duration-300 rotate-180' : 'mt-0.5 transition-all duration-300'} />
                                </div>
                            </div>
                            :
                            <div className="my-auto flex mr-4">
                                <NavLink to={'/login'} className=" mr-3 rounded-md text-sky-800 font-semibold text-sm hover:bg-slate-100">
                                    <p className="px-3 py-1.5 mb-0.5">
                                        Login
                                    </p>
                                </NavLink>
                                <NavLink to={'/register'} className="bg-sky-900 rounded-full text-white font-semibold text-sm hover:bg-sky-800 transition-all duration-200">
                                    <p className="px-4 py-1.5 mb-0.5">
                                        Register
                                    </p>
                                </NavLink>
                            </div>
                        }
                    </div>
                    <div className="w-full px-6 py-2.5 rounded-t-sm bg-sky-900 text-white font-poppins">
                        <div className="">
                            <NavLink to={'/beranda'} className="mr-14 hover:text-slate-200">
                                Beranda
                            </NavLink>
                            <NavLink to={'/tentang'} className="mr-14 hover:text-slate-200" href="">
                                Tentang Kami
                            </NavLink>
                            <NavLink to={'/kontak'} className="mr-14 hover:text-slate-200" href="/contact">
                                Hubungi
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/*end bagian top */}
                <div className='mb-24'/>

                {/*nambar start*/}
                {children}
                {click &&
                    <div className="fixed right-3 top-16 bg-white py-8 px-10 rounded-lg sm:w-96 shadow-xl z-50">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-lg">Profil User</p>
                            <button onClick={() => setClick(false)} className='hover:bg-slate-100 text-slate-700 hover:text-slate-900 flex justify-center items-center rounded-lg w-8 h-8 transition-all duration-300'>
                                <AiOutlineClose className='text-xl ' />
                            </button>
                        </div>
                        <div className="flex gap-5 items-center mt-6 border-b pb-6">
                            <div>
                                {/* oracle */}
                                {/* <p className="font-semibold text-lg text-gray-700">{user.FIRSTNAME} {user.LASTNAME}</p>
                                <p className="text-gray-500 text-sm font-semibold">{user.EMAIL}</p>
                                <p className="text-gray-500 text-sm font-semibold">{user.ADDRESS}</p> */}
                                {/* mysql */}
                                <p className="font-semibold text-lg text-gray-700">{user.firstname} {user.lastname}</p>
                                <p className="text-gray-500 text-sm font-semibold">{user.email}</p>
                                <p className="text-gray-500 text-sm font-semibold">{user.address}</p>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <NavLink to={'/login'} onClick={() => dispatch(setLogout())}>
                                <button className='w-full text-white  bg-sky-800 hover:bg-sky-900 h-9 rounded-lg transition-all duration-300'>
                                    Logout 
                                </button>
                            </NavLink>
                        </div>
                    </div>
                }
                {clickCart &&
                    <div id="crypto-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 backdrop-blur-sm right-0 z-50 w-full p-4 overflow-x-hidden overflow-scroll overflow-y-auto h-full">
                        <div class="relative w-full max-w-2xl h-5/6 overflow-y-auto top-6 left-[430px] transform translate-x-1/3">
                            <div class="relative bg-white rounded-lg shadow">
                                <button onClick={() => setClickCart(false)} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="crypto-modal">
                                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="px-6 py-4 border-b rounded-t mb-4">
                                    <h3 class="text-base font-semibold text-gray-900 lg:text-xl">
                                        Riyawat Pemesanan
                                    </h3>
                                </div>
                                {orderUser.length !== 0 ?
                                    <div class="flex flex-col gap-4">
                                        {orderUser.map((o) => (
                                            // oracle
                                            // <Order firsname={user.FIRSTNAME} lastname={user.LASTNAME} date_time={o.DATE_TIME} order_date={o.ORDER_DATE} id_order={o.ID_ORDER} id_train={o.ID_TRAIN} id_ticket={o.ID_TICKET} time_start={o.TIME_START} time_end={o.TIME_END} from_station={o.FROM_STATION} to_station={o.TO_STATION} />
                                            // mysql
                                            <Order firsname={user.firstname} lastname={user.lastname} date_time={o.date_time} order_date={o.order_date} id_order={o.id_order} id_train={o.id_train} id_ticket={o.id_ticket} time_start={o.time_start} time_end={o.time_end} from_station={o.from_station} to_station={o.to_station} />
                                        ))}
                                    </div>
                                    :
                                    <div className='flex flex-col items-center'>
                                        <div className='mb-2'>
                                            <MdOutlineRemoveShoppingCart size={75} className='text-sky-900' />
                                        </div>
                                        <p className='mb-6 text-lg'>
                                            Belum ada pemesanan 
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }
                <footer className='mt-32'>
                    <div className='mt-4 pt-6 bg-sky-900 opacity-95 md:px-12'>
                        <div className='max-w-[1200px] mx-auto'>
                            <div className='md:flex md:justify-between mx-3'>
                                <div className='p-2 md:w-3/5 lg:md-2/5'>
                                    <div>
                                        <img src="" alt="" />
                                        <p className='text-white md:text-xl text-[20px] font-bold'>
                                            Ticket
                                            <span className='font-base text-sm text-gray-100 ml-1'> by </span>
                                            <span className='ml-1 bg-sky-800 py-1.5 px-2 rounded-lg shadow-sm cursor-pointer'>
                                                Kelompok tiket kereta
                                            </span>
                                        </p>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='text-gray-50 text-sm sm:text-[15px]'>Jalan Lintas Timur Km. 32, Indralaya, Ogan Ilir, Sumatera Selatan, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-6 text-center px-12'>
                            <div className='border mb-3 max-w-[1000px] mx-auto rounded-full' />
                            <div className='flex gap-2 md:gap-4 justify-center mb-4 mt-8 text-white text-2xl md:text-[26px]'>
                                <a href="https://instagram.com/zuck">
                                    <AiOutlineInstagram className='cursor-pointer hover:text-gray-200' />
                                </a>
                                <a href="https://facebook.com/zuck">
                                    <FaSquareFacebook className='cursor-pointer hover:text-gray-200' />
                                </a>
                                <a href="https://twitter.com/elonmusk">
                                    <AiOutlineTwitter className='cursor-pointer hover:text-gray-200' />
                                </a>
                                <a href="https://wa.me/15517868581">
                                    <AiOutlineWhatsApp className='cursor-pointer hover:text-gray-200' />
                                </a>
                            </div>
                            <p className='text-white text-sm md:text-[15px]'>
                                &copy; 2023 All rights reserved by Kelompok tiket kereta
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </React.Fragment >
    )
}

export default Layout