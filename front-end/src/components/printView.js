import { useState } from "react";

export default function PrintView({ data }) {
  const [pageNum, setPageNum] = useState(0);
  let slicedData = data.slice(pageNum * 30 + 1, (pageNum + 1) * 30 + 1);

  function movePageNum(page) {
    if (page < 0) {
      setPageNum(0);
      return;
    }
    if (page > Math.floor(data.length / 30)) {
      setPageNum(Math.floor(data.length / 30));
      return;
    }
    setPageNum(page);
  }

  return (
    <>
      <div className="top-padding"></div>
      <div className="my-page">
        {slicedData.map((val2, index) => {
          return (
            <StyledAddress
              key={`styledAddress${index}`}
              val={val2}
              index={index}
            ></StyledAddress>
          );
        })}
      </div>
      <div className="bottom-padding"></div>
      {/* {data.map((val, index) => {
        if (index !== 0) {
          return <StyledAddress val={val} />;
        }
      })} */}

      <button onClick={() => movePageNum(pageNum - 1)}>prev page</button>
      <span> current page {pageNum} </span>
      <button onClick={() => movePageNum(pageNum + 1)}>next page</button>
    </>
  );
}

function StyledAddress({ val, index }) {
  if (val[0] === null) {
    return null;
  }
  if (
    val[0] !== null &&
    val[1] !== null &&
    val[2] !== null &&
    val[3] !== null &&
    val[4] !== null &&
    val[5] !== null
  )
    return (
      <div
        className={`print-container ${
          (index + 2) % 3 === 0 ? "margin-stuff" : ""
        }`}
      >
        <div className="flex-container">
          {val[1].includes("&") && (
            <>
              <div className="family-name">{val[1]}</div>
              <div className="family-name">{val[2]}</div>
            </>
          )}
          {!val[1].includes("&") && (
            <>
              <div className="family-name">{val[0]}</div>
            </>
          )}
          <div className="address-text">{val[3].toUpperCase()}</div>
          {val[4] !== "" && (
            <div className="address-text">{val[4].toUpperCase()}</div>
          )}
          <div className="address-text">
            {val[5].toUpperCase()} {val[6].toUpperCase()} {val[7].toUpperCase()}
          </div>
        </div>
      </div>
    );
}
