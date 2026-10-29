"use client";

import { useEffect, useRef } from "react";

// Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function GalleryClient({ children }: { children: React.ReactNode }) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lg;
    let cancelled = false;

    // LightGallery touches `window`, so it is only loaded in the browser
    Promise.all([
      import("lightgallery"),
      import("lightgallery/plugins/zoom"),
      import("lightgallery/plugins/thumbnail")
    ]).then(([{ default: lightGallery }, { default: lgZoom }, { default: lgThumbnail }]) => {
      if (cancelled || !galleryRef.current) return;

      // One gallery for every section so visitors can swipe through the whole house
      lg = lightGallery(galleryRef.current, {
        plugins: [lgZoom, lgThumbnail],
        selector: ".gallery-item",
        exThumbImage: "data-thumb",
        speed: 500,
        download: false,
        mobileSettings: { controls: false, showCloseIcon: true, download: false }
      });
    });

    return () => {
      cancelled = true;
      lg?.destroy();
    };
  }, []);

  return <div ref={galleryRef}>{children}</div>;
}
