import HeroPage from "./hero";
import Nav from "../Navbar/Navbar";
import FeatureSection from "../feature/feature";
import TwitterSection from "../twitter/twitterSection";
import FooterSection from "../FooterSection/FooterSection"


function HomePage() {
  return (
    <>
      <Nav></Nav>
      <HeroPage />
      <FeatureSection />
      <TwitterSection />
      <FooterSection/>
    </>
  );
}

export default HomePage;
