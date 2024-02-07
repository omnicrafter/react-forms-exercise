import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (color, width, height) => {
    const key = uuid();
    setBoxes((boxes) => [...boxes, { key, color, width, height }]);
  };

  const removeBox = (key) => {
    setBoxes((boxes) => boxes.filter((box) => box.key !== key));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box) => (
        <Box
          boxKey={box.key}
          color={box.color}
          width={box.width}
          height={box.height}
          removeBox={removeBox}
        />
      ))}
    </div>
  );
};

export default BoxList;
