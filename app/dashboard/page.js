import React from 'react'
import SideBar from '@/components/SideBar' 
import NvBar from '@/components/dashboard/NavBar'
import MainSection from '@/components/dashboard/MainSection'


const page = () => {
  return (
    <div className="flex bg-backColor h-screen w-screen overflow-auto">
{/* SideBar Adjustments      */}
      <div className='flex justify-center bg-[#06031F] w-[300px] h-[1255px] text-white'>
      <SideBar/>
      </div>

    <div className="flex flex-col">
      <NvBar/>
      <MainSection/>
    </div>
      
    </div>
  )
}

export default page
