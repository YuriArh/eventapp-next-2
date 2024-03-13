import { AnimatePresence, LayoutGroup } from "framer-motion";
import { unstable_setRequestLocale } from "next-intl/server";
import { MainTools } from "~/widgets/MainTools";
import { CustomMap } from "~/widgets/Map";
import { NewEventModal } from "~/widgets/NewEventModal";

type Props = {
  params: { locale: string };
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ params: { locale }, searchParams }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <div className="relative w-screen h-screen flex">
        <MainTools />
        <CustomMap />
        <NewEventModal />
      </div>
    </main>
  );
}
