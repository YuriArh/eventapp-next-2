import { unstable_setRequestLocale } from "next-intl/server";
import { NewEventButton } from "~/features/NewEvent";
import { MainTools } from "~/widgets/MainTools";
import { CustomMap } from "~/widgets/Map";

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <div className="relative ">
        <MainTools />
        <CustomMap />
      </div>
    </main>
  );
}
