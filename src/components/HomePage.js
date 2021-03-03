import React from 'react'
import Slider from './HomePage/Slider'
import WhyChose from './HomePage/WhyChose'
import About from './HomePage/About'
import OurFaculty from './HomePage/OurFaculty'
import Video from './HomePage/Video'
import PopularCourses from './HomePage/PopularCourses'
import TotalDetails from './HomePage/TotalDetails'
import UpcomingEvents from './HomePage/UpcomingEvents'
import OurTeachers from './HomePage/OurTeachers'




const HomePage = () => {
    return (
        <>
            <Slider />
            <WhyChose />
            <About />
            <OurFaculty />
            <Video />
            <PopularCourses />
            <TotalDetails />
            <UpcomingEvents />
            <OurTeachers />
        </>
    )
}

export default HomePage
