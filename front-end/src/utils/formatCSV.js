export default function formatData(data) {
  //   console.log(data);
  let array = data.split(/\r?\n/);
  array.splice(array.length - 1, 1);
  let labels = array[0].split(",");
  let keepIndecies = [];
  let finishedLabels = [];
  for (let i = 0; i < labels.length; i++) {
    let val = labels[i];
    if (
      val === "full_name" ||
      val === "first_name" ||
      val === "last_name" ||
      val === "address_line_1" ||
      val === "address_line_2" ||
      val === "city" ||
      val === "state" ||
      val === "postal_code" ||
      val === "country"
    ) {
      keepIndecies.push(i);
      finishedLabels.push(val);
    }
  }
  array[0] = finishedLabels;
  for (let i = 1; i < array.length; i++) {
    let split = array[i].split(",");
    let finishedItem = [];
    for (let t = 0; t < keepIndecies.length; t++) {
      finishedItem.push(split[keepIndecies[t]]);
    }
    array[i] = finishedItem;
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i][6] !== undefined) {
      if (array[i][6].length > 2) {
        let fix = "";

        switch (array[i][6].toLowerCase()) {
          case "utah":
            fix = "UT";
            break;

          case "ut - utah":
            console.log("why", i);
            fix = "UT";
            break;
          case "idaho":
            fix = "ID";
            break;
          case "texas":
            fix = "TX";
            break;
          case "new mexico":
            fix = "NM";
            break;
          case "oregon":
            fix = "OR";
            break;
          default:
            console.log(`fix this "${array[i][6].toLowerCase()}"`);
        }
        array[i][6] = fix;
      }
    }

    if (array[i][3] === array[i][4]) {
      array[i][4] = "";
    }
    if (array[i][1] !== undefined) {
      let split = array[i][1].split(" and ");
      if (split.length > 1) {
        array[i][1] = split[0] + " & " + split[1];
      }
    }
    if (array[i][0] !== undefined) {
      let split = array[i][0].split(" and ");
      if (split.length > 1) {
        array[i][0] = split[0] + " & " + split[1];
        // console.log(array[i][0]);
      }
    }
  }

  let sortedArray = [array[0]];
  let pushAtEnd = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i][4] !== "") {
      pushAtEnd.push(array[i]);
    } else {
      sortedArray.push(array[i]);
    }
  }
  for (let i = 0; i < pushAtEnd.length; i++) {
    sortedArray.push(pushAtEnd[i]);
  }

  return sortedArray;
}
