function loadEventListeners() {
  // Resource update
  const resourceInput = document.querySelector("#resourceSelector");
  resourceInput.addEventListener("change", refreshData);

  // Date update
  const dateInput = document.querySelector("#dateSelector");
  dateInput.addEventListener("change", refreshData);

  // Previous date
  const previousDateButton = document.querySelector("#previousButton");
  previousDateButton.addEventListener("click", previousDate);

  // Next date
  const nextDateButton = document.querySelector("#nextButton");
  nextDateButton.addEventListener("click", nextDate);

  // Next lessons
  const nextLessonsButtons = document.querySelectorAll(".nextLessonsButton");
  nextLessonsButtons.forEach((button) => {
    button.addEventListener("click", nextLessons);
  });

  // Week/Day display
  const weekDayDisplayButton = document.querySelectorAll(
    ".weekDayDisplayButton"
  );
  weekDayDisplayButton.forEach((button) => {
    button.addEventListener("click", changeDisplay);
  });

  // Full Screen
  const fullScreenButtons = document.querySelectorAll(".fullScreenButton");
  fullScreenButtons.forEach((button) => {
    button.addEventListener("click", fullScreen);
  });

  // Download
  const downloadButtons = document.querySelectorAll(".downloadButton");
  downloadButtons.forEach((button) => {
    button.addEventListener("click", downloadAsImage);
  });

  // Favorite
  const favoriteButtons = document.querySelectorAll(".favoriteButton");
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", favoriteResource);
  });

  // Key Events
  addEventListener("keydown", (event) => keyPressed(event));

  // Drag timetable to change date
  dragTimetableToChangeDate();
}

function changeDisplay() {
  const weekDayDisplaySidebarButton = document.querySelector(
    "#weekDayDisplaySidebarButton > span"
  );
  const weekDayDisplayButton = document.querySelector("#weekDayDisplayButton");

  if (localStorage.getItem("weekDisplay") == "true") {
    localStorage.setItem("weekDisplay", false);
    weekDayDisplaySidebarButton.textContent = "Afficher la semaine complète";
    weekDayDisplayButton.textContent = "Afficher la semaine";
  } else {
    localStorage.setItem("weekDisplay", true);
    weekDayDisplaySidebarButton.textContent = "Afficher un seul jour";
    weekDayDisplayButton.textContent = "Afficher un jour";
  }
  refreshData();
}

function fullScreen() {
  document.fullscreenElement
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen();
}

function downloadAsImage() {
  const timetable = document.querySelector("#display");

  html2canvas(timetable, { scale: 4 }).then(function (canvas) {
    let link = document.createElement("a");
    link.download = "Emploi du temps.jpeg";
    link.href = canvas.toDataURL("image/jpeg", 1);

    link.click();
  });
}

function favoriteResource() {
  const resourceInput = document.querySelector("#resourceSelector");

  if (parseInt(resourceInput.value)) {
    localStorage.setItem("favoriteResource", parseInt(resourceInput.value));
  } else if (resourceInput.value in resourcesMap) {
    localStorage.setItem("favoriteResource", resourcesMap[resourceInput.value]);
  } else {
    localStorage.setItem("favoriteResource", null);
  }
}

function keyPressed(event) {
  if (event.target.tagName.toLowerCase() != "input") {
    if (event.key === "ArrowRight") {
      nextDate();
    } else if (event.key === "ArrowLeft") {
      previousDate();
    } else if (event.key === "f") {
      fullScreen();
    }
  }
}

async function nextLessons() {
  loader(true);
  const date = new Date();
  console.log(localStorage.getItem("lastResource"));
  if (
    localStorage.getItem("lastResource") !== "null" &&
    localStorage.getItem("lastResource") !== null
  ) {
    while (date < MAX_DATE && !(await haveLessons(date))) {
      date.setDate(date.getDate() + 1);
    }
  }
  const adjustedDate = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  document.querySelector("#dateSelector").valueAsDate = adjustedDate;
  refreshData();
}
