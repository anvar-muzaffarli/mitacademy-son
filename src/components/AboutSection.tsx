import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="space-top space-bottom" id='about-section'>
      <div className="container">
        <div className="row align-items-center align-items-xxl-start">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
            <div className="picture-box2">
              {/* next/image kullanımı */}
              <div className="picture-1 mega-hover"><img src="/images/ugur.webp" alt="About Img" width={310} height={310} /></div>
              <div className="picture-2 mega-hover"><img src="/images/telimciler/aydin.webp" alt="About Img" width={310} height={310} /></div>
              <div className="picture-3 mega-hover"><img src="/images/sert.webp" alt="About Img" width={310} height={310} /></div>
              <div className="vs-circle"></div>
            </div>
          </div>
          <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.4s">
            <div className="about-box2">
              <div className="title-area">
                <h2 className="about-title h1">Akademiyamız haqqında</h2>
              </div>
              <div className="about-content">
                <p className="fs-md">Modern IT (MIT) Academy 2023-cü ildə fəaliyyətə başlamışdır. Fəaliyyətinin 6-cı ayında 7 beynəlxalq dərəcəli kadr yetişdirmişdir. Hal-hazırda akademiyamızın tələbələri özəl şirkətlərdə təcrübəçi və işçi kimi çalışırlar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
