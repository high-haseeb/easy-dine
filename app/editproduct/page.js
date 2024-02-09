import React from 'react'
import SideBar from '@/components/SideBar'
import NavBar from '@/components/editproduct/NavBar'
import MainSection from '@/components/editproduct/MainSection'

const page =() => {
  return (
    <div className="flex bg-backColor h-screen w-screen overflow-auto">
      <div className='flex justify-center bg-[#06031F] w-[300px] h-[1255px] text-white'>
      <SideBar/>
      </div>
      <div className="flex flex-col">
      <NavBar/>
      <MainSection/>
      </div>
    </div>
  )
}

export default page
