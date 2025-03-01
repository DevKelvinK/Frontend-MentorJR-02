import styles from "./MainComponent.module.css";

/* Import images */
import Illustration1 from "../assets/illustration-1.svg";
import Illustration2 from "../assets/illustration-2.svg";
import Quotes from "../assets/icon-quotes.svg"
import Avatar from "../assets/avatar-testimonial.jpg"

/* Import components */
import { Form } from "./Form";

export function MainComponent() {
  return (
    <main className={styles.main}>
      <section className={styles.features} id="features">
        <img src={Illustration1} className={styles.Illustrations} />

        <div className={styles.wrapperFeaturesContent}>
          <h1>All your files in one secure location, accessible anywhere.</h1>

          <p>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>

          <Form btnText="Get Started" InputPlaceholder="Enter your email..." />
        </div>
      </section>

      <div className={styles.bgTop}></div>
      <section className={styles.team} id="team">
        <img src={Illustration2} className={styles.Illustrations} />

        <div className={styles.wrapperTeamContent}>
          <h2>Stay productive, wherever you are</h2>

          <p>
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
          </p>

          <p>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!
          </p>

          <a href="#">
            See how Fylo works
            <div className={styles.imgLink}></div>
          </a>

          <article>
            <img src={Quotes} />

            <p>
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            </p>

            <div className={styles.wrapperProfile}>
              <img src={Avatar} alt="Avatar" />

              <div>
                <strong>Kyle Burton</strong>
                <span>Founder & CEO, Huddle</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.ctaSignIn} id="signIn">
        <div className={styles.wrapperSignInContent}>
          <div className={styles.wrapperCtaText}>
            <h2>Get early access today</h2>

            <p>
              It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
            </p>
          </div>

          <div className={styles.wrapperForm}>
            <Form 
              btnText="Get Started For Free"
              InputPlaceholder="email@example.com"
              customCLassForm="customForm"
              customClassInput="customInput"
              customClassButton="customButton"
              customClassError="customError"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
