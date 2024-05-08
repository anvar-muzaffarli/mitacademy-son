import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { PiGraduationCapThin } from "react-icons/pi";
import { Link as RouterLink } from "react-router-dom";
import {Link as ScrollLink} from "react-scroll"
const Navbar: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div ref={menuRef} className={`vs-menu-wrapper ${menuOpen ? "vs-body-visible" : ""}`}>
        <div className="vs-menu-area text-center">
          <button className="vs-menu-toggle" onClick={closeMenu}>
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <RouterLink to="/">
              <img src="/images/mitlogo.webp" alt="mitacademy.az" />
            </RouterLink>
          </div>
          <div className="vs-mobile-menu">
            <ul>
              <li className="menu-item-has-children">
                <RouterLink to="/">Ana səhifə</RouterLink>
              </li>
              <li>
                <ScrollLink smooth to="/#about-section">Haqqımızda</ScrollLink>
              </li>
              <li className="menu-item-has-children">
                <ScrollLink smooth to="/#instructors">Təlimçilərimiz</ScrollLink>
              </li>
              <li className="menu-item-has-children">
                <RouterLink to="#">Tədris sahələri</RouterLink>
                <ul className="sub-menu">
                  <li>
                    <RouterLink to="/it">IT</RouterLink>
                    <ul>
                      <li>
                        <RouterLink to="#">Texniki dəstək (Helpdesk)</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Sistem inzibatçılığı (Linux)</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Sistem inzibatçılığı (Windows)</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Şəbəkə inzibatçılığı</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Kibertəhlükəsizliyin əsasları (Red team)</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">IP Telefoniya</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Kibertəhlükəsizliyin əsasları (Blue team)</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">IP Telefoniya</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Virtuallaşdırma və Bulud texnologiyaları</RouterLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="/programming">Proqramlaşdırma</RouterLink>
                    <ul>
                      <li>
                        <RouterLink to="#">Front-end proqramlaşdırma</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Backend proqramlaşdırma (Python)</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Backend proqramlaşdırma (Java)</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Backend proqramlaşdırma (Node JS)</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Verilənlərin strukturu və alqoritmlər</RouterLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="/design">Dizayn</RouterLink>
                    <ul>
                      <li>
                        <RouterLink to="#">Qrafik Dizayn</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Motion Dizayn</RouterLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="/office">Office proqramları</RouterLink>
                    <ul>
                      <li>
                        <RouterLink to="#">Microsoft Word</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Microsoft Excel</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Microsoft PowerPoint</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="#">Microsoft Access</RouterLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <ScrollLink smooth to="/#contact-us">Bizimlə əlaqə</ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header className="vs-header header-layout1" id="header">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-between align-items-center gx-50">
              <div className="col d-none d-xl-block">
                <div className="header-links">
                  <ul>
                    <li><FaPhoneAlt /> Telefon: <a href="tel:+994518888747">+994518888747</a></li>
                    <li><IoMailSharp /> Email: <a href="mailto:info@mitacademy.edu.az">info@mitacademy.edu.az</a></li>
                  </ul>
                </div>
              </div>
              <div className="col col-xl-auto d-none d-md-block">
                <RouterLink className="user-login" to="#">
                  <img src="/assets/mitacademy-assets/aktis.png" alt="" />
                </RouterLink>
              </div>
              <div className="col-md-auto text-center">
                <div className="header-social">
                  <a href="https://www.facebook.com/profile.php?id=61554160021421"><FaFacebookF /></a>
                  <a href="https://www.instagram.com/mitacademy.az/"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/company/modernitacademy/"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="sticky-active">
            <div className="container position-relative z-index-common">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="vs-logo">
                    <RouterLink to="/">
                      <img src="/images/mitlogo.webp" alt="mitacademy.az" />
                    </RouterLink>
                  </div>
                </div>
                <div className="col text-end text-xl-center">
                  <nav className="main-menu menu-style1 d-none d-lg-block">
                    <ul>
                      <li><RouterLink to="/">Ana səhifə</RouterLink></li>
                      <li><ScrollLink smooth to="/#about-section">Haqqımızda</ScrollLink></li>
                      <li className="menu-item-has-children mega-menu-wrap">
                        <RouterLink to="#">Tədris sahələri</RouterLink>
                        <ul className="mega-menu">
                          <li>
                            <RouterLink to="/it">IT</RouterLink>
                            <ul>
                              <li><RouterLink to="#">Texniki dəstək (Helpdesk)</RouterLink></li>
                              <li><RouterLink to="#">Sistem inzibatçılığı (Linux)</RouterLink></li>
                              <li><RouterLink to="#">Sistem inzibatçılığı (Windows)</RouterLink></li>
                              <li><RouterLink to="#">Şəbəkə inzibatçılığı</RouterLink></li>
                              <li><RouterLink to="#">Kibertəhlükəsizliyin əsasları (Red team)</RouterLink></li>
                              <li><RouterLink to="#">IP Telefoniya</RouterLink></li>
                              <li><RouterLink to="#">Kibertəhlükəsizliyin əsasları (Blue team)</RouterLink></li>
                              <li><RouterLink to="#">Virtuallaşdırma və Bulud texnologiyaları</RouterLink></li>
                            </ul>
                          </li>
                          <li>
                            <RouterLink to="/programming">Proqramlaşdırma</RouterLink>
                            <ul>
                              <li><RouterLink to="#">Front-end proqramlaşdırma</RouterLink></li>
                              <li><RouterLink to="#">Backend proqramlaşdırma (Python)</RouterLink></li>
                              <li><RouterLink to="#">Backend proqramlaşdırma (Java)</RouterLink></li>
                              <li><RouterLink to="#">Backend proqramlaşdırma (Node JS)</RouterLink></li>
                              <li><RouterLink to="#">Verilənlərin strukturu və alqoritmlər</RouterLink></li>
                            </ul>
                          </li>
                          <li>
                            <RouterLink to="/design">Dizayn</RouterLink>
                            <ul>
                              <li><RouterLink to="#">Qrafik Dizayn</RouterLink></li>
                              <li><RouterLink to="#">Motion Dizayn</RouterLink></li>
                            </ul>
                          </li>
                          <li>
                            <RouterLink to="/office">Office proqramları</RouterLink>
                            <ul>
                              <li><RouterLink to="#">Microsoft Word</RouterLink></li>
                              <li><RouterLink to="#">Microsoft Excel</RouterLink></li>
                              <li><RouterLink to="#">Microsoft PowerPoint</RouterLink></li>
                            </ul>
                          </li>

                          <li>
                            <RouterLink to="/office">Rəqəmsal Marketinq</RouterLink>
                            <ul>
                              <li><RouterLink to="#">Rəqəmsal Marketinq</RouterLink></li>
                             
                            </ul>
                          </li>

                          <li>
                            <RouterLink to="/office">Xarici dil</RouterLink>
                            <ul>
                              <li><RouterLink to="#">General English</RouterLink></li>
                             
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><ScrollLink smooth to="/#instructors">Təlimçilərimiz</ScrollLink></li>
                      <li><ScrollLink smooth to="/#contact-us">Bizimlə əlaqə</ScrollLink></li>
                    </ul>
                  </nav>
                  <button onClick={toggleMenu} className="vs-menu-toggle d-inline-block d-lg-none">
                    <i className="fal fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-btns">
                    <ScrollLink smooth to="/#education-fields" className="vs-btn style4">
                      <PiGraduationCapThin className="mx-3 my-0 h4 graduation-hat" style={{ color: "rgb(61 149 177)" }} />
                      Sahəni seç
                    </ScrollLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
