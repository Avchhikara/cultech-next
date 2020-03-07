export default time => {
  if (!time) return "09:00 AM";

  const t = time.split(":");
  let ampm = t[0];
  let hours = t[0];
  let minutes = t[1];

  hours = convertHours(hours);
  minutes = convertMinutes(minutes);
  ampm = convertAmPm(ampm);
  return `${hours}:${minutes} ${ampm}`;
};

function convertMinutes(min) {
  return min;
}

function convertAmPm(hours) {
  hours = parseInt(hours);
  if (hours >= 12) return "PM";
  return "AM";
}

function convertHours(hours) {
  hours = parseInt(hours);
  if (hours === 12) {
    return hours;
  }
  return hours % 12;
}
