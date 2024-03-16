import Explore from "./explore/Explore";
import QuickLinks from "./quicklink/QuickLinks";
import CustomerSupport from "./customer/CustomerSupport";
import Subscribe from "./subscribe/Subscribe";
import Social from "./social/Social";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <Explore />
        <QuickLinks />
        <CustomerSupport />
        <Subscribe />
      </div>
      <div className="social">
        <Social />
      </div>
    </>
  );
}

export default Footer;
