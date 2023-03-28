import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    // const [services, setServices] = useState([]);

    // const loadServices = async () => {
    //     const res = await(
    //         axios.get('../../staticData/services.js')
    //     )
    //     console.log(res)
    //     if (res?.data?.services?.length > 0) {
    //         setServices(res?.data?.services)
    //     }
    // }


    // useEffect(() => {
    //     loadServices()
    // }, [])

    const services = [
        {
            id: 1,
            title: "Career guidance",
            desc: "You don’t have to work a day if you love your job and our professional consultants make sure of that. We consider your inclination and guide you accordingly to platforms promising growth. We understand that applying for a higher Education abroad is a very critical decision in your life. Hence each student is assigned a personal counselor who is well trained, helpful and knowledgeable about the various courses offered by the universities that we represent abroadOur Admission Counsellors will do your Profile assessment and assist you in shortlisting countries and universities to apply, programs to select based on Education background and career objective.You can attend a our FREE Counselling session at our office on prior appointment.",
            img: "https://hfconsultancy.net/assets/media/images/service1.webp"
        },
        {
            id: 2,
            title: "Educational Consultancy",
            desc: "Practical skills, up-to-date knowledge and accredited courses ensure secure careers opening uncountable doors of opportunities. HF Consultancy team is dedicated to helping clients be skilled and prepared to follow their aspirations and achieve long term goals.",
            img: "https://hfconsultancy.net/assets/media/images/service2.webp"
        },
        {
            id: 3,
            title: "IELTS Crash Course",
            desc: "HF Consultancy comes in a package of all solutions for higher studies. Many universities require language certificates for graduate programmes. HF offers language courses and coaching for such courses as IELTS, TOFEL, LIFE SKILLS and others.",
            img: "https://hfconsultancy.net/assets/media/images/service1.webp"
        },
        {
            id: 4,
            title: "World Wide University Admission Guidance",
            desc: "HF Consultancy works with 500 universities globally 73% of them are TEF GOLD Rated, our team assists students from the first step to the forward throughout the journey till students finish the course of education",
            img: "https://hfconsultancy.net/assets/media/images/service4.webp"
        },
        {
            id: 5,
            title: "Visa Assistance & Guidance",
            desc: "HF Consultancy consultants make an intimidating immigration process and an experience of ease and amusement for our clients.",
            img: "https://hfconsultancy.net/assets/media/images/service5.webp"
        },
        {
            id: 6,
            title: "Scholarship Guidance",
            desc: "Practical skills, up-to-date knowledge and accredited courses ensure secure careers opening uncountable doors of opportunities. HF Consultancy team is dedicated to helping clients be skilled and prepared to follow their aspirations and achieve long term goals.",
            img: "https://hfconsultancy.net/assets/media/images/service6.webp"
        }
    ]
    return (
        <div className="my-24">
            <h2 className="text-center text-3xl mb-8 text-[#001529] font-semibold">Explore Our Services</h2>
            <div className="grid grid-cols-3 gap-4 px-12">
                {services?.map((service) => {
                    return (
                        <>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={service?.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service?.title}</h2>
                                    <p>{service?.desc.slice(0, 150)}...</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/${service?.id}`} className="mt-2 py-2 font-semibold hover:text-[#fff] bg-blue-200 text-md px-6 hover:bg-[#001529] transition duration-300">Read More</Link>
                                    </div>
                                </div>
                            </div></>
                    )
                })}
            </div>
        </div>
    );
};

export default Services;