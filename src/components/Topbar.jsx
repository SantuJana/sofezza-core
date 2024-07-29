'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation';
import { useRouter, use } from 'next/navigation';

export default function Topbar() {
    const [hash, setHash] = useState('');
    const router = useRouter()

    // Function to update hash state
    const updateHash = () => {
        setHash(window.location.hash);
    };
    
    useEffect(() => {
        // Initial hash setup
        updateHash();
        window.addEventListener("hashchange", updateHash);

        // Cleanup the event listener on component unmount
        return () => {window.removeEventListener('hashchange', updateHash)};
    }, [updateHash]);

  return (
    <section className="sofezza_menu pt-15">
    <div className="navbar-no-shadow">
      <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="nav-container w-nav">
        <div className="nav-padding-block">
          <div className="navbar-wrapper">
            <Link href="#topbar" className="navbar-logo w-nav-brand" style={{width: '66%'}} >
            <Image  width={200} height={200} loading="lazy" src="/assets/images/sofezza_logo.png" alt="logo" style={{width: '30%'}} /></Link>
            <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
              <ul role="list" className="nav-menu w-list-unstyled">
                <li className={`list-item ${hash == '#topbar' && 'active'}`}><Link href="#topbar" className="nav-link">Home</Link>
                  <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  </div>
                </li>
                <li className={`list-item ${hash == '#best-service' && 'active'}`}><Link href="#best-service" className="nav-link">Services</Link>
                  <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  </div>
                </li>
                <li className={`list-item ${hash == '#portfolio' && 'active'}`}><Link href="#portfolio" className="nav-link">Portfolio</Link>
                  <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  </div>
                </li>
                <li className={`list-item ${hash == '#contact' && 'active'}`}><Link href="#contact" className="nav-link nav-last-link">Contact Us</Link>
                  <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="menu-button w-nav-button" style={{WebkitUserSelect: 'text'}} aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
              <div className="w-icon-nav-menu" />
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0">
          <nav role="navigation" className="nav-menu-wrapper w-nav-menu" style={{transform: 'translateY(0px) translateX(0px)', transition: 'transform 400ms ease 0s'}} data-nav-menu-open>
            <ul role="list" className="nav-menu w-list-unstyled">
              <li className="list-item"><Link href="#topbar" className="nav-link">Home</Link>
                <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                </div>
              </li>
              <li className="list-item"><Link href="#best-service" className="nav-link">Services</Link>
                <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                </div>
              </li>
              <li className="list-item"><Link href="#portfolio" className="nav-link">Portfolio</Link>
                <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                </div>
              </li>
              <li className="list-item"><Link href="#contact" className="nav-link nav-last-link">Contact Us</Link>
                <div className="nav-hover-border" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                </div>
              </li>
              <li className="list-item responsive-show">
                <div data-w-id="353b3f28-942b-381b-a4b2-3b6c071ac2d8" className="primary-button-wrapper responsive-show">
                  <div className="primary-button-background" /><Link href="/#pricing" className="primary-button responsive-show w-button">Get Started</Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  )
}
