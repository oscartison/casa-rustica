"use client";

import { useEffect, useRef } from "react";

// LightGallery
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";

// Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-share.css";


export default function GalleryClient({ children }: { children: React.ReactNode }) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    // Init LightGallery
    const lg = lightGallery(galleryRef.current, {
      plugins: [lgZoom, lgShare, lgHash],
      speed: 500,
    });



    return () => {
      lg.destroy();
    };
  }, []);

  return (
    <div ref={galleryRef}  style={{maxWidth: "80vw"}}>
      <div className="grid-sizer" style={{maxWidth: "80vw"}}></div>
      {children}
    </div>
  );
}