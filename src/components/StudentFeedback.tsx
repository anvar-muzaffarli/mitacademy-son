import React, { useState, useEffect, useRef } from 'react';
import Slider, { Settings } from '@ant-design/react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface StudentFeedbackProps {}

const StudentFeedback: React.FC<StudentFeedbackProps> = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const settingsSlide1: Settings = {
    speed: 1000,
    arrows: false,
    fade: false,
    dots: false,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '0',
    asNavFor: nav2 ? nav2 : undefined,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          vertical: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          centerMode: false,
          slidesToShow: 2,
        },
      },
    ],
  };

  const settingsSlide2: Settings = {
    speed: 1000,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: nav1 ? nav1 : undefined,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
        },
      },
    ],
  };

  const goToSlide2 = (index: number) => {
    if (nav2) {
      nav2.slickGoTo(index);
    }
  };

  return (
    <section className="space-top space-extra-bottom">
      <div className="shape-mockup jump d-none d-xxl-block" data-right="10%" data-bottom="12%">
        <div className="shape-dotted"></div>
      </div>
      <div className="shape-mockup rotate d-none d-xxl-block" data-right="48%" data-top="17%">
        <div className="vs-polygon1"></div>
      </div>
      <div className="shape-mockup jump-reverse d-none d-xxl-block" data-right="51%" data-top="21%">
        <div className="vs-rounded1"></div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-xxl-5">
            <div className="title-area wow fadeInUp" data-wow-delay="0.3s">
              <span className="sec-subtitle">Akademiyamız haqqında fikirlər</span>
              <h2 className="sec-title h1">Bizi tələbələrimizdən dinləyin</h2>
            </div>
            <Slider className="testi-slide1 wow fadeInUp row" data-wow-delay="0.4s" {...settingsSlide1} ref={sliderRef1}>
              <div className="col-auto" onClick={() => goToSlide2(0)}>
                <div className="media-style6">
                  <div className="media-img"><img src="/images/sevinc-cavadova.webp" alt="Sevinc Cavadova" style={{transform:"rotate(90deg)", width:"100px"}} /></div>
                  <div className="media-content">
                    <h5 className="media-name">Sevinc Cavadova</h5>
                    <p className="media-degi">Veb tərtibatçı</p>
                  </div>
                </div>
              </div>

              <div className="col-auto" onClick={() => goToSlide2(1)}>
                <div className="media-style6">
                <div className="media-img"><img src="/images/nigar-basarova.webp" alt="Sevinc Cavadova" style={{transform:"rotate(90deg)", width:"100px"}} /></div>
                  <div className="media-content">
                    <h5 className="media-name">Nigar Başarova</h5>
                    <p className="media-degi">Veb tərtibatçı</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="col-xl-7 col-xxl-auto align-self-end">
            <div className="testi-style2">
              <div className="testi-shape1"></div>
              <Slider className="testi-slide2 wow fadeInUp row" data-wow-delay="0.4s" {...settingsSlide2} ref={sliderRef2}>
                <div>
                  <div className="testi-content">
                    <span className="testi-icon"><img src="/images/Icon/quote.webp" alt="Testimonial Icon" width={100} height={100} /></span>
                    <p className="testi-text">Мне очень нравятся эти курсы , я очень много нового узнала для повышения своих знаний в сфере IT.  Уроки проходят очень интересно и полезно одновременно. Учитель объясняет все очень интересно и в то же время легким способом, дает много полезных знаний.Так же из-за того что молодой коллектив с ними не соскучишься.</p>
                    <h4 className="testi-name">Sevinc Cavadova</h4>
                    <p className="testi-degi">Veb tərtibatçı</p>
                  </div>
                </div>

                <div>
                  <div className="testi-content">
                    <span className="testi-icon"><img src="/images/Icon/quote.webp" alt="Testimonial Icon" width={100} height={100} /></span>
                    <p className="testi-text">Отличные курсы, и учитель. Обучение проходит очень комфортно и эффективно. То что не понимаем, легко объясняется учителем который помогает решить все проблемы. Также хочу отметить очень приятный коллектив. За пару месяцев обучения уже есть отличная база знаний для будущей работы. Даже не смотря на то что уровень Азербайджанского у меня не такой хороший, я все отлично понимаю благодаря легкой подаче учителя, благодаря ему уроки проходят очень интересно и мотивация учиться только поднимается.</p>
                    <h4 className="testi-name">Nigar Başarova</h4>
                    <p className="testi-degi">Veb tərtibatçı</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentFeedback;
