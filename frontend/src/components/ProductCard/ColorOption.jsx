const ColorOption = ({ color, isSelected, onClick }) => {
  return (
    <div
      className={`color-option ${isSelected ? 'selected' : ''}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
};

export default ColorOption;