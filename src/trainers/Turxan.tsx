import React from 'react';
import { Link } from 'react-router-dom';

const Turxan: React.FC = () => {
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
                                        <img src="/images/telimciler/Turxan.webp" style={{objectFit:"contain"}} className="instructors-pages-img" alt='Abdurrahman IT Instructor' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl order-lg-1 mb-4 mb-md-0">
                            <div className="team-details">
                                <h2 className="team-name h2 mb-5">Turxan Kərimli</h2>
                                <strong>
                                Qrafik ve Motion Dizayn MÜƏLLİMİ
                                </strong>

                                <p className="mt-5">
                                

                               

Karyerasına “IADE Universitetində”-“Global Design” ixtisası üzrə  tam ingiliscə tədris ilə başlamışdır. 

“Resant Group” şirkətində 1 ildir ki, "Marketing” şöbəsində Motion Dizayner olaraq çalışmışdır.
"El-qeys MMC" ( Park Cinema, Aygün Mall, Lotos Ticarət Mərkəzi) "Dizayn” şöbəsində Qrafik və Motion dizayn üzrə mütəxəssis olaraq çalışmışdır.
 

Dizayn sahəsində “Adobe”  şirkətinə məxsus 4 Beynəlxalq Sertifikata sahibdir. Müəllim Adobe üzrə Visual design və Visual effects statuslarını daşımaqdadır. 
Qrafik dizayn və Motion dizayn üzrə dərslər tədris edir.
                                   </p>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl order-lg-3">
                            <h4 className="border-title2">Dərəcələr</h4>
                         

                            <div className="graduation-media">
                                <h6 className="year">
                                2022 - 2026
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Global Design (bakalavriat) </h6>
                                    <p className="media-text">IADE University (Portugal)</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                                <h6 className="year">
                                2022 - indi
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Adobe Certified Professional </h6>
                                    <p className="media-text">Adobe</p>
                                </div>
                            </div>


                            <div className="graduation-media">
                                <h6 className="year">
                                2023 - indi
                                </h6>
                                <div className="media-body">
                                    <h6 className="media-title">Qrafik və Motion dizayn üzrə təlimçi </h6>
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

export default Turxan;
