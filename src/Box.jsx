const Box = ({ boxKey, color, width, height, removeBox }) => {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          backgroundColor: color,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
      <button onClick={() => removeBox(boxKey)}>X</button>
    </>
  );
};

export default Box;
