import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import worldImg from '../assets/images/world.png'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/FeaturedTours/FeaturedTourList'
import ImagesGallery from '../components/Image-gallery/ImagesGallery'
import IzjaveFanova from '../components/IzjaveFanova/IzjaveFanova'
import Novosti from '../shared/Novosti'

const Home = () => {
  return (
    <>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align_items_center">
                <Subtitle subtitle={'Putujte s osmijehom'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>Putovanja kreiraju mnoga <span className="highlight">sjećanja</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Quam voluptatem provident commodi est? Debitis adipisci totam 
                  dignissimos reiciendis quam molestiae rerum et sunt laboriosam ab,
                 ipsa quisquam facere laborum perspiciatis!
              </p>
              
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">Šta se nalazi u ponudi</h5>
            <h2 className="services__title">Mi nudimo najbolje lokacije</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>
    	
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Istraži"} />
            <h2 className='featured__tour-title'>Naše popularne ture</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Iskustvo'} />
              <h2>Sa svim našim iskustvom <br /> mi ćemo vas opsluživati </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                <br /> Quas aliquam, hic tempora inventore suscipit unde.
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>150+</span>
                <h6>Uspješnih putovanja</h6>
              </div>
              <div className="counter__box">
                <span>400+</span>
                <h6>Zadovoljnih klijenata</h6>
              </div>
              <div className="counter__box">
                <span>5+</span>
                <h6>Godina iskustva</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Galerija'} />
            <h2 className='gallery__title'>Prođite kroz našu galeriju putovanja</h2>
          </Col>
          <Col lg='12'>
            <ImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Ljubav fanova'} />
            <h2 className="testimonial__title">Šta korisnici kažu o nama</h2>
          </Col>
          <Col lg='12'>
            <IzjaveFanova />
          </Col>
        </Row>
      </Container>
    </section>

    <Novosti />
    </>
  )
}

export default Home