import React from 'react';
import { Link as ScrollLink } from "react-scroll"

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper footer-layout3">
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 text-center text-lg-start">
              <div className="widget footer-widget">
                <div className="footer-logo mx-auto mx-lg-0">
                  <ScrollLink
                    activeClass="active"
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <img src="/images/mitlogo.webp" alt="logo" width={200} height={200} />
                  </ScrollLink>
                </div>
                <div className="map-style1">
                  <img src="/images/map.webp" className='map-png' alt="" width={400} height={400} />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="widget footer-widget">
                <h3 className="widget_title">Akademiya haqqında</h3>
                <div className="vs-widget-about">
                  <p className="footer-text">Modern IT (MIT) Academy beynəlxalq dərəcəli kadrların hazırlığına zəmanət verən özəl təhsil müəssisəsidir.</p>
                  <p className="footer-info"><i className="fal fa-phone-alt"></i><a className="text-inherit" href="tel:+994518888747">+994518888747</a></p>
                  <p className="footer-info"><i className="fal fa-envelope"></i><a className="text-inherit" href="mailto:info@mitacademy.edu.az">info@mitacademy.edu.az</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="widget footer-widget">
                <h4 className="widget_title">Abunə olun</h4>
                <p className="mailchimp-text">Akademiyamızda tədris üzrə innovasiyalardan və güzəştlərdən xəbərdar olmaq üçün abunə olun!</p>
                <form className="newsletter-form">
                  <input className="form-control" type="email" placeholder="Elektron poçtunuzu daxil edin" />
                  <button type="submit" className="vs-btn">Abunə olun!</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap p-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="text-center col-lg-auto">
              <p className="copyright-text text-white">Müəllif hüquqları qorunur <i className="fal fa-copyright"></i> {new Date().getFullYear()} Powered by <a className='text-white text-decoration-none' href="https://www.linkedin.com/in/anvarkhalidofficial/</p>"><strong>Anvar Khalid</strong></a></p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <div className="social-style1">

             
                <a href="https://www.facebook.com/profile.php?id=61554160021421" className='text-white border-0'><i className="fab fa-facebook-f text-white"></i>Facebook</a>
                <a href="https://www.instagram.com/mitacademy.az/" className='text-white'><i className="fab fa-instagram text-white"></i>Twitter</a>
                <a href="https://www.linkedin.com/company/modernitacademy/" className='text-white'><i className="fab fa-linkedin-in text-white"></i>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
