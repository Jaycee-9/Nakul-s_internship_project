//styling
import "../../App.css";

//components
import Logo from "./CompanyLogo/Logo";
import NavBar from "./NavigationBar/NavBar";
import Account from "./Accounts/Account";

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar />
      <Account />
    </div>
  );
}

export default Header;
