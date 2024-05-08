
import { Link } from "react-router-dom";


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Helpdesk = () => {

  const settings: SliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
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
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/breadcumb/breadcumb-bg.png"
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Texniki Dəstək (Helpdesk)</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Ana səhifə</Link>
                </li>
                <li>Texniki dəstək (Helpdesk)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="course-details space-top space-extra-bottom">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-4">
              <div className="course-meta-box">
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <i className="far fa-hourglass"></i>Müddət
                      </th>
                      <td>3 ay</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="far fa-clock"></i>Həftəlik dərs saatı:
                      </th>
                      <td>2 akademik saat</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="far fa-user-alt"></i>Tələbə sayı:
                      </th>
                      <td>10 tələbə</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="far fa-suitcase"></i>Tədris növü:
                      </th>
                      <td>Əyani</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-8">
              <h2 className="course-title">Helpdeskin əsasları</h2>
              <h5 className="border-title2">İcmal</h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut ali quip ex ea commodo consequat.
              </p>

              <div className="inner-video-box">
                <img src="/images/mitlogo.webp" alt="blog video" />
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="play-btn position-center popup-video"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
              <h5 className="border-title2">Sillabus</h5>




              <div className="accordion accordion-style4" id="faqVersion2">
              <div className="accordion-item active">
    <div className="accordion-header" id="headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <span className="button-label">Week 1</span>
            Getting started with Extensive Reading
        </button>
    </div>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqVersion2">

        <div className="accordion-body">
            <div className="syllabus-list">
                <div className="syllabus-img"><img src="assets/img/course/course-syllabus-1.jpg" alt="syllabus-image-1" /></div>
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Introduction</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-img"><img src="assets/img/course/course-syllabus-2.jpg" alt="syllabus-image-2" /></div>
                <div className="syllabus-content">
                    <h6 className="syllabustitle">What do you understand by Extensive Reading?</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Why Extensive Reading?</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non illum dolore eu fugiat proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Incorporating Extensive Reading</h6>
                    <p className="syllabustext">lit esse cillum dolore eu ferit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non illum dolore eu fugiat proident.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="accordion-item">
    <div className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <span className="button-label">Week 2</span>
            Practical pre-reading activities with graded readers
        </button>
    </div>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqVersion2">

        <div className="accordion-body">
            <div className="syllabus-list">
                <div className="syllabus-img"><img src="assets/img/course/course-syllabus-1.jpg" alt="syllabus-image-1" /></div>
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Introduction</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-img"><img src="assets/img/course/course-syllabus-2.jpg" alt="syllabus-image-2" /></div>
                <div className="syllabus-content">
                    <h6 className="syllabustitle">What do you understand by Extensive Reading?</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Why Extensive Reading?</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non illum dolore eu fugiat proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Incorporating Extensive Reading</h6>
                    <p className="syllabustext">lit esse cillum dolore eu ferit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non illum dolore eu fugiat proident.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="accordion-item">
    <div className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <span className="button-label">Week 3</span>
            Activities with graded readers
        </button>
    </div>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqVersion2">

        <div className="accordion-body">
            <div className="syllabus-list">
                <div className="syllabus-img"><img src="assets/img/course/course-syllabus-1.jpg" alt="syllabus-image-1" /></div>
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Introduction</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-img"><img src="assets/img/course/course-syllabus-2.jpg" alt="syllabus-image-2" /></div>
                <div className="syllabus-content">
                    <h6 className="syllabustitle">What do you understand by Extensive Reading?</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Why Extensive Reading?</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non illum dolore eu fugiat proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Incorporating Extensive Reading</h6>
                    <p className="syllabustext">lit esse cillum dolore eu ferit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non illum dolore eu fugiat proident.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="accordion-item">
    <div className="accordion-header" id="headingFour">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <span className="button-label">Week 4</span>
            Practical post-reading
        </button>
    </div>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqVersion2">

        <div className="accordion-body">
            <div className="syllabus-list">
                <div className="syllabus-img"><img src="assets/img/course/course-syllabus-1.jpg" alt="syllabus-image-1" /></div>
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Introduction</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-img"><img src="assets/img/course/course-syllabus-2.jpg" alt="syllabus-image-2" /></div>
                <div className="syllabus-content">
                    <h6 className="syllabustitle">What do you understand by Extensive Reading?</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Why Extensive Reading?</h6>
                    <p className="syllabustext">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non illum dolore eu fugiat proident.</p>
                </div>
            </div>
            <div className="syllabus-list">
                <div className="syllabus-content">
                    <h6 className="syllabustitle">Incorporating Extensive Reading</h6>
                    <p className="syllabustext">lit esse cillum dolore eu ferit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex cepteur sint upidatat non illum dolore eu fugiat proident.</p>
                </div>
            </div>
        </div>
    </div>
</div>

              </div>
            

              <div className="mt-4 pt-lg-2">
                <h5 className="border-title2">
                  Kursu bitirəndən sonra nə əldə edəcəksiniz?
                </h5>
                <div className="list-style1 vs-list">
                  <ul>
                    <li>
                      Rəsmi və qızıl partnyorluq etdiyimiz şirkətlərin
                      beynəlxalq sertifikasiya imtahanlarına giriş şansı
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="border-title2">Bu sahəni kimlər tədris edəcək?</h5>
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
                <img src="/images/telimciler/Abdurrahman.webp" alt="Anvar Khalid" />
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
        
       
      

        

       

         

       
        </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Helpdesk;



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
