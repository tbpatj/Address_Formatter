export default function PrintView({ data }) {
  return (
    <div className="flex">
      {data.map((val, index) => {
        if (index !== 0) {
          return <StyledAddress val={val} />;
        }
      })}
    </div>
  );
}

function StyledAddress({ val }) {
  if (
    val[0] !== null &&
    val[1] !== null &&
    val[2] !== null &&
    val[3] !== null &&
    val[4] !== null &&
    val[5] !== null
  )
    return (
      <div className="print-container">
        <div className="family-name">{val[0]}</div>
        <div className="address-fit">
          <div className="address-text">{val[3].toUpperCase()}</div>
          <div className="address-text">{val[4].toUpperCase()}</div>
          <div className="address-text">
            {val[5].toUpperCase()} {val[6].toUpperCase()} {val[7].toUpperCase()}
          </div>
        </div>
      </div>
    );
}
