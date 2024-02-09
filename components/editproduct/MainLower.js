import React from 'react'
import ToggleSwitch from './ToggelSwitch'
import MainLowerLeft from './MainLowerLeft'

function MainLower() {
    return (
        <div className="flex gap-3">
            <div className="flex flex-col gap-4">

                {/* Lower Part Left side 1st box */}
                <div className="flex flex-col w-[607px] h-[178px] bg-[#090F2A] rounded-[15px] pt-[15px] pl-[10px] items-stert gap-4 text-white">
                    <div className="font-[700] text-[20px]">Employees</div>
                    <div className=" flex items-center w-[575px] h-[55px] rounded-[15px] bg-[#0F1535] pl-[15px]">
                        <div className="flex w-[90px] h-[27px] justify-center items-center bg-[#56577A] rounded-[15px]">
                            <p className="text-[13px] px-2 cursor-pointer">add People</p>
                        </div>
                    </div>
                </div>

                {/* Lower Part Left side 2st box */}
                <div className="w-[607px] h-[318px] bg-[#090F2A] rounded-[15px] flex">
                    <div className="flex gap-[50px]">
                        <div className="font-[700] text-[20px]">Payment Method</div>

                        <div className="flex gap-1">
                            <div><ToggleSwitch width={40} height={18} /></div>
                            <div className="font-[400] text-[15px]">EasyDine payment method</div>
                        </div>


                        <div className="flex gap-1">
                            <div><ToggleSwitch width={40} height={18} /></div>
                            <div className="font-[400] text-[15px]">Others</div>
                        </div>
                    </div>

                </div>

            </div>

            <MainLowerLeft />

        </div>
    )
}

export default MainLower
