'use client'
import Image from "next/image"
import Link from "next/link"
import '../../public/assets/css/aos.css'
import '../../public/assets/css/custom.css'
import '../../public/assets/css/responsive.css'
import { message } from "antd"
import { useState, useRef } from "react"
import Cursor from "@/components/Cursor"
import Tilt from "vanilla-tilt-react";
import Topbar from "@/components/Topbar"
import {WhatsAppOutlined, LoadingOutlined, PaperClipOutlined} from '@ant-design/icons'
import { Element, Link as ScrollLink } from "react-scroll"
import BottomBar from "@/components/BottomBar"
import PhoneInput from "@/components/PhoneInput"

export default function Home() {
  const mobileRef = useRef('')
  const attachmentRef = useRef()
  const initialValue = {name:'', email: '', mobile: '', service: '', message: '', other: '', file: null}
  const [formData, setFormData] = useState(initialValue)
  const year = new Date().getFullYear()
  const [isLoading, setLoading] = useState(false)
  
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    let formDataNew = new FormData()
    formDataNew.append('name', formData.name || null)
    formDataNew.append('email', formData.email || null)
    formDataNew.append('mobile', mobileRef.current.getNumber())
    formDataNew.append('service', formData.service || null)
    formDataNew.append('message', formData.message || null)
    formDataNew.append('other', formData.other || null)
    formDataNew.append('file', formData.file || null)
    
    fetch('/api/contactus', {
      method: 'POST',
      body: formDataNew
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      message.success(response.message)
      setFormData(initialValue)
    })
    .catch( error => {
      message.error('Failed to send your concern')
    })
    .then(()=> setLoading(false))
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0]
    if (file){
      setFormData({...formData, file })
    }
  }

  return (
    <>
    <Cursor />
      <div>
  <section id='topbar' data-w-id="97f5e500-feb5-6224-21cc-043d5e2588ab" className="hero-section">
    <Topbar />
    <div className="hero-glowing-block-right" />
    <div className="hero-glowing-block-left" />
    <div className="hero-glowing-icon-right"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 100px, (max-width: 991px) 130px, 150px" srcSet="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 500w, https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 779w" alt="bg icon" /></div>
    <div className="hero-glowing-icon-left"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 100px, (max-width: 991px) 130px, 150px" srcSet="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 500w, https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 779w" alt="bg icon" /></div>
    <div className="w-layout-blockcontainer container w-container">
      <div className="hero-tag-wrapper">
        <div className="hero-tags-wrapper">
          <div data-aos="zoom-in-right" data-aos-duration={1500} className="hero-tag-text">
            The Best Place For
          </div>
        </div>
        <div className="hero-small-heading">Your Dream Application</div>
      </div>
      <div className="hero-heading-block">
        <div className="hero-heading-flex-block">
          <div>Designing Dreams into Reality</div>
          <div className="hero-heading-text-responsive-show">Designing Dreams into Reality with our</div>
        </div>
        <div className="hero-heading-flex-block">
          <div data-aos="zoom-out" data-aos-duration={1500} className="hero-box-image"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736b9d9735c64917134fe_boxes.svg" loading="lazy" alt="boxes" /></div>
          <div>with our <span className="heading-gradient-text">Excellence and Expertise</span></div>
        </div>
      </div>
      <div className="hero-service-wrapper">
        <div className="hero-service-block">
          <div className="hero-service-image"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736b9d9735c6491713502_app-window.svg" loading="lazy" alt="app window" /></div>
          <div>Website Design &amp; Development</div>
        </div>
        <div className="hero-service-block">
          <div className="hero-service-image"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736b9d9735c6491713518_monitor-smartphone.svg" loading="lazy" alt="monitor smartphone" /></div>
          <div>Application Design &amp; Development</div>
        </div>
        <div className="hero-service-block">
          <div className="hero-service-image"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736b9d9735c649171354c_component.svg" loading="lazy" alt="component" /></div>
          <div>Data Design</div>
        </div>
      </div>
      <div className="provide-themes-wrapper">
        <div className="provide-themes-block">
          <div>Discover our advanced services for hassle-free customization. Get excellent solutions for all your application needs. We don&#39;t just use technology, <br />we <b>Live</b> and <b>Breathe</b> it.</div><ScrollLink to="#best-service" className="secondary-button w-inline-block">
            <div>Read More</div>
            <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="secondary-button-arrow">
              <div></div>
            </div>
          </ScrollLink>
        </div>
      </div>
    </div>
    <div className="hero-bottom-shadow" />
  </section>
  <div className="black-background-block">
    <section id="best-service" data-w-id="b012082c-6204-dbd0-8636-ced2becc0e66" className="service-section">
      <div data-w-id="b012082c-6204-dbd0-8636-ced2becc0e67" style={{opacity: 1, transform: 'translate3d(0px, -80px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}} className="all-blur-icons service-section-left-icon"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp" loading="lazy" sizes="100px" srcSet="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 500w, https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 779w" alt="bg icon" /></div>
      <div data-w-id="b012082c-6204-dbd0-8636-ced2becc0e69" style={{opacity: 1, transform: 'translate3d(0px, -78.219px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}} className="all-blur-icons service-section-right-icon"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp" loading="lazy" sizes="(max-width: 767px) 100px, (max-width: 991px) 130px, 150px" srcSet="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 500w, https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 779w" alt="bg icon" /></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-heading-block">
          <div className="section-heading-tag">Creative Minds At Your Service</div>
          <h2 className="all-section-heading">Our Best Services</h2>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="service-card-wrapper w-dyn-items">
            <div role="listitem" className="service-collection-item w-dyn-item">
              <div className="service-wrapper w-inline-block" style={{borderColor: 'rgba(66, 66, 66, 0)', backgroundColor: 'rgba(51, 51, 51, 0)'}}>
                <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fc6" className="service-image" style={{willChange: 'transform', transform: 'translate3d(0.004px, -0.002px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  <Image  width={200} height={200} src="/assets/images/website.png" alt="service images" sizes="(max-width: 479px) 96vw, (max-width: 767px) 328px, (max-width: 991px) 48vw, (max-width: 1279px) 200px, (max-width: 1439px) 230px, 250px" />
                </div>
                <div className="service-block">
                  <div className="service-text-block">
                    <h3 className="service-list-heading">Website Development</h3>
                    <p className="service-description">From conceptualization to execution, our team
                      specializes in creating dynamic websites that not only reflect your brand
                      identity but also enhance user experience, ensuring your online success in
                      an ever-evolving digital landscape.</p>
                  </div>
                </div>
                <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fd1" className="service-section-arrow">
                  <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fd2" className="service-gradient-hover" />
                  <div></div>
                </div>
              </div></div>
            <div role="listitem" className="service-collection-item w-dyn-item"><div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fc5" className="service-wrapper w-inline-block" style={{borderColor: 'rgba(66, 66, 66, 0)', backgroundColor: 'rgba(51, 51, 51, 0)'}}>
                <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fc6" className="service-image" style={{willChange: 'transform', transform: 'translate3d(0.004px, -0.002px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  <Image  width={200} height={200} src="/assets/images/webdesign.jpeg" alt="service images" sizes="(max-width: 479px) 96vw, (max-width: 767px) 328px, (max-width: 991px) 48vw, (max-width: 1279px) 200px, (max-width: 1439px) 230px, 250px" />
                </div>
                <div className="service-block">
                  <div className="service-text-block">
                    <h3 className="service-list-heading">Website Design</h3>
                    <p className="service-description">Discover the artistry of our website designs,
                      meticulously crafted to reflect your brand&#39;s essence and captivate your
                      audience. With a focus on user experience and cutting-edge aesthetics, we
                      transform your vision into a captivating digital reality.</p>
                  </div>
                </div>
                <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fd1" className="service-section-arrow">
                  <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fd2" className="service-gradient-hover" />
                  <div></div>
                </div>
              </div></div>
            <div role="listitem" className="service-collection-item w-dyn-item"><div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fc5" className="service-wrapper w-inline-block" style={{borderColor: 'rgba(66, 66, 66, 0)', backgroundColor: 'rgba(51, 51, 51, 0)'}}>
                <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fc6" className="service-image" style={{willChange: 'transform', transform: 'translate3d(0.004px, 0.002px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  <Image  width={200} height={200} src="/assets/images/appdevelopment.png" alt="service images" sizes="(max-width: 479px) 96vw, (max-width: 767px) 328px, (max-width: 991px) 48vw, (max-width: 1279px) 200px, (max-width: 1439px) 230px, 250px" />
                </div>
                <div className="service-block">
                  <div className="service-text-block">
                    <h3 className="service-list-heading">Application Development &amp; Design</h3>
                    <p className="service-description">Crafting seamless digital experiences that marry
                      intuitive user interfaces with captivating aesthetics. Elevate your brand&#39;s
                      online presence with our expert Application design services.</p>
                  </div>
                </div>
                <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fd1" className="service-section-arrow">
                  <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fd2" className="service-gradient-hover" />
                  <div></div>
                </div>
              </div></div>
            <div role="listitem" className="service-collection-item w-dyn-item"><div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fc5" className="service-wrapper w-inline-block" style={{borderColor: 'rgba(66, 66, 66, 0)', backgroundColor: 'rgba(51, 51, 51, 0)'}}>
                <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fc6" className="service-image" style={{willChange: 'transform', transform: 'translate3d(0.004px, -0.002px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  <Image  width={200} height={200} src="/assets/images/webdevelopment.jpeg" alt="service images" sizes="(max-width: 479px) 96vw, (max-width: 767px) 328px, (max-width: 991px) 48vw, (max-width: 1279px) 200px, (max-width: 1439px) 230px, 250px" />
                </div>
                <div className="service-block">
                  <div className="service-text-block">
                    <h3 className="service-list-heading">Data Design</h3>
                    <p className="service-description">Crafting Effective Data Designs: Building
                      Structures for Clarity and Efficiency
                      Highlights the intentionality and skill involved in creating data
                      designs.Building Structures implies the
                      foundational aspect of data design.
                    </p>
                  </div>
                </div>
                <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fd1" className="service-section-arrow">
                  <div data-w-id="0927f5f9-b39e-f361-fb8e-0c027b224fd2" className="service-gradient-hover" />
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-us-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="about-main-block">
            <div className="w-layout-grid about-card-grid" >
              
              <div id="w-node-_3ca8203c-10cc-3041-11d5-61ad1e900716-f2fdab6b" className="about-card-wrapper">
                <div id="w-node-_3ca8203c-10cc-3041-11d5-61ad1e900717-f2fdab6b" className="about-card-block" style={{willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  <div className="about-card-icon"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664739b340e0dcd9f074caa4_medal.svg" loading="lazy" alt="medal" /></div>
                  <div className="about-detail-block">
                    <h4 className="about-card-heading">10+ Projects Complete</h4>
                    <p className="about-card-description">Over 10 projects completed, showcasing our
                      dedication to excellence and client satisfaction.</p>{/* <a href="/"
                                    aria-current="page" class="about-read-more-text w--current">Read More</a> */}
                  </div>
                </div>
              </div>
              <div id="w-node-_3ca8203c-10cc-3041-11d5-61ad1e900721-f2fdab6b" className="about-card-wrapper">
                <div id="w-node-_3ca8203c-10cc-3041-11d5-61ad1e900722-f2fdab6b" className="about-card-block" style={{willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0.0032deg) rotateY(0.0034deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  <div className="about-card-icon"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664739b340e0dcd9f074cab7_users-round.svg" loading="lazy" alt="users" /></div>
                  <div className="about-detail-block">
                    <h4 className="about-card-heading">22+ Experts</h4>
                    <p className="about-card-description">Our 22+ power-packed team embodies diversity,
                      talent and
                      collaboration, fueling our path towards innovation and success.
                    </p>{/*<a href="/"
                                    aria-current="page" class="about-read-more-text w--current">Read More</a> */}
                  </div>
                </div>
              </div>
              <div id="w-node-_3ca8203c-10cc-3041-11d5-61ad1e90072c-f2fdab6b" className="about-card-wrapper">
                <div id="w-node-_3ca8203c-10cc-3041-11d5-61ad1e90072d-f2fdab6b" className="about-card-block" style={{willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  <div className="about-card-icon"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664739b340e0dcd9f074cada_handshake.svg" loading="lazy" alt="handshake" /></div>
                  <div className="about-detail-block">
                    <h4 className="about-card-heading">46+ Happy Clients</h4>
                    <p className="about-card-description">Testifying to our commitment, excellence, and
                      dedication in delivering satisfaction and value-driven solutions.</p>{/*<a href="/"
                                    aria-current="page" class="about-read-more-text w--current">Read More</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div style={{opacity: 1}} className="about-text">
              <div>We aim to be the catalyst for a future where <span className="about-gradient-text">technology drives meaningful change.</span> Our journey started with a deep passion for merging <span className="about-gradient-text">innovation, aesthetics, and functionality</span> to turn our clients&#39; digital visions into reality</div>
            </div>
            {/* <div style={{opacity: 1}} className="about-text">
              <div>Our journey began with a passion for blending innovation,
                <span className="about-gradient-text"> aesthetics and functionality to bring our clients&#39;
                  digital
                  dreams to life.</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="marquee-section">
        <div className="w-layout-blockcontainer container w-container">
          <div data-w-id="539e1508-319d-c670-f0d1-65a34580efac" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="our-logo-icon-wrap">
            <div className="our-logo-icon-outside-border">
              <div className="our-logo-outside-border">
                <div className="our-logo-icon-border">
                  <div className="our-logo-icon-inside-border">
                    <div className="our-logo-icon"><Image  width={200} height={200} src="/assets/images/sc_small_logo_40x53.png" loading="lazy" alt="logo shape" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-border">
            <div className="marquee-text-wrapper-black" style={{transform: 'translate3d(-90.8%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}}>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Trust the process</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Care about analytics</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Launch at 90% completion</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Balance in all areas</div>
              </div>
            </div>
            <div className="marquee-text-wrapper-black" style={{transform: 'translate3d(-90.8%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}}>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Trust the process</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Care about analytics</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Launch at 90% completion</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Balance in all areas</div>
              </div>
            </div>
            <div className="marquee-text-wrapper-black" style={{transform: 'translate3d(-90.8%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}}>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Trust the process</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Care about analytics</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Launch at 90% completion</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Balance in all areas</div>
              </div>
            </div>
            <div className="marquee-text-wrapper-black" style={{transform: 'translate3d(-90.8%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}}>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Trust the process</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Care about analytics</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Launch at 90% completion</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-gradient" />
                <div className="marquee-gradient-text">Balance in all areas</div>
              </div>
            </div>
          </div>
          <div className="marquee-main-block">
            <div className="marquee-text-wrapper-gradient" style={{transform: 'translate3d(-9.2%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}}>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Video marketing</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Accountability</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">User interface design</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Mobile app development</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Marketing</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Photography</div>
              </div>
            </div>
            <div className="marquee-text-wrapper-gradient" style={{transform: 'translate3d(-9.2%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}}>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Video marketing</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Accountability</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">User interface design</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Mobile app development</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Marketing</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Photography</div>
              </div>
            </div>
            <div className="marquee-text-wrapper-gradient" style={{transform: 'translate3d(-9.2%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}}>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Video marketing</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Accountability</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">User interface design</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Mobile app development</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Marketing</div>
              </div>
              <div className="marquee-wrapper">
                <div className="dot-icon-white" />
                <div className="marquee-text">Photography</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="video-wrapper">
            <video autoPlay loop muted className="video-main-block">
              <source src="/assets/videos/v1.mp4" type="video/mp4"/>
              {/* <Link href="#" className="video-lightbox w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog">
                <div></div>
                <div data-w-id="b2d4b9bc-92f4-01da-3b01-c5cb74a08b12" className="video-animation-ring" style={{opacity: '0.1999', transform: 'translate3d(0px, 0px, 0px) scale3d(1.5, 1.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'opacity'}}>
                </div>
              </Link> */}
            </video>
            {/* <div id="w-node-b2d4b9bc-92f4-01da-3b01-c5cb74a08b0e-f2fdab6b" data-w-id="b2d4b9bc-92f4-01da-3b01-c5cb74a08b0e" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="video-main-block">
              <Link href="#" className="video-lightbox w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog">
                <div></div>
                <div data-w-id="b2d4b9bc-92f4-01da-3b01-c5cb74a08b12" className="video-animation-ring" style={{opacity: '0.1999', transform: 'translate3d(0px, 0px, 0px) scale3d(1.5, 1.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'opacity'}}>
                </div>
              </Link>
            </div> */}
            <div data-aos="fade-up" data-aos-duration={1500} className="section-heading-block">
              <p></p>
              <h2 className="all-section-heading mt-20 mb-30">We Are Providing Best Business Service.</h2>
            </div>
            <div data-aos="fade-up" data-aos-duration={900} className="client-logo-marquee">
              <div className="client-marquee-shadow-left" />
              <div className="client-logo-block">
                {/* <Link href="#" className="client-logo w-inline-block"> */}
                  <Image  width={200} height={200} src="/assets/images/angular_icon.png" loading="lazy" alt="client logo " />
                {/* </Link> */}
                {/* <Link href="#" className="client-logo w-inline-block"> */}
                  <Image  width={200} height={200} src="/assets/images/nodejs_icon.png" loading="lazy" alt="client logo " />
                  {/* </Link> */}
                {/* <Link href="#" className="client-logo w-inline-block"> */}
                  <Image  width={200} height={200} src="/assets/images/react native_icon.png" loading="lazy" alt="client logo " />
                  {/* </Link> */}
                {/* <Link href="#" className="client-logo w-inline-block"> */}
                  <Image  width={200} height={200} src="/assets/images/mongodb_icon.png" loading="lazy" alt="client logo " />
                  {/* </Link> */}
                {/* <Link href="#" className="client-logo w-inline-block"> */}
                  <Image  width={200} height={200} src="/assets/images/php-web.png" loading="lazy" alt="client logo " />
                  {/* </Link> */}
                {/* <Link href="#" className="client-logo w-inline-block"> */}
                  <Image  width={200} height={200} src="/assets/images/wordpress_icon.png" loading="lazy" alt="client logo " />
                  {/* </Link> */}
                {/* <Link href="#" className="client-logo w-inline-block"> */}
                  <Image  width={200} height={200} src="/assets/images/snowflakes.png" loading="lazy" alt="client logo " />
                  {/* </Link> */}
                {/* <Link href="#" className="client-logo w-inline-block"> */}
                  <Image  width={200} height={200} src="/assets/images/woocommerce_icon.png" loading="lazy" alt="client logo " />
                  {/* </Link> */}
              </div>
              {/* <div className="client-marquee-shadow-right" /> */}
            </div>
            {/* <div className="video-section-gloving-background" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(195.012deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}}>
            </div> */}
          </div>
        </div>
        <div data-w-id="b2d4b9bc-92f4-01da-3b01-c5cb74a08b47" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="all-blur-icons video-section-right-icon"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp" loading="lazy" sizes="(max-width: 767px) 100px, (max-width: 991px) 130px, 150px" srcSet="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 500w, https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 779w" alt="bg icon" /></div>
      </section>
    </section>
    <section id="portfolio" className="project-section">
      <div className="w-layout-blockcontainer container w-container">
        <div data-w-id="5f49da1b-b42c-82c3-bd3e-2a9fc2a98947" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="section-heading-block">
          <div className="section-heading-tag">Best Work</div>
          <h2 className="all-section-heading">Recent Projects Work</h2>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="project-collection-list w-dyn-items">
            <div data-aos="zoom-in-up" data-aos-duration={1500} className="project-card w-dyn-item"><div  className="project-card-link-block w-inline-block">
                <div className="project-image-block"><Image  width={200} height={200} src="/assets/images/courier.jpg" loading="lazy" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} alt="project image" className="project-image" /></div>
                <div className="project-content-wrapper">
                  <h3 className="project-name-text">Courier Service</h3>
                </div>
              </div></div>
            <div data-aos="zoom-in-up" data-aos-duration={1500} className="project-card w-dyn-item"><div  className="project-card-link-block w-inline-block">
                <div className="project-image-block"><Image  width={200} height={200} src="/assets/images/ecommerce.jpg" loading="lazy" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} alt="project image" className="project-image" /></div>
                <div className="project-content-wrapper">
                  <h3 className="project-name-text">E-Commerce</h3>
                </div>
              </div></div>
            <div data-aos="zoom-in-up" data-aos-duration={1500} className="project-card w-dyn-item"><div  className="project-card-link-block w-inline-block">
                <div className="project-image-block"><Image  width={200} height={200} src="/assets/images/industry.jpg" loading="lazy" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} alt="project image" className="project-image" /></div>
                <div className="project-content-wrapper">
                  <h3 className="project-name-text">Industry Data Automation</h3>
                </div>
              </div></div>
          </div>
        </div>
      </div>
    </section>
    <Element name="contact" className="contact-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid contec-grid">
          <div id="w-node-_4fa1eb97-c584-1d4e-9d07-53e04a751b72-4a751b6f" className="contact-section-heading-block">
            <div className="section-heading-tag" data-aos="zoom-in-right" data-aos-duration={1500}>New Projects
            </div>
            <h2 className="all-section-heading" data-aos="zoom-in-down" data-aos-duration={1500}> Have An
              Projects Idea! </h2>
            <p className="all-section-paragraph" data-aos="zoom-in-up" data-aos-duration={1500}>
              A contact form allows visitors to send messages directly through the website. It typically
              includes fields for the user to input their name, email address, subject, and message. This
              method can streamline communication and helps prevent spam.</p><ScrollLink to="#portfolio" data-w-id="4fa1eb97-c584-1d4e-9d07-53e04a751b79" className="secondary-button w-inline-block" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              <div>Explore More Work</div>
              <div className="secondary-button-arrow" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                <div></div>
              </div>
            </ScrollLink>
            <div data-w-id="4fa1eb97-c584-1d4e-9d07-53e04a751b7f" className="all-blur-icons contact-section-icon" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              <Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp" loading="lazy" sizes="(max-width: 767px) 100px, (max-width: 991px) 130px, 150px" srcSet="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 500w, https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 779w" alt="bg icon" />
            </div>
          </div>
          <div className="contact-form-block w-form">
            <form onSubmit={handleFormSubmit} id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="post" className="contact-form" data-wf-page-id="66472edde48c1d48f2fdab6b" data-wf-element-id="4fa1eb97-c584-1d4e-9d07-53e04a751b82" aria-label="Contact Form">
              <div data-w-id="4fa1eb97-c584-1d4e-9d07-53e04a751b83" className="form-field-wrap" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                <label htmlFor="Your-Name" className="contact-form-label">Your Name</label>
                <input value={formData.name} name="name" onChange={handleChange} className="input-text-field w-input" maxLength={256} data-name="Your Name" placeholder="Enter your name" type="text" id="Your-Name" required />
              </div>
              <div data-w-id="4fa1eb97-c584-1d4e-9d07-53e04a751b87" className="form-field-wrap" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                <label htmlFor="Your-Email" className="contact-form-label">E-mail Id</label>
                <input value={formData.email} name="email" onChange={handleChange} className="input-text-field w-input" maxLength={256} data-name="Your Email" placeholder="Enter Your e-mail id" type="email" id="Your-Email" required />
              </div>
              <div className="form-field-wrap">
                <label htmlFor="Your-Phone" className="contact-form-label">Phone Number</label>
                <PhoneInput value={formData.mobile} onChange={handleChange} mobileRef={mobileRef} />
              </div>
              <div data-w-id="4fa1eb97-c584-1d4e-9d07-53e04a751b8b" className="form-field-wrap" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                <label htmlFor="Our-Service" className="contact-form-label">Selet your service</label>
                <select value={formData.service} name="service" onChange={handleChange} id="Our-Service" data-name="Our Service" required className="form-select-field select-block w-select">
                  <option value>Select Service</option>
                  <option value="Custom Web Design">Custom Web Design</option>
                  <option value="Custom app Design">Custom App Design</option>
                  <option value="WooCommerce Website Develop">WooCommerce Website Develop</option>
                  <option value="WordPress Website Development">WordPress Website Development</option>
                  <option value="Shopify Website Development">Shopify Website Development</option>
                  <option value="Analysis with Microsoft Power BI">Analysis with Microsoft Power BI
                  </option>
                  <option value="Analysis with Microsoft Tableu">Analysis with Microsoft Tableu
                  </option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="Flutter">Flutter</option>
                  <option value="Nodejs">Node.js</option>
                  <option value="Adobe XD">Adobe XD</option>
                  <option value="Photoshop">Photoshop</option>
                  <option value="Figma">Figma</option>
                  <option value="Azure Cloud Services">Azure Cloud Services</option>
                  <option value="Amazon Cloud Services">Amazon Cloud Services(AWS)</option>
                  <option value="SnowFlakes">SnowFlakes</option>
                  <option value="Google Cloud Platform(GCP)">Google Cloud Platform(GCP)</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              {
                formData.service == 'Others' &&
                <div data-w-id="4fa1eb97-c584-1d4e-9d07-53e04a751b8f" className="form-field-wrap" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                  <label htmlFor="Your-Message" className="contact-form-label">Explain your requirement</label>
                  <textarea value={formData.other} onChange={handleChange} required={formData.service == 'Others'} id="Your-Message" name="other" maxLength={5000} data-name="Your Message" placeholder="Please describe your requirement" className="input-text-field w-input" />
                </div>
              }
              <div data-w-id="4fa1eb97-c584-1d4e-9d07-53e04a751b8f" className="form-field-wrap" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                <label htmlFor="Your-Message" className="contact-form-label">message</label>
                <textarea value={formData.message} onChange={handleChange} id="Your-Message" name="message" maxLength={5000} data-name="Your Message" placeholder="Enter Your Message" className="input-text-field h-155 w-input" />
              </div>
              <div data-w-id="4fa1eb97-c584-1d4e-9d07-53e04a751b8f" className="form-field-wrap" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                <label htmlFor="Your-Message" className="contact-form-label">Attachment</label>
                <PaperClipOutlined onClick={()=>attachmentRef.current.click()} style={{fontSize: 24, cursor: 'pointer', marginRight: 10}} /> {formData?.file?.name}
                <input ref={attachmentRef} onChange={handleAttachmentChange} type="file" placeholder="Give your attachment" className="input-text-field w-input" style={{display: 'none'}} />
              </div>
              <div data-w-id="4fa1eb97-c584-1d4e-9d07-53e04a751b93" className="submit-button-wrapper" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                <div className="submit-gradient-hover-block" style={{transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                </div>{ isLoading && <LoadingOutlined style={{fontSize: 18, marginLeft: 20}} />}<input type="submit" data-wait="Submit..." className="from-submit-button w-button" defaultValue="Submit " disabled={isLoading} />
              </div>
            </form>
            <div className="success-message w-form-done" tabIndex={-1} role="region" aria-label="Contact Form success">
              <div className="success-message-text">Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail" tabIndex={-1} role="region" aria-label="Contact Form failure">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </Element>
    <footer className="footer-section">
      <div className="footer-gloving-block" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(195.012deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}}>
      </div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-heading-block">
          <div className="footer-heading" data-aos="fade-down" data-aos-duration={1500}>
            A new place for discover, and Growth your Company</div>
          <Link data-aos="fade-up" href="#contact" className="secondary-button w-inline-block">
            <div>Chat More</div>
            <div className="secondary-button-arrow" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              <div></div>
            </div>
          </Link>
        </div>
        <div className="footer-main-block">
          <div className="w-layout-grid footer-grid">
            <div id="w-node-c1540238-1c14-59eb-cb03-9665c449d129-c449d11b" data-w-id="c1540238-1c14-59eb-cb03-9665c449d129" className="footer-detail-wrapper" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              <div className="our-logo-icon-wrap">
                <div className="our-logo-icon-outside-border">
                  <div className="our-logo-outside-border">
                    <div className="our-logo-icon-border">
                      <div className="our-logo-icon-inside-border">
                        <div className="our-logo-icon"><Image  width={200} height={200} src="/assets/images/sc_small_logo_40x53.png" loading="lazy" alt="logo shape" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="w-node-c1540238-1c14-59eb-cb03-9665c449d131-c449d11b" className="footer-detail-wrapper">
              <div className="footer-link-heading" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                Links</div>
              <div className="footer-link-block">
                <Link href="#" className="footer-navigation-ink" >About Us</Link>
                <ScrollLink to="best-service" className="footer-navigation-ink" >Services</ScrollLink>
                <ScrollLink to="contact" className="footer-navigation-ink" >Contact Us</ScrollLink>
                <Link href="#" className="footer-navigation-ink" >Feedback</Link>
              </div>
            </div>
            <div id="w-node-c1540238-1c14-59eb-cb03-9665c449d13f-c449d11b" className="footer-detail-wrapper">
              <div className="footer-link-heading" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                Follow Us</div>
              <div className="footer-link-block">
                <Link href="https://www.whatsapp.com/" target="_blank" className="footer-navigation-ink" >
                  <span className="footer-social-icon"><WhatsAppOutlined /></span>Whatsapp
                </Link>
                <Link href="https://www.facebook.com/" target="_blank" className="footer-navigation-ink" >
                  <span className="footer-social-icon"></span>Facebook
                </Link>
                {/* <Link href="https://twitter.com/?lang=en" target="_blank" className="footer-navigation-ink">
                  <span className="footer-social-icon"></span>Twitter
                </Link> */}
                <Link href="https://in.linkedin.com/" target="_blank" className="footer-navigation-ink">
                  <span className="footer-social-icon"></span>LinkedIn
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" className="footer-navigation-ink">
                  <span className="footer-social-icon"></span>Instagram
                </Link>
              </div>
            </div>
            <div id="w-node-c1540238-1c14-59eb-cb03-9665c449d153-c449d11b" className="footer-detail-wrapper">
              <div className="footer-link-heading" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                Address</div>
              <div className="footer-link-block">
                <Link href="https://www.google.com/maps/place/DLF+1/@22.581431,88.4459559,17z/data=!4m10!1m2!2m1!1sDLF!3m6!1s0x3a027511e6954073:0xb42b85244a17cd5a!8m2!3d22.581431!4d88.450462!15sCgNETEYiA4gBAZIBCGJ1c19zdG9w4AEA!16s%2Fg%2F11j0b475l2?entry=ttu" target="_blank" className="footer-navigation-ink footer-address">
                  <span className="footer-address-icon"></span>Action Area 1A, Newtown, New Town, West Bengal 700156
                </Link>
                <Link href="tel:(+91)7059480293" className="footer-navigation-ink">
                  <span className="footer-address-icon"></span>(+91) 70594 80293
                </Link>
                <Link href="tel:(+91)8250844290" className="footer-navigation-ink">
                  <span className="footer-address-icon"></span>(+91) 82508 44290
                </Link>
                <Link href="mailto:sofezzacore@gmail.com" className="footer-navigation-ink" >
                  <span className="footer-address-icon"></span>support@sofezzacore.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="c1540238-1c14-59eb-cb03-9665c449d163" className="footer-copyright-section">
          <div data-w-id="c1540238-1c14-59eb-cb03-9665c449d164" className="copyright-text" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
            © Sofezza Core | {year}</div>
        </div>
        <div className="all-blur-icons footer-section-icon"><Image  width={200} height={200} src="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp" loading="lazy" sizes="(max-width: 767px) 100px, (max-width: 991px) 130px, 150px" srcSet="https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 500w, https://cdn.prod.website-files.com/66472edde48c1d48f2fdab67/664736bad9735c6491713562_all%20bg%20icon.webp 779w" alt="bg icon" /></div>
      </div></footer>
  </div>
  <BottomBar />
  <ScrollLink to="topbar" id="back-to-top" className="back-to-top w-inline-block" data-aos="fade-down" data-aos-duration={1000}>
    <div></div>
  </ScrollLink>
  {/* Scripts Start */}
</div>
                <Link href="https://www.whatsapp.com/" target="_blank" className="whatsapp-fixed" >
                  <span className=""><WhatsAppOutlined className="float-btn-whatsapp" /></span>
                </Link>

    </>
  );
}
