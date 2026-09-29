"use client";

import styles from "./CartToast.module.css";

type CartToastProps = {
    count: number;
    onValidate: () => void;
};

export default function CartToast({ count, onValidate }: CartToastProps) {
    return (
        <div className={styles.toast}>
            <p>
                Création ajoutée au panier avec succès — {count} création
                {count > 1 ? "s" : ""} dans le panier.
            </p>
            <button type="button" className="cta-solid" onClick={onValidate}>
                Valider mon panier
            </button>
        </div>
    );
}