"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { navLinks, collections } from "@/lib/nav-links";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={styles.site}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo-mark.png"
              alt="TshinK"
              width={144}
              height={60}
              priority
              className={styles.logoImg}
            />
            <span className={styles.tagline}>La couture sur-mesure</span>
          </Link>

          <nav className={styles.main}>
            {navLinks.map((link) =>
              link.label === "Collections" ? (
                <div className={styles.navDrop} key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.navlink} ${isActive(link.href) ? styles.active : ""}`}
                  >
                    {link.label}
                  </Link>
                  <div className={styles.dropmenu}>
                    <Link href="/collections">Toutes les collections</Link>
                    {collections.map((c) => (
                      <Link key={c.slug} href={`/collections/${c.slug}`}>
                        {c.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navlink} ${isActive(link.href) ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact" className={`cta-outline ${styles.desktopOnly}`}>
              Discutons-en
            </Link>
          </nav>

          <button
            className={styles.burger}
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`${styles.mobilePanel} ${mobileOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
            <div key={link.href}>
              <Link href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
              {link.label === "Collections" && (
                  <div className={styles.sub}>
                    {collections.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/collections/${c.slug}`}
                            onClick={() => setMobileOpen(false)}
                        >
                          — {c.title}
                        </Link>
                    ))}
                  </div>
              )}
            </div>
        ))}
      </div>
    </>
  );
}
