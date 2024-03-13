import React, { forwardRef } from 'react'
import myPhoto from '../images/my_photo.jpg'

const Section1 = forwardRef((props, ref) => {
    return(
        <section ref={ref}>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full animate-slidein opacity-0 [--slidein-delay:300ms]">
                            <img
                                alt="myPhoto"
                                src={myPhoto}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-[#9dc5c1] animate-slidein opacity-0 [--slidein-delay:700ms]">
                        <span
                            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 bg-[#9dc5c1]"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24 animate-slidein opacity-0 [--slidein-delay:500ms]">
                            <h2 className="text-2xl font-bold sm:text-3xl text-[#f6f3e7]">
                                WELCOME TO MY PORTFOLIO WEBSITE!
                            </h2>

                            <p className="mt-4 text-gray-600">
                                I'm Khang Le, a sophomore and a Galvin Scholar at Notre Dame majoring in Computer Science and ACMS. I was born in Vietnam and immigrated
                                to Kansas, where I have been for the past 12 years. I started my journey in Computer Science wanting to create simulations for games as a kid,
                                leading me towards my current passion: Machine Learning and Web Development! Outside of my academic pursuits, I love to cook, dance and play games.
                                If you ever see me, let's hang out together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Section1