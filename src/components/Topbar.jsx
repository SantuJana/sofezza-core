'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import { Link as ScrollLink } from 'react-scroll'

export default function Topbar() {
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
      // alert(Router.asPath)

    },[])

    const toggleMenu = () => {
      setMobileMenu(!mobileMenu)
    }

  return (
    <section className="sofezza_menu pt-15" >
    <div className="navbar-no-shadow">
      <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="nav-container w-nav">
        <div className="nav-padding-block">
          <div className="navbar-wrapper">
            <ScrollLink to="#topbar" className="navbar-logo w-nav-brand" style={{width: '66%'}} >
            <Image  width={200} height={200} loading="lazy" src="/assets/images/sofezza_logo.png" alt="logo" /></ScrollLink>
            <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
              <ul role="list" className="nav-menu w-list-unstyled">
                <li className={`list-item`}><ScrollLink to="topbar" activeClass='active-menu' spy={true} className="nav-link nav-link-bottom">Home</ScrollLink>
                  <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  </div>
                </li>
                <li className={`list-item`}><ScrollLink to="best-service" activeClass='active-menu' spy={true} className="nav-link nav-link-bottom">Services</ScrollLink>
                  <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  </div>
                </li>
                <li className={`list-item`}><ScrollLink to="portfolio" activeClass='active-menu' spy={true} className="nav-link nav-link-bottom">Portfolio</ScrollLink>
                  <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  </div>
                </li>
                <li className={`list-item`}><ScrollLink to="contact" activeClass='active-menu' spy={true} className="nav-link nav-link-bottom nav-last-link">Contact Us</ScrollLink>
                  <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="menu-button w-nav-button" style={{WebkitUserSelect: 'text'}} aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
              <div className="w-icon-nav-menu" onClick={toggleMenu} />
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0" style={{display: mobileMenu ? 'block' : 'none', minHeight: 300, marginTop: 5}}>
          <nav role="navigation" className="nav-menu-wrapper w-nav-menu" style={{transform: 'translateY(0px) translateX(0px)', transition: 'transform 400ms ease 0s'}} data-nav-menu-open>
            <ul role="list" className="nav-menu w-list-unstyled">
              <li className="list-item"><ScrollLink spy={true} activeClass='active-menu' to="topbar" className={`nav-link-bottom`}>Home</ScrollLink>
              </li>
              <li className="list-item"><ScrollLink spy={true} activeClass='active-menu' to="best-service" className={`nav-link-bottom`}>Services</ScrollLink>
              </li>
              <li className="list-item"><ScrollLink spy={true} activeClass='active-menu' to="portfolio" className={`nav-link-bottom`}>Portfolio</ScrollLink>
              </li>
              <li className="list-item"><ScrollLink spy={true} activeClass='active-menu' to="contact" className={`nav-last-link nav-link-bottom`}>Contact Us</ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  )
}
