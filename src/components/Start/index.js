import React, { useState } from "react";
import Board from "../Board";
import "./style.css"

function Start() {
  const [options, setOptions] = useState(null);

  return (
    <div>
      <div className="container">
        <h1>Flip Card Game</h1>
        <div className="btnStart">
          {options === null ? (
            <>
              <button onClick={() => setOptions(4)}>Easy</button>
              <button onClick={() => setOptions(16)}>Medium</button>
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
        <p>Instructions here</p>
        </div>
      )}
    </div>
  );
}

export default Start;
