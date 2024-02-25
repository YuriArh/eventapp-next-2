"use client";
import Map, {
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import { MAP_KEY } from "~/shared/config/apiConfig";
import { useMap, useMapEvents } from "../../model";
import { EventMarker } from "~/entities/Event";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function CustomMap() {
  const { viewState, setViewState, onMove } = useMap();
  const { events } = useMapEvents();
  const { theme } = useTheme();

  return (
    <Map
      {...viewState}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={`https://api.maptiler.com/maps/streets-v2${
        theme === "dark" ? "-dark" : ""
      }/style.json?key=${MAP_KEY}`}
      onMove={onMove}
      initialViewState={{ zoom: 14 }}
    >
      <GeolocateControl />
      <NavigationControl />
      {events?.map((item) => {
        if (item.latitude && item.longitude) {
          return (
            <EventMarker latitude={item.latitude} longitude={item.longitude} />
          );
        }
      })}
    </Map>
  );
}
