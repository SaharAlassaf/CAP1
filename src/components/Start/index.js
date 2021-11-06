import React, { useState } from "react";
import Board from "../Board";
import "./style.css";

function Start() {
  const [options, setOptions] = useState(null);

  return (
    <div className="backgroundStart">
      <div className="containerStart">
        <h1>Flip Card Game</h1>
        <div className="btnStart">
          {options === null ? (
            <>
              <button onClick={() => setOptions(6)}>Easy</button>
              <button onClick={() => setOptions(12)}>Medium</button>
              {/* <button onClick={() => setOptions(24)}>Hard</button> */}
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  const prevOptions = options;
                  setOptions(null);
                  setTimeout(() => {
                    setOptions(prevOptions);
                  }, 5);
                }}
              >
                Start Over
              </button>
              <button onClick={() => setOptions(null)}>Home</button>
            </>
          )}
        </div>
      </div>

      {options ? (
        <Board options={options} setOptions={setOptions} />
      ) : (
        <div className="instr">
          <h2>Let's Start!</h2>
          <p>
            Flip card is a matching card game for 7-year-olds and up providing
            fast-paced fun that moves at the speed of flipping! Gameplay is so
            easy to understand, young kids can play independently. Kids will
            love flipping through their cards to find a match.
          </p>
          <p>First, choose a game level</p>
          <p>Then, try matching cards before time over and lose the round</p>
        </div>
      )}
    </div>
  );
}

export default Start;
