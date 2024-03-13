import { useEventsQuery } from "~/entities/Event";

/**
 * viewModel for logic
 * @date 3/13/2024 - 10:23:22 PM
 *
 * @export
 * @returns {{ events: any; loading: any; }}
 */

export function useMapViewModel() {
  const { data, loading } = useEventsQuery();

  return { events: data?.events, loading };
}
