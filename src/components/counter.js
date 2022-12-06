import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

function Counter() {
  const [count, setCount] = useState(0);
  const [disCount, setdisCount] = useState(0);
  useEffect(() => {
    console.log("the like value is updated", count);
  }, [count, disCount]);
  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>👍{count}</button>
            <button onClick={() => setdisCount(count + 1)}>👎{disCount}</button> */}
      <IconButton
        onClick={() => setCount(count + 1)}
        aria-label="like"
        color="primary"
        size="small"
      >
        <Badge badgeContent={count} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        onClick={() => setdisCount(count + 1)}
        aria-label="like"
        color="error"
        size="small"
      >
        <Badge badgeContent={disCount} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
export default Counter;
