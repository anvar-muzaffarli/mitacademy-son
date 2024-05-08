import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AcademicPartners: React.FC = () => {

    const settings: SliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    
    return (
        <section className="space-top space-extra-bottom" data-bg-src="assets/img/bg/blog-single-divider-bg-1-1.jpg">
            <div className="container">
                <div className="row justify-content-between text-center text-lg-center">
                    <div className="col-lg-12 mb-40 mb-lg-0 text-center">
                        <h2 className="mt-n2 h2 mb-3">Akademik partnyorlarımız</h2>
                        <p className="mb-4 pb-2 fs-md col-xl-11">Tələbələrimizin kariyerasında əvəzsiz rol oynayan şirkətlərlə əməkdaşlıq edirik</p>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <div className="sec-line2"></div>
                    </div>
                    <div>
                        <Slider {...settings} className="wow fadeInUp d-flex mt-3 " data-wow-delay="0.4s">
                            <img src="/images/partnyorlar/adobe.webp" alt="adobe" className='partner-logo' />
                            <img src="/images/partnyorlar/cisco.webp" alt="cisco" className='partner-logo' />
                            <img src="/images/partnyorlar/aztu.webp" alt="aztu" className='partner-logo' />
                            <img src="/images/partnyorlar/microsoft.webp" alt="microsoft" className='partner-logo' />
                            <img src="/images/partnyorlar/comptia.webp" alt="comptia" className='partner-logo' />
                            <img src="/images/partnyorlar/oscorp.webp" alt="oscorp" className='partner-logo' />
                            <img src="/images/partnyorlar/assoasiya.webp" alt="oscorp" className='partner-logo' />
                            <img src="/images/partnyorlar/aurbis.webp" alt="oscorp" style={{background:"#222"}} className='partner-logo' />
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface SliderSettings {
    dots: boolean;
    infinite: boolean;
    autoplay: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplaySpeed: number;
    cssEase: string;
    arrows: boolean;
    responsive: ResponsiveSetting[];
}

interface ResponsiveSetting {
    breakpoint: number;
    settings: {
        slidesToShow: number;
        slidesToScroll: number;
    };
}

export default AcademicPartners;
