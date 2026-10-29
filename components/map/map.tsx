"use client"
import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import markerPng from "./marker.png"

const POSITION: L.LatLngExpression = [51.26865033993269, 3.0283565463387294]

const Map = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const map = L.map(containerRef.current, {
      center: POSITION,
      zoom: 14,
      // Let the page scroll normally; zoom with the controls or two fingers
      scrollWheelZoom: false,
      dragging: !L.Browser.mobile,
    })

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    const customIcon = L.icon({
      iconUrl: markerPng.src,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36],
    })

    L.marker(POSITION, { icon: customIcon })
      .addTo(map)
      .bindPopup("<strong>Casa Rustica</strong><br/>Sparrenboslaan 26, De Haan")

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
}

export default Map
