/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Portfolio from './portfolio';
import Projects from './projects';

const Index = () => {
  return (
    <>
      <header
        className="rn-header haeder-default black-logo-version header--fixed header--sticky"
        style={{ zIndex: 25 }}
      >
        <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
          <div className="col-lg-2 col-6">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <img
                    src="../assets/images/logo/logo.png"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-6">
            <div className="header-center">
              <nav
                id="sideNav"
                className="mainmenu-nav navbar-example2 d-none d-xl-block"
              >
                <ul className="primary-menu nav nav-pills">
                  <li className="nav-item">
                    <a
                      className="nav-link smoth-animation active"
                      href="#home"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link smoth-animation"
                      href="#resume"
                    >
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link smoth-animation"
                      href="#features"
                    >
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link smoth-animation"
                      href="#portfolio"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link smoth-animation"
                      href="#projects"
                    >
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link smoth-animation"
                      href="#contacts"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="popup-mobile-menu" style={{ zIndex: 25 }}>
        <div className="inner">
          <div className="menu-top">
            <div className="menu-header">
              <a className="logo" href="/">
                <img
                  src="../assets/images/logo/logos-circle.png"
                  alt="Personal Portfolio"
                />
              </a>
              <div className="close-button">
                <button className="close-menu-activation close">
                  <i data-feather="x" />
                </button>
              </div>
            </div>
          </div>
          <div className="content">
            <ul className="primary-menu nav nav-pills">
              <li className="nav-item">
                <a
                  className="nav-link smoth-animation active"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link smoth-animation"
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link smoth-animation"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link smoth-animation"
                  href="#resume"
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link smoth-animation"
                  href="#projects"
                >
                  projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link smoth-animation"
                  href="#contacts"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="social-share-style-1 mt--40">
              <span className="title">find with me</span>
              <ul className="social-share d-flex liststyle">
                <li className="facebook">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </li>
                <li className="instagram">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram"
                    >
                      <rect
                        x={2}
                        y={2}
                        width={20}
                        height={20}
                        rx={5}
                        ry={5}
                      />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x={2} y={9} width={4} height={12} />
                      <circle cx={4} cy={4} r={2} />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <main className="main-page-wrapper" style={{ zIndex: 5 }}>
        <div id="home" className="rn-slider-area">
          <div className="slide slider-style-1">
            <div className="container">
              <div className="row row--30 align-items-center">
                <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                  <div className="content">
                    <div className="inner">
                      <span
                        data-aos="fade-left"
                        data-aos-duration={500}
                        data-aos-delay={100}
                        data-aos-once="true"
                        className="subtitle"
                      >
                        Welcome to my Portfolio
                      </span>
                      <h1
                        data-aos="fade-left"
                        data-aos-duration={500}
                        data-aos-delay={300}
                        data-aos-once="true"
                        className="title"
                      >
                        Hi, I’m <span>Rhineul Islam</span>
                        <br />
                        <span
                          className="header-caption"
                          id="page-top"
                        >
                          <span className="cd-headline clip is-full-width">
                            <span style={{ marginRight: '4px' }}>
                              a{' '}
                            </span>
                            <span className="cd-words-wrapper">
                              <b className="is-visible">
                                Web Developer.
                              </b>
                              <b className="is-hidden">
                                Game Developer
                              </b>
                              <b className="is-hidden">
                                Professional Coder.
                              </b>
                              <b className="is-hidden">
                                UX/UI Designer
                              </b>
                            </span>
                          </span>
                        </span>
                      </h1>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={500}
                        data-aos-delay={300}
                        data-aos-once="true"
                        className=""
                      >
                        <p className="description">
                          I am a developer with 4 years experience. I
                          love making Games and developing web related
                          app. Game &amp; Web apps are my prefered
                          field of interest. Right now web development
                          is basically a trend as almost everyone
                          needs a portfolio site to host their skill
                          and projects. So the market is booming.{' '}
                          <br />
                          Also, because of blockchain development with
                          new Web3 and Soon to come Web5 people are
                          investing in Web Development a lot. And this
                          intrigues me.
                          <br />
                          As of now I am focused on making Web3 based
                          apps &amp; games. Cause the idea of a
                          decentralized application is very appealing
                          to me.
                        </p>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ zIndex: 5, position: 'relative' }}
                    >
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                        <div
                          data-aos="fade-left"
                          data-aos-duration={500}
                          data-aos-delay={300}
                          data-aos-once="true"
                          className="social-share-inner-left"
                        >
                          <span className="title">find with me</span>
                          <ul className="social-share d-flex liststyle">
                            <li className="facebook">
                              <a href="https://www.facebook.com/ushia.rhine/">
                                <img src="../fb.png" alt="facebook" />
                              </a>
                            </li>
                            <li className="instagram">
                              <a href="https://www.instagram.com/coding.errorr/">
                                <img
                                  src="../ins.png"
                                  alt="facebook"
                                />
                              </a>
                            </li>
                            <li className="linkedin">
                              <a href="https://www.linkedin.com/in/rhine-islam-737200180/">
                                <img src="../ln.png" alt="facebook" />
                              </a>
                            </li>
                            <li className="twitter">
                              <a href="https://twitter.com/Rhine21733963">
                                <img src="../tw.png" alt="facebook" />
                              </a>
                            </li>
                            <li className="github">
                              <a href="https://github.com/XPro-Gamer-Rhine">
                                <img src="../gh.png" alt="facebook" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                        <div
                          data-aos="fade-left"
                          data-aos-duration={500}
                          data-aos-delay={300}
                          data-aos-once="true"
                          className="skill-share-inner"
                        >
                          <span className="title">best skill on</span>
                          <ul className="skill-share d-flex liststyle">
                            <li>
                              <img
                                src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                                alt="Icons Images"
                              />
                            </li>
                            <li>
                              <img
                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                                alt="Icons Images"
                                style={{ backgroundColor: '#fff' }}
                              />
                            </li>
                            <li>
                              <img
                                src="https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white"
                                alt="Icons Images"
                              />
                            </li>
                            <li>
                              <img
                                src=" 	https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                                alt="Icons Images"
                              />
                            </li>
                            <li>
                              <img
                                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                                alt="Icons Images"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 order-lg-2 col-lg-5">
                  <div className="thumbnail">
                    <div className="inner">
                      <img
                        data-aos="fade-left"
                        data-aos-duration={500}
                        data-aos-delay={300}
                        data-aos-once="true"
                        src="../assets/images/cv.png"
                        alt="Personal Portfolio Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rn-resume-area rn-section-gap section-separator"
          id="resume"
          style={{ zIndex: 5 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-delay={100}
                  data-aos-once="true"
                  className="section-title text-center"
                >
                  <span className="subtitle">
                    2+ Years of Experience
                  </span>
                  <h2 className="title">My Resume</h2>
                </div>
              </div>
            </div>
            <div className="row mt--45">
              <div className="col-lg-12">
                <ul
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-delay={300}
                  data-aos-once="true"
                  className="rn-nav-list nav nav-tabs"
                  id="myTabs"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="education-tab"
                      data-toggle="tab"
                      href="#education"
                      role="tab"
                      aria-controls="education"
                      aria-selected="true"
                    >
                      education
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      id="professional-tab"
                      data-toggle="tab"
                      href="#professional"
                      role="tab"
                      aria-controls="professional"
                      aria-selected="false"
                    >
                      professional Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="experience-tab"
                      data-toggle="tab"
                      href="#experience"
                      role="tab"
                      aria-controls="experience"
                      aria-selected="false"
                    >
                      utilities
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="interview-tab"
                      data-toggle="tab"
                      href="#interview"
                      role="tab"
                      aria-controls="interview"
                      aria-selected="false"
                    >
                      publication
                    </a>
                  </li>
                </ul>
                <div
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-delay={300}
                  data-aos-once="true"
                  className="rn-nav-content tab-content"
                  id="myTabContents"
                >
                  <div
                    className="tab-pane show active fade single-tab-area"
                    id="education"
                    role="tabpanel"
                    aria-labelledby="education-tab"
                  >
                    <div className="personal-experience-inner mt--40">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                          <div className="content">
                            <div className="experience-list">
                              <h4 className="maintitle">
                                Educational Qualifications
                              </h4>
                              <div className="resume-single-list">
                                <div className="inner">
                                  <div className="heading">
                                    <div className="title">
                                      <h4>Bachelor of Science</h4>
                                      <h6>Varendra University</h6>
                                      <span>(2017 - 2021)</span>
                                    </div>
                                    <div className="date-of-time">
                                      <span>CGPA - 3.73/4</span>
                                    </div>
                                  </div>
                                  <p className="description">
                                    Department : Department of CSE
                                    <br />
                                    University : Varendra University
                                    <br />
                                    Year of Passing :2021
                                  </p>
                                </div>
                              </div>
                              <div className="resume-single-list">
                                <div className="inner">
                                  <div className="heading">
                                    <div className="title">
                                      <h4>
                                        Higher Secondary Certificate
                                      </h4>
                                      <h6>
                                        New Govt. Degree College
                                      </h6>
                                      <span>(2014 - 2016)</span>
                                    </div>
                                    <div className="date-of-time">
                                      <span>GPA - 5/5</span>
                                    </div>
                                  </div>
                                  <p className="description">
                                    Institution : New Govt. Degree
                                    College
                                    <br />
                                    Country : Bangladesh
                                    <br />
                                    Board : Rajshahi
                                    <br />
                                    Group : Science
                                    <br />
                                    Year of Passing :2016
                                  </p>
                                </div>
                              </div>
                              <div className="resume-single-list">
                                <div className="inner">
                                  <div className="heading">
                                    <div className="title">
                                      <h4>
                                        Secondary School Certificate
                                      </h4>
                                      <h6>
                                        Rajshahi Govt. Madrasha,
                                        Rajshahi
                                      </h6>
                                      <span>(2007 - 2014)</span>
                                    </div>
                                    <div className="date-of-time">
                                      <span>GPA - 5/5</span>
                                    </div>
                                  </div>
                                  <p className="description">
                                    Institution : Rajshahi Govt.
                                    Madrasha, Rajshahi
                                    <br />
                                    Country : Bangladesh
                                    <br />
                                    Board : Rajshahi
                                    <br />
                                    Group : Science
                                    <br />
                                    Year of Passing :2014
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                          <div className="content">
                            <h4 className="maintitle">
                              Job Experience
                            </h4>
                            <div className="experience-list">
                              <div className="resume-single-list">
                                <div className="inner">
                                  <div className="heading">
                                    <div className="title">
                                      <h4>Game Development</h4>
                                    </div>
                                    <div className="date-of-time">
                                      <span>Upwork</span>
                                    </div>
                                  </div>
                                  <p className="description">
                                    Position: Game Developer
                                    <br />
                                    Framework: Unity 3D, Unreal Engine
                                    <br />
                                    Language: C# , Blueprint, Photon
                                    Networking.
                                    <br />
                                    work Duration: Currently I am
                                    working on this field.
                                  </p>
                                </div>
                              </div>
                              <div className="resume-single-list">
                                <div className="inner">
                                  <div className="heading">
                                    <div className="title">
                                      <h4>
                                        Block Chain &amp; Web
                                        Development
                                      </h4>
                                    </div>
                                    <div className="date-of-time">
                                      <span>Upwork</span>
                                    </div>
                                  </div>
                                  <p className="description">
                                    Position: Web Developer
                                    <br />
                                    Framework: React Js, Next Js ,
                                    Solidity, Rust.
                                    <br />
                                    Language: HTML5, Typescript,
                                    Tailwindcss, JS, CSS3
                                    <br />
                                    work Duration: Currently I am
                                    working on this field.
                                  </p>
                                </div>
                              </div>
                              <div className="resume-single-list">
                                <div className="inner">
                                  <div className="heading">
                                    <div className="title">
                                      <h4>Web Development</h4>
                                      <h6>Raj IT</h6>
                                    </div>
                                    <div className="date-of-time">
                                      <span>Rajshahi</span>
                                    </div>
                                  </div>
                                  <p className="description">
                                    Position: Web Developer
                                    <br />
                                    Framework: Laravel
                                    <br />
                                    Language: HTML5, Php, CSS3, JS,
                                    Ajax, JQuery
                                    <br />
                                    work Duration: A year &amp; half
                                  </p>
                                </div>
                              </div>
                              <div className="resume-single-list">
                                <div className="inner">
                                  <div className="heading">
                                    <div className="title">
                                      <h4>Web Scrapping</h4>
                                    </div>
                                    <div className="date-of-time">
                                      <span>Fiverr</span>
                                    </div>
                                  </div>
                                  <p className="description">
                                    I have worked on web scrapping
                                    with python and javascript in
                                    Fiverr .
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade "
                    id="professional"
                    role="tabpanel"
                    aria-labelledby="professional-tab"
                  >
                    <div className="personal-experience-inner mt--40">
                      <div className="row row--40">
                        <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                          <div className="progress-wrapper">
                            <div className="content">
                              <span className="subtitle">
                                Features
                              </span>
                              <h4 className="maintitle">
                                Programming Languages
                              </h4>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '90%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      90%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '85%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      85%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '70%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      70%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"
                                    style={{ width: 50, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '50%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      50%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '50%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      50%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                          <div className="progress-wrapper">
                            <div className="content">
                              <span className="subtitle">
                                Features
                              </span>
                              <h4 className="maintitle">
                                Design Skill
                              </h4>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '95%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      95%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '85%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      85%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '80%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      80%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '50%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      50%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-4 mt_sm--60">
                          <div className="progress-wrapper">
                            <div className="content">
                              <span className="subtitle">
                                Features
                              </span>
                              <h4 className="maintitle">
                                Web Frameworks
                              </h4>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '95%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      95%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '75%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      75%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '100%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      100%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '90%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      90%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '80%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      80%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '60%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      60%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '70%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      70%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '55%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      55%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Rust-black?style=for-the-badge&logo=rust&logoColor=#E57324"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '95%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      95%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '95%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      95%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-4 mt_sm--60">
                          <div className="progress-wrapper">
                            <div className="content">
                              <span className="subtitle">
                                Features
                              </span>
                              <h4 className="maintitle">Database</h4>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '85%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      85%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '75%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      75%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '95%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      95%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '85%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      85%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="experience"
                    role="tabpanel"
                    aria-labelledby="experience-tab"
                  >
                    <div className="personal-experience-inner mt--40">
                      <div className="row row--40">
                        <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                          <div className="progress-wrapper">
                            <div className="content">
                              <span className="subtitle">
                                Features
                              </span>
                              <h4 className="maintitle">Engines</h4>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '95%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      95%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '75%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      75%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/-Unreal%20Engine-313131?style=for-the-badge&logo=unreal-engine&logoColor=white"
                                    style={{ width: 90, height: 20 }}
                                  />
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                          <div className="progress-wrapper">
                            <div className="content">
                              <span className="subtitle">
                                Features
                              </span>
                              <h4 className="maintitle">OS</h4>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '85%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      85%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '75%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      75%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '100%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      100%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                          <div className="progress-wrapper">
                            <div className="content">
                              <span className="subtitle">
                                Features
                              </span>
                              <h4 className="maintitle">Tools</h4>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '95%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      95%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/powershell-5391FE?style=for-the-badge&logo=powershell&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '70%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      70%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/sublime_text-%23575757.svg?&style=for-the-badge&logo=sublime-text&logoColor=important"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                              <div className="progress-charts">
                                <div
                                  className="progress"
                                  style={{ marginTop: 50 }}
                                >
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    data-wow-duration="0.5s"
                                    data-wow-delay=".3s"
                                    role="progressbar"
                                    style={{ width: '100%' }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <span className="percent-label">
                                      100%
                                    </span>
                                  </div>
                                </div>
                                <h3 className="progress-title">
                                  <img
                                    src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
                                    style={{ width: 70, height: 20 }}
                                  />
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="interview"
                    role="tabpanel"
                    aria-labelledby="interview-tab"
                  >
                    <div className="personal-experience-inner mt--40">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                          <div className="content">
                            <div className="experience-list">
                              <div className="resume-single-list">
                                <div className="inner">
                                  <div className="heading">
                                    <div className="title">
                                      <a
                                        href="https://www.ijtsrd.com/computer-science/data-miining/38566/prediction-analysis-of-gaming-cost-by-employing-data-mining-algorithms/md-rhineul-islam"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <h4>
                                          Prediction Analysis of
                                          Gaming Cost By Employing
                                          Data Mining Algorithms
                                        </h4>
                                      </a>
                                    </div>
                                    <div className="date-of-time">
                                      <span>Paper</span>
                                    </div>
                                  </div>
                                  <p className="description">
                                    Video games are a source of
                                    entertainment for different age
                                    groups. Players who are seeking
                                    quality video games spend more
                                    money on their systems. In this
                                    way they spend a hefty amount on
                                    internet, storage, GPU etc. Due to
                                    the addictive nature the cost is
                                    not negligible and there are not
                                    so many researches done on
                                    predicting the cost a player has
                                    to suffer. In this paper, the
                                    gaming cost is being determined by
                                    applying different algorithms.
                                    Data was collected from different
                                    age groups with different
                                    characteristics like the choice of
                                    storage options, game genres,
                                    internet speed and time they spend
                                    on games. Different models are
                                    being used like Ada boost,
                                    logistic regression, Decision tree
                                    and Random forest to check the
                                    accuracy of prediction analysis.
                                    This research will help in
                                    development of further models
                                    which can measure the gaming cost
                                    more accurately.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                          <div className="content">
                            <div className="experience-list">
                              <div className="resume-single-list">
                                <div className="inner">
                                  <div className="heading">
                                    <div className="title">
                                      <a
                                        href="https://www.ijtsrd.com/engineering/electrical-engineering/41155/low-cost-temperature-and-humidity-estimator-with-atmega8-microcontroller/m-matsive-ali"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <h4>
                                          Low Cost Temperature and
                                          Humidity Estimator with
                                          Atmega8 Microcontroller
                                        </h4>
                                      </a>
                                    </div>
                                    <div className="date-of-time">
                                      <span>Paper</span>
                                    </div>
                                  </div>
                                  <p className="description">
                                    This paper presents a efficient
                                    but also cost effective system to
                                    determine two parameters of the
                                    atmosphere, which are the
                                    temperature and humidity. The
                                    Digital Temperature and Humidity
                                    Sensor 22 (DHT 22) is used to
                                    measure the temperature and
                                    humidity. The temperature measured
                                    is the ambient temperature of the
                                    atmosphere and humidity is the
                                    relative humidity of the
                                    atmosphere. The system is
                                    constructed with AVR atmega8 as a
                                    controller and a LCD (liquid
                                    crystal display) 16x2 display as a
                                    means to display the temperature
                                    and humidity. Through the Arduino
                                    IDE (Integrated Development
                                    Environment) code Is uploaded to
                                    the ATmega8. Also as the display
                                    is operated in 4 bit mode thus
                                    there are many pins of the ATmega8
                                    which are available for other
                                    purposes and the system becomes
                                    compact. Thus the small device can
                                    be adjusted in different places
                                    for use. As it is using a ATmega8
                                    it can be used to command various
                                    devices as temperature and
                                    humidity varies.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rn-service-area rn-section-gap section-separator"
          id="features"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="section-title text-left"
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-delay={100}
                  data-aos-once="true"
                >
                  <span className="subtitle">Features</span>
                  <h2 className="title">What I Do</h2>
                </div>
              </div>
            </div>
            <div className="row row--25 mt_md--10 mt_sm--10">
              <div
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={100}
                data-aos-once="true"
                className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
              >
                <div className="rn-service">
                  <div className="inner">
                    <div className="icon">
                      <i data-feather="cpu" />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="#">Decentralized App Development</a>
                      </h4>
                      <p className="description">
                        I have worked on many DApp. Mostly solidity
                        based blockchain app. But I have also worked
                        on Rust based DApp for solana chain. I mostly
                        like to use wagmi which is ethers js based
                        framework. However I do used Web3 and other
                        frameworks. As for Frontend I like Next JS
                        &amp; React. As for design I prefer
                        Tailwindcss.
                      </p>
                      <a className="read-more-button" href="#">
                        <i className="feather-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <a className="over-link" href="#" />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={100}
                data-aos-once="true"
                className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
              >
                <div className="rn-service">
                  <div className="inner">
                    <div className="icon">
                      <i data-feather="slack" />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="#">Game Developer</a>
                      </h4>
                      <p className="description">
                        I am a game developer with 2 years of
                        experience. I am familiar with Unity 3D &amp;
                        Unreal Game Engine. Most of my project is done
                        as freelancing work for client. So i am used
                        to work with difficult concept of games. As
                        computer technology progressing faster i try
                        to keep my skill up with the latest inovation.
                      </p>
                      <a className="read-more-button" href="#">
                        <i className="feather-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <a className="over-link" href="#" />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={300}
                data-aos-once="true"
                className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
              >
                <div className="rn-service">
                  <div className="inner">
                    <div className="icon">
                      <i data-feather="chrome" />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="#">Web Development</a>
                      </h4>
                      <p className="description">
                        {' '}
                        I am well skilled with Web Development. I have
                        worked with Laravel, Django, Vue.js, Flask,
                        React.js. My personal favourite framework is
                        Laravel &amp; Django.
                      </p>
                      <a className="read-more-button" href="#">
                        <i className="feather-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <a className="over-link" href="#" />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={500}
                data-aos-once="true"
                className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
              >
                <div className="rn-service">
                  <div className="inner">
                    <div className="icon">
                      <i data-feather="edit" />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="#">Python Development</a>
                      </h4>
                      <p className="description">
                        I have 2+ years experience on python
                        development and web scrapping. I have worked
                        with many python related projects. From making
                        games in python using pygame to web scrapping
                        using Selenium, BeautifulSoup4 to image
                        processing, i have worked on varity fields as
                        per projects. I have free Flask &amp; Django
                        Project on my github for others to use and
                        improve upon.
                      </p>
                      <a className="read-more-button" href="#">
                        <i className="feather-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <a className="over-link" href="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Portfolio />
        <Projects />
        <div
          className="rn-contact-area rn-section-gap section-separator"
          id="contacts"
          style={{ zIndex: 5 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-delay={500}
                  data-aos-once="true"
                  className="section-title text-center"
                >
                  <span className="subtitle">Contact</span>
                  <h2 className="title">Contact With Me</h2>
                </div>
              </div>
            </div>
            <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
              <div
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={400}
                data-aos-once="true"
                className="col-lg-5"
              >
                <div className="contact-about-area">
                  <div className="thumbnail">
                    <img
                      src="../assets/images/contact/contact1.png"
                      alt="contact-img"
                    />
                  </div>
                  <div className="title-area">
                    <h4 className="title">Rhineul Islam</h4>
                  </div>
                  <div className="description">
                    <p>
                      I am available for freelance work. Connect with
                      me via email and call in to my account.
                    </p>
                    <span className="phone">
                      Phone:{' '}
                      <a href="tel:+8801752389981">+8801752389981</a>
                    </span>
                    <span className="mail">
                      Email:{' '}
                      <a href="mailto:rhine.cse@gmail.com">
                        rhine.cse@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="social-area">
                    <div className="name">FIND WITH ME</div>
                    <div className="social-icone">
                      <a href="https://www.facebook.com/ushia.rhine/">
                        <i data-feather="facebook" />
                      </a>
                      <a href="https://www.linkedin.com/in/rhine-islam-737200180/">
                        <i data-feather="linkedin" />
                      </a>
                      <a href="https://twitter.com/Rhine21733963">
                        <i data-feather="twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={600}
                data-aos-once="true"
                className="col-lg-7 contact-input"
              >
                <div className="contact-form-wrapper">
                  <div className="introduce">
                    <form
                      className="rnt-contact-form rwt-dynamic-form row"
                      id="contact-form"
                      method="POST"
                      action=""
                    >
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="contact-name">
                            Your Name
                          </label>
                          <input
                            className="form-control form-control-lg"
                            name="contact-name"
                            id="contact-name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="contact-phone">
                            Phone Number
                          </label>
                          <input
                            className="form-control"
                            name="contact-phone"
                            id="contact-phone"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="contact-email">Email</label>
                          <input
                            className="form-control form-control-sm"
                            id="contact-email"
                            name="contact-email"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="subject">subject</label>
                          <input
                            className="form-control form-control-sm"
                            id="subject"
                            name="subject"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="contact-message">
                            Your Message
                          </label>
                          <textarea
                            name="contact-message"
                            id="contact-message"
                            cols={30}
                            rows={10}
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          name="submit"
                          type="submit"
                          id="submit"
                          className="rn-btn rn-button btn-primary"
                        >
                          <span>SEND MESSAGE</span>
                          <i data-feather="arrow-right" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backto-top">
          <div>
            <img alt="" src="../au.png" />
          </div>
        </div>
        <div className="rn-right-demo">
          <button className="demo-button">
            <span className="text">RHINE</span>
          </button>
        </div>
        <div className="demo-modal-area">
          <div className="wrapper">
            <div className="close-icon">
              <button className="demo-close-btn">
                <span className="feather-x" />
              </button>
            </div>
            <div className="rn-modal-inner">
              <div className="demo-top text-center">
                <h4 className="title">THANK YOU FOR VISITING 😊</h4>
                <p className="subtitle">--Rhine--</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div
        className="rn-footer-area rn-section-gap section-separator"
        style={{ zIndex: 5 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-area text-center">
                <div className="logo">
                  <a href="/">
                    <img
                      src="../assets/images/logo/logo-vertical.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <p className="description mt--30">
                  © 2021. All rights reserved by{' '}
                  <a
                    target="_blank"
                    href="https://rhine9.com"
                    rel="noreferrer"
                  >
                    Rhineul Islam.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
