import React, { useState, useEffect } from "react";
import Board from "../Board";

function Start() {
  const [options, setOptions] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="container">
        <h1>Flip Card Game</h1>
        <div>
          {options === null ? (
            <>
              <button onClick={() => setOptions(4)}>Easy</button>
              <button onClick={() => setOptions(6)}>Medium</button>
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
        <h2>Let's Start!</h2>
      )}
    </div>
  );
}

export default Start;
