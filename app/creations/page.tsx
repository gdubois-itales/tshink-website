"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import ImageCarousel from "@/components/ui/ImageCarousel";
import { creations, type Creation, type Category } from "@/lib/creations";
import { useCart } from "@/lib/cart-context";
import styles from "./page.module.css";
import Link from "next/link";

const filterOptions: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "Toutes" },
  { key: "vetement", label: "Créations" },
  { key: "accessoire", label: "Accessoires" },
];

// Les 3 choix proposés dans la mini pop-up ouverte depuis la modale d'une
// création, quand le client clique sur "Choisir une matière".
type MatiereChoice = "menu" | "note-connue" | "note-conseil" | null;

export default function CreationsPage() {
  const router = useRouter();
  const { commencerSelection, ajouterAvecNote } = useCart();

  const [activeFilter, setActiveFilter] = useState<"all" | Category>("all");
  const [selected, setSelected] = useState<Creation | null>(null);
  const [matiereChoice, setMatiereChoice] = useState<MatiereChoice>(null);
  const [noteText, setNoteText] = useState("");
  const [priceInfoOpen, setPriceInfoOpen] = useState(false);

  const visible =
      activeFilter === "all"
          ? creations
          : creations.filter((c) => c.cat === activeFilter);

  function closeModal() {
    setSelected(null);
    setMatiereChoice(null);
    setNoteText("");
    setPriceInfoOpen(false);
  }

  function handleVoirMatieresDispo() {
    if (!selected) return;
    commencerSelection({
      slug: selected.slug,
      title: selected.title,
      image: selected.cardImage,
    });
    closeModal();
    router.push("/matieres");
  }

  function handleAjouterNote() {
    if (!selected || !noteText.trim()) return;
    ajouterAvecNote(
        { slug: selected.slug, title: selected.title, image: selected.cardImage },
        noteText,
        matiereChoice === "note-connue" ? "connue" : "conseil"
    );
    closeModal();
  }

  return (
      <>
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow>Créations</Eyebrow>
              <h1 style={{ fontStyle: "italic" }}>
                Une création ne s&apos;arrête pas lorsqu&apos;elle est
                terminée. C&apos;est là que son histoire commence.
              </h1>
              <p className="lede">
                Découvrez une sélection de créations de vêtements et
                d&apos;accessoires imaginées par TshinK. Chaque pièce est
                conçue et confectionnée avec le même soin apporté à
                l&apos;ensemble de mon travail. Cliquez sur une création pour
                découvrir ses détails, choisir la matière qui vous inspire —
                ou vous laisser conseiller — puis composez votre commande,
                pièce après pièce, jusqu&apos;à votre panier. Une pièce vous
                inspire ? Voyons ensemble comment elle peut devenir la vôtre.
              </p>
            </div>

            <div className={styles.filters}>
              {filterOptions.map((f) => (
                  <button
                      key={f.key}
                      type="button"
                      className={`${styles.filterBtn} ${
                          activeFilter === f.key ? styles.active : ""
                      }`}
                      onClick={() => setActiveFilter(f.key)}
                  >
                    {f.label}
                  </button>
              ))}
            </div>

            <div className={styles.creationGrid}>
              {visible.map((c) => (
                  <button
                      key={c.slug}
                      type="button"
                      className={styles.creationCard}
                      onClick={() => setSelected(c)}
                  >
                    <div className={styles.cardImage}>
                      <Image
                          src={c.cardImage.src}
                          alt={c.cardImage.alt}
                          fill
                          sizes="(max-width: 560px) 100vw, (max-width: 880px) 50vw, 33vw"
                          style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h4>{c.title}</h4>
                    <div className={styles.meta}>{c.meta}</div>
                  </button>
              ))}
            </div>
          </div>
        </section>

        {selected && (
            <div
                className={styles.modalOverlay}
                onClick={(e) => {
                  if (e.target === e.currentTarget) closeModal();
                }}
            >
              <div className={styles.modalBox}>
                <button
                    type="button"
                    className={styles.modalClose}
                    onClick={closeModal}
                    aria-label="Fermer"
                >
                  ✕
                </button>

                <div className={styles.modalImageWrap}>
                  <ImageCarousel
                      slides={selected.modalImages}
                      sizes="(max-width: 720px) 100vw, 50vw"
                      objectFit="cover"
                      aspectRatio="3 / 4"
                  />
                </div>

                <div className={styles.modalInfo}>
                  <Eyebrow>
                    {selected.cat === "accessoire" ? "Accessoire" : "Création"}
                  </Eyebrow>

                  <h3 style={{ marginTop: 14 }}>{selected.title}</h3>

                  <p>{selected.desc}</p>

                  <p className={styles.size}>{selected.size}</p>
                  <p className={styles.price}>{selected.price}</p>
                  <p className={styles.info}>
                    Prix final calculé selon la matière choisie et son tarif au moment de la commande.
                    <br/>
                    Prix de la matière ci-dessus indiqué à titre indicatif.{" "}
                    <button
                        type="button"
                        className={styles.infoIcon}
                        onClick={() => setPriceInfoOpen(true)}
                        aria-label="Plus d'informations sur le prix"
                    >
                      ⓘ
                    </button>
                  </p>
                  <p className={styles.link}>
                    <button
                        type="button"
                        className={styles.linkBtn}
                        onClick={() => setMatiereChoice("menu")}
                    >
                      → Choisir la matière
                    </button>
                  </p>
                  <p className={styles.link}>
                    <Link href="/contact">
                      → Nous contacter
                    </Link>
                  </p>

                  <span className={styles.badge}>{selected.badge}</span>
                </div>
              </div>
            </div>
        )}

        {selected && matiereChoice && (
            <div
                className={styles.miniOverlay}
                onClick={(e) => {
                  if (e.target === e.currentTarget) setMatiereChoice(null);
                }}
            >
              <div className={styles.miniBox}>
                <button
                    type="button"
                    className={styles.modalClose}
                    onClick={() => setMatiereChoice(null)}
                    aria-label="Fermer"
                >
                  ✕
                </button>

                {matiereChoice === "menu" && (
                    <>
                      <Eyebrow>Matière</Eyebrow>
                      <h4 style={{ marginTop: 14 }}>
                        Comment souhaitez-vous choisir la matière pour «&nbsp;{selected.title}&nbsp;»&nbsp;?
                      </h4>
                      <div className={styles.miniChoices}>
                        <button type="button" className="cta-outline" onClick={handleVoirMatieresDispo}>
                          Voir matières dispo
                        </button>
                        <button
                            type="button"
                            className="cta-outline"
                            onClick={() => setMatiereChoice("note-connue")}
                        >
                          J&apos;ai déjà une matière
                        </button>
                        <button
                            type="button"
                            className="cta-outline"
                            onClick={() => setMatiereChoice("note-conseil")}
                        >
                          Je ne sais pas, conseillez-moi
                        </button>
                      </div>
                    </>
                )}

                {(matiereChoice === "note-connue" || matiereChoice === "note-conseil") && (
                    <>
                      <Eyebrow>Matière</Eyebrow>
                      <h4 style={{ marginTop: 14 }}>
                        {matiereChoice === "note-connue"
                            ? "Décrivez la matière que vous avez déjà"
                            : "Décrivez votre besoin, nous vous conseillons"}
                      </h4>
                      <textarea
                          className={styles.noteInput}
                          rows={4}
                          value={noteText}
                          onChange={(e) => setNoteText(e.target.value)}
                          placeholder={
                            matiereChoice === "note-connue"
                                ? "Ex : un velours bordeaux que j'ai déjà chez moi…"
                                : "Ex : j'aimerais quelque chose de chaud, plutôt neutre…"
                          }
                      />
                      <button
                          type="button"
                          className="cta-solid"
                          style={{ marginTop: 14, width: "100%" }}
                          disabled={!noteText.trim()}
                          onClick={handleAjouterNote}
                      >
                        Ajouter au panier
                      </button>
                    </>
                )}
              </div>
            </div>
        )}
        {selected && priceInfoOpen && (
            <div
                className={styles.miniOverlay}
                onClick={(e) => {
                  if (e.target === e.currentTarget) setPriceInfoOpen(false);
                }}
            >
              <div className={styles.miniBox}>
                <button
                    type="button"
                    className={styles.modalClose}
                    onClick={() => setPriceInfoOpen(false)}
                    aria-label="Fermer"
                >
                  ✕
                </button>

                <Eyebrow>Prix indicatif</Eyebrow>
                <p style={{ marginTop: 16, fontSize: 13.5 }}>
                  Le prix du modèle constitue la base de la création. Le prix
                  final dépend de la matière choisie et de son tarif actuel.
                </p>
                <p style={{ marginTop: 12, fontSize: 13.5 }}>
                  Le prix de la matière indiqué correspond à son tarif au
                  moment de la confection de la pièce présentée.
                </p>
                <p style={{ marginTop: 12, fontSize: 13.5 }}>
                  Vous souhaitez cette création dans une autre matière ?
                  Indiquez-nous sa référence et la matière souhaitée via la
                  page{" "}
                  <Link href="/contact" style={{ color: "var(--bordeaux)", textDecoration: "underline" }}>
                    Contact
                  </Link>{" "}
                  pour obtenir le prix final.
                </p>
              </div>
            </div>
        )}
      </>
  );
}