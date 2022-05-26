import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PrintView from "./components/printView";
import TableView from "./components/tableview";
import PrintTable from "./components/printTable";
import StartScreen from "./components/startScreen";

function App() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4001")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // if (data === null) {
  //   return <div></div>;
  // }

  return (
    <div className="App">
      {/* <PrintView data={data} /> */}
      <StartScreen />
      {/* <PrintTable data={data} /> */}
      {/* <TableView data={data} /> */}
    </div>
  );
}

export default App;
