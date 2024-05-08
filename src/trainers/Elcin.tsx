import React from 'react';
import { Link } from 'react-router-dom';

const Elcin: React.FC = () => {
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
                                        <img src="/images/telimciler/Elcin.webp" style={{objectFit:"contain"}} className="instructors-pages-img" alt='Abdurrahman IT Instructor' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl order-lg-1 mb-4 mb-md-0">
                            <div className="team-details">
                                <h2 className="team-name h2 mb-5">Elçin Poliyev</h2>
                                <strong>
                                Rəqəmsal Marketing üzrə baş mütəxəsis və təlimçi
                                </strong>

                                <p className="mt-5">
                                

                               
                                

Karyerasına “Bakı Dövlət Univeristetində” bakalavr pilləsi üzrə başlamışdır. Magistratura təhsilini isə “Anadolu” univeristetində “Marketing” ixtisası üzrə başa vurmuşdur.
KİTABAZ-da “təsisçi”, Libraff MMC’ də “Marketting mütəxəssisi” , UNİCEF Azerbaijan’da “PR və Marketting üzrə konsultant”, Şəki Regional KOB İnkişaf Mərkəzində “Koordinator” kimi fəaliyyət göstərmişdir. Hal-hazırda MIT Academy’də “ Rəqəmsal Marketting, SMM” üzrə təlimçidir və freelancer olaraq konsultant kimi fəaliyyət göstərir.
                                   </p>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl order-lg-3">
                            <h4 className="border-title2">Dərəcələr</h4>
                         

                            <div className="graduation-media">
                                <div className="media-body">
                                    <h6 className="media-title"> Bakalavr</h6>
                                    <p className="media-text">Bakı Dövlət Universiteti</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                               
                                <div className="media-body">
                                    <h6 className="media-title">Marketing </h6>
                                    <p className="media-text">Anadolu Universiteti</p>
                                </div>
                            </div>


                            <div className="graduation-media">
                               
                                <div className="media-body">
                                    <h6 className="media-title">Təsisçi</h6>
                                    <p className="media-text">KİTABAZ</p>
                                </div>
                            </div>


                            <div className="graduation-media">
                               
                                <div className="media-body">
                                    <h6 className="media-title">Marketinq mütəxəsisi</h6>
                                    <p className="media-text">Libraff MMC</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                               
                                <div className="media-body">
                                    <h6 className="media-title">PR və Marketinq üzrə konsultant</h6>
                                    <p className="media-text">UNICEF Azerbaijan</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                               
                                <div className="media-body">
                                    <h6 className="media-title">Kordinator</h6>
                                    <p className="media-text">Şəki Regional KOB İnkişaf Mərkəzi</p>
                                </div>
                            </div>

                            <div className="graduation-media">
                               
                                <div className="media-body">
                                    <h6 className="media-title">Konsultant& Rəqəmsal Marketinq üzrə baş müəllim</h6>
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

export default Elcin;
