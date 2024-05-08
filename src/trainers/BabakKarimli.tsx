import React from 'react';
import { Link } from 'react-router-dom';

const Babak: React.FC = () => {
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
                                        <img src="/images/telimciler/Babo.webp" className="instructors-pages-img" alt='Abdurrahman IT Instructor' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl order-lg-1 mb-4 mb-md-0">
                            <div className="team-details">
                                <h2 className="team-name h2 mb-5">Babək Kərimli</h2>
                                <strong>HELPDESK/TEXNİKİ DƏSTƏK VƏ ŞƏBƏKƏ İNZİBATÇILIĞI MÜƏLLİMİ</strong>

                                <p className="mt-5">
                                

Karyerasına “İstanbul Bilgi Universitetində”-“Computer Engineering” ixtisası üzrə IELTS səviyyəsində tam ingiliscə tədris ilə başlamışdır. Magistratura təhsilini isə “Ankara Bilim” universitetində “Cyber Security and Cyber Crimes” ixtisasında başa vurmuşdur.

“Resant Group” şirkətində 4 ildir ki, "İnformasiya texnologiyaları” şöbəsində baş mütəxəssis olaraq çalışmışdır.

IT sahəsində “Cisco”, “CompTIA”, “Microsoft” şirkətlərinə məxsus 15 Beynəlxalq Sertifikata sahibdir. Müəllim Rəsmi Microsoft və Cisco təlimçisi olub, MCT, CCT və Microsoft Expert statuslarını daşımaqdadır. 

Professional olduğu sahədə tam sıfırdan Helpdesk/Texniki dəstək, Şəbəkə, Sistem İnzibatçılığı, Virtuallaşdırma Həlləri və Bulud Texnologiyaları, bir sözlə Kiber Təhlükəsizliyin təməlləri və doğru yol xəritəsi üzrə dərslər tədris edir. 

Müəllimin tələbələrinin 90 faizi beynalxalq sertifikatlara malikdir və birçoxu artıq bu sahədə işləyirlər.
                                   </p>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl order-lg-3">
                            <h4 className="border-title2">Dərəcələr</h4>
                         

                            <div className="graduation-media">
                                <h6 className="year">
                                2018 - 2022  
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Computer Engineering (bakalavriat) </h6>
                                    <p className="media-text">İstanbul Bilgi Universiteti </p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">
                                2022 - 2024  
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Cyber Security and Cyber Crimes (magistratura) </h6>
                                    <p className="media-text">Ankara Bilim Universiteti </p>
                                </div>
                            </div>


                            <div className="graduation-media">
                                <h6 className="year">
                                2020 - 2024
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">IT üzrə baş mütəxəsis (Senior)</h6>
                                    <p className="media-text">Resant Group </p>
                                </div>
                            </div>

                          

                            <div className="graduation-media">
                                <h6 className="year">
                                2021 - 2024
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Microsoft Certified Trainer</h6>
                                    <p className="media-text">Microsoft </p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">
                                2021 - 2024
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Cisco Certified Trainer</h6>
                                    <p className="media-text">Cisco </p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">
                                2024 - 2025
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Microsoft System Adminstration Expert</h6>
                                    <p className="media-text">Microsoft </p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">
                                2023
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">CEO & Founder, IT və təhlükəsizlik, idarəetmə həlləri üzrə baş təlimçi</h6>
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

export default Babak;
