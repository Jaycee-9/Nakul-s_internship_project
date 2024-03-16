import findHouse from "../../../public/Images/FindHouseImg.png";
import showcaseProperty from "../../../public/Images/ShowcaseProperty.png";
import connectImg from "../../../public/Images/ConnectImg.png";
import confirmImg from "../../../public/Images/Confirm.png";
function Cards() {
  return (
    <div className="card-container">
      <div className="card-container-left">
        <div className="card-img">
          <img src={findHouse} alt="house-search" />
        </div>
        <div className="card-information">
          <h1>Discover Your Perfect Home</h1>
          <p>
            Use our advanced filters to narrow down your search. Specify
            everything from location to amenities, ensuring you find the
            property that feels right.
          </p>
          <p style={{ textDecoration: "underline" }}>Learn More</p>
        </div>
      </div>
      <div className="card-container-right">
        <div style={{ textAlign: "right" }} className="card-information">
          <h1>Showcase Your Property</h1>
          <p>
            List your property with ease. Fill in detailed forms to highlight
            every feature, attracting the perfect buyer directly.
          </p>
          <p style={{ textDecoration: "underline" }}>Learn More</p>
        </div>
        <div className="card-img">
          <img
            style={{ border: "1px solid gray" }}
            src={showcaseProperty}
            alt="house-search"
          />
        </div>
      </div>
      <div className="card-container-left">
        <div className="card-img">
          <img src={connectImg} alt="house-search" />
        </div>
        <div className="card-information">
          <h1>Connect and Communicate</h1>
          <p>
            Our platform facilitates direct communication between buyer and
            seller, making negotiations transparent and straightforward.
          </p>
          <p style={{ textDecoration: "underline" }}>Learn More</p>
        </div>
      </div>
      <div className="card-container-right">
        <div style={{ textAlign: "right" }} className="card-information">
          <h1>Seal the Deal Securely</h1>
          <p>
            Advance payments made safe. Secure your agreement with confidence,
            and step closer to your dream property.
          </p>
          <p style={{ textDecoration: "underline" }}>Learn More</p>
        </div>
        <div className="card-img">
          <img src={confirmImg} alt="house-search" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
