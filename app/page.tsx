import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/ui/ImageSlideshow";

const previewCards = [
  {
    num: "01",
    href: "/a-propos",
    title: "À propos",
    text: "12 ans de passion et de savoir-faire, une conviction : tout ce qu'on imagine peut se créer.",
    cta: "Découvrir",
  },
  {
    num: "02",
    href: "/services",
    title: "Services",
    text: "Créations uniques, sur-mesure, customisation.",
    cta: "Découvrir",
  },
  {
    num: "03",
    href: "/creations",
    title: "Créations",
    text: "Des modèles personnalisables.",
    cta: "Découvrir",
  },
  {
    num: "04",
    href: "/collections",
    title: "Collections",
    text: "Un aperçu du chemin parcouru, à travers mes réalisations passées.",
    cta: "Découvrir",
  },
  {
    num: "05",
    href: "/contact",
    title: "Contact",
    text: "Une idée, un projet ? Discutons-en.",
    cta: "Écrire",
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <Eyebrow>
            Stylisme <span className="slash" /> Modélisme{" "}
            <span className="slash" /> Couture
          </Eyebrow>
          <h1 className={styles.heroTitle}>
            « Chaque idée ouvre une nouvelle histoire. Chaque création en
            écrit un nouveau chapitre. »
          </h1>
          <p className={styles.lede}>
            TshinK conçoit des vêtements sur-mesure, transforme des pièces
            existantes, et donne vie à des créations uniques — du croquis à
            la dernière finition.
          </p>
          <div className={styles.heroActions}>
            <Button href="/creations" variant="solid">
              Explorer les créations
            </Button>
            <Button href="/contact" variant="ghost">
              Discutons de votre projet
            </Button>
          </div>
          <p className={styles.tag}>
            « J&apos;imagine des créations, je développe des collections,
            j&apos;accompagne des projets, je transforme des pièces. »
          </p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImageBox}>
            <ImageSlideshow
                slides={[
                  { src: "/images/4A.jpg", alt: "Collection Expo, 4A" },
                  { src: "/images/4B.jpg", alt: "Collection Expo, 4B" },
                  { src: "/images/collEscalier.jpg", alt: "Collection Expo Mode, version escalier" },
                ]}
            />
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className={styles.previewGrid}>
            {previewCards.map((card) => (
              <Link key={card.href} href={card.href} className={styles.previewCard}>
                <span className={styles.num}>{card.num}</span>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
                <span className={styles.go}>{card.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pullquote}>
        <div className="wrap">
          <p>
            « Créer un vêtement, c&apos;est transformer une idée en une histoire que l&apos;on peut porter. »
          </p>
          <Image
            src="/logo-full.png"
            alt="TshinK — Stylisme, la couture sur-mesure"
            width={280}
            height={192}
            className={styles.logoFull}
          />
        </div>
      </section>
    </>
  );
}
