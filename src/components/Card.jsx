import React from "react";
import "./Card.css";
export default function Card({ name, handleClick, sprite }) {
  return (
    <div>
      <button key={name} className="button" onClick={() => handleClick(name)}>
        <img src={sprite} alt={name} />
        <p className="">{name}</p>
      </button>
    </div>
  );
}
