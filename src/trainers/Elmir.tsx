import React from 'react';
import { Link } from 'react-router-dom';

const Elmir: React.FC = () => {
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
                                        <img src="/images/telimciler/Elmir.webp" style={{objectFit:"contain"}} className="instructors-pages-img" alt='Abdurrahman IT Instructor' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl order-lg-1 mb-4 mb-md-0">
                            <div className="team-details">
                                <h2 className="team-name h2 mb-5">Elmir Sultan</h2>
                                <strong>
                                Fullstack proqramlaşdırma üzrə mütəxəsis & Təlimçi
                                </strong>

                                <p className="mt-5">
                                
                               
2018-2022 Bakı Mühəndislik Univeristetində bakalavr təhsilini, 2022-2024 Azərbaycan Dövlət İqtisad Univeristetində magistratura təhsili almışdır.
Documood, Butascarf, Manatrix ‘ də freelancer olaraq çalışır və MIT Academy’də Full Stack developer üzrə təlimçidir
                                   </p>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl order-lg-3">
                            <h4 className="border-title2">Dərəcələr</h4>
                            <div className="graduation-media">
                                <h6 className="year">2018-2022</h6>
                                <div className="media-body">
                                    <h6 className="media-title">İnformasiya texnologiyaları (bakalavr)</h6>
                                    <p className="media-text">Bakı Mühəndislik Universiteti</p>
                                </div>
                            </div>
                            <div className="graduation-media">
                                <h6 className="year">2022-2024</h6>
                                <div className="media-body">
                                    <h6 className="media-title">IT mütəxəsisi (magistratura)</h6>
                                    <p className="media-text">Azərbaycan Dövlət İqtisad Universiteti</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <div className="media-body">
                                    <h6 className="media-title">Fullstack developer</h6>
                                    <p className="media-text">Documood</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <div className="media-body">
                                    <h6 className="media-title">Fullstack developer</h6>
                                    <p className="media-text">Butascarf</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <div className="media-body">
                                    <h6 className="media-title">Fullstack developer</h6>
                                    <p className="media-text">Manatrix</p>
                                </div>
                            </div>
                           
                           
                        </div>
                    </div>
                   
                </div>
            </section>
        
        </>
    );
};

export default Elmir;
