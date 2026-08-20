import Eyebrow from "@/components/ui/Eyebrow";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  note?: string;
};

/**
 * Route skeleton — confirms the page exists, is reachable via nav/URL,
 * and inherits the shared layout/fonts/design tokens. Each page ticket
 * replaces this with its real content.
 */
export default function PagePlaceholder({
  eyebrow,
  title,
  note = "Page à implémenter — voir le mockup validé pour le contenu final.",
}: PagePlaceholderProps) {
  return (
    <section className="section placeholder-page">
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ marginTop: 16, fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          {title}
        </h1>
        <p style={{ marginTop: 18, color: "var(--grey)", maxWidth: "50ch" }}>
          {note}
        </p>
      </div>
    </section>
  );
}
