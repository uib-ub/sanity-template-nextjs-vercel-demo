'use client'

import CloverIIIF from "@samvera/clover-iiif";

export default function ManifestViewer({ id }: { id: string }) {
  return <CloverIIIF id={id} />;
}