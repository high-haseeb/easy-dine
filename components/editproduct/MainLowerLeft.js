import React from 'react'
import ToggleSwitch from './ToggelSwitch'

function MainLowerLeft() {
  return (
    <div className="flex flex-col w-[283px] h-[523px] bg-[#090F2A] rounded-[15px] pl-3 pt-1 gap-3">
        <div className="flex flex-col gap-3">
            <div>Settings</div>
            <div className="flex gap-2">
                <ToggleSwitch width={50} height={20}/>
                <p className="font-[400] text-[16px]">closed</p> 
            </div>

            <div className="flex gap-2">
                <ToggleSwitch width={50} height={20}/>
                <p className="font-[400] text-[16px]">BreakFast Menu</p> 
            </div>


            <div className="flex gap-2">
                <ToggleSwitch width={50} height={20}/>
                <p className="font-[400] text-[16px]">Optional Selection Package</p> 
            </div>

            <div className="flex gap-2">
                <ToggleSwitch width={50} height={20}/>
                <p className="font-[400] text-[16px]">Age Demang 18?</p> 
            </div>
        </div>

        <div className="flex flex-col gap-5">
            <div className="flex gap-2">
                <ToggleSwitch width={50} height={20}/>
                <div>Minumum Order Value</div>
            </div>

            <div className="self-end flex w-[170px] h-[40px] rounded-[15px] bg-[#0F1535] items-center pl-2 border-[1px]"><input type="text" placeholder='Enter Min Order Value' className="border-none outline-none bg-[#0F1535] w-[80%] h-[80%]" />
            </div>

            <div className="flex gap-2">
                <ToggleSwitch width={50} height={20}/>
                <div>Stock System</div>
            </div>

            <div className="flex gap-2">
                <ToggleSwitch width={50} height={20}/>
                <div>Easy Meel</div>
            </div>

            <div className="flex gap-2">
                <ToggleSwitch width={50} height={20}/>
                <div>Take Away </div>
            </div>

        </div>

    </div>
  )
}

export default MainLowerLeft
