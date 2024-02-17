import React, {useRef, useEffect, useContext} from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link, useNavigate} from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import './zaglavlje.css'
import { AuthContext } from './../../context/AuthContext'

const navigacijski_linkovi=[
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

const Header = () => {

  const headerRef = useRef(null)
  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)

  const logout = () => {
    dispatch({type:'LOGOUT'})
    navigate('/')
  }

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
  })

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wraper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {navigacijski_linkovi.map((putanja, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink to={putanja.path} className={navClass => navClass.isActive ? 'active__link' : ''
                  }>
                      {putanja.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                  {
                    user ? (
                    <>
                    <h5 className='mb-0'>{user.username}</h5>
                    <Button className='btn btn-dark' onClick={logout}>Odjavi se</Button>
                    </> ) : (
                      <>
                      <Button className="btn secondary__btn"><Link to='/login'>Prijava</Link> </Button>
                      <Button className="btn primary__btn"><Link to='/register'>Registracija</Link> </Button>
                      </>
                    )
                  }
                  
              </div>
              
              <span className="mobile__menu">
                  <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
};

export default Header;