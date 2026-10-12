import type { Product } from "@/content/products";

type ArtworkProps = Pick<Product, "cover" | "color"> & { detail?: boolean };

export function ToolArtwork({cover, color, detail = false}: ArtworkProps) {
  return <div className={`tool-artwork ${detail ? "tool-artwork-detail" : ""}`} style={{backgroundColor: color}} aria-hidden="true">
    <img src={cover.src} alt="" width={cover.width} height={cover.height} loading={detail ? "eager" : "lazy"} decoding="async" />
  </div>;
}
