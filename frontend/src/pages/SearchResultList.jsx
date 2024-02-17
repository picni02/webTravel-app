import React, { useState } from 'react'
import CommonSection from './../shared/CommonSection'
import { Container, Row, Col } from 'reactstrap'

import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import Novosti from '../shared/Novosti'

const SearchResultList = () => {

  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);

  return (
    <>
      <CommonSection title={'Rezultati pretrage'} />
        <section>
          <Container>
            <Row>
              {data.length === 0 ? (
                <h4 className='text-center'>Nije pronađeno putovanje</h4>
              ) : (
                data?.map(tour => (
                  <Col lg='3' className='mb-4' key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))
              )
              }
            </Row>
          </Container>
        </section>
        <Novosti />
    </>
  )
}

export default SearchResultList