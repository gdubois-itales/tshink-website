import { notFound } from "next/navigation";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Image  from "next/image";
import { collections } from "@/lib/nav-links";
import { collectionsContent } from "@/lib/collections";
import styles from "./page.module.css";
import CollectionGallery from "@/components/ui/CollectionsGallery";

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
          <div className={styles.heroImage}>
            <Image
                src={content.heroImage.src}
                alt={content.heroImage.alt}
                fill
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: content.heroImage.objectPosition ?? "center" }}
            />
          </div>
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

            <br/>

            <CollectionGallery images={content.gallery} />
          </div>
        </section>
      </>
  );
}