export default function TableView({ data }) {
  return (
    <table>
      <tr>
        {data[0].map((val) => {
          return <th>{val}</th>;
        })}
      </tr>
      {data.map((val, indx) => {
        if (indx !== 0) {
          return (
            <tr>
              {val.map((val2) => {
                return <td>{val2}</td>;
              })}
            </tr>
          );
        }
      })}
    </table>
  );
}
