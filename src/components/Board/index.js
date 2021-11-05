import React, { useState, useEffect } from "react";
import Card from "../Card";
import "./style.css";

function Board({ options }) {
  const [game, setGame] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [seconds, setSeconds] = useState(10);
  const [result, setResult] = useState(0);


  const fronts = [
    "👹",
    "👿",
    "🧠",
    "🚗",
    "🚲",
    "🚂",
    "🧸",
    "🤨",
    "🤟",
    "♥️",
    "🦟",
    "🦨",
  ];


  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 10000);
    } else {
      setSeconds('Time is over!');
    }
  });

  useEffect(() => {
    const newGame = [];
    for (let i = 0; i < options / 2; i++) {
      const firstOption = {
        id: 2 * i,
        frontId: i,
        content: fronts[i],
        flipped: false,
        // matched: false,
      };
      const secondOption = {
        id: 2 * i + 1,
        frontId: i,
        content: fronts[i],
        flipped: false,
        // matched: false,
      };

      newGame.push(firstOption);
      newGame.push(secondOption);
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5);
    setGame(shuffledGame);
    console.log("arr", shuffledGame);
  }, []);

  const flipCardTo = (cardId, flipped) => {
    setGame(
      game.map((item, i) => {
        ////////////////////////////////// the problem  
        if (i === cardId) {
          return { ... item,
            // content: item.content,
            flipped: flipped,
          };
        } else {
          return item;
        }
      })
    );
    console.log("g",game);
  };

  const flip = (cardId) => {
      // console.log("id",cardId);
    if (firstCard === null) {
      setFirstCard(cardId);
    } else {
      const firstCardContent = game[firstCard].frontId;
      const secondCardContent = game[cardId].frontId;
      if (firstCardContent === secondCardContent) {
        setResult(result+1);
        setFirstCard(null);
        console.log("same");
      } else {
          console.log("diff");
        setTimeout(() => {
          ////////////////////////////////// the problem  
          flipCardTo(firstCard, false);
          console.log("ONE",firstCard);
          flipCardTo(cardId, false);
          console.log("TWO",cardId);
          setFirstCard(null);
        }, 1000);
      }
    }
    flipCardTo(cardId, !game[cardId].flipped);
  };

  console.log("F",firstCard);
  
  if (game.length === 0) return <div>loading... </div>;
  else {
    return (
      <>
        <h4>{seconds}</h4>
        <h4>{result}</h4>
        {game.map((card, i) => {
        return (<div className="Board">
          <Card
            key={i}
            flip={() => {flip(i)}}
            content={card.content}
            flipped={card.flipped}
            />
        </div>)
      })}
      </>
    )
}
}

export default Board;
