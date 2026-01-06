import { useState, useEffect } from "react";
import EcommerceProductPage from "./components/EcommerceProductPage";
import WallOfLoveRoute from "./components/WallOfLoveRoute";

const App = () => {
  const [route, setRoute] = useState(
    window.location.hash || "#/"
  );

  useEffect(() => {
    const onHashChange = () =>
      setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () =>
      window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route === "#/wall-of-love" ? (
    <WallOfLoveRoute onBack={() => (window.location.hash = "/")} />
  ) : (
    <EcommerceProductPage
      onExploreWall={() => (window.location.hash = "/wall-of-love")}
    />
  );
};

export default App;
