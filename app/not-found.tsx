import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
    return (
        <section className="section">
            <div className={`wrap ${styles.wrap}`}>

            <Image
              src="/logo-404.png"
              alt="404 logo"
              width={500}
              height={200}
              className={styles.brokenLogo}
            />
                <br/>

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