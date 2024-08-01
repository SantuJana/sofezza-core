'use client'
import React, { useEffect, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function BottomBar() {
    let timeoutID
    const navRef = useRef()

    const handleMouseMove = () => {
        navRef.current.style.display = 'block'
        if (timeoutID){
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(()=>{
            navRef.current.style.display = 'none'
        }, 3000)
    }

    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('scroll', handleMouseMove)

        return () => {
            removeEventListener('mousemove', handleMouseMove)
            removeEventListener('scroll', handleMouseMove)
        }
    },[])

  return (    
    <nav ref={navRef} id="navbar-bottom" data-aos="zoom-in-up" data-aos-duration={1500} className="navbar-no-shadow-bottom">
        <div data-aos="fade-up" data-aos-duration={1500} role="banner" className="navbar-no-shadow-container-bottom w-nav">
        <div className="container-regular-bottom">
            <div className="navbar-wrapper-bottom">
            <nav role="navigation" className="nav-menu-wrapper-bottom w-nav-menu">
                <ul role="list" className="nav-menu-bottom w-list-unstyled">
                <li className="list-itemb-bottom"><ScrollLink to="topbar" activeClass="active-menu" spy={true} className={`nav-link-bottom`}>Home</ScrollLink></li>
                <li className="list-itemb-bottom"><ScrollLink to="best-service" activeClass="active-menu" spy={true} className={`nav-link-bottom`}>Services</ScrollLink>
                </li>
                <li className="list-itemb-bottom"><ScrollLink to="portfolio" activeClass="active-menu" spy={true} className={`nav-link-bottom`}>Portfolio</ScrollLink>
                </li>
                <li className="list-itemb-bottom"><ScrollLink to="contact" activeClass="active-menu" spy={true} className={`nav-link-bottom`}>Contact Us</ScrollLink></li>
                </ul>
            </nav>
            </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-1" />
        </div>
    </nav>
  )
}
