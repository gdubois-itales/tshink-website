import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "outline";
  className?: string;
};

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid: "cta-solid",
  ghost: "cta-ghost",
  outline: "cta-outline",
};

/**
 * Every CTA in the mockup (bordeaux solid / black ghost / thin outline)
 * goes through this component so the three variants stay consistent
 * across pages.
 */
export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${variantClass[variant]} ${className}`}>
      {children}
    </Link>
  );
}
