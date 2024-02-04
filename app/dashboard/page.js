import React from 'react'
import Sidebar from '@/components/DashboardSidebar';

const Page = () => {
  return (
    
    <div className='bg-backColor h-screen w-screen text-white'>
        <div className='flex flex-col items-center w-[250px] h-full bg-sideBarcol'>
        <Sidebar/>
    </div>
    </div>
  );
}

export default Page









