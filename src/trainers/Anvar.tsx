import React from 'react';
import { Link } from 'react-router-dom';

const Anvar: React.FC = () => {
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
                                        <img src="/images/telimciler/IMG_1170.webp" className="instructors-pages-img" alt='Abdurrahman IT Instructor' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl order-lg-1 mb-4 mb-md-0">
                            <div className="team-details">
                                <h2 className="team-name h2">Ənvər Xalid</h2>
                                <p className="">
                                Ənvər Xalid 2015-2019-cu ildə Milli Aviasiya Akademiyasında "İnformasiya texnologiyaları və sistemləri mühəndisliyi" ixtisası üzrə bakalavriat səviyyəsi üzrə təhsil almışdır. 2023-cü ildə Azərbaycan Texniki Universiteti və Elm və Təhsil Nazirliyinin birgə layihəsi olan SABAH qruplarında Kibertəhlükəsizlik ixtisaslaşması üzrə magistratura pilləsində təhsilini davam etdirir. 2019-cu ildə Orta Doğu Teknik Universitetinin professor, fəxri doktor və rektoru Mustafa Verşan Kök-dən akkreditasiyalı sertifikat əldə etmişdir. (Veb proqramlaşdırma sahəsi üzrə). Təlimçi 3 ildən artıqdır ki, aktiv Microsoft Certified Trainer statusuna sahibdir. 
                               </p>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl order-lg-3">
                            <h4 className="border-title2">Dərəcələr</h4>
                            <div className="graduation-media">
                                <h6 className="year">2012-2015</h6>
                                <div className="media-body">
                                    <h6 className="media-title">PHP proqramçı- Restaurant Management System</h6>
                                    <p className="media-text">El restaurant, ştatdan kənar</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">2015-2019</h6>
                                <div className="media-body">
                                    <h6 className="media-title">İnformasiya texnologiyaları və sistemləri mühəndisliyi</h6>
                                    <p className="media-text">Azərbaycan Hava Yolları QSC nəznində Milli Aviasiya Akademiyası </p>
                                </div>
                            </div>


                            <div className="graduation-media">
                                <h6 className="year">2016-2018</h6>
                                <div className="media-body">
                                    <h6 className="media-title">IKT üzrə təlimçi</h6>
                                    <p className="media-text">Uğur Tədris Mərkəzi (Şüvəlan filialı) </p>
                                </div>
                            </div>


                            <div className="graduation-media">
                                <h6 className="year">2018-2022</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Software Engineer</h6>
                                    <p className="media-text">Optello Inc.</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">2022-2023</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Software Engineer</h6>
                                    <p className="media-text">RemoteHUB</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">2019-2019</h6>
                                <div className="media-body">
                                    <h6 className="media-title">IKT üzrə təlimçi</h6>
                                    <p className="media-text">MK Academy </p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">2021-2024</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Microsoft Certified Trainer</h6>
                                    <p className="media-text">Microsoft</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">2023-indi</h6>
                                <div className="media-body">
                                    <h6 className="media-title">SABAH qrupları, Kibertəhlükəsizlik (magistratura)</h6>
                                    <p className="media-text">Azərbaycan Texniki Universiteti </p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">2023-2023</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Site reliability engineer</h6>
                                    <p className="media-text">Oxhain, Istanbul (hibrid)</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">2023-indi</h6>
                                <div className="media-body">
                                    <h6 className="media-title">Baş müəllim</h6>
                                    <p className="media-text">MIT Academy </p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                   
                </div>
            </section>
        
        </>
    );
};

export default Anvar;
