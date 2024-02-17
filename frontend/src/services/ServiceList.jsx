import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        naslov: "Prognoza vremena",
        opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ex.",
    },
    {
        imgUrl: guideImg,
        naslov: "Najbolji vodiči",
        opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ex.",
    },
    {
        imgUrl: customizationImg,
        naslov: "Odabir",
        opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ex.",
    },
]

const ServiceList = () => {
  return (
    <>
    {servicesData.map((item, index) => (
        <Col lg="3" key={index}> 
            <ServiceCard item={item} />
        </Col>
    ))}
    </>
  )
}

export default ServiceList