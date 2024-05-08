
import { Link } from "react-router-dom";


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Shebeke = () => {

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
                İxtisas proqramları üzrə demo dərsi aşağıdakı video-dan izləyə bilərsiniz: 
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
            {/* Accordion Item 1 */}
            <div className="accordion-item active">
                <div className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span className="button-label">Mövzu 1</span>
                        Texniki təminat - Hardware
                    </button>
                </div>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Giriş</h6>
                                <p className="syllabustext">Texniki təminat - Hardware nədir</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 2 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span className="button-label">Mövzu 2</span>
                        Anakart və onun növləri
                    </button>
                </div>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Anakart və onun növləri</h6>
                                <p className="syllabustext">Anakart və onun növləri</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 3 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span className="button-label">Mövzu 3</span>
                        Yaddaş qurğuları - HDD/SDD/RAM
                    </button>
                </div>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Yaddaş qurğuları - HDD/SDD/RAM</h6>
                                <p className="syllabustext">Yaddaş qurğuları - HDD/SDD/RAM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 4 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <span className="button-label">Mövzu 4</span>
                        Fayl sistemləri, bölünmə tərzi
                    </button>
                </div>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Fayl sistemləri, bölünmə tərzi</h6>
                                <p className="syllabustext"> Fayl sistemləri, bölünmə tərzi </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 5 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <span className="button-label">Mövzu 5</span>
                        Giriş Çıxış qurğuları, Portlar
                    </button>
                </div>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Giriş Çıxış qurğuları, Portlar</h6>
                                <p className="syllabustext">Giriş Çıxış qurğuları, Portlar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 6 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        <span className="button-label">Mövzu 6</span>
                        Daxili və xarici videokart - GPU
                    </button>
                </div>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Daxili və xarici videokart - GPU</h6>
                                <p className="syllabustext">Daxili və xarici videokart - GPU</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 7 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        <span className="button-label">Mövzu 7</span>
                        Prosessor - CPU
                    </button>
                </div>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Prosessor - CPU</h6>
                                <p className="syllabustext">Prosessor - CPU</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 8 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        <span className="button-label">Mövzu 8</span>
                        Silinmiş məlumatların bərpası, BackUp
                    </button>
                </div>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Silinmiş məlumatların bərpası, BackUp</h6>
                                <p className="syllabustext">Silinmiş məlumatların bərpası, BackUp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 9 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        <span className="button-label">Mövzu 9</span>
                        Əməliyyat sistemləri - Windows, Linux
                    </button>
                </div>
                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Əməliyyat sistemləri - Windows, Linux</h6>
                                <p className="syllabustext">Əməliyyat sistemləri - Windows, Linux</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 10 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        <span className="button-label">Mövzu 10</span>
                        Format, driverlərin yazılması
                    </button>
                </div>
                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Format, driverlərin yazılması</h6>
                                <p className="syllabustext">Format, driverlərin yazılması</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 11 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingEleven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        <span className="button-label">Mövzu 11</span>
                        Elektrik və elektronikaya giriş
                    </button>
                </div>
                <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Elektrik və elektronikaya giriş</h6>
                                <p className="syllabustext"> Elektrik və elektronikaya giriş</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 12 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingTwelve">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        <span className="button-label">Mövzu 12</span>
                        Düzgün enerjidə qidabloku seçilməsi - PSU
                    </button>
                </div>
                <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Düzgün enerjidə qidabloku seçilməsi - PSU</h6>
                                <p className="syllabustext">Düzgün enerjidə qidabloku seçilməsi - PSU</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 13 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingThirteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        <span className="button-label">Mövzu 13</span>
                        UPS - Rezerv enerji sistemləri
                    </button>
                </div>
                <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">UPS - Rezerv enerji sistemləri</h6>
                                <p className="syllabustext">UPS - Rezerv enerji sistemləri</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Item 14 */}
            <div className="accordion-item">
                <div className="accordion-header" id="headingFourteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        <span className="button-label">Mövzu 14</span>
                        Kompüterlərin sıfırdan yığılması
                    </button>
                </div>
                <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Kompüterlərin sıfırdan yığılması</h6>
                                <p className="syllabustext">Kompüterlərin sıfırdan yığılması</p>
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

                    <li>
                      Əldə etdiyiniz orta müvəfəqiyyət dərəcəsinə görə ölkədaxili bütün şirkət və müəssisələrdə tanınan diplom
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

export default Shebeke;



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
