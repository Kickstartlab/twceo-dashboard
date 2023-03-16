import React, { useEffect } from 'react'
import Menu from './Menu'
import part_1 from '../assets/part_1.png';
import part_2 from '../assets/part_2.png';
import part_3 from '../assets/part_3.png';
import part_4 from '../assets/part_4.png';
import part_5 from '../assets/part_5.png';
import part_6 from '../assets/part_6.png';
import part_7 from '../assets/part_7.png';
import part_8 from '../assets/part_8.png';
import part_9 from '../assets/part_9.png';
import net_1 from '../assets/net_1.png';
import net_2 from '../assets/net_2.png';
import net_3 from '../assets/net_3.png';
import net_4 from '../assets/net_4.png';
import net_5 from '../assets/net_5.png';
import net_6 from '../assets/net_6.png';
import net_7 from '../assets/net_7.png';
import net_8 from '../assets/net_8.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import orb from '../assets/orb.png';
import redit from '../assets/redit.png';
import logo_1 from '../assets/logo_1.png';
import play from '../assets/play.png';
import play_1 from '../assets/play_1.png';
import play_2 from '../assets/play_2.png';
import play_3 from '../assets/play_3.png';
import sport from '../assets/sport.png';
import lottery from '../assets/lottery.png';
import number from '../assets/number.png';
import banner_top from '../assets/banner_top.png';
// import Aos from 'aos';
// import 'aos/dist/aos.css';


