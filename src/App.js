import React from "react";
import Memory from "./assets/images/icon-memory.svg";
import Reaction from "./assets/images/icon-reaction.svg";
import Verbal from "./assets/images/icon-verbal.svg";
import Visual from "./assets/images/icon-visual.svg";
import "./App.css";
function Index() {
  return (
    <>
      <div className="container">
        <div className="inner-container">
          <div className="results">
            <div className="your-result">Your Result</div>
            <div className="circle">
              <div className="seven-six">76</div>
              <div className="hundered">of 100</div>
            </div>
            <div className="grettings">Great</div>
            <div className="content">
              <span>You Scored higher than 65% of </span>
              <span>the people who have taken </span>
              <span>these tests</span>
            </div>
          </div>
          <div className="summary">
            <span>Summary</span>
            <div className="cards">
              <div className="reaction">
                <div className="image-title">
                  <img src={Reaction} alt="Memory" />
                  <span style={{ color: "#ff5757" }}>Reaction</span>
                </div>
                <div>80/100</div>
              </div>
              <div className="memory">
                <div className="image-title">
                  <img src={Memory} alt="Memory" />
                  <span style={{ color: "#ffb01f" }}>Memory</span>
                </div>
                <div>92/100</div>
              </div>
              <div className="verbal">
                <div className="image-title">
                  <img src={Verbal} alt="Memory" />
                  <span style={{ color: "#00bd91" }}>Verbal</span>
                </div>
                <div>61/100</div>
              </div>
              <div className="visual">
                <div className="image-title">
                  <img src={Visual} alt="Memory" />
                  <span style={{ color: "#1125d4" }}>Visual</span>
                </div>
                <div>72/100</div>
              </div>
            </div>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
