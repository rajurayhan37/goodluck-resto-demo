import Ad1 from "./images/add01.jpg";
import Ad3 from "./images/add03.jpg";
import Offer1 from "./images/offer-1.jpg";

function Footer() {
  return (
    <div className="px-2">
      <div className="flex flex-cols-2 gap-3">
        <img src={Ad1} alt="add1" />
        <div className="grid gap-2">
          <div className="grid grid-cols-2 gap-2">
            <img src={Ad3} alt="add1" />
            <img src={Ad3} alt="add1" />
          </div>
          <img src={Offer1} alt="add1" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
