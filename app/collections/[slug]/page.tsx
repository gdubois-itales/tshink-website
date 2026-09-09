import { notFound } from "next/navigation";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { collections } from "@/lib/nav-links";
import { collectionsContent } from "@/lib/collections";
import styles from "./page.module.css";

// Pré-génère une route statique pour chaque collection connue
// (zodiac-tribe, kinky-link, freedoms-temptation).
export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

// "Collection de 2ᵉ année" -> "Collection · 2ᵉ année"
// "Travail de fin d'études" -> inchangé (pas de "Collection de" à repérer)
function heroEyebrow(year: string) {
  const match = year.match(/^Collection de (.+)$/);
  return match ? `Collection · ${match[1]}` : year;
}

export default async function CollectionDetailPage({
                                                     params,
                                                   }: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  const content = collectionsContent.find((c) => c.slug === slug);

  if (!collection || !content) {
    notFound();
  }

  return (
      <>
        <section className={styles.hero}>
          <ImagePlaceholder caption={content.heroCaption} className={styles.heroImage} />
          <div className={styles.heroInner}>
            <div className="wrap">
              <Eyebrow>{heroEyebrow(collection.year)}</Eyebrow>
              <h1 className={styles.heroTitle}>{collection.title}</h1>
              <p className={styles.theme}>Thème « {collection.theme} »</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Link href="/collections" className={styles.backLink}>
              Retour aux collections
            </Link>

            <div className={styles.text}>
              {content.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
              ))}
            </div>

            <div className={styles.gallery}>
              {content.gallery.map((caption, i) => (
                  <ImagePlaceholder key={i} caption={caption} className={styles.galleryImage} />
              ))}
            </div>
          </div>
        </section>
      </>
  );
}