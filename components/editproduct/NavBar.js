import { faBars, faBell, faGear, faMagnifyingGlass, faRotateLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


export default function NavBar() {
  return (
    <div className="flex-col w-full">
{/* top */}
      <div className="flex text-white w-full h-[40px] mt-[20px] pl-7">
        <div className="font-[400]">Pages</div>
        <div className="font-bold">/ Products / Edit Product</div>
        {/* Bars */}
        <div className="self-center mx-3 text-[30px]">
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/* place Navbar icons in this div */}
        <div className="flex gap-[30px] flex-row-reverse w-[80%] h-full text-white pr-[30px]">

          <div className="flex gap-3   w-[40px] h-[30px] text-[#718096] self-center justify-center items-center ">
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faGear} />
          </div>

          <div className="flex gap-2 select-none text-[#718096]  justify-center items-center ">
            <FontAwesomeIcon icon={faUser} />
            <div>Sign In</div>
          </div>

          {/* search bar */}
          <div className='flex gap-2 self-center justify-start items-center w-[250px] h-[40px] rounded-2xl p-2 bg-[#0f1535] border-[1px] border-white text-[#718096]'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <form>
              <input type="text" placeholder="Search..." style={{ backgroundColor: '#0f1535', color: 'white', border: 'none', outline: 'none', width: '100%' }} />
            </form>
          </div>


          {/* flag */}
          <div className="flex w-[50px] h-[40px] rounded-[12px] self-center p-2 border-2 ">
            <img src="./png/flag.png" alt="Flag" />
          </div>
        </div>
      </div>

{/* middel */}
      <div className="text-white w-full h-[30px] font-bold pl-7">
        Edit Product
      </div>

{/* end */}
      <div className="flex flex-col w-full h-[110px] pl-7">
        <div className="flex text-white  gap-5">
          <div className='font-[700] text-[29px]'>Restaurant Settings</div>
          <button className='flex font-[700] text-[18px] w-auto h-[40px] border-2 rounded-[12px] justify-center items-center p-1 gap-1'>
            <FontAwesomeIcon icon={faRotateLeft} />
            <div>go back to home</div>
          </button>
        </div>

        <div className="flex w-full h-full ">
            <div className="font-[400] text-white">We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play.</div>
            
            <div className="flex items-center w-full h-full text-white font-[700] justify-end pr-[30px]">
              <div className="flex bg-[#111844] w-[70%] h-full justify-center items-center gap-8 rounded-[20px] px-2">
                <button className="flex w-[200px] h-[40px] justify-center items-center bg-[#0f1535]  rounded-[40px]">Bar & Hookah</button>
                <button className="flex w-[200px] h-[40px] justify-center items-center bg-[#D4AF37]  rounded-[40px]">Gold</button>
                <button className="flex w-[200px] h-[40px] justify-center items-center bg-[#04B816]  rounded-[40px]">online</button>     
              </div>
            </div>
        </div>

      </div>
    </div>
  );
}
