import React, { useState } from 'react';
import { Colorbox } from './Colorbox';


function Addcolor() {
    const [color, setcolor] = useState("orange");
    const styles = {
        background: color,
    };
    const [colorlist, setcolorlist] = useState([
        "crimson", "orange", "orangered", "pink"]);
    return (
        <div>
            <input style={styles}
                onChange={(event) => setcolor(event.target.value)}
                placeholder='enter a color' value={color} />
            <button onClick={() => setcolorlist([...colorlist, color])}>add color</button>
            {colorlist.map((clr) => (
                <Colorbox color={clr} />
            ))}
        </div>
    );
}
export default Addcolor;