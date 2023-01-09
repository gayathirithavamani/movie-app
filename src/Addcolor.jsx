import React, { useState } from "react";
import { ColorBox } from "./Colorbox";

function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color,
  };
  const [colorlist, setColorList] = useState([
    "crimson",
    "orange",
    "orangered",
    "pink",
  ]);
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="enter a color"
        value={color}
      />
      <button onClick={() => setColorList([...colorlist, color])}>
        add color
      </button>
      {colorlist.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
export default AddColor;
