"use client";

import { useState, type FormEvent } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./ContactForm.module.css";

const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSc-b4zP2HGFASXUo4vAvoOKaq1_HUCUW_eTjD6ZgooQpAKpig/formResponse";

const GOOGLE_FORM_FIELDS = {
    name: "entry.113428367",
    email: "entry.2032552528",
    message: "entry.2077346051",
};

type Status = "idle" | "loading" | "error";

export default function ContactForm() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [sent, setSent] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("loading");

        const payload = new URLSearchParams();
        payload.append(GOOGLE_FORM_FIELDS.name, nom.trim());
        payload.append(GOOGLE_FORM_FIELDS.email, email.trim());
        payload.append(GOOGLE_FORM_FIELDS.message, message.trim());

        try {
            // Google Forms ne renvoie pas d'en-têtes CORS : la réponse est "opaque"
            // (impossible de lire son contenu ou son statut). "no-cors" est la
            // méthode standard pour soumettre un Google Form en JS depuis un autre site.
            await fetch(GOOGLE_FORM_ACTION, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: payload.toString(),
            });
            setStatus("idle");
            setSent(true);
        } catch (error) {
            console.error("Erreur d'envoi du formulaire de contact :", error);
            setStatus("error");
        }
    };

    function handleClose() {
        setSent(false);
        setNom("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <span className={styles.contactNote}>
                    Chaque projet est différent. C&apos;est précisément ce qui le rend
                    passionnant.
                </span>

                <div className={styles.field}>
                    <label htmlFor="c-name">Nom</label>
                    <input
                        id="c-name"
                        name="name"
                        type="text"
                        placeholder="Votre nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="c-email">Email</label>
                    <input
                        id="c-email"
                        name="email"
                        type="email"
                        placeholder="vous@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="c-msg">Message</label>
                    <textarea
                        id="c-msg"
                        name="message"
                        placeholder="Racontez-moi votre projet..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                {status === "error" && (
                    <p className={styles.errorMessage}>
                        Une erreur est survenue. Vous pouvez réessayer, ou m&apos;écrire
                        directement à <a href="mailto:contact@tshink.be">contact@tshink.be</a>.
                    </p>
                )}

                <button
                    type="submit"
                    className={`cta-solid ${styles.submitButton}`}
                    disabled={status === "loading"}
                >
                    {status === "loading" ? "Envoi..." : "Écrivons la suite"}
                </button>
            </form>

            {sent && (
                <div className={styles.confirmOverlay}>
                    <div className={styles.confirmBox}>
                        <Eyebrow>Message envoyé</Eyebrow>
                        <h3>Merci {nom} !</h3>
                        <p>
                            Votre message a bien été envoyé. Vous allez recevoir une
                            confirmation par e-mail, et je reviens vers vous dès que
                            possible.
                        </p>
                        <button
                            type="button"
                            className="cta-outline"
                            style={{ marginTop: 20 }}
                            onClick={handleClose}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}