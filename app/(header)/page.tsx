import FeaturesList from "@/components/FeaturesList";
import GameCarousel from "@/components/GameCarousel";

export default async function Index() {
  return (
    <div>
      <div className="py-16">
        <GameCarousel />
      </div>

      <div className="bg-white px-4 lg:px-80">
        <FeaturesList />
      </div>
    </div>
  );
}
