import React from 'react'
import './serviceCard.css'

const ServiceCard = ({item}) => {
    
    const {imgUrl, naslov, opis} = item;

    return (
        <div className="service__item">
            <div className="service__img">
                <img src={imgUrl} alt="slika" />
            </div>
            <h5>{naslov}</h5>
            <p>{opis}</p>
        </div>
  )
}

export default ServiceCard