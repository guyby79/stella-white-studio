import { photoUrl, type Focal } from "@/lib/site";

type Props = {
  id: string;
  alt: string;
  /** width / height ratio of the crop, e.g. [4, 5] */
  ratio: [number, number];
  widths?: number[];
  sizes: string;
  focal?: Focal;
  className?: string;
  priority?: boolean;
};

/** Responsive hotlinked photo (Unsplash CDN crops via query string). Plain <img>: the export is static. */
export default function Photo({
  id,
  alt,
  ratio,
  widths = [480, 800, 1200],
  sizes,
  focal,
  className,
  priority = false,
}: Props) {
  const [rw, rh] = ratio;
  const h = (w: number) => Math.round((w * rh) / rw);
  const largest = widths[widths.length - 1];
  const srcSet = widths.map((w) => `${photoUrl(id, w, h(w), focal)} ${w}w`).join(", ");
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photoUrl(id, largest, h(largest), focal)}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={largest}
      height={h(largest)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