export default function Home() {

    // useEffect(() => {
    //     Aos.init({
    //         duration: 3000,
    //         once: false,
    //         easing: 'ease',
    //         delay: 350
    //     });
    //     Aos.refresh();
    // }, [])

    return (
        <div className="bg-black-100 font-inter overflow-hidden">

            <div className='container mx-auto'>

                <div className='flex lg:gap-x-6 gap-x-0'>

                    <div className='w-inherit'>
                        <Menu />
                    </div>

                    <div>

                        {/* menu */}


                        <div className="lg:py-8 py-8 lg:pr-20 px-5 text-white-100 lg:block hidden">

                            <div className='flex justify-between items-center'>

                                <div className='flex gap-x-10 items-center'>

                                    <div className='flex gap-x-2 items-center'>
                                        <img src={sport} alt="Logo" className='' />

                                        <a href='/' className='font-oswald font-semibold text-lg'>
                                            Sports
                                        </a> 
                                    </div>

                                    <div className='flex gap-x-2 items-center'>
                                        <img src={lottery} alt="Logo" className='' />

                                        <a href='/' className='font-oswald font-semibold text-lg'>
                                            Lottery
                                        </a>
                                    </div>

                                </div>


                                    <button className='font-montserat font-semibold text-lg border border-yellow-100 rounded-lg py-3 px-6'>
                                        Connect wallet
                                    </button>

                            </div>

                        </div>


                        {/* top section */}

                        <div className="lg:py-12 py-8 lg:pr-20 px-5 lg:mt-0 mt-8">

                            <img src={banner_top} alt="Logo" className='' />

                            <p className='font-montserat font-bold py-2 text-white-100 lg:text-right'>
                                Don't miss your chance! <span className='text-yellow-100'>85137</span> tickets have been sold today!
                            </p>

                            <div className='flex items-center lg:gap-x-6 gap-x-3'>
                                <button className='font-montserat font-semibold lg:text-lg text-sm text-black-50 rounded-lg py-3 md:px-5 px-2 bg-gray-50'>
                                    My Ticket
                                </button>

                                <button className='font-montserat font-semibold text-white-100 lg:text-lg text-sm rounded-lg py-3 md:px-5 px-2 bg-yellow-100'>
                                    Result
                                </button>

                                <button className='font-montserat font-semibold lg:text-lg text-sm text-black-50 rounded-lg py-3 md:px-5 px-2 bg-gray-50'>
                                    $100K Winner
                                </button>
                            </div>

                            <div className='bg-gray-50 rounded-2xl p-5 mt-8'>

                                <div className='flex flex-wrap gap-x-8 items-center space-y-3'>

                                    <p className='font-montserat font-semibold text-lg text-black-50 '>
                                        Game ID
                                    </p>

                                    <input type="text" placeholder='23456789' className='bg-black-100 placeholder:text-center rounded-sm placeholder:text-black-50 ring-0 focus:ring-0' />

                                    <p className='font-montserat font-semibold text-lg text-black-50'>
                                        14/03/2023, 19:55:00
                                    </p>
                                </div>

                                <div className='bg-gradient rounded-xl lg:flex justify-between items-center p-3 lg:w-1/2 my-6 mx-auto'>

                                    <h4 className='text-white-100 font-montserat font-extrabold text-lg'>
                                        TODAY’s<br></br> LUCKY NUMBERS
                                    </h4>

                                    <div className='flex flex-wrap items-center'>

                                        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_1_934)">
                                                <path d="M49.8312 49.2885C58.3721 40.4478 58.1292 26.3572 49.2885 17.8162C40.4478 9.27526 26.3572 9.51821 17.8163 18.3589C9.2753 27.1996 9.51826 41.2902 18.3589 49.8311C27.1996 58.3721 41.2902 58.1291 49.8312 49.2885Z" fill="#EC7525" />
                                                <path d="M49.0801 18.032C57.8016 26.4578 58.0413 40.3585 49.6154 49.08C41.1896 57.8015 27.2889 58.0412 18.5674 49.6154C9.84586 41.1895 9.60618 27.2888 18.032 18.5673C26.4579 9.84582 40.3586 9.60614 49.0801 18.032Z" stroke="#979797" stroke-opacity="0.8" stroke-width="0.6" />
                                            </g>
                                            <path d="M42.8952 43.1615C48.0514 38.1529 48.1711 29.9126 43.1625 24.7563C38.1539 19.6001 29.9136 19.4804 24.7574 24.489C19.6011 29.4976 19.4814 37.7379 24.49 42.8941C29.4986 48.0504 37.7389 48.1701 42.8952 43.1615Z" fill="#F7F5DD" />
                                            <path d="M39.3543 36.5691C39.3525 37.4765 39.1869 38.2713 38.8581 38.945C38.5293 39.6188 38.0866 40.1758 37.5217 40.6152C36.9567 41.0547 36.2936 41.3869 35.5328 41.6036C34.772 41.8204 33.9546 41.9251 33.0963 41.9274C32.6839 41.9259 32.2736 41.8997 31.8666 41.8326C31.4672 41.7744 31.0699 41.6915 30.6821 41.593C30.2943 41.4945 29.9003 41.3707 29.5235 41.2401C29.1385 41.1088 28.7548 40.9611 28.3636 40.8046L28.772 36.6225C29.0245 36.7592 29.2942 36.8891 29.5891 37.0128C29.8758 37.1359 30.1728 37.235 30.4793 37.3185C30.7859 37.4019 31.0938 37.469 31.4113 37.5204C31.7288 37.5718 32.0319 37.5972 32.329 37.5973C32.5024 37.5954 32.7182 37.5804 32.9763 37.5526C33.2262 37.524 33.4707 37.462 33.709 37.3747C33.9392 37.2868 34.1386 37.1715 34.3081 37.0206C34.4775 36.8698 34.5602 36.6705 34.5562 36.4226C34.5591 36.1918 34.4936 35.9883 34.3592 35.8203C34.2329 35.6529 34.063 35.5149 33.8493 35.4062C33.6439 35.2982 33.4035 35.2121 33.1448 35.1491C32.886 35.0862 32.6177 35.0389 32.3569 35.0006C32.0961 34.9622 31.8421 34.9409 31.6031 34.9374C31.3641 34.9338 31.175 34.9262 31.0179 34.9296C30.7045 34.9281 30.3815 34.9422 30.049 34.9721C29.7246 35.0027 29.4064 35.0585 29.0943 35.1396L29.526 26.6442L38.0845 26.4211L38.3104 30.8131L33.0051 30.5168L32.8976 32.3891C33.2179 32.3086 33.5279 32.2521 33.8448 32.2127C34.1616 32.1732 34.4764 32.1584 34.7987 32.1524C35.4419 32.1568 36.0359 32.2561 36.5875 32.4674C37.1398 32.6704 37.6258 32.9752 38.0312 33.3558C38.4442 33.7452 38.7683 34.2096 39.0036 34.7492C39.2389 35.2887 39.3526 35.9006 39.3543 36.5691Z" fill="#934721" />
                                            <defs>
                                                <filter id="filter0_d_1_934" x="7.56615" y="11.5661" width="52.5151" height="52.5151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_934" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_934" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>

                                        <svg width="69" height="68" viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_1_927)">
                                                <path d="M50.2509 49.2885C58.7919 40.4478 58.549 26.3572 49.7083 17.8162C40.8676 9.27526 26.777 9.51821 18.236 18.3589C9.69508 27.1996 9.93803 41.2902 18.7787 49.8311C27.6194 58.3721 41.71 58.1291 50.2509 49.2885Z" fill="#73BDC6" />
                                                <path d="M49.4998 18.032C58.2214 26.4578 58.461 40.3585 50.0352 49.08C41.6093 57.8015 27.7087 58.0412 18.9871 49.6154C10.2656 41.1895 10.026 27.2888 18.4518 18.5673C26.8777 9.84582 40.7783 9.60614 49.4998 18.032Z" stroke="#979797" stroke-opacity="0.8" stroke-width="0.6" />
                                            </g>
                                            <path d="M43.3149 43.1615C48.4712 38.1529 48.5909 29.9126 43.5823 24.7563C38.5737 19.6001 30.3334 19.4804 25.1772 24.489C20.0209 29.4976 19.9012 37.7379 24.9098 42.8941C29.9184 48.0504 38.1587 48.1701 43.3149 43.1615Z" fill="#F7F5DD" />
                                            <path d="M31.0126 41.2759L26.8733 41.2435L30.6117 31.1364L26.158 31.1016L26.1796 27.6115L34.8663 27.6874L34.8534 29.7287L31.0185 41.2843L31.0126 41.2759Z" fill="#377279" />
                                            <path d="M43.958 31.6776C43.9408 34.4872 42.7621 35.8389 40.6804 38.2084L43.964 38.234L43.9428 41.3726L35.8543 41.3108L35.6882 39.0705C38.2127 36.4616 40.1862 34.3447 40.1977 32.4423C40.1986 31.6514 39.7826 31.119 38.9697 31.1194C38.1141 31.1126 37.3792 31.434 36.0518 32.0132L35.3708 28.6083C36.8954 27.8138 38.0183 27.4927 39.6785 27.5049C42.472 27.5275 43.9692 29.0354 43.9556 31.6919L43.958 31.6776Z" fill="#377279" />
                                            <defs>
                                                <filter id="filter0_d_1_927" x="7.98593" y="11.5661" width="52.5151" height="52.5151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_927" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_927" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>

                                        <svg width="69" height="68" viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_1_920)">
                                                <path d="M50.2508 49.2885C58.7918 40.4478 58.5488 26.3572 49.7081 17.8162C40.8675 9.27526 26.7769 9.51821 18.2359 18.3589C9.69493 27.1996 9.93788 41.2902 18.7786 49.8311C27.6192 58.3721 41.7098 58.1291 50.2508 49.2885Z" fill="#203351" />
                                                <path d="M49.4997 18.032C58.2212 26.4578 58.4609 40.3585 50.035 49.08C41.6092 57.8015 27.7085 58.0412 18.987 49.6154C10.2655 41.1895 10.0258 27.2888 18.4517 18.5673C26.8775 9.84582 40.7782 9.60614 49.4997 18.032Z" stroke="#979797" stroke-opacity="0.8" stroke-width="0.6" />
                                            </g>
                                            <path d="M43.3148 43.1615C48.4711 38.1529 48.5908 29.9126 43.5821 24.7563C38.5735 19.6001 30.3333 19.4804 25.177 24.489C20.0207 29.4976 19.901 37.7379 24.9097 42.8941C29.9183 48.0504 38.1585 48.1701 43.3148 43.1615Z" fill="#F7F5DD" />
                                            <path d="M27.4259 41.2102L27.4911 30.3268L25.7884 30.3114L25.8026 27.8378L28.2198 26.5917L31.461 26.6181L31.3815 41.2405L27.4348 41.2038L27.4259 41.2102Z" fill="#3D5985" />
                                            <path d="M42.3401 30.911C42.3215 33.9262 41.0566 35.3767 38.8226 37.9196L42.3465 37.9471L42.3237 41.3153L33.6433 41.249L33.4651 38.8448C36.1744 36.045 38.2922 33.7732 38.3135 31.7252C38.3144 30.8765 37.868 30.3051 36.9956 30.3056C36.0774 30.2983 35.2887 30.6432 33.8642 31.2648L33.127 27.6018C34.7631 26.7491 35.9683 26.4045 37.75 26.4177C40.7479 26.4418 42.3546 28.0601 42.3401 30.911Z" fill="#3D5985" />
                                            <defs>
                                                <filter id="filter0_d_1_920" x="7.98578" y="11.5661" width="52.5151" height="52.5151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_920" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_920" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>

                                        <svg width="69" height="68" viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_1_915)">
                                                <path d="M50.2509 49.2885C58.7919 40.4478 58.5489 26.3572 49.7082 17.8162C40.8676 9.27526 26.777 9.51821 18.236 18.3589C9.69502 27.1996 9.93797 41.2902 18.7786 49.8311C27.6193 58.3721 41.7099 58.1291 50.2509 49.2885Z" fill="#82C83D" />
                                                <path d="M49.4998 18.032C58.2213 26.4578 58.461 40.3585 50.0351 49.08C41.6093 57.8015 27.7086 58.0412 18.9871 49.6154C10.2656 41.1895 10.0259 27.2888 18.4517 18.5673C26.8776 9.84582 40.7783 9.60614 49.4998 18.032Z" stroke="#979797" stroke-opacity="0.8" stroke-width="0.6" />
                                            </g>
                                            <path d="M43.3149 43.1615C48.4712 38.1529 48.5908 29.9126 43.5822 24.7563C38.5736 19.6001 30.3334 19.4804 25.1771 24.489C20.0208 29.4976 19.9011 37.7379 24.9097 42.8941C29.9184 48.0504 38.1586 48.1701 43.3149 43.1615Z" fill="#F7F5DD" />
                                            <path d="M39.5548 36.8109C39.5287 40.5014 37.9608 42.834 33.9166 42.8008C29.8546 42.7646 27.8664 40.0989 27.8895 35.1763C27.9235 28.3396 31.133 25.2471 38.2724 25.3157L37.9814 29.2256C34.9852 29.1979 33.3349 29.7921 32.6601 31.9122L32.7102 32.0485C33.3667 31.832 34.168 31.7316 34.9692 31.7405C37.7924 31.7661 39.5763 33.3112 39.5548 36.8109ZM32.5069 35.4897C32.4786 35.713 32.4473 35.954 32.4515 36.201C32.4362 37.9775 32.849 38.9967 34.0064 39.0026C34.9169 39.012 35.2915 38.4646 35.3107 37.1541C35.3209 35.8969 34.9431 35.3215 33.8419 35.307C33.3763 35.3096 32.986 35.3525 32.5247 35.4927L32.5069 35.4897Z" fill="#315111" />
                                            <defs>
                                                <filter id="filter0_d_1_915" x="7.98587" y="11.5661" width="52.5151" height="52.5151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_915" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_915" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>

                                        <svg width="69" height="68" viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_1_910)">
                                                <path d="M50.251 49.2885C58.7919 40.4478 58.549 26.3572 49.7083 17.8162C40.8677 9.27526 26.777 9.51821 18.2361 18.3589C9.69511 27.1996 9.93807 41.2902 18.7787 49.8311C27.6194 58.3721 41.71 58.1291 50.251 49.2885Z" fill="#1D82DD" />
                                                <path d="M49.4999 18.032C58.2214 26.4578 58.4611 40.3585 50.0352 49.08C41.6094 57.8015 27.7087 58.0412 18.9872 49.6154C10.2657 41.1895 10.026 27.2888 18.4518 18.5673C26.8777 9.84582 40.7784 9.60614 49.4999 18.032Z" stroke="#979797" stroke-opacity="0.8" stroke-width="0.6" />
                                            </g>
                                            <path d="M43.315 43.1615C48.4712 38.1529 48.5909 29.9126 43.5823 24.7563C38.5737 19.6001 30.3334 19.4804 25.1772 24.489C20.0209 29.4976 19.9012 37.7379 24.9098 42.8941C29.9185 48.0504 38.1587 48.1701 43.315 43.1615Z" fill="#F7F5DD" />
                                            <path d="M39.2012 30.586C39.182 33.6982 37.8764 35.1955 35.5771 37.8294L39.2143 37.8577L39.1909 41.3343L30.2312 41.2659L30.0472 38.7844C32.8437 35.8945 35.0296 33.5495 35.0517 31.4357C35.0526 30.5597 34.5918 29.9699 33.6914 29.9704C32.7436 29.9629 31.9296 30.3189 30.4592 30.9605L29.6983 27.1797C31.3871 26.2995 32.631 25.9438 34.47 25.9574C37.5643 25.9824 39.2228 27.6527 39.2078 30.5953L39.2012 30.586Z" fill="#1A578E" />
                                            <defs>
                                                <filter id="filter0_d_1_910" x="7.98596" y="11.5661" width="52.5151" height="52.5151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_910" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_910" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>

                                    </div>
                                </div>

                                <div className='bg-black-100 p-5 rounded-2xl'>

                                    <div className='flex flex-wrap justify-between items-center'>

                                        <p className='font-montserat font-semibold text-lg text-white-100 '>
                                            Winners List
                                        </p>

                                        <p className='font-montserat font-semibold text-lg text-black-50 '>
                                            Total tickets sold this round <span className='text-white-100'>10909</span>
                                        </p>
                                    </div>

                                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between py-4 space-y-6'>

                                        <div className='space-y-6 flex flex-col items-center'>
                                            <p className='font-montserat font-semibold text-black-50 '>
                                                Winner Name
                                            </p>

                                            <div>
                                                <ul className='lg:space-y-10 space-y-5'>
                                                    <li className='font-montserat font-semibold text-white-100 md:text-xl'>
                                                        Lorem Ipsum
                                                    </li>
                                                    <li className='font-montserat font-semibold text-white-100 md:text-xl'>
                                                        Lorem Ipsum
                                                    </li>
                                                    <li className='font-montserat font-semibold text-white-100 md:text-xl'>
                                                        Lorem Ipsum
                                                    </li>
                                                    <li className='font-montserat font-semibold text-white-100 md:text-xl'>
                                                        Lorem Ipsum
                                                    </li>
                                                    <li className='font-montserat font-semibold text-white-100 md:text-xl'>
                                                        Lorem Ipsum
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='space-y-6 flex flex-col items-center'>

                                            <p className='font-montserat font-semibold text-black-50 '>
                                                Numbers
                                            </p>

                                            <div>
                                                <ul className='space-y-2'>
                                                    <li className='flex items-center gap-x-2 text-white-100'>
                                                        <img src={number} alt="Logo" className='' />
                                                        x1
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-white-100'>
                                                        <img src={number} alt="Logo" className='' />
                                                        x1
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-white-100'>
                                                        <img src={number} alt="Logo" className='' />
                                                        x1
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-white-100'>
                                                        <img src={number} alt="Logo" className='' />
                                                        x1
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-white-100'>
                                                        <img src={number} alt="Logo" className='' />
                                                        x1
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='space-y-6 flex flex-col items-center'>

                                            <p className='font-montserat font-semibold text-black-50 '>
                                                Matches
                                            </p>

                                            <div>
                                                <ul className='lg:space-y-10 space-y-5'>
                                                    <li className='flex items-center gap-x-2 text-white-100'>
                                                        6
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-white-100'>
                                                        4
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-white-100'>
                                                        4
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-white-100'>
                                                        4
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-white-100'>
                                                        4
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='space-y-6 flex flex-col items-center'>

                                            <p className='font-montserat font-semibold text-black-50 '>
                                                Matches
                                            </p>

                                            <div>
                                                <ul className='lg:space-y-10 space-y-5'>
                                                    <li className='flex items-center gap-x-2 text-yellow-100'>
                                                        ₨5,636.37
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-yellow-100'>
                                                        ₨5,636.37
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-yellow-100'>
                                                        ₨5,636.37
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-yellow-100'>
                                                        ₨5,636.37
                                                    </li>
                                                    <li className='flex items-center gap-x-2 text-yellow-100'>
                                                        ₨5,636.37
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* HOW TO PLAY? */}

                        <div className="lg:py-12 py-8 lg:pr-20 px-5">

                            <div>
                                <img src={play} alt="Logo" className='' />

                                <h2 className='text-white-100 font-montserat font-extrabold lg:text-4xl text-xl lg:-translate-y-44 -translate-y-14 lg:ml-12 ml-4'>
                                    HOW TO PLAY?
                                </h2>
                            </div>

                            <div className='grid lg:grid-cols-3 grid-cols-1 items-center gap-x-4 text-white-100 font-montserat'>

                                <div className='bg h-full w-full p-8'>

                                    <div className='space-y-6'>
                                        <img src={play_1} alt="Logo" className='flex mx-auto' />

                                        <h2 className='text-center font-extrabold tracking-wide text-2xl'>
                                            BUY TICKETS
                                        </h2>

                                        <p className='tracking-wide text-center leading-snug uppercase'>
                                            Buy ticket with $0.1,
                                            and choose numbers for ticket.
                                        </p>

                                    </div>
                                </div>

                                <div className='bg h-full w-full p-8'>

                                    <div className='space-y-6'>
                                        <img src={play_2} alt="Logo" className='flex mx-auto w-8/12' />

                                        <h2 className='text-center font-extrabold tracking-wide text-2xl'>
                                            BUY TICKETS
                                        </h2>

                                        <p className='tracking-wide text-center leading-snug uppercase'>
                                            Buy ticket with $0.1,
                                            and choose numbers for ticket.
                                        </p>

                                    </div>
                                </div>

                                <div className='bg h-full w-full p-8'>

                                    <div className='space-y-6'>
                                        <img src={play_3} alt="Logo" className='flex mx-auto' />

                                        <h2 className='text-center font-extrabold tracking-wide text-2xl'>
                                            BUY TICKETS
                                        </h2>

                                        <p className='tracking-wide text-center leading-snug uppercase'>
                                            Buy ticket with $0.1,
                                            and choose numbers for ticket.
                                        </p>

                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* lottery rulate */}

                        <div className="lg:py-12 py-8 lg:pr-20 px-5">
                            <h2 className='text-white-100 font-montserat font-extrabold lg:text-4xl text-2xl'>
                                LOTTERY RULES
                            </h2>

                            <div className='bg-gray-50 rounded-2xl p-6 mt-8'>

                                <div className='flex justify-between items-center mb-4'>

                                    <p className='font-montserat font-semibold text-xl text-black-50'>
                                        Matches
                                    </p>

                                    <p className='font-montserat font-semibold text-xl text-black-50 '>
                                        Numbers
                                    </p>

                                    <p className='font-montserat font-semibold text-xl text-black-50 '>
                                        Prize
                                    </p>
                                </div>

                                <div className='bg-black-100 p-5 rounded-2xl'>
                                    <div className='lg:flex justify-between py-4 space-y-6 items-center'>

                                        <div className='space-y-6'>
                                            <div>
                                                <ul className='lg:space-y-10 space-y-5 flex flex-col items-center'>
                                                    <li className='font-montserat font-semibold text-white-100 lg:text-xl'>
                                                        5 number jackpot ball
                                                    </li>
                                                    <li className='font-montserat font-semibold text-white-100 lg:text-xl'>
                                                        5 numbers
                                                    </li>
                                                    <li className='font-montserat font-semibold text-white-100 lg:text-xl'>
                                                        4 numbers
                                                    </li>
                                                    <li className='font-montserat font-semibold text-white-100 lg:text-xl'>
                                                        3 numbers
                                                    </li>
                                                    <li className='font-montserat font-semibold text-white-100 lg:text-xl'>
                                                        No numbers
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='space-y-6 flex flex-col items-center'>
                                            <ul className='space-y-2'>
                                                <li className='flex'>
                                                    <img src={number} alt="Logo" className='' />
                                                </li>
                                                <li className='flex'>
                                                    <img src={number} alt="Logo" className='' />
                                                </li>
                                                <li className='flex'>
                                                    <img src={number} alt="Logo" className='' />
                                                </li>
                                                <li className='flex'>
                                                    <img src={number} alt="Logo" className='' />
                                                </li>
                                                <li className='flex'>
                                                    <img src={number} alt="Logo" className='' />
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='space-y-6 flex flex-col items-center'>

                                            <div>
                                                <ul className='lg:space-y-10 space-y-5 flex flex-col items-center'>
                                                    <li className='text-yellow-100 text-xl'>
                                                        ₨28,181,890.42
                                                    </li>
                                                    <li className='lg:text-right text-white-100 lg:text-xl'>
                                                        ₨845,456.71
                                                    </li>
                                                    <li className='lg:text-right text-white-100 lg:text-xl'>
                                                        ₨5,636.37
                                                    </li>
                                                    <li className='lg:text-right text-white-100 lg:text-xl'>
                                                        ₨281.81
                                                    </li>
                                                    <li className='lg:text-right text-white-100 lg:text-xl'>
                                                        +1 Ticket
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='py-8 text-white-100 font-montserat lg:w-10/12'>
                                    <h4 className='font-semibold pb-5 text-2xl'>
                                        Lottery Instructions:
                                    </h4>
                                    <p>
                                        A provably fair algorithm is used to draw the lottery prizes.
                                        Prizes are drawn at 15:00 UTC+0 every day.
                                        You can buy a ticket for 5 TCEO. The sale of tickets stops at 14:55 UTC+0 every day.
                                        The player chooses six numbers for each ticket, the first five are from 1 to 36, and the last one is from 1 to 10.
                                    </p>
                                    <p className='pt-3'>
                                        You can choose numbers manually or automatically.
                                        If you have BCL, you can use BCL to redeem Tickets.
                                        Each draw produces six numbers.
                                        The more numbers you match in the first five numbers, greater prize you will win.
                                    </p>
                                </div>

                                <div className='pb-8 text-white-100 font-montserat lg:w-10/12'>
                                    <h4 className='font-semibold pb-5 text-2xl'>
                                        Winning Prize Details:
                                    </h4>
                                    <p>
                                        All six numbers matched: $100,000 prize. In case you are not the only winner, you may need to share the prize equally with others.
                                        Five numbers matched, and the sixth number is missed: Each ticket gets a $3,000 prize.
                                        Four of the first 5 numbers matched: Each ticket gets a $20 prize.
                                        Three of the first 5 numbers matched: Each ticket gets a $1 prize.
                                        If all six numbers are missed, the lottery will be reserved for free, and continue participating in the next day's draw.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* links section */}

                        <div className="lg:py-12 py-8 lg:pr-20 px-5">

                            <div className='border border-t-2 mb-12 border-white-50 opacity-30'></div>

                            <div className="flex flex-wrap gap-x-6 justify-between items-baseline mt-8 space-y-6">

                                <div className='col-1'>
                                    <h4 className='text-xl font-inter text-seagreen-50 font-semibold'>
                                        Pages
                                    </h4>

                                    <div className='mt-8'>

                                        <ul className='space-y-6 text-white-100'>
                                            <li>
                                                <a href='/'>
                                                    Casino Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Slots
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Live Casino
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    New Releases
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Recommended
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='col-2'>
                                    <h4 className='text-xl font-inter text-seagreen-50 font-semibold'>
                                        Sports
                                    </h4>

                                    <div className='mt-8'>

                                        <ul className='space-y-6 text-white-100'>
                                            <li>
                                                <a href='/'>
                                                    Sports Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Live
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Rules
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='col-3'>
                                    <h4 className='text-xl font-inter text-seagreen-50 font-semibold'>
                                        Promo
                                    </h4>

                                    <div className='mt-8'>

                                        <ul className='space-y-6 text-white-100'>
                                            <li>
                                                <a href='/'>
                                                    VIP Club
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Affiliate
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Promotions
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Lottery
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Refer A Friend
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='col-4'>
                                    <h4 className='text-xl font-inter text-seagreen-50 font-semibold'>
                                        Support / Legal
                                    </h4>

                                    <div className='mt-8'>

                                        <ul className='space-y-6 text-white-100'>
                                            <li>
                                                <a href='/'>
                                                    Help Centre
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Gamble Aware
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Fairness
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    FAQ
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Terms of Service
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Self-exclusion
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    AML
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Design Resources
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    APP
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Live Support
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='col-5'>
                                    <h4 className='text-xl font-inter text-seagreen-50 font-semibold'>
                                        About us
                                    </h4>

                                    <div className='mt-8'>

                                        <ul className='space-y-6 text-white-100'>
                                            <li>
                                                <a href='/'>
                                                    News
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Work With us
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Business Contracts
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Help Desk
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    Verify
                                                    Representative
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className='lg:-translate-y-28 -translate-y-0 lg:mt-0 mt-6'>
                                <p className='font-montserat text-white-100 text-lg pb-3'>
                                    Join Our Community
                                </p>
                                <div className='flex gap-x-4 items-center'>

                                    <a href='/'>
                                        <img src={twitter} alt="Twitter" />
                                    </a>

                                    <a href='/'>
                                        <img src={telegram} alt="Telegram" />
                                    </a>

                                    <a href='/'>
                                        <img src={orb} alt="Telegram" />
                                    </a>

                                    <a href='/'>
                                        <img src={redit} alt="Telegram" />
                                    </a>

                                </div>
                            </div>

                        </div>

                        {/* network section */}

                        <div className="lg:py-12 py-8 lg:pr-20 px-5 ">

                            <div className='border border-t-2 mb-8 border-white-50 opacity-30'></div>

                            <h3 className='text-white-100 text-center font-montserat font-semibold lg:text-4xl text-2xl'>
                                Accepted Networks
                            </h3>

                            <div className="flex flex-wrap items-center gap-x-6 justify-center mt-8">

                                <img src={net_1} alt="Logo" className='' />
                                <img src={net_2} alt="Logo" className='' />
                                <img src={net_3} alt="Logo" className='' />
                                <img src={net_4} alt="Logo" className='' />
                                <img src={net_5} alt="Logo" className='' />
                                <img src={net_6} alt="Logo" className='' />
                                <img src={net_7} alt="Logo" className='' />
                                <img src={net_8} alt="Logo" className='' />

                            </div>

                        </div>

                        {/* partner section */}

                        <div className="lg:py-12 py-8 lg:pr-20 px-5 ">

                            <div className='border border-t-2 mb-8 border-white-50 opacity-30'></div>

                            <h3 className='text-white-100 font-montserat font-semibold lg:text-4xl text-2xl'>
                                Sponsorship and Gaming Responsibilities
                            </h3>

                            <div className="flex flex-wrap items-center gap-x-3 justify-between mt-8">

                                <img src={part_1} alt="Logo" className='' />
                                <img src={part_2} alt="Logo" className='' />
                                <img src={part_3} alt="Logo" className='' />
                                <img src={part_4} alt="Logo" className='' />
                                <img src={part_5} alt="Logo" className='' />

                            </div>

                            <div className="flex flex-wrap items-center gap-x-3 justify-between mt-6">

                                <img src={part_6} alt="Logo" className='' />
                                <img src={part_7} alt="Logo" className='' />
                                <img src={part_8} alt="Logo" className='md:w-5/12' />

                            </div>

                            <img src={part_9} alt="Logo" className='mt-6' />

                        </div>

                        {/* bottom section */}

                        <div className="lg:py-12 py-8 lg:pr-20 px-5 ">

                            <div className='border border-t-2 mb-8 border-white-50 opacity-30'></div>

                            <div className="lg:flex items-center gap-x-3 ">

                                <img src={logo_1} alt="Logo" className='' />

                                <p className='font-montserat text-white-100 leading-loose text-lg'>
                                    Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
