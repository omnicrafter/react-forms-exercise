import { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const [boxData, setBoxData] = useState({ color: "", width: "", height: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBoxData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { color, width, height } = boxData;

    addBox(color, width, height);

    setBoxData({ color: "", width: "", height: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Box color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="choose a color"
        value={boxData.color}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="number"
        name="width"
        placeholder="width in pixels"
        value={boxData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">height</label>
      <input
        id="height"
        type="number"
        name="height"
        placeholder="height in pixels"
        value={boxData.height}
        onChange={handleChange}
      />
      <button type="submit">Submit New Box</button>
    </form>
  );
};

export default NewBoxForm;
