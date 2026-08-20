import { notFound } from "next/navigation";
import PagePlaceholder from "@/components/ui/PagePlaceholder";
import { collections } from "@/lib/nav-links";

// Pré-génère une route statique pour chaque collection connue
// (zodiac-tribe, kinky-link, freedoms-temptation).
export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    notFound();
  }

  return (
    <PagePlaceholder
      eyebrow={`${collection.year} · Thème « ${collection.theme} »`}
      title={collection.title}
    />
  );
}
