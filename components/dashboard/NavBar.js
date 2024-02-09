import React from 'react'
import { faBars, faBell, faGear, faMagnifyingGlass, faRotateLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  return (
    <div>
      <div className="flex-col w-[1800px] h-[110px]">
        {/* top */}
        <div className="flex text-white w-full h-[40px] mt-[20px] pl-[100px]">
          <div className="font-[400] text-[20px]">Pages</div>
          <div className="font-bold text-[20px]">/ Dashboard</div>
          {/* Bars */}
          <div className="self-center mx-3 text-[30px]">
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* place Navbar icons in this div */}
          <div className="flex gap-[30px] flex-row-reverse w-[85%] h-full text-white text-[20px]">

            <div className="flex gap-3   w-[40px] h-[30px] text-[#718096] self-center justify-center items-center pr-[1.5rem]">
              <FontAwesomeIcon icon={faBell} />
              <FontAwesomeIcon icon={faGear} width={40} />
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
        <div className="text-white w-full h-[30px] font-bold pl-[100px] text-[20px]">
          Dashboard
        </div>

        {/* end */}
        <div className="flex flex-col w-full h-[110px] pl-[100px]">
          <div className="flex text-white  gap-5">
            <div className='font-[700] text-[32px]'>Willkommen Kristian Kovac</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
