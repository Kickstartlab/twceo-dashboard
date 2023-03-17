import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png';
import sport from '../assets/sport.png';
import lottery from '../assets/lottery.png';
import vip from '../assets/vip.png';
import forum from '../assets/forum.png';
import support from '../assets/support.png';
import other from '../assets/other.png';
import { AppContext } from "../utils";



export default function Menu() {

  const [show, setShow] = useState(false);
  const { account, connect, disconnect } = useContext(AppContext);


  return (

    <header>

      <div data-aos='slide-right' className="bg-gray-100 w-64 sidebar fixed left-0 top-0 space-y-8 py-5 lg:block hidden z-20">

        <div className="mt-3 px-3 mb-12">
          <a href="/" className="">
            <img src={logo} alt="Logo" className='flex mx-auto' />
          </a>
        </div>

        <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
          <img src={sport} alt="Logo" className='' />

          <a href='/' className='font-oswald font-semibold text-lg'>
            Sports
          </a>
        </button>

        <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
          <img src={lottery} alt="Logo" className='' />

          <a href='/' className='font-oswald font-semibold text-lg'>
            Lottery
          </a>
        </button>

        <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
          <img src={vip} alt="Logo" className='' />

          <a href='/' className='font-oswald font-semibold text-lg'>
            VIP Club
          </a>
        </button>

        <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
          <img src={forum} alt="Logo" className='' />

          <a href='/' className='font-oswald font-semibold text-lg'>
            Forum
          </a>
        </button>

        <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
          <img src={support} alt="Logo" className='' />

          <a href='/' className='font-oswald font-semibold text-lg'>
            Support
          </a>
        </button>

        <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
          <img src={other} alt="Logo" className='' />

          <a href='/' className='font-oswald font-semibold text-lg'>
            Other
          </a>
        </button>

      </div>

      <div className="lg:hidden fixed bg-gray-100 w-full p-2 z-20 flex items-center justify-between gap-x-3 text-white-100 left-0 top-0">

      <button onClick={() => setShow(!show)} className="nav cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>

        {account ? (
          <button
            onClick={() => disconnect()}
            className="font-montserat font-semibold border border-yellow-100 hover:bg-yellow-100 rounded-lg py-2 px-3 text-sm"
          >
            {account.slice(0, 4) + "..." + account.slice(-4)}
          </button>
        ) : (
          <button
            onClick={() => connect()}
            className="font-montserat font-semibold border border-yellow-100 hover:bg-yellow-100 rounded-lg py-2 px-3 text-sm"
          >
            Connect wallet
          </button>
        )}

      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 p-2 overflow-y-auto bg-gray-100 w-64 sidebar space-y-8 py-5 z-20" style={{ left: "0" }}>


          <div className="mt-3 px-3 mb-12">

            <button onClick={() => setShow(!show)} className="nav cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <a href="/" className="">
              <img src={logo} alt="Logo" className='flex mx-auto' />
            </a>
          </div>

          <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
            <img src={sport} alt="Logo" className='' />

            <a href='/' className='font-oswald font-semibold text-lg'>
              Sports
            </a>
          </button>

          <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
            <img src={lottery} alt="Logo" className='' />

            <a href='/' className='font-oswald font-semibold text-lg'>
              Lottery
            </a>
          </button>

          <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
            <img src={vip} alt="Logo" className='' />

            <a href='/' className='font-oswald font-semibold text-lg'>
              VIP Club
            </a>
          </button>

          <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
            <img src={forum} alt="Logo" className='' />

            <a href='/' className='font-oswald font-semibold text-lg'>
              Forum
            </a>
          </button>

          <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
            <img src={support} alt="Logo" className='' />

            <a href='/' className='font-oswald font-semibold text-lg'>
              Support
            </a>
          </button>

          <button className='flex gap-x-2 items-center text-white-100 w-full px-6 justify-start'>
            <img src={other} alt="Logo" className='' />

            <a href='/' className='font-oswald font-semibold text-lg'>
              Other
            </a>
          </button>

        </div> : null
      }


    </header >
  )
}
