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
import Map from './HomePage/Map'
import  NavBar  from '../../components/Navbar/Header';
import { Footer } from '../../components/Footer';
import TopStudent from './HomePage/TopStudent'
import SchoolTime from './HomePage/SchoolTime'
import OuRTopper from './HomePage/OuRTopper'
import { Test } from '../Teacher'



const HomePage = () => {
    return (
        <>
        <NavBar />
            <Slider />
            <SchoolTime />
            <Test />
            <TopStudent />
            <WhyChose />
            <OuRTopper />
            <OurFaculty />
            <About />
            <OurTeachers />
            <Video />
            
            <PopularCourses />
           
            <TotalDetails />
            
            <UpcomingEvents />
            
            <Map />
            
        <Footer />
        </>
    )
}

export default HomePage
