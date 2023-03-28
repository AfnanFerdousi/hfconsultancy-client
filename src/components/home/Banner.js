import React, { Component } from "react";
import Slider from "react-slick";
import './Banner.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Search from "../forms/Search";

export default class Banner extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear"
        };
        return (
            // <div className="m-0 overflow-hidden">
            //     <Slider {...settings}>
            //         <div className="w-full h-[90vh] bg-one overflow-hidden">
            //             <div className="overlay h-[90vh] overflow-hidden">
            //                 <div>
            //                     <h2 className="absolute text-[45px] text-[#ddd] lg:md:ml-[38rem] lg:md:mt-[8rem] font-bold">Educational Consultancy</h2>
            //                     <p className="text-[#fff] absolute lg:md:ml-[38rem] lg:md:mt-[13rem] lg:md:w-[500px]">Many of you dream but don't dare. We make you believe in yourself and follow your dreams! Top Ranked Universities,No Age Limit, Low Living Cost Work Allowed and many more...
            //                     </p>
            //                     <button className="bg-[#001529] px-[30px] py-[10px] text-[#fff] lg:md:ml-[38rem] lg:md:mt-[20rem] absolute flex items-center hover:bg-[#1f69ad]">Get Consultation <AiOutlineArrowRight className="text-[20px] font-bold" /></button>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="w-full h-[90vh] bg-two">
            //             <div className="overlay h-[90vh]">
            //                 <div>
            //                     <h2 className="absolute text-[45px] text-[#ddd] lg:md:ml-[38rem] lg:md:mt-[8rem] font-bold">Career guidance</h2>
            //                     <p className="text-[#fff] absolute lg:md:ml-[38rem] lg:md:mt-[13rem] lg:md:w-[500px]">Many of you dream but don't dare. We make you believe in yourself and follow your dreams! Top Ranked Universities,No Age Limit, Low Living Cost Work Allowed and many more...
            //                     </p>
            //                     <button className="bg-[#001529] px-[30px] py-[10px] text-[#fff] lg:md:ml-[38rem] lg:md:mt-[20rem] absolute flex items-center hover:bg-[#1f69ad]">Get Consultation <AiOutlineArrowRight className="text-[20px] font-bold" /></button>
            //                 </div>
            //             </div>
            //         </div>
            //     </Slider>
            // </div>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Explore your study abroad options</h1>
                        <p className="mb-5">From lookup and admission to visa and arrival at your dream university, we guide you every step of the way</p>
                        <Search/>
                    </div>
                </div>
            </div>
        );
    }
}