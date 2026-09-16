import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <section className="section">
            <div className={`wrap ${styles.wrap}`}>
                {/*
          Repère temporaire en attendant le logo "cassé".
          Une fois l'asset prêt, remplacez ce bloc <div className={styles.glitchMark}>...</div>
          par :
            <Image
              src="/images/logo-casse-404.png"
              alt=""
              width={220}
              height={220}
              className={styles.brokenLogo}
            />
        */}
                <div className={styles.glitchMark} aria-hidden="true">
                    <span>404</span>
                    <span>404</span>
                </div>

                <Eyebrow>Erreur 404</Eyebrow>
                <h1 className={styles.title}>Le fil s&apos;est cassé en chemin.</h1>
                <p className={styles.lede}>
                    La page que vous cherchez n&apos;existe pas, plus, ou a changé
                    d&apos;adresse. Vérifiez le lien, ou repartez depuis l&apos;une des
                    pages ci-dessous.
                </p>

                <div className={styles.actions}>
                    <Button href="/" variant="solid">
                        Retour à l&apos;accueil
                    </Button>
                    <Button href="/creations" variant="outline">
                        Voir les créations
                    </Button>
                </div>
            </div>
        </section>
    );
}