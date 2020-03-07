export default date => {
  if (!date) {
    return "Any day";
  }
  const d = new Date(date);

  return `${convertDay(d.getDay())}, ${d.getDate()} ${convertMonth(
    d.getMonth()
  )}`;
};

const convertDay = dayNum => {
  switch (dayNum) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
  }
  return "Anyday";
};

const convertMonth = monthNum => {
  return "March";
};
