import React, { forwardRef } from 'react';

const Section2 = forwardRef((props, ref) => {
    return (
        <>
            <section ref={ref} className="dark:bg-[#eab59b] dark:text-[#182d27]">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#48b4a0]">
                                <h3 className="text-3xl font-semibold">MY JOURNEY</h3>
                                <span className="text-sm font-bold tracking-wider uppercase dark:text-[#182d27]">My life in a nutshell</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-[#eab59b]">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#48b4a0]">
                                    <h3 className="text-xl font-semibold tracking-wide">Bishop Carroll Catholic High School</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-[#182d27]">August 2018 - May 2022</time>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#48b4a0]">
                                    <h3 className="text-xl font-semibold tracking-wide">University of Notre Dame</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-[#182d27]">August 2022 - May 2026</time>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#48b4a0]">
                                    <h3 className="text-xl font-semibold tracking-wide">Tutor for Calculus II</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-[#182d27]">September 2022 - May 2023</time>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#48b4a0]">
                                    <h3 className="text-xl font-semibold tracking-wide">Research Assistant @ Department of Aerospace and Engineering</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-[#182d27]">September 2023 - Present</time>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#48b4a0]">
                                    <h3 className="text-xl font-semibold tracking-wide">Web Developer @ CS4Good</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-[#182d27]">October 2023 - Present</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
})
export default Section2


