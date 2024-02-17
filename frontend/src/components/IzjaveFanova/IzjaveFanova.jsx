import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const IzjaveFanova = () => {
    
    const settings  = {
        dots : true,
        infinite : true,
        autoplay : true,
        speed : 1000,
        swipeToSlide : true,
        autoplaySpeed : 2000,
        slidesToShow : 3,

        responsive: [
            {
                breakpoint : 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite:true,
                    dots:true
                },
            },
            {
                breakpoint : 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
    
    return (
    <Slider {... settings}>
        <div className="izjave py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere id molestiae temporibus corporis mollitia suscipit modi perferendis omnis dolor similique aliquam adipisci vero earum reiciendis, nulla consequuntur illum nam.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Amer Delić</h6>
                    <p>Korisnik</p>
                </div>
            </div>
        </div>

        <div className="izjave py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere id molestiae temporibus corporis mollitia suscipit modi perferendis omnis dolor similique aliquam adipisci vero earum reiciendis, nulla consequuntur illum nam.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Nedžma Brkić</h6>
                    <p>Korisnik</p>
                </div>
            </div>
        </div>

        <div className="izjave py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere id molestiae temporibus corporis mollitia suscipit modi perferendis omnis dolor similique aliquam adipisci vero earum reiciendis, nulla consequuntur illum nam.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Imad Hubljar</h6>
                    <p>Korisnik</p>
                </div>
            </div>
        </div>

        <div className="izjave py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere id molestiae temporibus corporis mollitia suscipit modi perferendis omnis dolor similique aliquam adipisci vero earum reiciendis, nulla consequuntur illum nam.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Nedžma Brkić</h6>
                    <p>Korisnik</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default IzjaveFanova