"use client";
import Map from "react-map-gl/maplibre";
import { MAP_KEY } from "~/shared/config/apiConfig";

export function CustomMap() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${MAP_KEY}`}
    />
  );
}
