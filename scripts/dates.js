function sameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function convertDate(date) {
  if (typeof date === "number") {
    date = new Date(date);
  }
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${month < 10 ? `0${month}` : month}/${
    day < 10 ? `0${day}` : day
  }/${year}`;
}

function convertFrenchDate(date) {
  if (typeof date === "number") {
    date = new Date(date);
  }
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${year}`;
}

function weekStartkDate(date) {
  let startDate = new Date(date);
  startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
  return startDate;
}

function previousDate() {
  const dateInput = document.querySelector("#dateSelector");
  const date = new Date(dateInput.value);
  if (localStorage.getItem("weekDisplay") == "true") {
    date.setDate(date.getDate() - 7);
  } else {
    date.setDate(date.getDate() - 1);
  }
  dateInput.valueAsDate = date;
  refreshData();
}

function nextDate() {
  const dateInput = document.querySelector("#dateSelector");
  const date = new Date(dateInput.value);
  if (localStorage.getItem("weekDisplay") == "true") {
    date.setDate(date.getDate() + 7);
  } else {
    date.setDate(date.getDate() + 1);
  }
  dateInput.valueAsDate = date;
  refreshData();
}
