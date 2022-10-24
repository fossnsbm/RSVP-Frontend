import HeroPage from "./hero";
import Nav from "../Navbar/Navbar";
import FeatureSection from "../feature/feature";
import TwitterSection from "../twitter/twitterSection";

function HomePage() {
  return (
    <>
      <Nav></Nav>
      <HeroPage />
      <FeatureSection />
      <TwitterSection />
    </>
  );
}

export default HomePage;
