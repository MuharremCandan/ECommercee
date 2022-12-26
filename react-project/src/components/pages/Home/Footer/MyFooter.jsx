import React, { Fragment } from "react";
import "../Footer/footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <Fragment>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-row">
            {/* column-1 */}

            <div className="footer-column">
              <div className="column-content">
                <h2>Sirket ISIM</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, blanditiis.
                </p>
                <ul className="footer-link" style={{ listStyle: "none" }}></ul>
              </div>
            </div>

            {/* column-2 */}

            <div className="footer-column">
              <div className="column-content">
                <h2>Hakkımızda</h2>
                <ul>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      Gizlilik
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      Markalarımız
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* column-3 */}

            <div className="footer-column">
              <div className="column-content">
                <h2>Kategoriler</h2>
                <ul>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      Masaüstü Bilgisayar
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      Notebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      Oyun Bilgisayarı
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      ....
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* column-4 */}

            <div className="footer-column">
              <div className="column-content">
                <h2>Müşteri Hizmetleri</h2>
                <ul>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      Rehber
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      Ödeme Seçenekleri
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      İade ve İptal
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        {" "}
                        <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      </span>
                      Garanti
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column-5 */}

            <div className="footer-column">
              <div className="column-content">
                <h2>Yardıma Mı İhtiyacınız Var ?</h2>
                <ul>
                  <li>
                    <span className="footer-icon">
                      {" "}
                      <i class="fa-solid fa-location-dot"></i>{" "}
                    </span>
                    <span className="text">ADRES</span>
                  </li>
                  <li>
                    <span className="footer-icon">
                      {" "}
                      <i class="fa-solid fa-phone"></i>{" "}
                    </span>
                    <span className="text">+90 000 111 22 14</span>
                  </li>
                  <li>
                    <span className="footer-icon">
                      {" "}
                      <i class="fa-solid fa-envelope"></i>{" "}
                    </span>
                    <span className="text">lorem@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-media-f">
            <SocialIcon network="facebook" />
          </div>
          <div className="social-media-t">
            <SocialIcon network="twitter" />
          </div>
          <div className="social-media-i">
            <SocialIcon network="instagram" />
          </div>
          <div className="footer-2">
            <div className="footer-2-container">
              {/* <p>Copyright ©2022 </p> */}
              <p>LOREM</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
