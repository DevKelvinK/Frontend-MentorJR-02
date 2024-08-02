import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

import styles from "./Footer.module.css";

import LogoWhite from "../assets/logoWhite.svg";
import IconPhone from "../assets/icon-phone.svg";
import Iconemail from "../assets/icon-email.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={LogoWhite} className={styles.logo} alt="Logotipo Fylo" />

      <section className={styles.footerContent}>
        <div>
          <div className={styles.contact}>
            <img src={IconPhone} />
            <span>Phone: +1-543-123-4567</span>
          </div>

          <div className={styles.contact}>
            <img src={Iconemail} />
            <span>example@fylo.com</span>
          </div>
        </div>

        <nav className={styles.columnsNav}>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>

            <li>
              <a href="#">Jobs</a>
            </li>

            <li>
              <a href="#">Press</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>

            <li>
              <a href="#">Terms</a>
            </li>

            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </nav>

        <nav className={styles.socialMediaNav}>
          <a
            href="http://www.facebook.com"
            target="_blank"
            className={styles.iconFacebook}
          >
            <BiLogoFacebook />
          </a>

          <a
            href="http://www.x.com"
            target="_blank"
            className={styles.iconTwitter}
          >
            <BiLogoTwitter />
          </a>

          <a
            href="http://www.instagram.com"
            target="_blank"
            className={styles.iconInstagram}
          >
            <BiLogoInstagram />
          </a>
        </nav>
      </section>
    </footer>
  );
}
