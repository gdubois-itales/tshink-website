import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import ImageCarousel from "@/components/ui/ImageCarousel";
import styles from "./page.module.css";

const steps = [
  {
    n: "01",
    title: "Échange autour de votre projet",
    text: "Nous discutons de vos envies, de vos besoins et de vos inspirations afin de définir ensemble la meilleure approche.",
  },
  {
    n: "02",
    title: "Choix du modèle et des matières",
    text: "Vous pouvez partir d'une de mes créations ou d'une idée personnelle. Je vous accompagne également dans le choix des tissus et des fournitures.",
  },
  {
    n: "03",
    title: "Validation du projet",
    text: "Une fois le projet défini, un acompte est demandé avant le lancement de la confection.",
  },
  {
    n: "04",
    title: "Prototype et ajustements",
    text: "Lorsque cela est nécessaire, un prototype est réalisé afin de valider les volumes, les proportions et les derniers détails avant la confection définitive.",
  },
  {
    n: "05",
    title: "Confection",
    text: "La pièce est réalisée dans les matières choisies avec le plus grand soin.",
  },
  {
    n: "06",
    title: "Essayage final et finitions",
    text: "Les derniers ajustements sont effectués si nécessaire avant la remise de votre création.",
  },
];

export default function ServicesPage() {
  return (
      <>
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow>Services</Eyebrow>
              <h2 style={{ fontStyle: "italic" }}>
                Imaginer n&apos;est que le début de l&apos;histoire.
              </h2>
              <p className="lede">
                Chaque projet est différent, tout comme les personnes qui me le
                confient. Certains souhaitent une création originale,
                d&apos;autres adapter un modèle existant, transformer un
                vêtement ou simplement lui offrir une seconde vie. Quelle que
                soit votre envie, je vous accompagne à chaque étape afin de
                concevoir une réalisation qui vous ressemble.
              </p>
            </div>

            <div className={styles.serviceRow}>
              <div>
                <span className={styles.kicker}>Créations</span>
                <h3>De l&apos;idée à la création</h3>
                <p>
                  Qu&apos;il s&apos;agisse d&apos;un modèle issu de mon univers
                  ou d&apos;une création imaginée spécialement pour vous,
                  chaque projet est conçu pour donner vie à une création
                  conçue avec exigence. De la réflexion autour du projet au
                  choix des matières, jusqu&apos;à la confection finale,
                  chaque étape est réalisée avec le même souci du détail, de
                  la qualité et des finitions.
                </p>
              </div>
              <div className={styles.imageBox}>
              <ImageCarousel
                  slides={[
                    { src: "/images/atelier03.jpg", alt: "Portrait atelier 03" },
                    { src: "/images/atelier04.jpg", alt: "Portrait atelier 04" },
                  ]}
                  sizes="(max-width: 880px) 100vw, 50vw"
              />
              </div>
            </div>

            <div className={`${styles.serviceRow} ${styles.reverse}`}>
              <div>
                <span className={styles.kicker}>Sur-mesure</span>
                <h3>Créer une pièce qui vous ressemble</h3>
                <p>
                  Chaque personne est différente, chaque projet l&apos;est
                  tout autant. Qu&apos;il s&apos;agisse d&apos;adapter l&apos;une
                  de mes créations ou de concevoir un modèle inédit à partir
                  de vos envies, je vous accompagne dans chaque décision :
                  choix des matières, des finitions, des détails et des
                  ajustements. Ensemble, nous façonnons une pièce pensée avec
                  vous, jusque dans ses moindres détails.
                </p>
              </div>
              <div className={styles.imageBox}>
                <ImageCarousel
                    slides={[
                      { src: "/images/CreaComm01.jpg", alt: "Commande Veste DC - Spits" },
                      { src: "/images/ChemiseHô.png", alt: "Chemise homme black & white" },
                      { src: "/images/pullFê.png", alt: "Pull femme crème" },
                    ]}
                    sizes="(max-width: 880px) 100vw, 50vw"
                />
              </div>            </div>

            <div className={styles.serviceRow}>
              <div>
              <span className={styles.kicker}>
                Customisation &amp; Retouches
              </span>
                <h3>Révéler le potentiel d&apos;une pièce existante</h3>
                <p>
                  Un vêtement peut évoluer avec le temps, les envies ou les
                  besoins. Qu&apos;il s&apos;agisse d&apos;une retouche
                  classique, d&apos;un ajustement ou d&apos;une transformation
                  plus créative, je mets mon savoir-faire au service de vos
                  pièces pour prolonger leur histoire et leur offrir un
                  nouveau chapitre. Modifier une coupe, remplacer des
                  éléments, ajouter des détails ou repenser certains volumes :
                  chaque intervention est réalisée dans le respect du
                  vêtement et de son identité.
                </p>
                <ul className={styles.taglist}>
                  <li>Ajustement de taille ou de longueur</li>
                  <li>Remplacement de fermetures et de boutons</li>
                  <li>Réparation et retouches courantes</li>
                  <li>Personnalisation de vêtements</li>
                  <li>Transformation de pièces existantes</li>
                </ul>
              </div>
              <div className={styles.imageBox}>
                <ImageCarousel
                    slides={[
                      { src: "/images/PullMaman.png", alt: "Custo pull maman" },
                      { src: "/images/retoucheRobe.png", alt: "Retouche robe Tata Carine" },
                      { src: "/images/tiretteJeans.jpg", alt: "Croquis de création" },
                      { src: "/images/transformationChute.png", alt: "Carnet de création" },
                      { src: "/images/VesteMarraine.png", alt: "Retouche é Custo veste Marraine" },
                    ]}
                    sizes="(max-width: 880px) 100vw, 50vw"
                />
              </div>            </div>
          </div>
        </section>

        <section className="section tight bg-white">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow>Déroulement</Eyebrow>
              <h2>Étape par étape</h2>
              <div className={styles.rulerWrap}>
                <div className="ruler" />
              </div>
            </div>
            <div className={styles.steps}>
              {steps.map((step) => (
                  <div className={styles.step} key={step.n}>
                    <span className={styles.stepNum}>{step.n}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.text}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section tight">
          <div className="wrap">
            <div className="cta-band" style={{ marginTop: 0 }}>
              <h2>Une idée ne demande qu&apos;à prendre vie.</h2>
              <p>
                Vous avez un projet en tête, une envie ou simplement une
                intuition ? Discutons-en et imaginons la meilleure façon de
                lui donner forme.
              </p>
              <Button href="/contact" variant="solid">
                J&apos;ai une idée
              </Button>
            </div>
          </div>
        </section>
      </>
  );
}