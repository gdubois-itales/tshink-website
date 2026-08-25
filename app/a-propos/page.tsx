import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/ui/ImageSlideshow";

export default function AProposPage() {
  return (
      <>
        <section className="section">
          <div className="wrap">
            <div className={styles.editorial}>
              <div className={styles.editorialImage}>
                <div className={styles.slideshowFrame}>
                  <ImageSlideshow
                      slides={[
                        {
                          src: "/images/atelier03.jpg",
                          alt: "Portrait atelier 03",
                        },
                        {
                          src: "/images/atelier04.jpg",
                          alt: "Portrait atelier 04",
                        },
                      ]}
                  />
                </div>
              </div>
              <div className={styles.editorialCopy}>
                <Eyebrow>À propos</Eyebrow>
                <h1 className={styles.quote}>
                  Créer, c&apos;est rendre possible ce qui n&apos;existait pas
                  encore.
                </h1>
                <p>
                  La mode est avant tout un moyen d&apos;exprimer une idée, une
                  émotion ou une personnalité. C&apos;est cette conviction qui
                  nourrit ma passion et guide chacune de mes créations.
                </p>
                <p>
                  Formée en stylisme et modélisme à Helmo Mode (Liège),
                  j&apos;imagine et conçois des vêtements de A à Z : du premier
                  croquis au patronage, jusqu&apos;à la réalisation et aux
                  finitions. Forte de plus de 12 années d&apos;expérience,
                  j&apos;ai développé un savoir-faire complet qui me permet de
                  donner vie à chaque création en maîtrisant l&apos;ensemble du
                  processus de fabrication.
                </p>
                <p>
                  Au fil des années, j&apos;ai enrichi ma pratique avec de
                  nombreuses techniques : couture machine et main, perlage,
                  peinture et teinture sur tissu, tricot ou encore
                  transformation de matière. J&apos;aime explorer, expérimenter
                  et associer ces différents savoir-faire afin de donner vie à
                  des pièces uniques, où l&apos;esthétique rencontre la
                  technicité.
                </p>
                <p>
                  Créer mes propres modèles occupe une place essentielle dans
                  mon travail. Chaque création est l&apos;occasion
                  d&apos;imaginer une silhouette, de choisir les matières, de
                  penser chaque détail et de transformer une idée en une pièce
                  unique.
                </p>
                <p>
                  Mais la création est aussi une aventure qui peut se
                  partager. Si vous avez une envie particulière, une
                  inspiration, un vêtement à transformer ou une idée à
                  développer, je mets également mon expertise à votre service
                  pour la concevoir avec vous. Ensemble, nous pouvons imaginer
                  une pièce sur mesure, personnaliser un vêtement existant ou
                  lui offrir une nouvelle vie.
                </p>
                <p>
                  Qu&apos;une création naisse de mon univers ou de nos idées
                  réunies, je m&apos;attache toujours à concevoir une pièce
                  unique, pensée avec exigence, créativité et passion, pour
                  qu&apos;elle raconte une histoire qui lui est propre.
                </p>
                <div className={styles.marginNote}>
                  <div className={styles.stat}>
                    <b>12+</b>
                    <span>Années d&apos;expérience</span>
                  </div>
                  <div className={styles.stat}>
                    <b>Helmo</b>
                    <span>Mode, Liège</span>
                  </div>
                  <div className={styles.stat}>
                    <b>A → Z</b>
                    <span>Du croquis à la finition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section tight">
          <div className="wrap">
            <div className="cta-band" style={{ marginTop: 0 }}>
              <h2>Une idée, une envie, un projet ?</h2>
              <p>Discutons-en ensemble.</p>
              <Button href="/contact" variant="solid">
                Écrivons la suite
              </Button>
            </div>
          </div>
        </section>
      </>
  );
}