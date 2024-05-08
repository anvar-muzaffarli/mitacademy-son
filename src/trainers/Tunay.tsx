import React from 'react';
import { Link } from 'react-router-dom';

const Tunay: React.FC = () => {
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
                                        <img src="/images/telimciler/Tunay.webp" style={{objectFit:"contain"}} className="instructors-pages-img" alt='Abdurrahman IT Instructor' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl order-lg-1 mb-4 mb-md-0">
                            <div className="team-details">
                                <h2 className="team-name h2 mb-5">Tunay Rüstəmzadə</h2>
                                <strong>
                                Python (Django) proqramlaşdırma üzrə təlimçi
                                </strong>

                                <p className="mt-5">

                                 MultiKart, ABB Innovation StartUp, ByQR şirkətləri ilə backend proqramçı kimi fəaliyyət göstərmişdir. Hal-hazırda ByQR şirkətində backend proqramçı, MIT Academy-də isə Python üzrə baş təlimçi kimi fəaliyyət göstərir.
                               
                                   </p>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl order-lg-3">
                            <h4 className="border-title2">Dərəcələr</h4>
                            <div className="graduation-media">
                                <h6 className="year">04.2023-06.2023</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Backend Developer</h6>
                                    <p className="media-text">MultiKart</p>
                                </div>
                            </div>
                            <div className="graduation-media">
                                <h6 className="year">10.2023- 02.2024</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Backend Developer</h6>
                                    <p className="media-text">Div Academy</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                            <h6 className="year">10.2023- 12.2023</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Backend Developer</h6>
                                    <p className="media-text">ABB Innovation StartUp
                                     </p>
                                </div>
                            </div>

                           

                            <div className="graduation-media">
                            <h6 className="year"> 04.2024-indi</h6>
                                <div className="media-body">
                                <h6 className="media-title">Backend Developer</h6>

                                    <p className="media-text">ByQR</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                            <h6 className="year"> 02.2024-indi</h6>
                                <div className="media-body">
                                <h6 className="media-title">Python üzrə təlimçi</h6>

                                    <p className="media-text">MIT Academy</p>
                                </div>
                            </div>
                           
                           
                        </div>
                    </div>
                   
                </div>
            </section>
        
        </>
    );
};

export default Tunay;
