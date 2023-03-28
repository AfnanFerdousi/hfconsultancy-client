import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';


const About = () => {
    return (
        <div className="my-24">
            <h2 className="text-center text-3xl mb-8 text-[#001529] font-semibold">Why Choose HF Consultancy?</h2>
            <div className="px-20 text-center ">
                <span className='text-xl flex items-center'><BsCheckCircle className='text-2xl text-green-600 mr-2' /><p>We represent more than 500 universities over the world.</p></span>
                <span className='text-xl flex items-center mt-3'><BsCheckCircle className='text-2xl text-green-600 mr-2' /><p>We have 99% visa success record.</p></span>
                <span className='text-xl flex items-center mt-3'><BsCheckCircle className='text-2xl text-green-600 mr-2' /><p>We provide support, guidance and assistance throughout the application and even after you have reached your destination.</p></span>
                {/* <span className='text-xl flex items-center mt-3'><BsCheckCircle className='text-2xl text-green-600 mr-2' /><p>We ensure high-quality professional consultation on choosing, course, country and university. We offer professional training for Pre-CAS and VISA interviews.</p></span> */}
                <span className='text-xl flex items-center mt-3'><BsCheckCircle className='text-2xl text-green-600 mr-2' /><p>We are the only firm in the east of Sylhet building bridges to international platforms for students of Sylhet.</p></span>
                <span className='text-xl flex items-center mt-3'><BsCheckCircle className='text-2xl text-green-600 mr-2' /><p>We are an one stop solution for consultancy and language coaching.</p></span>
                <span className='text-xl flex items-center mt-3'><BsCheckCircle className='text-2xl text-green-600 mr-2' /><p>Our sincerity, determination and honesty is what makes us different from others.</p></span>
            </div>
        </div>
    );
};

export default About;