import HeroPage from "./hero";
import Nav from "../Navbar/Navbar";
import FeatureSection from "../feature/feature";

function HomePage() {
  return (
    <>
      <Nav></Nav>
      <HeroPage />
      <FeatureSection />
    </>
  );
}

export default HomePage;
