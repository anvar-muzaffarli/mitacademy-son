
import { Link } from "react-router-dom";


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const System = () => {

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
            <h1 className="breadcumb-title">Sistem inzibatçılığı</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Ana səhifə</Link>
                </li>
                <li>Sistem inzibatçılığı</li>
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
              <h2 className="course-title">Sistem inzibatçılığı</h2>
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
                        Server və onun növləri
                    </button>
                </div>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Giriş</h6>
                                <p className="syllabustext">Server və onun növləri</p>
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
                        Windows Server 2023 quraşdırılması
                    </button>
                </div>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Windows Server 2023 quraşdırılması</h6>
                                <p className="syllabustext">Windows Server 2023 quraşdırılması</p>
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
                        Local Users and Groups
                    </button>
                </div>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Local Users and Groups</h6>
                                <p className="syllabustext">Local Users and Groups</p>
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
                        Active Directory - AD, Domain Users
                    </button>
                </div>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Active Directory - AD, Domain Users</h6>
                                <p className="syllabustext"> Active Directory - AD, Domain Users</p>
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
                        File Sharing
                    </button>
                </div>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">File Sharing</h6>
                                <p className="syllabustext">• File Sharing</p>
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
                        Group Policy - GP
                    </button>
                </div>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Group Policy - GP</h6>
                                <p className="syllabustext">Group Policy - GP</p>
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
                        DHCP Server
                    </button>
                </div>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">DHCP Server</h6>
                                <p className="syllabustext">DHCP Server</p>
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
                        Forest, Tree, Parent and Child Domain, DNS Server
                    </button>
                </div>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">Forest, Tree, Parent and Child Domain, DNS Server</h6>
                                <p className="syllabustext">Forest, Tree, Parent and Child Domain, DNS Server</p>
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
                        FSRM - File Server Resource Manager
                    </button>
                </div>
                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">FSRM - File Server Resource Manager</h6>
                                <p className="syllabustext">FSRM - File Server Resource Manager</p>
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
                        IP Filtering
                    </button>
                </div>
                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">IP Filtering</h6>
                                <p className="syllabustext">IP Filtering</p>
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
                        NPS - Network Policy Server
                    </button>
                </div>
                <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">NPS - Network Policy Server</h6>
                                <p className="syllabustext"> NPS - Network Policy Server</p>
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
                        IIS - Internet Information Service
                    </button>
                </div>
                <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">IIS - Internet Information Service</h6>
                                <p className="syllabustext">IIS - Internet Information Service</p>
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
                        WSUS - Windows Server Update Service
                    </button>
                </div>
                <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">WSUS - Windows Server Update Service</h6>
                                <p className="syllabustext">WSUS - Windows Server Update Service</p>
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
                        RDP - Remote Desktop Service
                    </button>
                </div>
                <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#faqVersion2">
                    <div className="accordion-body">
                        <div className="syllabus-list">
                            <div className="syllabus-content">
                                <h6 className="syllabustitle">RDP - Remote Desktop Service</h6>
                                <p className="syllabustext">RDP - Remote Desktop Service</p>
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

export default System;



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
