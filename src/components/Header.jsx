import React, { useState } from "react";
import Content from "./Content";
import "./Header.css";
function Header() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = () => {
    setScore((score) => score + 1);
    if (highScore <= score) setHighScore(score + 1);
  };

  const wrongAns = () => {
    setScore(0);
  };
  return (
    <div className="container">
      <div className="header-container">
        <div className="title">
          <h1>Pokemon Memory Game</h1>
        </div>
        <div className="score">
          <p className="">Score: {score}</p>
          <p className="">High Score: {highScore}</p>
        </div>
      </div>
      <Content updateScore={handleClick} wrongAns={wrongAns} score={score} />
    </div>
  );
}

export default Header;
