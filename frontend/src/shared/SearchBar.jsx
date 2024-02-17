import React, {useRef} from 'react'
import './searchBar.css'

import {Col, Form, FormGroup} from 'reactstrap';

import { BASE_URL } from '../utils/config';

import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const locationRef = useRef('')
    const udaljenostRef = useRef(0)
    const maxBrojClanovaRef = useRef(0)
    const navigate = useNavigate()

    const searchHandler = async () => {
        const location = locationRef.current.value
        const udaljenost = udaljenostRef.current.value
        const maxBrojClanova = maxBrojClanovaRef.current.value

        if(location === '' || udaljenost === '' || maxBrojClanova === ''){
            return alert('Sva polja moraju biti popunjena!')
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${udaljenost}&maxGroupSize=${maxBrojClanova}`)
        
        if(!res.ok) alert('Something went wrong')

        const result = await res.json()

        navigate(`/tours/search?city=${location}&distance=${udaljenost}&maxGroupSize=${maxBrojClanova}`, {state: result.data})
    }

  return (
    <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i className="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Lokacija</h6>
                        <input type="text" placeholder='Gdje želite putovati?' ref={locationRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i className="ri-map-pin-time-line"></i>
                    </span>
                    <div>
                        <h6>Udaljenost</h6>
                        <input type="number" placeholder='Udaljenost u km' min="0" ref={udaljenostRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span>
                        <i className="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>Max broj članova</h6>
                        <input type="number" placeholder='0' min="0" ref={maxBrojClanovaRef} />
                    </div>
                </FormGroup>

                <span className="search__icon" type='submit' onClick={searchHandler} >
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar