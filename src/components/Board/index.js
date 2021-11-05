import React, { useState, useEffect } from "react";
import Card from "../Card";
import "./style.css";

function Board({ options }) {
  const [game, setGame] = useState([]);
  const [firstCard, setFirstCard] = useState(null);

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
    const newGame = [];
    for (let i = 0; i < options / 2; i++) {
      const firstOption = {
        id: 2 * i,
        frontId: i,
        content: fronts[i],
        flipped: false,
        matched: false,
      };
      const secondOption = {
        id: 2 * i + 1,
        frontId: i,
        content: fronts[i],
        flipped: false,
        matched: false,
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
        if (i === cardId) {
          return { ... item,
            content: item.content,
            flipped: !item.flipped,
          };
        } else {
          return item;
        }
      })
    );
    console.log("g",game);
  };

  const flip = (cardId) => {
      console.log("id",cardId);
    if (firstCard === null) {
      setFirstCard(cardId);
    } else {
      const firstCardContent = game[firstCard].content;
      const secondCardContent = game[cardId].content;
      if (firstCardContent === secondCardContent) {
        setFirstCard(null);
        console.log("same");
      } else {
          console.log("diff");
        setTimeout(() => {
          flipCardTo(firstCard, false);
          flipCardTo(cardId, false);
          setFirstCard(null);
        }, 1000);
      }
    }
    flipCardTo(cardId, !game[cardId].flipped);
  };

  console.log("F",firstCard);
  
  if (game.length === 0) return <div>loading... </div>;
  else {
  return game.map((card, i) => {
    console.log("card", card.flipped);
    return (
      <div className="Board">
        <Card
          key={i}
          flip={() => {flip(i);}}
          content={card.content}
          flipped={card.flipped}
        />
      </div>
    );
  });
}
}

export default Board;
