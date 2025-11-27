"use client"
import { useEffect, useRef } from "react"
import L from "leaflet"
import markerPng from "./marker.png"
const Map = () => {

const mapRef = useRef<L.Map | null>(null)

useEffect(() => {
  if (typeof window === "undefined") {
       return
    }
    if (mapRef.current) {
      mapRef.current.remove()
      mapRef.current = null
    }

    const map = L.map("map", {
      center: [51.26865033993269, 3.0283565463387294], 
      zoom: 14, 
      scrollWheelZoom: true,
    })

    L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {attribution: "Casa Rustica",}).addTo(map)
        L.Icon.Default.mergeOptions({
           iconRetinaUrl: null,
       iconUrl: null,
       shadowUrl: null,
   })
    const customIcon = L.icon({
       iconUrl: markerPng.src,
       
       iconSize: [30, 30],
       iconAnchor: [15, 30],
       popupAnchor: [0, -30],
    })
const marker = L.marker([51.26865033993269, 3.0283565463387294],{
            icon: customIcon,
        }).addTo(map);
marker.bindPopup("Casa Rustica!");
    mapRef.current = map

    return () => {
        if (mapRef.current) {
            mapRef.current.remove()
            mapRef.current = null
        }
    }

    }, [])

  return  <><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/> <div id="map"style={{width:"50vw", height:"500px", marginBottom:"2rem"}}></div></>
}

export default Map