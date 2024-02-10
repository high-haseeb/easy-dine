import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import Nv from '@/components/Nv';
import SideBar from '@/components/SideBar';
import CenterSection from '@/components/CenterSection';
import { redirect } from 'next/navigation';

export default function App() {
  redirect('/login')
  return (
    <div className=" w-screen h-screen bg-[#0A0F25] overflow-hidden select-none" style={{ font:'Plus_Jakarta_Sans',color: "#FFFFFF  " }}>

      <div className="flex h-screen w-screen overflow-hiddenj" style={{ backgroundColor: "#0A0F25" }}>

        {/* <div className="flex w-[1060px] h-[100px] mx-[20px] my-[10px] justify-self-end"></div> */}
        <div className="flex w-[250px] h-full rounded-[7px] justify-centerj" style={{ backgroundColor: "#06031F" }}>
          {/* Side Bar */}
          <SideBar width={'200'} height={'200'} />
        </div>
        <div className="flex flex-col w-[1200px] h-[1000px]">
          <div className="flex w-[1070px] h-[50px] mx-[40px] my-[20px]">


            <div className="flex w-[200px] h-[50px]">
              <div className="flex flex-col">
                <div className="flex "><div className="font-[400]">Pages</div>  <div className="Plus Jakarta Display font-[500]">/  Arbeit’s Space</div>
                  <div className="self-center w-[30px] h-[25px] mx-[20px]"><FontAwesomeIcon icon={faBars} /></div>
                </div>
                <div className=" font-[500] text-xl">Dashboard</div>
                <div className="font-[700] text-[30px] mt-[2px] font-Jakarta">Restaurantname</div>
              </div>

            </div>
            {/* Bell icon added here */}
            <div className="flex h-[50px] w-[1070px] justify-end" >
              <div> <Nv /> </div>
            </div>


          </div>
          <div className="flex flex-col w-[1050px] h-[650px] rounded-[20px] mx-[40px] my-[50px]" style={{ backgroundColor: "#060A24" }}>
          <CenterSection />
          </div>
        </div>

      </div>
    </div>
  );
}
