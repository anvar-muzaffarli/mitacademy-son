import React, { useState } from 'react';

interface EducationData {
  title: string;
  content: JSX.Element;
}

const EducationFields: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const data: EducationData[] = [
    {
      title: 'IT',
      content: (
        <div>
          <p>İnformasiya texnologiyaları sahəsində fəaliyyət üçün aşağıdakı sahələrin tədrisi həyata keçirilir:</p>
          <div className="list-style1 vs-list ">
            <ul>
              <li>Helpdesk</li>
              <li>Şəbəkə</li>
              <li>Bulud və virtuallaşdırma</li>
              <li>Sistem inzibatçılığı</li>
              <li>Kibertəhlükəsizliyin əsasları</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Dizayn',
      content: (
        <div>
          <p>Dizayn sahəsi üzrə peşəkar kadrların hazırlığı aşağıdakı istiqamətlər üzrə həyata keçirilir: </p>
          <div className="list-style1 vs-list ">
            <ul>
              <li>Motion dizayn</li>
              <li>Qrafik dizayn</li>
              <li>3D</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Proqramlaşdırma',
      content: (
        <div>
          <p>Proqramlaşdırma sektorunun əsas kriteriyaları nəzərə alınaraq kadr hazırlığı aşağıdakı istiqamətlər üzrə həyata keçirilir: </p>
          <div className="list-style1 vs-list ">
            <ul>
              <li>Front-end üzrə veb tərtibatçıların hazırlığı</li>
              <li>Back-end sahəsi üzrə proqramçıların hazırlığı</li>
              <li>Fullstack proqramlaşdırma üzrə kadrların hazırlığı</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Ofis proqramları',
      content: (
        <div>
          <p>Kompüter sahəsində təməl biliklərin qazanılması və bu sahə üzrə peşəkar təlimçilərdən aşağıdakı bilikləri əldə edirsiniz: </p>
          <div className="accordion-list transition">
            <div className="list-style1 vs-list ">
              <ul>
                <li>Windows 11 ƏS əsasları</li>
                <li>Microsoft Office 365</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="space-extra-bottom pt-5" id='education-fields'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="title-area text-center text-lg-start">
              <span className="sec-subtitle"></span>
              <h2 className="sec-title h1">Tədris sahələri</h2>
            </div>
            <div className="faq-style1">
              <div
                className="accordion accordion-style2 wow fadeInUp"
                data-wow-delay="0.4s"
                id="faqVersion1"
              >
                {data.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <div
                      className={`accordion-header ${
                        activeIndex === index ? 'active' : ''
                      }`}
                      id={`heading${index + 1}`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <button
                        className="accordion-button collapsed shadow-none"
                        type="button"
                        aria-expanded={activeIndex === index ? 'true' : 'false'}
                        aria-controls={`collapse${index + 1}`}
                      >
                        <span className="number"></span>
                        {item.title}
                      </button>
                    </div>
                    <div
                      id={`collapse${index + 1}`}
                      className={`accordion-collapse collapse ${
                        activeIndex === index ? 'show' : ''
                      }`}
                      aria-labelledby={`heading${index + 1}`}
                      data-parent="#faqVersion1"
                    >
                      <div className="accordion-body" style={{ transition: 'max-height 0.3s ease-in-out', maxHeight: activeIndex === index ? '1000px' : '0' }}>
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="img-box1">
              <div className="vs-circle">
                <div className="mega-hover">
                  <img src="/images/telimciler/babo-sol.webp" alt="banner" width={400} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationFields;
