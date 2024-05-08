import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Instructor: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          speed: 0,
          initialSlide: 0,
          arrows: false,
          responsive: []
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          speed: 0,
          initialSlide: 0,
          arrows: false,
          responsive: []
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          infinite: false,
          speed: 0,
          arrows: false,
          responsive: []
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          speed: 0,
          initialSlide: 0,
          arrows: false,
          responsive: []
        }
      }
    ]
  };

  return (
    <section className="space-top space-extra-bottom" id='instructors'>
      <div className="container">
        <div className="title-area text-center wow fadeInUp" data-wow-delay="0.3s">
          <div className="sec-icon">
            <div className="vs-circle"></div>
          </div>
          <span className="sec-subtitle">Təhsilini sahə üzrə təcrübəli mütəxəsislərdən al</span>
          <h2 className="sec-title h1">Sahə üzrə ixtisaslaşmış təlimçilərimiz</h2>
        </div>
        <Slider {...settings} className="row vs-carousel wow fadeInUp gx-40" data-wow-delay="0.4s" data-slide-show="3" data-lg-slide-show="2" data-md-slide-show="2" data-sm-slide-show="2" data-center-mode="true">
          <div className="col-sm-6 col-lg-4">
            <div className="team-style1">
              <div className="team-img">
                <img src="/images/telimciler/Babo.webp" alt="Babək Kərimli" />
              </div>
              <div className="team-content">
                <h4 className="team-name"><a href="#">Babək Kərimli</a></h4>
                <p className="team-degi">Microsoft Certified Expert</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <Link to="/instructors/babek" className='more-btn'>Ətraflı oxu</Link>

              </div>
            </div>
          </div>
          
          <div className="col-sm-6 col-lg-4">
            <div className="team-style1">
              <div className="team-img">
                <img src="/images/telimciler/IMG_1170.webp" alt="Anvar Khalid" />
              </div>
              <div className="team-content">
                <h4 className="team-name"><a href="team-details.html">Anvar Khalid</a></h4>
                <p className="team-degi">Microsoft DevOps Engineer Expert</p>
                <div className="team-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <Link to="/instructors/anvar" className='more-btn'>Ətraflı oxu</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="team-style1">
              <div className="team-img">
                <img src="/images/telimciler/Konul-Sayt.webp" alt="Könül Əsədova" />
              </div>
              <div className="team-content">
                <h4 className="team-name"><a href="team-details.html">Könül Əsədova</a></h4>
                <p className="team-degi">Microsoft Office Trainer</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <Link to="/instructors/konul" className='more-btn'>Ətraflı oxu</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="team-style1">
              <div className="team-img">
                <img src="/images/telimciler/aydin.webp" alt="Aydın Şahverdizadə" />
              </div>
              <div className="team-content">
                <h4 className="team-name"><a href="team-details.html">Aydın Şahverdizadə</a></h4>
                <p className="team-degi">Adobe Certified Professional</p>
                <div className="team-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>

                <Link to="/instructors/aydin" className='more-btn'>Ətraflı oxu</Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="team-style1">
              <div className="team-img">
                <img src="/images/telimciler/Turxan.webp" alt="Aydın Şahverdizadə" />
              </div>
              <div className="team-content">
                <h4 className="team-name"><a href="#">Turxan Kərimli</a></h4>
                <p className="team-degi">Adobe Certified Professional</p>
                <div className="team-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>

                <Link to="/instructors/turxan" className='more-btn'>Ətraflı oxu</Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="team-style1">
              <div className="team-img">
                <img src="/images/telimciler/Tunay.webp" alt="Könül Əsədova" />
              </div>
              <div className="team-content">
                <h4 className="team-name"><a href="team-details.html">Tunay Rüstəmzadə</a></h4>
                <p className="team-degi">Backend (Django) üzrə təlimçi</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <Link to="/instructors/tunay" className='more-btn'>Ətraflı oxu</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="team-style1">
              <div className="team-img">
                <img src="/images/telimciler/Elmir.webp" alt="Könül Əsədova" />
              </div>
              <div className="team-content">
                <h4 className="team-name"><a href="team-details.html">Elmir Sultan</a></h4>
                <p className="team-degi">Fullstack üzrə təlimçi</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <Link to="/instructors/elmir" className='more-btn'>Ətraflı oxu</Link>

              </div>
            </div>
          </div>



          <div className="col-sm-6 col-lg-4">
            <div className="team-style1">
              <div className="team-img">
                <img src="/images/telimciler/Elcin.webp" alt="Elcin Poliev" />
              </div>
              <div className="team-content">
                <h4 className="team-name"><a href="team-details.html">Elçin Poliyev</a></h4>
                <p className="team-degi">Rəqəmsal Marketinq üzrə təlimçi</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <Link to="/instructors/elcin" className='more-btn'>Ətraflı oxu</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="team-style1">
              <div className="team-img">
                <img src="/images/telimciler/Abdurrahman.webp" alt="Elcin Poliev" />
              </div>
              <div className="team-content">
                <h4 className="team-name"><a href="team-details.html">Abdulla Əbdürrəhman</a></h4>
                <p className="team-degi">Full IT üzrə təlimçi</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <Link to="/instructors/abdurrahman" className='more-btn'>Ətraflı oxu</Link>

              </div>
            </div>
          </div>



          <div className="col-sm-6 col-lg-4">
            <div className="team-style1">
              <div className="team-img">
                <img src="/images/telimciler/Aysun.webp" alt="Elcin Poliev" />
              </div>
              <div className="team-content">
                <h4 className="team-name"><a href="team-details.html">Aysun Əhmədova</a></h4>
                <p className="team-degi">General English Instructor</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <Link to="/instructors/aysun" className='more-btn'>Ətraflı oxu</Link>

              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Instructor;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  arrows: boolean;
  responsive: ResponsiveSettings[];
}

interface ResponsiveSettings {
  breakpoint: number;
  settings: SliderSettings;
}
