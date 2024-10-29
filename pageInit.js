function loadLottie() {
  let animation = lottie.loadAnimation({
    container: document.getElementById("loaderImage"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/assets/loader.json",
  });
}

function copyrightDate() {
  const copyrightDateSpan = document.querySelector("#copyrightDate");
  const date = new Date();
  if (date.getFullYear() != copyrightDateSpan.textContent) {
    copyrightDateSpan.textContent =
      copyrightDateSpan.textContent + " - " + date.getFullYear();
  }
}

function setWeekDayDisplay() {
  if (localStorage.getItem("weekDisplay") === null) {
    if (window.innerWidth > 800) {
      localStorage.setItem("weekDisplay", true);
    } else {
      localStorage.setItem("weekDisplay", false);
    }
  }
  const weekDayDisplaySidebarButton = document.querySelector(
    "#weekDayDisplaySidebarButton > span"
  );
  const weekDayDisplayButton = document.querySelector("#weekDayDisplayButton");

  if (localStorage.getItem("weekDisplay") == "true") {
    weekDayDisplaySidebarButton.textContent = "Afficher un seul jour";
    weekDayDisplayButton.textContent = "Vue jour";
  } else {
    weekDayDisplaySidebarButton.textContent = "Afficher la semaine complète";
    weekDayDisplayButton.textContent = "Vue semaine";
  }
}

function displayScheduleGrid() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.remove();
  });

  const displayDiv = document.querySelector("#display");
  const scheduleGrid = document.createElement("div");
  scheduleGrid.id = "scheduleGrid";
  const daysDiv = document.querySelector("#days");

  for (let i = 7; i <= 19; i++)
    for (let j = 0; j <= 1; j++) {
      if (!(i == 7 && j == 0) && !(i == 19 && j == 1)) {
        const halfHourDiv = document.createElement("div");
        halfHourDiv.classList.add("halfHour");
        scheduleGrid.appendChild(halfHourDiv);

        const hourDiv = document.createElement("div");
        hourDiv.classList.add("hour");
        hourDiv.textContent = `${i < 10 ? `0${i}` : i}h${
          j === 0 ? "00" : "30"
        }`;
        halfHourDiv.appendChild(hourDiv);

        const weekDisplay = localStorage.getItem("weekDisplay");
        for (let k = 1; weekDisplay == "true" ? k <= 5 : k <= 1; k++) {
          const content = document.createElement("div");
          const idHour = `${i < 10 ? `0${i}` : i}_${
            j === 0 ? "00" : "30"
          }_${k}`;
          content.classList.add("content");
          content.classList.add("mode");
          content.classList.add(`${localStorage.getItem("mode")}Mode`);
          content.id = idHour;
          halfHourDiv.appendChild(content);

          if (i === 7 && j === 1) {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("day");
            dayDiv.textContent = "";
            daysDiv.appendChild(dayDiv);
          }
        }
      }
    }
  displayDiv.appendChild(scheduleGrid);
}
