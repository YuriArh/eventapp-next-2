import { gql, useQuery } from "@apollo/client";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { ViewState, ViewStateChangeEvent } from "react-map-gl/maplibre";
import { useEventsQuery } from "~/entities/Event/api";

export function useMap() {
  const [viewState, setViewState] = useState<{
    latitude: number;
    longitude: number;
    zoom: number;
  } | null>(null);

  useLayoutEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setViewState({ latitude, longitude, zoom: 14 });
        },

        (error) => {
          console.error("Error get user location: ", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const onMove = useCallback(({ viewState }: ViewStateChangeEvent) => {
    setViewState({ ...viewState });
  }, []);

  return { viewState, setViewState, onMove };
}

export function useMapEvents() {
  const { data, loading } = useEventsQuery();

  return { events: data?.events, loading };
}
