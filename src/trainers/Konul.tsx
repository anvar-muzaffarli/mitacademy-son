import React from 'react';
import { Link } from 'react-router-dom';

const Konul: React.FC = () => {
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
                                        <img src="/images/telimciler/Konul-Sayt.webp" style={{objectFit:"contain"}} className="instructors-pages-img" alt='Konul Office Instructor' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl order-lg-1 mb-4 mb-md-0">
                            <div className="team-details">
                                <h2 className="team-name h2 mb-5">Könül Əsədova</h2>
                                <strong>
                                Microsoft Office and Cisco Netacad Instructor
                                </strong>

                                <p className="mt-5">

                                    Bakı Dövlət Universiteti  "İnformatika müəllimliyi" və Azərbaycan Dövlət Neft və Sənaye Universitetinin
                                    "İnformasiya texnologiyalarının mühafizəsi və təhlükəsizliyi" ixtisas proqramı üzrə magistratura təhsili alır. 
                                    2024-cü ildən Cisco şirkətinin rəsmi Netacad üzrə təlimçisidir.                
                                   </p>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl order-lg-3">
                            <h4 className="border-title2">Dərəcələr</h4>
                            <div className="graduation-media">
                                <h6 className="year">07.2019-06.2023</h6>
                                <div className="media-body">
                                    <h6 className="media-title">İnformatika müəllimliyi (bakalavriat)</h6>
                                    <p className="media-text">Bakı Dövlət Universiteti</p>
                                </div>
                            </div>
                            <div className="graduation-media">
                                <h6 className="year">07.2023- 06.2025</h6>
                                <div className="media-body">
                                    <h6 className="media-title">İnformasiya texnologiyalarının mühafizəsi və təhlükəsizliyi (magistratura)</h6>
                                    <p className="media-text">Azərbaycan Dövlət Neft və Sənaye Universiteti</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                            <h6 className="year">06.2023- indi</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Microsoft Office Instructor</h6>
                                    <p className="media-text">MIT Academy
                                     </p>
                                </div>
                            </div>

                            <div className="graduation-media">
                            <h6 className="year">04.2024- indi</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Official Netacad Instructor</h6>
                                    <p className="media-text"> Official Cisco Netacad
                                     </p>
                                </div>
                            </div>


                            
                           
                           
                        </div>
                    </div>
                   
                </div>
            </section>
        
        </>
    );
};

export default Konul;
