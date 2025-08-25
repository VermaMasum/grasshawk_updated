import React from "react";
import "./MoleTrapInstructions.css";

const MoleTrapInstructions = () => {
  return (
    <div className="mole-trap-instructions">
      <center>
        <h1
          style={{
            color: "#ed0d0dff",
            fontSize: "2.5rem",
            marginBottom: "20px",
          }}
        >
          HOW TO USE - 4 Easy Steps
        </h1>
      </center>

      <div className="instructions-grid">
        <div className="instruction-step">
          <div className="step-number">1</div>
          <h3>Identify Active Mole Tunnels</h3>
          <p>
            Locate a raised mole tunnel and press down a small section of soil.
            Check after 24 hours; if the soil is distributed tunnel is active.
          </p>
        </div>

        <div className="instruction-step">
          <div className="step-number">2</div>
          <h3>Prepare Location</h3>
          <p>
            Dig a small opening in the active tunnel, just large enough for the
            trap.
          </p>
        </div>

        <div className="instruction-step">
          <div className="step-number">3</div>
          <h3>Set the Trap</h3>
          <p>Engage the trap by pressing down the trigger mechanism.</p>
        </div>

        <div className="instruction-step">
          <div className="step-number">4</div>
          <h3>Monitor Regularly</h3>
          <p>
            Regularly Check the trap.Once a mole is captured,remove it safely
            and reset if needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoleTrapInstructions;
