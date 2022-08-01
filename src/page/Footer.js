import React, { useEffect } from "react";
import Facebook from "../image/icons/icon-facebook.svg";
import Twitter from "../image/icons/icon-twitter.svg";
import Pintrest from "../image/icons/icon-pinterest.svg";
import Instagram from "../image/icons/icon-instagram.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="Footer" data-aos="zoom-in">
      <section className="footer-1" data-aos="flip-up">
        <h1>Efectai</h1>
        <div className="icons">
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Pintrest} alt="Pintrest" />
          <img src={Instagram} alt="instagram" />
        </div>
      </section>

      <section className="footer-2">
        <div className="about-companies">
          <span>About us</span>
          <span>Services</span>
          <span>Ingredient</span>
          <span>Products</span>
          <span>Support</span>
        </div>

        <p>&copy; developed by: maazjnr. All right Reserved 2022 </p>
      </section>
    </div>
  );
};

export default Footer;
