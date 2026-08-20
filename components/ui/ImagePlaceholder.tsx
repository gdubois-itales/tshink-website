type ImagePlaceholderProps = {
  caption: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Temporary stand-in for real photography (see .ph in globals.css).
 * Once real assets are available, this can be swapped page-by-page for
 * next/image without touching the surrounding layout.
 */
export default function ImagePlaceholder({
  caption,
  className = "",
  style,
}: ImagePlaceholderProps) {
  return (
    <div className={`ph ${className}`} style={style}>
      <span className="cap">{caption}</span>
    </div>
  );
}
