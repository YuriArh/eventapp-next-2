import { MainTools } from "~/widgets/MainTools";
import { CustomMap } from "~/widgets/Map";

export default function Home() {
  return (
    <>
      <main>
        <div className="relative ">
          <MainTools />
          <CustomMap />
        </div>
      </main>
    </>
  );
}
