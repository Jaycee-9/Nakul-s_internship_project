//components
import Header from "./header/Header";
import Slogan from "./companySlogan/Slogan";
import House from "./houseImg/House";
import Work from "./work/Work";
import Choose from "./whyxyz/Choose";
import Community from "./community/Community";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Slogan />
      <House />
      <Work />
      <Choose />
      <Community />
      <Footer />
    </div>
  );
}
export default Home;
