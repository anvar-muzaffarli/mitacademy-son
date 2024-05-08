import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link as ScrollLink } from "react-scroll";

const HeroLayout: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <section className="hero-layout1">
      <Slider className="vs-carousel" data-fade="true" data-arrows="true" data-dots="true" {...settings}>
        <div>
          <div className="hero-inner">
            <img src="/images/hero-seminar-1.webp" alt="MIT Academy, Ənvər Xalid, Proqramlaşdırma, praqramist" className="hero-bg" />
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title animated">MODERN <span>DÜNYANI BİZİMLƏ</span> KƏŞF ET!</h1>
                <p className="hero-text animated">Bizə qoşul, hər uğurlu tələbədən biri də sən ol!</p>
                <div className="hero-btns animated">
                  <ScrollLink
                    activeClass="active"
                    to="education-fields" // Provide the id of the section you want to scroll to
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="vs-btn style5"
                  >
                    <i className="far fa-angle-right"></i>Sahəni seç!
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="hero-inner">
            <img src="/images/vector2.webp" alt="MIT Academy, Ənvər Xalid, Proqramlaşdırma, praqramist"  className="hero-bg" />
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title animated">MODERN <span>DÜNYANI BİZİMLƏ</span> KƏŞF ET!</h1>
                <p className="hero-text animated">Bizə qoşul, hər uğurlu tələbədən biri də sən ol!</p>
                <div className="hero-btns animated">
                  <ScrollLink
                    activeClass="active"
                    to="education-fields" // Provide the id of the section you want to scroll to
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="vs-btn style5"
                  >
                    <i className="far fa-angle-right"></i>Sahəni seç!
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="hero-inner">
            <img src="/images/hero-seminar-2.webp" alt="MIT Academy, Ənvər Xalid, Proqramlaşdırma, praqramist"  className="hero-bg" />
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title animated">MODERN <span>DÜNYANI BİZİMLƏ</span> KƏŞF ET!</h1>
                <p className="hero-text animated">Bizə qoşul, hər uğurlu tələbədən biri də sən ol!</p>
                <div className="hero-btns animated">
                  <ScrollLink
                    activeClass="active"
                    to="education-fields" // Provide the id of the section you want to scroll to
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="vs-btn style5"
                  >
                    <i className="far fa-angle-right"></i>Sahəni seç!
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroLayout;

interface SliderSettings {
  dots: boolean;
  arrows: boolean;
  fade: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  waitForAnimate: boolean;
}
