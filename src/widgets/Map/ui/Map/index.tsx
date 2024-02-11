"use client";
import Map, {
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import { MAP_KEY } from "~/shared/config/apiConfig";
import { useMap } from "../../model";

export function CustomMap() {
  const { viewState, setViewState, onMove } = useMap();

  return (
    <Map
      {...viewState}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${MAP_KEY}`}
      onMove={onMove}
      initialViewState={{ zoom: 14 }}
    >
      <GeolocateControl />
      <NavigationControl />
    </Map>
  );
}
