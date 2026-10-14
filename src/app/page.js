import Banner from "./components/Banner";
import FeaturedTiles from "./components/FeaturedTiles";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <Banner />
      <Marquee />
      <FeaturedTiles />
    </main>
  );
}