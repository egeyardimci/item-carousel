import { useState } from "react";
import ColorOption from "./ColorOption";
import { COLORS, COLOR_NAMES, COLO_IDS } from "../../constants";

const ColorPicker = ({ setImageColor }) => {
  const [selectedColor, setSelectedColor] = useState(COLORS.yellow);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setImageColor(COLO_IDS[Object.keys(COLORS).find(key => COLORS[key] === color)]);
  };

  return (
    <>
      <div className="color-picker">
        <ColorOption color={COLORS.yellow} isSelected={selectedColor === COLORS.yellow} onClick={() => handleColorChange(COLORS.yellow)} />
        <ColorOption color={COLORS.white} isSelected={selectedColor === COLORS.white} onClick={() => handleColorChange(COLORS.white)} />
        <ColorOption color={COLORS.rose} isSelected={selectedColor === COLORS.rose} onClick={() => handleColorChange(COLORS.rose)} />
      </div>
      <span className="color-name">
        {COLOR_NAMES[Object.keys(COLORS).find(key => COLORS[key] === selectedColor)]}
      </span>
    </>
  );
};

export default ColorPicker;