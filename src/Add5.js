import React, { useState } from 'react';

export function Add5() {
    let [num, setnum] = useState(100);
    return (
        <div>
            <button onClick={() => setnum(num + 5)}>+5</button>
            <p>{num}</p>
        </div>
    );
}
