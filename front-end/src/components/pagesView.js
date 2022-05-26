import { useEffect, useState } from "react";

export default function PagesView({ data }) {
  let pagedData = [];

  for (let i = 1; i < data.length; i += 30) {
    pagedData.push(data.slice(i, i + 30));
  }
  // let slicedData = data.slice(0 * 30 + 1, (0 + 1) * 30 + 1);

  /** 
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
  }*/
  console.log(pagedData);

  return (
    <>
      {pagedData.map((value, index) => {
        return (
          <>
            <div className="top-padding"></div>
            <div className="my-page">
              {value.map((val2, index) => {
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
          </>
        );
      })}
    </>
  );
}

function StyledAddress({ val, index }) {
  console.log(val);
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
        }${index % 3 === 0 ? "margin-left" : ""}`}
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
