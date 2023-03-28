import React from 'react';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';

const Contact = () => {
    return (
        <div>
            <div className='flex justify-evenly items-center mt-[60px] mb-[150px]'>
                <div>
                    <div className='flex gap-x-[20px] items-center'>
                        <h2 className='text-[40px] text-[#001529] font-light '><AiOutlineHome /></h2>
                        <h2 className='text-[16px] font-semibold'>Sylhet, Bangladesh<br /><span className='text-[13px] text-[#6a6767]'>2nd floor, Diddiquey plaza, Mejortila</span></h2>
                    </div>

                    <div className='flex gap-x-[20px] items-center my-[20px]'>
                        <h2 className='text-[40px] text-[#001529] font-light '><AiOutlinePhone /></h2>
                        <h2 className='text-[16px] font-semibold'>
                        +880 1731-923900 <br /><span className='text-[13px] text-[#6a6767]'>Sat to Thu 9am to 8 pm</span></h2>
                    </div>


                    <div className='flex gap-x-[20px] items-center'>
                        <h2 className='text-[40px] text-[#001529] font-light '><BsEnvelope /></h2>
                        <h2 className='text-[16px] font-semibold'>hfconsultancy586@gmail.com<br /><span className='text-[13px] text-[#6a6767]'>Send us your query anytime!</span></h2>
                    </div>


                </div>

                <div className='lg:md:w-[30%]'>
                        <input type="text" placeholder="Enter name" class="input w-full max-w-xs border-[1px] border-[#6a6767] rounded-none" />

                        <input type="number" placeholder="Enter phone number" class="input w-full max-w-xs border-[1px] border-[#6a6767] rounded-none my-[20px]" />

                        <input type="text" placeholder="Enter address" class="input w-full max-w-xs border-[1px] border-[#6a6767] rounded-none" />
                </div>

                <div>
                    <textarea class="textarea border-[1px] border-[#6a6767] rounded-none max-w-md" placeholder="Your Message" rows={6} cols={30}></textarea>
                </div>
                <button className='bg-[#001529] px-[30px] py-[10px] text-[#fff] 
               mt-[20rem] absolute flex items-center hover:bg-[#1f69ad]'>Submit</button>
            </div>
        </div>
    );
};

export default Contact;