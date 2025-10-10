import { useState } from "react";
import ColorOption from "./ColorOption";
import { COLORS, COLOR_NAMES } from "../../constants";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(COLORS.yellow);

  return (
    <>
      <div className="color-picker">
        <ColorOption color={COLORS.yellow} isSelected={selectedColor === COLORS.yellow} onClick={() => setSelectedColor(COLORS.yellow)} />
        <ColorOption color={COLORS.white} isSelected={selectedColor === COLORS.white} onClick={() => setSelectedColor(COLORS.white)} />
        <ColorOption color={COLORS.rose} isSelected={selectedColor === COLORS.rose} onClick={() => setSelectedColor(COLORS.rose)} />
      </div>
      <span className="color-name">
        {COLOR_NAMES[Object.keys(COLORS).find(key => COLORS[key] === selectedColor)]}
      </span>
    </>
  );
};

export default ColorPicker;