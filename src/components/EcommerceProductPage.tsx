import {
  ShoppingCart,
  Menu,
  Heart,
  Search,
  Star,
} from "lucide-react";
import WallOfLovePreview from "./WallOfLovePreview";

const EcommerceProductPage = ({ onExploreWall }) => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          <span className="font-black italic">ModernStride.</span>
          <Search size={18} />
        </div>
      </nav>

      {/* Product */}
      <div className="pt-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <img
          src="https://picsum.photos/id/103/800/1000"
          className="rounded-3xl"
        />

        <div>
          <div className="flex text-amber-400 mb-3">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
          </div>

          <h1 className="text-4xl">Relaxed Linen Trousers</h1>
          <p className="text-xl text-gray-500">$128</p>

          <button
            onClick={onExploreWall}
            className="mt-6 underline font-bold"
          >
            See real customer stories →
          </button>
        </div>
      </div>

      {/* Wall of Love Preview */}
      <WallOfLovePreview onViewAll={onExploreWall} />
    </div>
  );
};

export default EcommerceProductPage;
