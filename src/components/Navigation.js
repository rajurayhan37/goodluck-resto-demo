import Logo from "./images/logo-dark.png";
import Offer1 from "./images/offer-1.jpg";
function Navigation() {
  return (
    <nav className="py-3">
      <div className="flex justify-between">
        <img className="w-[35%] lg:w-[12%]" src={Logo} alt="Logo"/>
        <div className="">
          <img className="w-[80%] lg:w-[35%] float-right items-center" src={Offer1} alt="Offer"/>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
