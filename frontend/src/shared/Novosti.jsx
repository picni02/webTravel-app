import React from 'react'
import './novosti.css'
import { Container, Row, Col } from 'reactstrap'

import maleTuristImg from '../assets/images/male-tourist.png'

const Novosti = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Pretplatite se da dobijete korisne informacije za putovanja</h2> 
                        <div className="newsletter__input">
                            <input type="email" placeholder='Unesite vaš email' />
                            <button className='btn newsletter__btn'>Pretplati se</button>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ad voluptate sequi eveniet fugiat doloribus.</p>

                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTuristImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Novosti