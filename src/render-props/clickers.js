import React from "react";

export function Cookie({ onClick }) {
  return (
    <button className="cookie" onClick={() => onClick(1)}>
      Cookie
    </button>
  );
}

export function Muffin({ handleClick }) {
  return (
    <button className="muffin" onClick={() => handleClick(2)}>
      Muffin
    </button>
  );
}
