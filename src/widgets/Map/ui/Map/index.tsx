"use client";
import Map, {
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import { MAP_KEY } from "~/shared/config/apiConfig";
import { useMapController } from "../../model";
import { EventMarker } from "~/entities/Event";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function CustomMap() {
  const { viewState, handleMove, events } = useMapController();

  const { theme } = useTheme();

  return (
    <motion.div layout="size" className="flex-auto">
      <Map
        {...viewState}
        style={{ flex: 1 }}
        mapStyle={`https://api.maptiler.com/maps/streets-v2${
          theme === "dark" ? "-dark" : ""
        }/style.json?key=${MAP_KEY}`}
        onMove={handleMove}
        initialViewState={{ zoom: 14 }}
      >
        <GeolocateControl />
        <NavigationControl />
        {events?.map((item) => {
          if (item.latitude && item.longitude) {
            return (
              <EventMarker
                latitude={item.latitude}
                longitude={item.longitude}
              />
            );
          }
        })}
      </Map>
    </motion.div>
  );
}
