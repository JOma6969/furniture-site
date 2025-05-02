import "./styles.css";
import bg from "../../assets/landing-img.png";

export default function Landing() {
  return (
    <div className="landing">
      <img src={bg} alt="" />
      <div>
        <div>
          <h1>bringing simplicity in the furnishing market</h1>
          <div className="xtra-txt">
            <p>
              compatto simplifies the complex process of furnishing
              all-inclusive, boutique and high-end hotels and luxury residence
              in Greece and Cyprus
            </p>
            <div>Start your furnishing journey</div>
          </div>
        </div>
      </div>
    </div>
  );
}
