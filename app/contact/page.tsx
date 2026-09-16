import Eyebrow from "@/components/ui/Eyebrow";
import ContactForm from "@/components/ui/ContactForm";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow>Contact</Eyebrow>
            <h1>Et si nous écrivions la suite ensemble ?</h1>
            <p className="lede">
              Une idée, une envie, un vêtement à transformer ou un projet
              encore en réflexion ? Racontez-moi ce que vous imaginez. Nous
              prendrons le temps d&apos;en discuter ensemble afin de lui
              donner la meilleure direction.
            </p>
          </div>

          <div className={styles.contactGrid}>
            <ContactForm />

            <div className={styles.infoPanel}>
              <h3>Restons en contact</h3>

              <div className={styles.infoItem}>
                <span className={styles.ic}>📍</span>
                <div>
                  Atelier
                  <br />
                  Overijse, Belgique
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.ic}>📸</span>
                <div>
                  Suivre l&apos;univers TshinK
                  <br />
                  {/* ⚠️ remplace par ton vrai lien Instagram */}
                  <a href="https://www.instagram.com/tshink.be" target="_blank" rel="noopener noreferrer">
                    Instagram — TshinK.be
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.ic}>✉️</span>
                <div>
                  Échanger par email
                  <br />
                  <a href="mailto:contact@tshink.be">contact@tshink.be</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}