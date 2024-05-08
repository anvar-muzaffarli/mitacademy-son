import React from 'react';
import { Link } from 'react-router-dom';

const Aydin: React.FC = () => {
    return (
        <>
            <div className="breadcumb-wrapper " data-bg-src="assets/img/breadcumb/breadcumb-bg.png">
                <div className="container z-index-common">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">Təlimçi haqqında</h1>
                        <div className="breadcumb-menu-wrap">
                            <ul className="breadcumb-menu">
                                <li><Link to="/">Ana səhifə</Link></li>
                                <li>Təlimçi haqqında məlumatlar</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="space-top space-extra-bottom">
                <div className="container">
                    <div className="row justify-content-center align-items-center gx-80 mb-lg-4 pb-3">
                        <div className="col-lg-5 col-xl-auto order-lg-2 mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <div className="img-box1 style3">
                                <div className="vs-circle">
                                    <div className="mega-hover">
                                        <img src="/images/telimciler/aydin.webp" className="instructors-pages-img" alt='Abdurrahman IT Instructor' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl order-lg-1 mb-4 mb-md-0">
                            <div className="team-details">
                                <h2 className="team-name h2">Aydın Şahverdizadə</h2>
                                <p className="">
                                Salam! Mən Aydın, dizayn sahəsində 7 ildən çox təcrübəyə malik dizaynerəm. Yaradıcı və təsir edici dizaynlar yaradaraq brend şəxsiyyətləri və rəqəmsal məzmun üzərində işləmişəm. Siz də, rəqəmsal medianın dinamik dünyasına uyğunlaşmaq və hər bir layihədə estetik baxımdan xoşagələn həllər təqdim etmək üçün buy ola mənimlə başlaya bilərsiniz! . Müştərilərlə yaxından işləmək, onların ehtiyaclarını anlamaq və onların vizual mesajlarını ən yaxşı şəkildə çatdırmaq mənim üçün prioritetdir. Budur mənim qrafik dizayn macəram!
                                   </p>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl order-lg-3">
                            <h4 className="border-title2">Dərəcələr</h4>
                         

                            <div className="graduation-media">
                                <h6 className="year">
                                2017 - 2018   
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Qrafik dizayn üzrə təlimçi </h6>
                                    <p className="media-text">MİLLİSOFT AGENCY </p>
                                </div>
                            </div>


                            <div className="graduation-media">
                                <h6 className="year">
                                2018 - 2019
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Freelancer olaraq qrafik dizayner </h6>
                                    <p className="media-text">Differs travel transport </p>
                                </div>
                            </div>

                          

                            <div className="graduation-media">
                                <h6 className="year">
                                2018 - 2019
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Qrafik dizayner və targetoloq </h6>
                                    <p className="media-text">Azərbaycan Gənclər klubu </p>
                                </div>
                            </div>

                        

                            <div className="graduation-media">
                                <h6 className="year">
                                2019 - 2023
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Freelancer olaraq qrafik dizayner </h6>
                                    <p className="media-text">As media group  </p>
                                </div>
                            </div>

                
                            <div className="graduation-media">
                                <h6 className="year">
                                2021- 2023
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Freelancer olaraq qrafik dizayner  </h6>
                                    <p className="media-text">Aygün mall </p>
                                </div>
                            </div>


                   

                            <div className="graduation-media">
                                <h6 className="year">
                                2022- 2023
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Freelancer olaraq qrafik dizayner  </h6>
                                    <p className="media-text">Elloni Mebel  </p>
                                </div>
                            </div>

                            

                            <div className="graduation-media">
                                <h6 className="year">
                                2020- 2022
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Qrafik və Motion dizayner </h6>
                                    <p className="media-text"> Oscorp MMC</p>
                                </div>
                            </div>


                        

                            <div className="graduation-media">
                                <h6 className="year">
                                2023- 2023
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Qrafik dizayner </h6>
                                    <p className="media-text"> Bakıxanov Mall</p>
                                </div>
                            </div>

                     
                            <div className="graduation-media">
                                <h6 className="year">
                                2023- indi
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Qrafik və Motion dizayn üzrə təlimçi </h6>
                                    <p className="media-text"> MIT Academy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
        
        </>
    );
};

export default Aydin;
