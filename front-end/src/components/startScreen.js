import { useState } from "react";
import formatData from "../utils/formatCSV";
import PagesView from "./pagesView";
import PrintView from "./printView";

function readFile(e, setState) {
  let file = e.target.files[0];
  console.log("loaded file, now reading file");
  if (FileReader && file) {
    let fr = new FileReader();

    fr.onload = function (theFile) {
      let content = fr.result;
      console.log("formatting file");
      let formated = formatData(content);
      console.log("formated, now sending data to visually format");
      setState(formated);
      return content;
    };

    fr.readAsText(file);
  }
}

export default function StartScreen() {
  const [content, setContent] = useState(null);

  function handleDocument(e) {
    let content = readFile(e, setContent);
  }
  return (
    <>
      {content == null && (
        <>
          <h1>Upload your file here</h1>
          <input type="file" onChange={(e) => handleDocument(e)} />
        </>
      )}

      {content !== null && <PagesView data={content} />}
    </>
  );
}
