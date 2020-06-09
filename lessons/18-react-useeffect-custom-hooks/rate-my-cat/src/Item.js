import React, { useState, useEffect } from "react";

const Item = (props) => {
  const [localQuantity, setLocalQuantity] = useState(0);

  useEffect(() => {
    setLocalQuantity(props.quantity);
  }, [props.quantity]);

  return (
    <div>
      <input
        value={localQuantity}
        onChange={(e) => setLocalQuantity(e.target.value)}
      />
      <button>update</button>
    </div>
  );
};

export default Item;
