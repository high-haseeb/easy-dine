"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCartShopping, faFile, faHouse, faWrench, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'



export default function SideBar() {
    const router = useRouter();
    const a = '>'
    return (
    
        <div className="flex flex-col  my-[20px] " style={{ width: '220px', height: '70%' }}>
            <div className='flex w-full justify-center '>
                <img className="" src="./png/pic_1.png" alt='loading' style={{ marginTop: '-31px', width: '100px', height: 'auto' }} />
            </div>

            <div className="mt-[-15px]">
                <svg width="200" height="5" viewBox="0 0 239 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H238.551" stroke="url(#paint0_linear_285_2774)" />
                    <defs>
                        <linearGradient id="paint0_linear_285_2774" x1="0" y1="1" x2="236.25" y2="1" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E0E1E2" stop-opacity="0" />
                            <stop offset="0.5" stop-color="#E0E1E2" />
                            <stop offset="1" stop-color="#E0E1E2" stop-opacity="0.15625" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className=" flex w-full justify-center" style={{ fontWeight: '500', marginTop: '18px' }}>
                <div className="text-[15px]">Kunden-Nr. 44156413</div>
            </div>

            <div className="flex justify-center" style={{ fontWeight: '600', marginTop: '20px' }}>
                <div className="text-[15px]">Unternehmen</div>
            </div>

            <div className="flex justify-center text-[15px]" style={{ fontWeight: '300', marginTop: '-3px' }}>
                <div>Advance Kontingent</div>
            </div>

            {/* No of online..... */}
            <div className="flex justify-center" style={{ fontWeight: '500', marginTop: '10px' }}>
                <div>{0} Online</div>
            </div>

            <div className="flex justify-center text-[15px]" style={{ fontWeight: '600', marginTop: '15px' }}>
                <div> <p1>{a} Mehr EasyDine kaufen</p1></div>
            </div>



            {/* side bar 2nd half */}
            <div className='mt-5'>
                <SideBtn name={<svg width="85" height="18" viewBox="0 0 79 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.338231 11.3665V0.936485H3.74023C7.01623 0.936485 9.13023 3.06448 9.13023 6.14449C9.13023 9.22449 7.01623 11.3665 3.74023 11.3665H0.338231ZM2.10223 9.81249H3.78223C5.95223 9.81249 7.33823 8.37049 7.33823 6.14449C7.33823 3.91849 5.93823 2.49049 3.78223 2.49049H2.10223V9.81249ZM13.5998 3.65249C15.4338 3.65249 16.6938 4.75849 16.6938 6.32649V11.3665H15.1118V10.5265C14.5518 11.1985 13.7818 11.5345 12.8718 11.5345C11.1918 11.5345 10.1278 10.5825 10.1278 9.29449C10.1278 8.17449 11.0098 7.43249 12.5358 7.09649L15.0138 6.56449V6.32649C15.0138 5.62649 14.4398 5.16449 13.5998 5.16449C12.7878 5.16449 12.1438 5.61249 11.8638 6.32649L10.4078 5.59849C10.8418 4.45049 12.1018 3.65249 13.5998 3.65249ZM13.0678 10.2045C14.1878 10.2045 15.0138 9.39249 15.0138 8.32849V7.83849L12.8718 8.31449C12.2418 8.45449 11.8778 8.81849 11.8778 9.28049C11.8778 9.85449 12.3398 10.2045 13.0678 10.2045ZM20.896 11.5345C19.328 11.5345 18.04 10.7365 17.564 9.42049L18.866 8.79049C19.258 9.68649 20 10.1625 20.896 10.1625C21.652 10.1625 22.142 9.81249 22.142 9.29449C22.142 8.77649 21.61 8.55249 21.148 8.42649L19.86 8.09049C18.544 7.72649 17.886 6.95649 17.886 5.93449C17.886 4.57649 19.02 3.65249 20.686 3.65249C22.17 3.65249 23.346 4.39449 23.808 5.59849L22.492 6.21449C22.212 5.50049 21.54 5.06649 20.686 5.06649C19.986 5.06649 19.552 5.38849 19.552 5.86449C19.552 6.34049 20.028 6.57849 20.462 6.70449L21.806 7.08249C23.108 7.44649 23.808 8.20249 23.808 9.25249C23.808 10.6105 22.618 11.5345 20.896 11.5345ZM28.682 3.65249C30.362 3.65249 31.524 4.80049 31.524 6.46649V11.3665H29.844V6.88649C29.844 5.86449 29.2 5.20649 28.248 5.20649C27.282 5.20649 26.638 5.86449 26.638 6.88649V11.3665H24.958V0.936485H26.638V4.56249C27.072 3.97449 27.814 3.65249 28.682 3.65249ZM37.0987 3.65249C39.2267 3.65249 40.9067 5.36049 40.9067 7.60049C40.9067 9.82649 39.2407 11.5345 37.0847 11.5345C36.0487 11.5345 35.1387 11.1565 34.5927 10.4705V11.3665H33.0107V0.936485H34.6907V4.64649C35.2227 4.01649 36.0767 3.65249 37.0987 3.65249ZM36.9167 9.98049C38.2047 9.98049 39.1567 8.98649 39.1567 7.60049C39.1567 6.21449 38.2047 5.20649 36.9167 5.20649C35.6147 5.20649 34.6907 6.21449 34.6907 7.60049C34.6907 9.00049 35.6147 9.98049 36.9167 9.98049ZM45.6445 11.5345C43.4325 11.5345 41.6825 9.86849 41.6825 7.58649C41.6825 5.30449 43.4185 3.65249 45.6445 3.65249C47.8565 3.65249 49.6065 5.30449 49.6065 7.58649C49.6065 9.86849 47.8425 11.5345 45.6445 11.5345ZM45.6445 9.98049C46.9185 9.98049 47.8565 8.98649 47.8565 7.60049C47.8565 6.21449 46.9185 5.20649 45.6445 5.20649C44.3565 5.20649 43.4325 6.21449 43.4325 7.60049C43.4325 8.98649 44.3565 9.98049 45.6445 9.98049ZM53.8498 3.65249C55.6838 3.65249 56.9438 4.75849 56.9438 6.32649V11.3665H55.3618V10.5265C54.8018 11.1985 54.0318 11.5345 53.1218 11.5345C51.4418 11.5345 50.3778 10.5825 50.3778 9.29449C50.3778 8.17449 51.2598 7.43249 52.7858 7.09649L55.2638 6.56449V6.32649C55.2638 5.62649 54.6898 5.16449 53.8498 5.16449C53.0378 5.16449 52.3938 5.61249 52.1138 6.32649L50.6578 5.59849C51.0918 4.45049 52.3518 3.65249 53.8498 3.65249ZM53.3178 10.2045C54.4378 10.2045 55.2638 9.39249 55.2638 8.32849V7.83849L53.1218 8.31449C52.4918 8.45449 52.1278 8.81849 52.1278 9.28049C52.1278 9.85449 52.5898 10.2045 53.3178 10.2045ZM61.916 3.73649H62.616V5.24849H61.706C60.67 5.24849 59.97 5.92049 59.97 7.09649V11.3665H58.29V3.82049H59.872V4.87049C60.264 4.04449 60.992 3.73649 61.916 3.73649ZM69.4591 0.936485H71.1391V11.3665H69.5431V10.4845C68.9831 11.1565 68.0731 11.5345 67.0651 11.5345C64.8951 11.5345 63.2431 9.82649 63.2431 7.60049C63.2431 5.36049 64.9231 3.65249 67.0511 3.65249C68.0591 3.65249 68.9271 4.01649 69.4591 4.66049V0.936485ZM67.2331 9.98049C68.5211 9.98049 69.4591 9.00049 69.4591 7.60049C69.4591 6.21449 68.5211 5.20649 67.2331 5.20649C65.9311 5.20649 64.9931 6.21449 64.9931 7.60049C64.9931 8.98649 65.9311 9.98049 67.2331 9.98049ZM75.6109 11.5345C74.0429 11.5345 72.7549 10.7365 72.2789 9.42049L73.5809 8.79049C73.9729 9.68649 74.7149 10.1625 75.6109 10.1625C76.3669 10.1625 76.8569 9.81249 76.8569 9.29449C76.8569 8.77649 76.3249 8.55249 75.8629 8.42649L74.5749 8.09049C73.2589 7.72649 72.6009 6.95649 72.6009 5.93449C72.6009 4.57649 73.7349 3.65249 75.4009 3.65249C76.8849 3.65249 78.0609 4.39449 78.5229 5.59849L77.2069 6.21449C76.9269 5.50049 76.2549 5.06649 75.4009 5.06649C74.7009 5.06649 74.2669 5.38849 74.2669 5.86449C74.2669 6.34049 74.7429 6.57849 75.1769 6.70449L76.5209 7.08249C77.8229 7.44649 78.5229 8.20249 78.5229 9.25249C78.5229 10.6105 77.3329 11.5345 75.6109 11.5345Z" fill="white" />
                </svg>} icon={faHouse} />

                <SideBtn name={<svg width="85" height="18" viewBox="0 0 96 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.97395 0.685417L9.64195 11.1154H7.76595L6.98195 8.81942H2.72595L1.95595 11.1154H0.0799492L3.73395 0.685417H5.97395ZM3.24395 7.26542H6.46395L4.85395 2.53342L3.24395 7.26542ZM14.2481 3.48542H14.9481V4.99742H14.0381C13.0021 4.99742 12.3021 5.66942 12.3021 6.84542V11.1154H10.6221V3.56942H12.2041V4.61942C12.5961 3.79342 13.3241 3.48542 14.2481 3.48542ZM20.0831 3.40142C22.2111 3.40142 23.8911 5.10942 23.8911 7.34942C23.8911 9.57542 22.2251 11.2834 20.0691 11.2834C19.0331 11.2834 18.1231 10.9054 17.5771 10.2194V11.1154H15.9951V0.685417H17.6751V4.39542C18.2071 3.76542 19.0611 3.40142 20.0831 3.40142ZM19.9011 9.72942C21.1891 9.72942 22.1411 8.73542 22.1411 7.34942C22.1411 5.96342 21.1891 4.95542 19.9011 4.95542C18.5991 4.95542 17.6751 5.96342 17.6751 7.34942C17.6751 8.74942 18.5991 9.72942 19.9011 9.72942ZM32.0449 7.06942C32.0449 7.33542 32.0169 7.60142 31.9609 7.82542H26.4169C26.5009 9.02942 27.3829 9.79942 28.5449 9.79942C29.4409 9.79942 30.0429 9.36542 30.3789 8.74942L31.7649 9.42142C31.3029 10.4994 30.0709 11.2834 28.5309 11.2834C26.2489 11.2834 24.6669 9.54742 24.6669 7.33542C24.6669 5.06742 26.2769 3.40142 28.4049 3.40142C30.5329 3.40142 32.0449 5.06742 32.0449 7.06942ZM26.4449 6.52342H30.2389C30.1829 5.51542 29.3709 4.80142 28.4049 4.80142C27.4249 4.80142 26.6409 5.41742 26.4449 6.52342ZM33.0563 2.57542V0.685417H34.7363V2.57542H33.0563ZM33.0563 11.1154V3.56942H34.7363V11.1154H33.0563ZM39.6998 11.1994C38.0058 11.1994 37.0538 10.2474 37.0538 8.58142V5.08142H35.6818V3.56942H35.9058C36.6338 3.56942 37.0538 3.16342 37.0538 2.43542V1.23142H38.7338V3.56942H40.5258V5.08142H38.7338V8.58142C38.7338 9.22542 38.9998 9.82742 40.0638 9.82742C40.2038 9.82742 40.3858 9.81342 40.5678 9.78542V11.1294C40.3018 11.1714 39.9658 11.1994 39.6998 11.1994ZM41.9209 4.39542L42.4809 0.685417H44.1189L43.0829 4.39542H41.9209ZM48.9019 11.2834C47.3339 11.2834 46.0459 10.4854 45.5699 9.16942L46.8719 8.53942C47.2639 9.43542 48.0059 9.91142 48.9019 9.91142C49.6579 9.91142 50.1479 9.56142 50.1479 9.04342C50.1479 8.52542 49.6159 8.30142 49.1539 8.17542L47.8659 7.83942C46.5499 7.47542 45.8919 6.70542 45.8919 5.68342C45.8919 4.32542 47.0259 3.40142 48.6919 3.40142C50.1759 3.40142 51.3519 4.14342 51.8139 5.34742L50.4979 5.96342C50.2179 5.24942 49.5459 4.81542 48.6919 4.81542C47.9919 4.81542 47.5579 5.13742 47.5579 5.61342C47.5579 6.08942 48.0339 6.32742 48.4679 6.45342L49.8119 6.83142C51.1139 7.19542 51.8139 7.95142 51.8139 9.00142C51.8139 10.3594 50.6239 11.2834 48.9019 11.2834ZM59.3448 11.2834C57.2868 11.2834 55.6068 10.0794 55.0748 8.39942L56.5868 7.71342C57.0768 9.01542 58.1548 9.72942 59.3448 9.72942C60.5208 9.72942 61.2768 9.15542 61.2768 8.38542C61.2768 7.67142 60.8428 7.29342 60.0168 7.04142L57.9728 6.41142C56.2508 5.89342 55.4108 4.85742 55.4108 3.51342C55.4108 1.73542 56.8668 0.517417 58.9948 0.517417C60.9688 0.517417 62.4668 1.63742 62.9988 3.10742L61.4728 3.80742C61.0948 2.70142 60.1988 2.07142 59.0088 2.07142C57.9168 2.07142 57.1888 2.63142 57.1888 3.42942C57.1888 4.07342 57.6368 4.54942 58.4768 4.80142L60.4508 5.40342C62.1728 5.93542 63.0548 6.85942 63.0548 8.25942C63.0548 10.0654 61.5568 11.2834 59.3448 11.2834ZM68.4539 3.40142C70.5819 3.40142 72.2759 5.09542 72.2759 7.33542C72.2759 9.57542 70.5959 11.2834 68.4399 11.2834C67.4459 11.2834 66.5919 10.9334 66.0599 10.3454V13.9154H64.3799V3.56942H65.9619V4.52142C66.4799 3.82142 67.3899 3.40142 68.4539 3.40142ZM68.2859 9.72942C69.5739 9.72942 70.5259 8.72142 70.5259 7.34942C70.5259 5.96342 69.5739 4.95542 68.2859 4.95542C66.9839 4.95542 66.0599 5.94942 66.0599 7.34942C66.0599 8.73542 66.9839 9.72942 68.2859 9.72942ZM76.5237 3.40142C78.3577 3.40142 79.6177 4.50742 79.6177 6.07542V11.1154H78.0357V10.2754C77.4757 10.9474 76.7057 11.2834 75.7957 11.2834C74.1157 11.2834 73.0517 10.3314 73.0517 9.04342C73.0517 7.92342 73.9337 7.18142 75.4597 6.84542L77.9377 6.31342V6.07542C77.9377 5.37542 77.3637 4.91342 76.5237 4.91342C75.7117 4.91342 75.0677 5.36142 74.7877 6.07542L73.3317 5.34742C73.7657 4.19942 75.0257 3.40142 76.5237 3.40142ZM75.9917 9.95342C77.1117 9.95342 77.9377 9.14142 77.9377 8.07742V7.58742L75.7957 8.06342C75.1657 8.20342 74.8017 8.56742 74.8017 9.02942C74.8017 9.60342 75.2637 9.95342 75.9917 9.95342ZM84.4219 11.2834C82.2099 11.2834 80.5439 9.58942 80.5439 7.33542C80.5439 5.08142 82.1959 3.40142 84.4219 3.40142C86.0179 3.40142 87.3339 4.29742 87.7959 5.57142L86.3399 6.29942C86.0459 5.48742 85.3319 4.95542 84.4219 4.95542C83.1899 4.95542 82.2939 5.94942 82.2939 7.34942C82.2939 8.72142 83.1899 9.72942 84.4219 9.72942C85.3459 9.72942 86.0459 9.21142 86.3399 8.38542L87.7959 9.12742C87.3479 10.3594 86.0319 11.2834 84.4219 11.2834ZM95.8242 7.06942C95.8242 7.33542 95.7962 7.60142 95.7402 7.82542H90.1962C90.2802 9.02942 91.1622 9.79942 92.3242 9.79942C93.2202 9.79942 93.8222 9.36542 94.1582 8.74942L95.5442 9.42142C95.0822 10.4994 93.8502 11.2834 92.3102 11.2834C90.0282 11.2834 88.4462 9.54742 88.4462 7.33542C88.4462 5.06742 90.0562 3.40142 92.1842 3.40142C94.3122 3.40142 95.8242 5.06742 95.8242 7.06942ZM90.2242 6.52342H94.0182C93.9622 5.51542 93.1502 4.80142 92.1842 4.80142C91.2042 4.80142 90.4202 5.41742 90.2242 6.52342Z" fill="white" />
                </svg>} icon={faFile} />

                <SideBtn className="cursor-pointer" onClick={() => router.push('/editproduct/')} icon={faWrench} name={<svg width="85" height="18" viewBox="0 0 61 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.849949 11.0879V0.657859H7.75195V2.21186H2.61395V5.08186H7.47195V6.63586H2.61395V9.53386H7.75195L7.73795 11.0879H0.849949ZM12.2795 3.37386C14.1135 3.37386 15.3735 4.47986 15.3735 6.04786V11.0879H13.7915V10.2479C13.2315 10.9199 12.4615 11.2559 11.5515 11.2559C9.87153 11.2559 8.80753 10.3039 8.80753 9.01586C8.80753 7.89586 9.68953 7.15386 11.2155 6.81786L13.6935 6.28586V6.04786C13.6935 5.34786 13.1195 4.88586 12.2795 4.88586C11.4675 4.88586 10.8235 5.33386 10.5435 6.04786L9.08753 5.31986C9.52153 4.17186 10.7815 3.37386 12.2795 3.37386ZM11.7475 9.92586C12.8675 9.92586 13.6935 9.11386 13.6935 8.04986V7.55986L11.5515 8.03586C10.9215 8.17586 10.5575 8.53986 10.5575 9.00186C10.5575 9.57586 11.0195 9.92586 11.7475 9.92586ZM19.5757 11.2559C18.0077 11.2559 16.7197 10.4579 16.2437 9.14186L17.5457 8.51186C17.9377 9.40786 18.6797 9.88386 19.5757 9.88386C20.3317 9.88386 20.8217 9.53386 20.8217 9.01586C20.8217 8.49786 20.2897 8.27386 19.8277 8.14786L18.5397 7.81186C17.2237 7.44786 16.5657 6.67786 16.5657 5.65586C16.5657 4.29786 17.6997 3.37386 19.3657 3.37386C20.8497 3.37386 22.0257 4.11586 22.4877 5.31986L21.1717 5.93586C20.8917 5.22186 20.2197 4.78786 19.3657 4.78786C18.6657 4.78786 18.2317 5.10986 18.2317 5.58586C18.2317 6.06186 18.7077 6.29986 19.1417 6.42586L20.4857 6.80386C21.7877 7.16786 22.4877 7.92386 22.4877 8.97386C22.4877 10.3319 21.2977 11.2559 19.5757 11.2559ZM28.8317 3.54186H30.6657L27.3057 11.9699C26.9697 12.7959 26.3817 14.1679 24.4777 14.1679C24.0717 14.1679 23.6797 14.1119 23.3717 13.9719V12.5579C23.5817 12.6139 23.9457 12.6699 24.2397 12.6699C25.2057 12.6699 25.4577 12.1099 25.6537 11.6479L25.9057 11.0599L22.9377 3.54186H24.7717L26.8017 8.87586L28.8317 3.54186ZM31.7347 11.0879V0.657859H35.1367C38.4127 0.657859 40.5267 2.78586 40.5267 5.86586C40.5267 8.94586 38.4127 11.0879 35.1367 11.0879H31.7347ZM33.4987 9.53386H35.1787C37.3487 9.53386 38.7347 8.09186 38.7347 5.86586C38.7347 3.63986 37.3347 2.21186 35.1787 2.21186H33.4987V9.53386ZM41.8883 2.54786V0.657859H43.5683V2.54786H41.8883ZM41.8883 11.0879V3.54186H43.5683V11.0879H41.8883ZM48.8539 3.37386C50.5339 3.37386 51.6959 4.53586 51.6959 6.18786V11.0879H50.0159V6.60786C50.0159 5.58586 49.3719 4.92786 48.4199 4.92786C47.4539 4.92786 46.8099 5.58586 46.8099 6.60786V11.0879H45.1299V3.54186H46.7119V4.45186C47.1319 3.75186 47.9159 3.37386 48.8539 3.37386ZM60.1406 7.04186C60.1406 7.30786 60.1126 7.57386 60.0566 7.79786H54.5126C54.5966 9.00186 55.4786 9.77186 56.6406 9.77186C57.5366 9.77186 58.1386 9.33786 58.4746 8.72186L59.8606 9.39386C59.3986 10.4719 58.1666 11.2559 56.6266 11.2559C54.3446 11.2559 52.7626 9.51986 52.7626 7.30786C52.7626 5.03986 54.3726 3.37386 56.5006 3.37386C58.6286 3.37386 60.1406 5.03986 60.1406 7.04186ZM54.5406 6.49586H58.3346C58.2786 5.48786 57.4666 4.77386 56.5006 4.77386C55.5206 4.77386 54.7366 5.38986 54.5406 6.49586Z" fill="white" />
                </svg>} />

                <SideBtn icon={faCartShopping} name={<svg width="85" height="18" viewBox="0 0 35 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.97395 0.443962L9.64195 10.874H7.76595L6.98195 8.57796H2.72595L1.95595 10.874H0.0799492L3.73395 0.443962H5.97395ZM3.24395 7.02396H6.46395L4.85395 2.29196L3.24395 7.02396ZM14.6961 3.15996C16.8241 3.15996 18.5181 4.85396 18.5181 7.09396C18.5181 9.33396 16.8381 11.042 14.6821 11.042C13.6881 11.042 12.8341 10.692 12.3021 10.104V13.674H10.6221V3.32796H12.2041V4.27996C12.7221 3.57996 13.6321 3.15996 14.6961 3.15996ZM14.5281 9.48796C15.8161 9.48796 16.7681 8.47996 16.7681 7.10796C16.7681 5.72196 15.8161 4.71396 14.5281 4.71396C13.2261 4.71396 12.3021 5.70796 12.3021 7.10796C12.3021 8.49396 13.2261 9.48796 14.5281 9.48796ZM23.7879 3.15996C25.9159 3.15996 27.6099 4.85396 27.6099 7.09396C27.6099 9.33396 25.9299 11.042 23.7739 11.042C22.7799 11.042 21.9259 10.692 21.3939 10.104V13.674H19.7139V3.32796H21.2959V4.27996C21.8139 3.57996 22.7239 3.15996 23.7879 3.15996ZM23.6199 9.48796C24.9079 9.48796 25.8599 8.47996 25.8599 7.10796C25.8599 5.72196 24.9079 4.71396 23.6199 4.71396C22.3179 4.71396 21.3939 5.70796 21.3939 7.10796C21.3939 8.49396 22.3179 9.48796 23.6199 9.48796ZM31.6617 11.042C30.0937 11.042 28.8057 10.244 28.3297 8.92796L29.6317 8.29796C30.0237 9.19396 30.7657 9.66996 31.6617 9.66996C32.4177 9.66996 32.9077 9.31996 32.9077 8.80196C32.9077 8.28396 32.3757 8.05996 31.9137 7.93396L30.6257 7.59796C29.3097 7.23396 28.6517 6.46396 28.6517 5.44196C28.6517 4.08396 29.7857 3.15996 31.4517 3.15996C32.9357 3.15996 34.1117 3.90196 34.5737 5.10596L33.2577 5.72196C32.9777 5.00796 32.3057 4.57396 31.4517 4.57396C30.7517 4.57396 30.3177 4.89596 30.3177 5.37196C30.3177 5.84796 30.7937 6.08596 31.2277 6.21196L32.5717 6.58996C33.8737 6.95396 34.5737 7.70996 34.5737 8.75996C34.5737 10.118 33.3837 11.042 31.6617 11.042Z" fill="white" />
                </svg>} />

                <SideBtn icon={faFile} name={<svg width="85" height="18" viewBox="0 0 78 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.45995 0.276542H11.1399V10.7065H9.36195V3.42654L6.08595 7.83654H5.88995L2.61395 3.31454V10.7065H0.849949V0.276542H2.52995L5.98795 4.99454L9.45995 0.276542ZM15.9436 2.99254C17.7776 2.99254 19.0376 4.09854 19.0376 5.66654V10.7065H17.4556V9.86654C16.8956 10.5385 16.1256 10.8745 15.2156 10.8745C13.5356 10.8745 12.4716 9.92254 12.4716 8.63454C12.4716 7.51454 13.3536 6.77254 14.8796 6.43654L17.3576 5.90454V5.66654C17.3576 4.96654 16.7836 4.50454 15.9436 4.50454C15.1316 4.50454 14.4876 4.95254 14.2076 5.66654L12.7516 4.93854C13.1856 3.79054 14.4456 2.99254 15.9436 2.99254ZM15.4116 9.54454C16.5316 9.54454 17.3576 8.73254 17.3576 7.66854V7.17854L15.2156 7.65454C14.5856 7.79454 14.2216 8.15854 14.2216 8.62054C14.2216 9.19454 14.6836 9.54454 15.4116 9.54454ZM24.1078 2.99254C25.7878 2.99254 26.9498 4.15454 26.9498 5.80654V10.7065H25.2698V6.22654C25.2698 5.20454 24.6258 4.54654 23.6738 4.54654C22.7078 4.54654 22.0638 5.20454 22.0638 6.22654V10.7065H20.3838V3.16054H21.9658V4.07054C22.3858 3.37054 23.1698 2.99254 24.1078 2.99254ZM31.4885 2.99254C33.3225 2.99254 34.5825 4.09854 34.5825 5.66654V10.7065H33.0005V9.86654C32.4405 10.5385 31.6705 10.8745 30.7605 10.8745C29.0805 10.8745 28.0165 9.92254 28.0165 8.63454C28.0165 7.51454 28.8985 6.77254 30.4245 6.43654L32.9025 5.90454V5.66654C32.9025 4.96654 32.3285 4.50454 31.4885 4.50454C30.6765 4.50454 30.0325 4.95254 29.7525 5.66654L28.2965 4.93854C28.7305 3.79054 29.9905 2.99254 31.4885 2.99254ZM30.9565 9.54454C32.0765 9.54454 32.9025 8.73254 32.9025 7.66854V7.17854L30.7605 7.65454C30.1305 7.79454 29.7665 8.15854 29.7665 8.62054C29.7665 9.19454 30.2285 9.54454 30.9565 9.54454ZM41.6127 3.16054H43.2087V10.3425C43.2087 12.4005 41.5287 13.8005 39.4287 13.8005C37.7767 13.8005 36.4607 12.9325 35.9847 11.6585L37.4407 10.9305C37.7067 11.7005 38.3927 12.2605 39.4147 12.2605C40.5907 12.2605 41.5287 11.5325 41.5287 10.3425V9.40454C40.9827 10.0065 40.1707 10.3285 39.2327 10.3285C37.1887 10.3285 35.5087 8.80254 35.5087 6.64654C35.5087 4.44854 37.2167 2.99254 39.2047 2.99254C40.2407 2.99254 41.0807 3.39854 41.6127 4.07054V3.16054ZM39.4007 8.77454C40.6467 8.77454 41.5287 7.89254 41.5287 6.66054C41.5287 5.41454 40.6047 4.54654 39.3867 4.54654C38.1967 4.54654 37.2587 5.40054 37.2587 6.66054C37.2587 7.90654 38.1547 8.77454 39.4007 8.77454ZM53.0894 2.99254C54.6574 2.99254 55.7774 4.12654 55.7774 5.80654V10.7065H54.0974V6.22654C54.0974 5.17654 53.5094 4.54654 52.6134 4.54654C51.7314 4.54654 51.1294 5.17654 51.1294 6.22654V10.7065H49.4494V6.22654C49.4494 5.17654 48.8614 4.54654 47.9654 4.54654C47.0834 4.54654 46.4954 5.17654 46.4954 6.22654V10.7065H44.8154V3.16054H46.3974V4.08454C46.7894 3.37054 47.5174 2.99254 48.4274 2.99254C49.4354 2.99254 50.2614 3.45454 50.7374 4.23854C51.1854 3.46854 52.0534 2.99254 53.0894 2.99254ZM64.2148 6.66054C64.2148 6.92654 64.1868 7.19254 64.1308 7.41654H58.5868C58.6708 8.62054 59.5528 9.39054 60.7148 9.39054C61.6108 9.39054 62.2128 8.95654 62.5488 8.34054L63.9348 9.01254C63.4728 10.0905 62.2408 10.8745 60.7008 10.8745C58.4188 10.8745 56.8368 9.13854 56.8368 6.92654C56.8368 4.65854 58.4468 2.99254 60.5748 2.99254C62.7028 2.99254 64.2148 4.65854 64.2148 6.66054ZM58.6148 6.11454H62.4088C62.3528 5.10654 61.5408 4.39254 60.5748 4.39254C59.5948 4.39254 58.8108 5.00854 58.6148 6.11454ZM69.0062 2.99254C70.6862 2.99254 71.8482 4.15454 71.8482 5.80654V10.7065H70.1682V6.22654C70.1682 5.20454 69.5242 4.54654 68.5722 4.54654C67.6062 4.54654 66.9622 5.20454 66.9622 6.22654V10.7065H65.2822V3.16054H66.8642V4.07054C67.2842 3.37054 68.0682 2.99254 69.0062 2.99254ZM76.7369 10.7905C75.0429 10.7905 74.0909 9.83854 74.0909 8.17254V4.67254H72.7189V3.16054H72.9429C73.6709 3.16054 74.0909 2.75454 74.0909 2.02654V0.822543H75.7709V3.16054H77.5629V4.67254H75.7709V8.17254C75.7709 8.81654 76.0369 9.41854 77.1009 9.41854C77.2409 9.41854 77.4229 9.40454 77.6049 9.37654V10.7205C77.3389 10.7625 77.0029 10.7905 76.7369 10.7905Z" fill="white" />
                </svg>} />
            </div>


        </div>
    )
}






