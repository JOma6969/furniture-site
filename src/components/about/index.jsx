import "./styles.css";
import firstAbout from "../../assets/first-about-img.png";

export default function AboutOne() {
  return (
    <div className="about">
      <div className="about-1">
        <div className="col-1">
          <div className="col-1-header">
            <p>
              OUR COMPANY <br /> IN NUMBERS
            </p>
            {/* <div className="circle"></div> */}
          </div>
          <div className="align-btom">
            <div className="align-bt-left-container">
              <h3>150+</h3>
              <p>Furniture Suppliers</p>
            </div>
            <div className="align-bt-right-container">
              <h4>15+</h4>
              <p>
                years of production <br />
                (unknown)
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div>
            <h2>
              who <span>we</span> are?
            </h2>
            <p>
              At Conpact, we understand the challenges of creating exceptional
              spaces that blend elegance, quality, and functionality.
            </p>
            <p>
              As Greece’s premier furniture solutions provider, we’ve made it
              our mission to simplify the furnishing process, ensuring that
              every project is executed flawlessly from initial consultation to
              final installation.
            </p>
          </div>
          {/* <div className="light-brown-side-img"></div> */}
        </div>
      </div>
    </div>
  );
}
