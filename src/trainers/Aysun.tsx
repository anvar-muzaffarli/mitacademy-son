import React from 'react';
import { Link } from 'react-router-dom';

const Aysun: React.FC = () => {
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
                                        <img src="/images/telimciler/Aysun.webp" style={{objectFit:"contain"}} className="instructors-pages-img" alt='Abdurrahman IT Instructor' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl order-lg-1 mb-4 mb-md-0">
                            <div className="team-details">
                                <h2 className="team-name h2 mb-5">Aysun Əhmədova</h2>
                                <strong>
                                Xarici dil (İngilis) üzrə təlimçi
                                </strong>

                                <p className="mt-5">

                    Azərbaycan Respublikasının Təhsil İnstitutunda "Peşəkar Ol" ixtisasartırma və təkmilləşdirmə proqramı üzrə təhsilə yiyələnmişdir. Bir çox aparıcı təhsil müəssisələrində General English üzrə təlim keçmişdir. 
                               
                                   </p>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl order-lg-3">
                            <h4 className="border-title2">Dərəcələr</h4>
                            <div className="graduation-media">
                                <h6 className="year">02.2023-03.2023</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Peşəkar Ol (Təkmilləşdirmə proqramı)</h6>
                                    <p className="media-text">Azərbaycan Respublikası Təhsil İnstitutu</p>
                                </div>
                            </div>
                            <div className="graduation-media">
                                <h6 className="year">10.2020- 02.2021</h6>
                                <div className="media-body">
                                    <h6 className="media-title">İngilis dili müəllimi</h6>
                                    <p className="media-text">Efe kursları</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                            <h6 className="year">04.2022- 09.2023</h6>
                                <div className="media-body">
                                    <h6 className="media-title">İngilis dili müəllimi</h6>
                                    <p className="media-text">Arximed Təlim və Tədris kompleksi
                                     </p>
                                </div>
                            </div>

                           

                            <div className="graduation-media">
                            <h6 className="year"> 10.2023-03.2024</h6>
                                <div className="media-body">
                                <h6 className="media-title">General English Instructor</h6>

                                    <p className="media-text">Günəş Tədris Mərkəzi</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                            <h6 className="year"> 04.2024-indi</h6>
                                <div className="media-body">
                                <h6 className="media-title">General English Instructor</h6>

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

export default Aysun;
