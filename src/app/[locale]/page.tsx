import { unstable_setRequestLocale } from "next-intl/server";

import { NewEventButton } from "~/features/NewEvent";
import { MainTools } from "~/widgets/MainTools";
import { CustomMap } from "~/widgets/Map";
import { NewEventModal } from "~/widgets/NewEventModal";

type Props = {
  params: { locale: string };
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ params: { locale }, searchParams }: Props) {
  unstable_setRequestLocale(locale);
  const modal = searchParams?.modal;
  return (
    <main>
      <div className="relative ">
        <MainTools />
        <CustomMap />
        {modal && <NewEventModal />}
      </div>
    </main>
  );
}
