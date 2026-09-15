import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Image from "next/image";
import { collections } from "@/lib/nav-links";
import { collectionsContent } from "@/lib/collections";
import styles from "./page.module.css";

export default function CollectionsPage() {
  return (
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow>Collections</Eyebrow>
            <h1>Trois collections, trois années de formation</h1>
            <p className="lede">
              Un même fil conducteur : transformer une contrainte de thème en un
              univers personnel. Ces collections retracent mon parcours, ma
              progression technique et ma manière de penser la mode comme un
              langage. Les pièces présentées ne sont pas destinées à la vente en
              l&apos;état, mais leurs modèles peuvent être recréés sur demande,
              dans d&apos;autres matières ou coloris, afin de donner naissance à
              une création unique.
            </p>
          </div>

          <div className={styles.collList}>
            {collections.map((c) => {
              const content = collectionsContent.find((x) => x.slug === c.slug);
              return (
                  <Link
                      key={c.slug}
                      href={`/collections/${c.slug}`}
                      className={styles.collPlate}
                  >
                    <div className={styles.plateImage}>
                      <Image
                          src={content!.cardImage.src}
                          alt={content!.cardImage.alt}
                          fill
                          sizes="(max-width: 820px) 100vw, 50vw"
                          style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                      />
                    </div>
                    <div className={styles.plateInfo}>
                  <span className={styles.yr}>
                    {c.year} — Thème « {c.theme} »
                  </span>
                      <h3>{c.title}</h3>
                      {content && <p>{content.teaser}</p>}
                      <span className={styles.go}>Découvrir la collection →</span>
                    </div>
                  </Link>
              );
            })}
          </div>
        </div>
      </section>
  );
}