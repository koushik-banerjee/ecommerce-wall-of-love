import { ArrowRight } from "lucide-react";
import WallOfLovePage from "./WallOfLovePage";

const WallOfLoveRoute = ({ onBack }) => {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          <button onClick={onBack} className="flex items-center gap-2">
            <ArrowRight className="rotate-180" size={16} />
            Back to store
          </button>
          <span className="font-black italic">ModernStride.</span>
        </div>
      </nav>

      <div className="pt-24">
        <WallOfLovePage />
      </div>
    </>
  );
};

export default WallOfLoveRoute;
