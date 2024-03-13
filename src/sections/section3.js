import React, { forwardRef } from 'react'
import Project1 from '../components/projects/project1'
import Project2 from '../components/projects/project2'
import Project3 from '../components/projects/project3'
import Project4 from '../components/projects/project4'

const Section3 = forwardRef((props, ref) => {
    return (
        <>
            <div ref={ref}>
                <h2 className="text-center text-4xl font-bold sm:text-5xl py-10">Projects</h2>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    <div className="flex-col h-full rounded-lg bg-gray-200">
                        <Project1/>
                    </div>
                    <div className="flex-col h-full rounded-lg bg-gray-200">
                        <Project2/>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    <div className="flex-col h-full rounded-lg bg-gray-200">
                        <Project3/>
                    </div>
                    <div className="flex-col h-full rounded-lg bg-gray-200">
                        <Project4/>
                    </div>
                </div>
            </div>
        </>
    )
})
export default Section3