import React from 'react'
import { GoDotFill } from 'react-icons/go'
import Layout from '../pages/Layout'

const About = () => {
    return (
        <Layout>
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10">
                <div className='max-w-5xl mx-auto'>
                    <div className="mb-12">
                        <p className='text-3xl text-sky-800 font-bold text-center tracking-tight'>
                            Selamat Datang di <span className='font-extrabold'>Tiket</span>
                        </p>
                        <div className='mt-5'>
                            <p className='md:text-center text-gray-700'>
                                Kami adalah tim yang berdedikasi dalam memberikan informasi dan sumber daya terpercaya untuk membantu Anda meraih gaya hidup sehat dan kesejahteraan penuh. Di Unsri Care, kami memahami bahwa kesehatan adalah aset berharga yang harus dijaga dengan cermat. Oleh karena itu, kami berkomitmen untuk menjadi mitra setia Anda dalam perjalanan menuju hidup yang seimbang, aktif, dan bahagia. Visi kami adalah menciptakan masyarakat yang penuh energi dan vitalitas, di mana setiap individu memiliki pengetahuan yang diperlukan untuk mengambil keputusan sehat. Kami percaya bahwa kesehatan bukanlah tujuan akhir, melainkan fondasi yang memungkinkan Anda mengejar impian dan pencapaian dalam hidup Anda.
                            </p>
                        </div>
                    </div>
                    <div className='mb-12'>
                        <p className='text-gray-800 text-xl md:text-2xl font-semibold md:text-center'>
                            Apa Yang Kami Tawarkan
                        </p>
                        <div className='md:grid grid-cols-2 mt-4 md:mt-6'>
                            <div className='mb-3 flex gap-1'>
                                <div className='relative top-1.5'>
                                    <GoDotFill className='text-sky-800' />
                                </div>
                                <p className='text-gray-700'>
                                    Informasi Terpercaya: Tim ahli kami mengumpulkan dan mengkurasi informasi terbaru seputar kesehatan, gaya hidup, nutrisi, olahraga, dan kesejahteraan secara keseluruhan. Kami memastikan bahwa konten yang kami sajikan didukung oleh penelitian ilmiah terkini.
                                </p>
                            </div>
                            <div className='mb-3 flex gap-1'>
                                <div className='relative top-1.5'>
                                    <GoDotFill className='text-sky-800' />
                                </div>
                                <p className='text-gray-700'>
                                    Panduan Praktis: Kami memberikan panduan praktis yang dapat Anda terapkan dalam kehidupan sehari-hari. Mulai dari tips makan sehat, rutinitas olahraga, manajemen stres, hingga saran untuk tidur yang berkualitas.
                                </p>
                            </div>
                            <div className='mb-3 flex gap-1'>
                                <div className='relative top-1.5'>
                                    <GoDotFill className='text-sky-800' />
                                </div>
                                <p className='text-gray-700'>
                                    Inovasi Tanpa Henti: Dunia kesehatan terus berkembang, dan kami selalu berusaha untuk tetap terdepan dalam hal informasi dan tren terbaru. Kami memastikan agar Anda tetap mendapatkan informasi yang relevan dengan perkembangan terbaru dalam dunia kesehatan dan kesejahteraan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-12'>
                        <p className='md:text-2xl text-xl md:text-center font-semibold text-gray-800'>
                            Akses Mudah dan Cepat Demi Masa Depan Kesehatan Indonesia yang Berkualitas
                        </p>
                        <div className='mt-4 md:mt-6'>
                            <p className='md:text-center text-gray-700'>
                                Seluruh fitur Unsri Care tersedia dalam versi web yang mudah diakses melalui perangkat komputer maupun ponsel pintar oleh seluruh masyarakat Indonesia, kapan saja, di mana saja. Nikmati kemudahan mencari informasi kesehatan terlengkap dengan respons cepat, serta layanan dokter umum maupun spesialis berpengalaman yang tersebar di seluruh Indonesia. Unsri Care membantu masyarakat Indonesia dalam membuat keputusan terbaik terkait kesehatan diri.
                            </p>
                        </div>
                    </div>
                    <div className='mb-12'>
                        <div className='md:mb-4'>
                            <p className='text-gray-800 text-center text-xl md:text-2xl font-semibold'>Hubungi Kami</p>
                        </div>
                        <form action="">
                            <div class="w-full lg:w-2/3 lg:mx-auto">
                                <div class="px-4 mb-8">
                                    <label for="name" class="text-sm font-bold text-sky-800">
                                        Nama
                                    </label>
                                    <input type="text" id="name"
                                        class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-sky-800 focus:ring-1 focus:border-sky-800" />
                                </div>
                                <div class="w-full px-4 mb-8">
                                    <label for="email" class="text-sm font-bold text-sky-800">
                                        Email
                                    </label>
                                    <input type="email" id="email"
                                        class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-sky-800 focus:ring-1 focus:border-sky-800" />
                                </div>
                                <div class="w-full px-4 mb-8">
                                    <label for="message" class="text-sm font-bold text-sky-800">
                                        Pesan
                                    </label>
                                    <textarea type="email" id="email"
                                        class="h-32 w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-sky-800 focus:ring-1 focus:border-sky-800"></textarea>
                                </div>
                                <div class="w-full px-4">
                                    <button
                                        class="text-base font-semibold text-white bg-sky-800 py-3 px-8 rounded-full w-full hover:bg-sky-900 hover:shadow-lg transition-all duration-200">
                                        Kirim
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About