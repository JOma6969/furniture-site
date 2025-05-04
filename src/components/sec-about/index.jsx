import { useState } from "react";
import "./styles.css";

export default function AboutTwo() {
  const [arr, setArr] = useState([
    {
      h3_txt:
        "after-sale <span>support</span> <br /> and <span>maintenance</span>",
      p_txt:
        "Our commitment to your satisfaction extends beyond the trial installation. we conduct a thorough trial walkthrough to ensure your satisfaction and also comprehensive after-sales for majority claims, manufacture, and cane instructions.",
      id: crypto.randomUUID(),
    },
    {
      h3_txt:
        "after-sale <span>support</span> <br /> and <span>maintenance</span>",
      p_txt:
        "Our commitment to your satisfaction extends beyond the trial installation. we conduct a thorough trial walkthrough to ensure your satisfaction and also comprehensive after-sales for majority claims, manufacture, and cane instructions.",
      id: crypto.randomUUID(),
    },
    {
      h3_txt:
        "after-sale <span>support</span> <br /> and <span>maintenance</span>",
      p_txt:
        "Our commitment to your satisfaction extends beyond the trial installation. we conduct a thorough trial walkthrough to ensure your satisfaction and also comprehensive after-sales for majority claims, manufacture, and cane instructions.",
      id: crypto.randomUUID(),
    },
    {
      h3_txt:
        "after-sale <span>support</span> <br /> and <span>maintenance</span>",
      p_txt:
        "Our commitment to your satisfaction extends beyond the trial installation. we conduct a thorough trial walkthrough to ensure your satisfaction and also comprehensive after-sales for majority claims, manufacture, and cane instructions.",
      id: crypto.randomUUID(),
    },
    {
      h3_txt:
        "after-sale <span>support</span> <br /> and <span>maintenance</span>",
      p_txt:
        "Our commitment to your satisfaction extends beyond the trial installation. we conduct a thorough trial walkthrough to ensure your satisfaction and also comprehensive after-sales for majority claims, manufacture, and cane instructions.",
      id: crypto.randomUUID(),
    },
  ]);

  function showCard(card_Index) {
    const dummy = [...arr];
    const data = dummy.splice(card_Index, 1)[0]; // get the object directly
    dummy.unshift(data); // insert it at the beginning
    setArr(dummy);
    console.log(dummy);
    console.log(card_Index);
  }

  return (
    <div className="about-2">
      <div className="txt-box">
        <h2>
          how we <span>simplify</span> your <br /> furnishing experience
        </h2>
      </div>
      {/* <div className="about-2-container-1">
        <div className="card">
          <div className="left-col"></div>
          <div className="img"></div>
        </div>
        <div className="card">
          <div className="left-col"></div>
          <div className="img"></div>
        </div>
        <div className="card">
          <div className="left-col"></div>
          <div className="img"></div>
        </div>
        <div className="card">
          <div className="left-col"></div>
          <div className="img"></div>
        </div>
        <div className="card">
          <div className="left-col">
            <h2>5</h2>
            <h3></h3>
            <p></p>
          </div>
          <div className="img"></div>
        </div>
      </div> */}

      <div className="about-2-container-1">
        {arr.map((item, i) => {
          return (
            <div
              className={`card ${
                i === 0
                  ? "first"
                  : i === 1
                  ? "second"
                  : i === 3
                  ? "third"
                  : i === 4
                  ? "fourth"
                  : i === 5
                  ? "last"
                  : ""
              }`}
              onClick={() => showCard(i)}
              key={i}
            >
              <div className="left-col">
                <h2>{i + 1}</h2>
                <h3 dangerouslySetInnerHTML={{ __html: item.h3_txt }}></h3>
                <p>{item.p_txt}</p>
              </div>
              <div className="img"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
