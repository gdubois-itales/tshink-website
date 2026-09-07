"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import styles from "./CartIcon.module.css";

export default function CartIcon() {
    const { panier } = useCart();
    const count = panier.length;

    return (
        <Link href="/panier" className={styles.cartIcon} aria-label="Voir mon panier">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path
                    d="M3 5h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="9.5" cy="21" r="1.4" />
                <circle cx="17.5" cy="21" r="1.4" />
            </svg>
            {count > 0 && <span className={styles.badge}>{count}</span>}
        </Link>
    );
}