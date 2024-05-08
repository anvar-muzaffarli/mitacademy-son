import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";



const Shebeke = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/breadcumb/breadcumb-bg.png"
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Texniki Dəstək (Helpdesk)</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Ana səhifə</Link>
                </li>
                <li>Texniki dəstək (Helpdesk)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="course-details space-top space-extra-bottom">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-4">
              <div className="course-meta-box">
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <i className="far fa-hourglass"></i>Müddət
                      </th>
                      <td>3 ay</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="far fa-clock"></i>Həftəlik dərs saatı:
                      </th>
                      <td>2 akademik saat</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="far fa-user-alt"></i>Tələbə sayı:
                      </th>
                      <td>10 tələbə</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="far fa-suitcase"></i>Tədris növü:
                      </th>
                      <td>Əyani</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-8">
              <h2 className="course-title">Helpdeskin əsasları</h2>
              <h5 className="border-title2">İcmal</h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut ali quip ex ea commodo consequat.
              </p>

              <div className="inner-video-box">
                <img src="/images/mitlogo.webp" alt="blog video" />
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="play-btn position-center popup-video"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
              <h5 className="border-title2">Sillabus</h5>




              {/* Ne elde edeceksiniz section */}

              <div className="mt-4 pt-lg-2">
                <h5 className="border-title2">
                  Kursu bitirəndən sonra nə əldə edəcəksiniz?
                </h5>
                <div className="list-style1 vs-list">
                  <ul>
                    <li>
                      Rəsmi və qızıl partnyorluq etdiyimiz şirkətlərin
                      beynəlxalq sertifikasiya imtahanlarına giriş şansı
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="border-title2">Who will you learn with?</h5>
              <div
                className="row vs-carousel gx-40"
                data-slide-show="2"
                data-lg-slide-show="2"
                data-md-slide-show="2"
                data-sm-slide-show="2"
                data-center-mode="true"
              >
                {/* Eğitmenlerin listesi */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shebeke;
