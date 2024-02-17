import React from 'react'
import './podnozje.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'

const quick_linkovi=[
  {
    path: '/home',
    display : 'Home'
  },
  {
    path: '#',
    display : 'About'
  },
  {
    path: '/tours',
    display : 'Tours'
  },
]

const quick_linkovi2 =[
  {
    path: '/gallery',
    display : 'Galerija'
  },
  {
    path: '/login',
    display : 'Prijava'
  },
  {
    path: '/register',
    display : 'Registracija'
  },
]

const Footer = () => {

  const year = new Date().getFullYear()
  const year1 = year-1

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, autem!</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i class='ri-youtube-line'></i></Link>
                </span>
                <span>
                  <Link to='#'><i class='ri-github-fill'></i></Link>
                </span>
                <span>
                  <Link to='#'><i class='ri-facebook-circle-line'></i></Link>
                </span>
                <span>
                  <Link to='#'><i class='ri-instagram-line'></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Istraži</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick_linkovi.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Linkovi</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick_linkovi2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Kontakt</h5>

            <ListGroup className='footer__quick-links'>
              
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class='ri-map-pin-line'></i></span>
                    Adresa:
                  </h6>

                  <p className='mb-0'>Fakultetska 1, Zenica</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class='ri-mail-line'></i></span>
                    Email:
                  </h6>

                  <p className='mb-0'>delic.amer.21@size.ba</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class='ri-phone-fill'></i></span>
                    Broj telefona:
                  </h6>

                  <p className='mb-0'>+38765432100</p>
                </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className="copyright">Web Programiranje {year1}/{year}, MERN Projekat</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;