const SideBtn = ({ name, icon, manu}) => {
    const [clr, newClr] = useState(null);
    const [btnIcon, newBtnIcon] = useState('#0075FF');
    const [btnclr, newBtnclr] = useState('#1A1F37');
    const [dropbtn, newdropbtn] = useState(faAngleDown);


    const Colorchange = () => {
        return (
            clr === null ? newClr('#1A1F37') : clr === '#1A1F37' ? newClr(null) : newClr('#1A1F37'),
            btnIcon === '#0075FF' ? newBtnIcon('#FFFFFF') : btnIcon === '#FFFFFF' ? newBtnIcon('#0075FF') : newBtnIcon('#0075FF'),
            btnclr === '#1A1F37' ? newBtnclr('#0075FF') : btnclr === '#0075FF' ? newBtnclr('#1A1F37') : newBtnclr('#0075FF'),
            dropbtn === faAngleDown ? newdropbtn(faAngleUp) : dropbtn === faAngleUp ? newdropbtn(faAngleDown) : newdropbtn(faAngleUp)
        );
    };


    return (
        <div className="flex flex-col">
            <div style={{ backgroundColor: clr }} className="flex w-[90%] h-[40px] justify-center items-center rounded-2xl mx-[10] p-3  my-2" onClick={Colorchange}>
                <div className='flex w-[100px] h-8 bg-[#1A1F37] rounded-[12px] justify-center items-center' style={{ backgroundColor: btnclr }}>
                    <div className="flex text-[#0075FF] w-[60%] h-full items-center justify-center " style={{ color: btnIcon }}>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                </div>
                <div className="ml-[10px]">{name}</div>
                <div className='flex w-full h-full justify-end items-center'><FontAwesomeIcon icon={dropbtn} /></div>
            </div>

        </div>
    );
};











