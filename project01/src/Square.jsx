const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="box"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <div>
        <p>{colorValue ? colorValue : "Empty value"}</p>
        <p>{hexValue ? hexValue : null}</p>
      </div>
    </section>
  );
};

export default Square;
