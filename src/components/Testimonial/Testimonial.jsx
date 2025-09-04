'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const Testimonial = () => {
    return (
        <>
            <div className='testimonial-block bg-slate-100'>
                <div className='container'>
                    <div className='testimonial-main bg-surface lg:pt-20 sm:pt-16 pt-10 lg:pb-12 pb-8 sm:my-16 my-10 lg:rounded-[40px] rounded-2xl flex items-center justify-center'>
                        <div className='content sm:w-2/3 w-[85%]'>
                            <div className='heading3 text-center'>
                                Trusted By Professionals
                            </div>

                            <Swiper
                                spaceBetween={16}
                                slidesPerView={1}
                                loop={true}
                                pagination={{ clickable: true }}
                                speed={400}
                                modules={[Pagination, Autoplay, Navigation]}
                                className='h-full relative lg:mt-10 mt-7'
                                autoplay={{
                                    delay: 4000
                                }}
                            >
                                <SwiperSlide className='lg:pb-24 pb-20'>
                                    <div className='text-2xl font-medium text-center'>
                                        {String.raw`"`}Get personalized financial advice to help reach your financial goals.Get personalized financial advice to help reach your financial goals. {String.raw`"`}
                                    </div>
                                    <div className='text-button text-center mt-5'>
                                        Kazi Ariyan // CEO
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='lg:pb-24 pb-20'>
                                    <div className='text-2xl font-medium text-center'>
                                        {String.raw`"`}Get personalized financial advice to help reach your financial goals.Get personalized financial advice to help reach your financial goals. {String.raw`"`}
                                    </div>
                                    <div className='text-button text-center mt-5'>
                                        Khan // Manager
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;