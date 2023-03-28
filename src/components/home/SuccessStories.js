import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SuccessStories = () => {
    // const [successStories, setSuccesStories] = useState([]);

    // const loadStories = async () => {
    //     const res = await(
    //         axios.get('../../staticData/services.js')
    //     )
    //     console.log(res)
    //     if (res?.data?.successStories?.length > 0) {
    //         setSuccesStories(res?.data?.successStories)
    //     }
    // }


    // useEffect(() => {
    //     loadStories()
    // }, [])
    const successStories = [
        {
            id: 1,
            name: "Fatema Jannat",
            uni: "Bangor University",
            review: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            id: 2,
            name: "Iftekhar Ahmed",
            uni: "Bangor University",
            review: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            id: 3,
            name: "Kiyam Rahman",
            uni: "Bangor University",
            review: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            id: 4,
            name: "Rimi Chy",
            uni: "Bangor University",
            review: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            id: 5,
            name: "Promi Fahim",
            uni: "Bangor University",
            review: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            id: 6,
            name: "Daiyan Ahmed",
            uni: "Bangor University",
            review: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            id: 7,
            name: "Faija Farzana",
            uni: "Bangor University",
            review: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        }


    ]
    return (
        <div className="my-24 py-4">
            <h2 className="text-center text-3xl mb-8 text-[#001529] font-semibold">Our Happy Clients</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    successStories?.map((story) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <div className="card p-2 bg-base-100 shadow-xl flex flex-col justify-center items-center">
                                        <div className="avatar">
                                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={story?.img} alt="/" />
                                            </div>
                                        </div>
                                        <div className="card-body items-center text-center">
                                            <h2 className="text-md text-[#333]">{story?.name}</h2>
                                            <h2 className="text-lg font-semibold text-[#001529]">{story?.uni}</h2>
                                            <p className="text-sm">{story?.review}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })
                }

            </Swiper>

        </div>
    );
};

export default SuccessStories;