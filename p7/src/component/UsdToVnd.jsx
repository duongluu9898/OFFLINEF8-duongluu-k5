import React from "react";

export default function VndToUsd({ onChange, usd }) {
  return (
    <div>
      <label htmlFor="usd">USD</label>
      <input type="number" id="usd" value={usd} onChange={onChange} />
    </div>
  );
}
