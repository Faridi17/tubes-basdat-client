import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setLogin } from '../state';
import loginImg from '../assets/Train.jpg'

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const [errorLogin, setErrorLogin] = useState(false)
  const [hidden, setHidden] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  }

  const onSubmit = async (data) => {
    setLoading(true)
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const loggedIn = await response.json()
    if (!loggedIn.token) {
      setErrorLogin(true)
      setHidden('')
    } else {
      dispatch(
        setLogin({
          userLog: loggedIn.userLog,
          token: loggedIn.token,
        })
      )
      navigate('/beranda')
    }
    setLoading(false)
  };

  return (
    <div className="flex h-screen w-full font-poppins">
      {errorLogin && (
          <div id="toast-warning" className={`absolute left-1/2 top-2 transform -translate-x-1/2 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow ${hidden}`} role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
              </svg>
              <span className="sr-only">Warning icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">Tidak berhasil login</div>
            <button onClick={() => setHidden('hidden')} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-warning" aria-label="Close">
              <svg className="sr-only">Close</svg>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
      )}
      <div className="w-2/3">
        <img
          className="w-full h-full object-cover object-right  "
          src={loginImg}
          alt=""
        />
      </div>

      <div className="w-1/3 bg-gray-100 flex flex-col justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto bg-white border-x- p-8 h-screen">
          <h2 className="font-bold text-3xl py-6 text-center">TRAIN TICKET</h2>
          <div className="mb-7">
            <div className='relative'>
              <input type="text" id="email" className="block px-2.5 pb-2.5 border-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-700 peer" placeholder=" "
                // {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                {... register("email", { required: true })}
              />
              <label for="email" className="ml-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-sky-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
            </div>
            {errors?.email?.type === "required" && <p className='ml-2 h-0 text-xs text-sky-800'>field harus diisi</p>}
            {errors?.email?.type === "pattern" && <p className='ml-2 h-0 text-xs text-sky-800'>format email salah</p>}
          </div>
          <div className="mb-4">
            <div className='relative'>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                className="block px-2.5 pb-2.5 border-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-700 peer"
                placeholder=" "
                {...register('password', { required: true, minLength: 8 })}
              />
              <label
                for="password"
                className="ml-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-sky-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Kata Sandi
              </label>
              <button
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {errors?.password?.type === "required" && <p className='ml-2 h-0 text-xs text-sky-800'>field harus diisi</p>}
            {errors?.password?.type === "minLength" && <p className='ml-2 h-0 text-xs text-sky-800'>panjang password minimal 8 karakter</p>}
          </div>
          {loading ?
            <button disabled type='submit' className="border-2 my-5 w-full p-2 rounded-md bg-sky-800 text-white">
              Loading...
            </button> :
            <button type='submit' className="border-2 my-5 w-full p-2 rounded-md bg-sky-800 hover:bg-sky-900 text-white">
              Masuk
            </button>
          }
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Ingatkan Saya
            </p>

            <p>
              <a className="hover:text-sky-700" href="/register">
                <u>buat akun</u>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
