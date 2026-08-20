import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>TshinK</div>
            <p>
              TshinK est une marque exploitée par I-Tales SRL — N° d&apos;entreprise
              : BE 1023.072.361
            </p>
            <p>
              <a
                href="https://www.companyweb.be/fr/1023072361/I-Tales"
                target="_blank"
                rel="noopener"
              >
                Voir le profil sur CompanyWeb →
              </a>
            </p>
          </div>
          <div>
            <h5>Navigation</h5>
            <Link href="/a-propos">À propos</Link>
            <Link href="/services">Services</Link>
            <Link href="/creations">Créations</Link>
            <Link href="/collections">Collections</Link>
          </div>
          <div>
            <h5>Contact</h5>
            <span>📍 Overijse, Belgique</span>
            <a href="mailto:contact@tshink.be">✉️ contact@tshink.be</a>
            <Link href="/contact">Formulaire de contact</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} TshinK — I-Tales SRL</span>
          <Link href="/mentions-legales">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}
