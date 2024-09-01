const DEV_MAIL = "yoan@ade-edt.fr";
const LOCALHOST = location.hostname == "127.0.0.1";
const BASE_URL = "request";
// "https://cors-anywhere.herokuapp.com/https://ade-uga-ro-vs.grenet.fr/jsp/webapi";
const PORJECT_ID = "3";
const PROJECT_DATA =
  "08281677eda1e7f64e2d372185934117103d4fbbeeae8daf5feb097f6d188a31fa91aec4c63f8a2413abf3eb0200af77893b24c3f0ea376490a4df59bbd7d7dac1ce1c636bfed8c261cddb98478bb779bd1ac4646cfd5693729bf4b8e78c5956e3959a1b8d7feaef71a4b247eddc63b2,1";

let resourcesMap = {};
let weekMap = {};

window.addEventListener("load", async () => {
  // Load Lottie file
  loadLottie();

  // Set the mode
  setMode(localStorage.getItem("mode"));

  // Allow to switch the mode
  switchMode();

  // Allow to open and close the sidebar
  sidebar();

  // Set the correct display (week/day)
  setWeekDayDisplay();

  // Display the schedule grid
  displayScheduleGrid();

  // Make the datalist for resources
  loader(true);
  await makeDatalist();

  // Get week map
  await getCalendar();

  // Restore resource value, set the next lesson date and display next lessons
  await restoreResourceValue();
  loader(false);

  loadEventListeners();
});

function loadLottie() {
  let animation = lottie.loadAnimation({
    container: document.getElementById("loaderImage"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/assets/loader.json",
  });
}

function getOppositeMode(mode) {
  if (mode === "dark") {
    return "light";
  }
  return "dark";
}

function setMode(mode) {
  // If mode is null, set it to default browser theme
  if (mode === null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      mode = "dark";
    else mode = "light";
    // mode = "light";
  }

  const oppositeMode = getOppositeMode(mode);

  // Save the mode in local storage
  localStorage.setItem("mode", mode);

  // Set/Change the mode on global elements
  modeElements = document.querySelectorAll(".mode");
  modeElements.forEach((element) => {
    element.classList.remove(`${oppositeMode}Mode`);
    element.classList.add(`${mode}Mode`);
  });

  // Set/Change the mode on input elements
  inputElements = document.querySelectorAll(".inputMode");
  inputElements.forEach((element) => {
    element.classList.remove(`${oppositeMode}ModeInput`);
    element.classList.add(`${mode}ModeInput`);
  });

  // Set/Change the mode on button elements
  buttonElements = document.querySelectorAll(".buttonMode");
  buttonElements.forEach((element) => {
    element.classList.remove(`${oppositeMode}ModeButton`);
    element.classList.add(`${mode}ModeButton`);
  });

  // Display right elements to match the mode
  modeDisplayElements = document.querySelectorAll(`.${mode}ModeDisplay`);
  modeDisplayElements.forEach((element) => {
    element.style.display = "block";
  });

  // Hide wrong elements that don't match the mode
  oppositeModeDisplayElements = document.querySelectorAll(
    `.${oppositeMode}ModeDisplay`
  );
  oppositeModeDisplayElements.forEach((element) => {
    element.style.display = "none";
  });

  // Set/Change the mode on mode switch buttons
  switchModeButton = document.querySelector("#switchDarkLightMode");
  switchModeButton.setAttribute(
    "src",
    `/assets/switchDarkLightMode/${mode}Mode.svg`
  );

  switchModeSidebar = document.querySelector(
    "#sidebarSwitchDarkLightMode > img"
  );
  switchModeSidebar.setAttribute(
    "src",
    `/assets/switchDarkLightMode/${mode}Mode.svg`
  );

  // Set the mode on the open sidebar button
  openSidebarButton = document.querySelector("#openSidebar");
  const oppositeModeWithUpperCase =
    oppositeMode.charAt(0).toUpperCase() + oppositeMode.slice(1);
  openSidebarButton.setAttribute(
    "src",
    `/assets/icons/openSidebar${oppositeModeWithUpperCase}.svg`
  );

  // Set the mode on the close sidebar button
  closeSidebarButton = document.querySelector("#closeSidebar");
  closeSidebarButton.setAttribute(
    "src",
    `/assets/icons/closeSidebar${oppositeModeWithUpperCase}.svg`
  );
}

function switchMode() {
  switchModeButton = document.querySelector("#switchDarkLightMode");
  switchModeSidebarButton = document.querySelector(
    "#sidebarSwitchDarkLightMode"
  );

  // Set the pressed image on mouse down
  switchModeButton.addEventListener("mousedown", () => {
    switchModeButton.setAttribute(
      "src",
      `/assets/switchDarkLightMode/${localStorage.getItem(
        "mode"
      )}ModePressed.svg`
    );
  });

  switchModeSidebarButton.addEventListener("mousedown", () => {
    document
      .querySelector("#sidebarSwitchDarkLightMode > img")
      .setAttribute(
        "src",
        `/assets/switchDarkLightMode/${localStorage.getItem(
          "mode"
        )}ModePressed.svg`
      );
  });

  // Switch the mode on click
  switchModeButton.addEventListener("click", () => {
    setMode(getOppositeMode(localStorage.getItem("mode")));
    refreshData();
  });

  switchModeSidebarButton.addEventListener("click", () => {
    setMode(getOppositeMode(localStorage.getItem("mode")));
    refreshData();
  });
}

function dragSidebarToClose() {
  let startX = 0;
  let currentX = 0;

  const sidebar = document.querySelector("#sidebar");

  sidebar.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
    sidebar.style.transition = "none";
  });

  sidebar.addEventListener("touchmove", (event) => {
    currentX = event.touches[0].clientX;
    const translateX = Math.max(0, currentX - startX);
    sidebar.style.transform = `translateX(${translateX}px)`;
  });

  sidebar.addEventListener("touchend", () => {
    const translateX = currentX - startX;
    sidebar.style.transition = "transform 0.3s ease-in-out";

    if (translateX > 100) {
      closeSidebar();
    } else {
      sidebar.style.transform = "translateX(0)";
    }
  });
}

function openSidebar() {
  const sidebar = document.querySelector("#sidebar");
  const backgroundBlur = document.querySelector("#backgroundBlur");

  sidebar.classList.add("sidebarActive");
  sidebar.style.transform = "translateX(0)";
  backgroundBlur.classList.add("backgroundBlurActive");

  dragSidebarToClose();
}

function closeSidebar() {
  const sidebar = document.querySelector("#sidebar");
  const backgroundBlur = document.querySelector("#backgroundBlur");

  sidebar.classList.remove("sidebarActive");
  sidebar.style.transform = "translateX(100%)";
  backgroundBlur.classList.remove("backgroundBlurActive");
}

function sidebar() {
  openSidebarButton = document.querySelector("#openSidebar");
  backgroundBlur = document.querySelector("#backgroundBlur");
  closeSidebarButton = document.querySelector("#closeSidebar");

  // To open the sidebar
  openSidebarButton.addEventListener("click", openSidebar);

  // To close the sidebar
  closeSidebarButton.addEventListener("click", closeSidebar);
  backgroundBlur.addEventListener("click", closeSidebar);
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
    weekDayDisplayButton.textContent = "Afficher un jour";
  } else {
    weekDayDisplaySidebarButton.textContent = "Afficher la semaine complète";
    weekDayDisplayButton.textContent = "Afficher la semaine";
  }
}

async function getCalendar() {
  let calendar;

  if (LOCALHOST) {
    calendar = calendarExample;
  } else {
    const request = await fetch(
      `${BASE_URL}?function=getCalendar&projectId=${PORJECT_ID}&data=${PROJECT_DATA}`
    );

    if (!request.ok) {
      console.error(
        `Une erreur est survenue lors du chargement de la page. Merci de prévenir le développeur à l'adresse ${DEV_MAIL} en indiquant le code erreur ER02-${request.status}.`
      );
      displayError("ER02", request);
      throw new Error(`HTTP error! Status: ${request.status}`);
    }
    calendar = await request.text();
  }

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(calendar, "text/xml");

  const weeks = xmlDoc.getElementsByTagName("week");

  for (let i = 0; i < weeks.length; i++) {
    weekMap[weeks[i].getAttribute("date")] = weeks[i].getAttribute("id") - 1;
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

async function makeDatalist() {
  let resourcesTree;
  if (LOCALHOST) {
    resourcesTree = xmlResourcesTreeExample;
  } else {
    const request = await fetch(
      `${BASE_URL}?function=getResources&tree=true&detail=3&projectId=${PORJECT_ID}&data=${PROJECT_DATA}`
    );

    if (!request.ok) {
      console.error(
        `Une erreur est survenue lors du chargement de la page. Merci de prévenir le développeur à l'adresse ${DEV_MAIL} en indiquant le code erreur ER01-${request.status}.`
      );
      displayError("ER01", request);
      throw new Error(`HTTP error! Status: ${request.status}`);
    }

    resourcesTree = await request.text();
  }

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(resourcesTree, "text/xml");

  let leafs = Array.from(xmlDoc.getElementsByTagName("leaf"));

  leafs = leafs.filter((leaf) => {
    return (
      leaf.getAttribute("category") === getRightCategory() &&
      (leaf.getAttribute("path").startsWith("CAMPUS Valence.VALENCE-IUT") ||
        leaf.getAttribute("path").startsWith("CAMPUS VALENCE.VALENCE-IUT") ||
        leaf.getAttribute("path").startsWith("IUT VALENCE")) &&
      !leaf.getAttribute("path").includes("temporaire")
    );
  });

  leafs.sort((a, b) => {
    return a.getAttribute("name").localeCompare(b.getAttribute("name"));
  });

  const datalist = document.querySelector("#resourcesList");
  leafs.forEach((leaf) => {
    resourcesMap[leaf.getAttribute("name")] = parseInt(leaf.getAttribute("id"));
    const option = document.createElement("option");
    option.value = leaf.getAttribute("name");
    datalist.appendChild(option);
  });
}

function getRightCategory() {
  if (document.title.includes("Étudiants")) {
    return "trainee";
  } else if (document.title.includes("Enseignants")) {
    return "instructor";
  } else if (document.title.includes("Salles")) {
    return "classroom";
  }
  return "";
}

async function restoreResourceValue() {
  const resourceInput = document.querySelector("#resourceSelector");
  const favoriteResource = localStorage.getItem("favoriteResource");
  if (favoriteResource !== null) {
    resourceInput.value = getResourceName(favoriteResource);
    localStorage.setItem("lastResource", favoriteResource);
  } else {
    const lastResource = localStorage.getItem("lastResource");
    if (lastResource !== null) {
      resourceInput.value = getResourceName(lastResource);
    }
  }

  await setNextLessonsDate();
}

function getResourceName(id) {
  for (const resource in resourcesMap) {
    if (resourcesMap[resource] == id) {
      return resource;
    }
  }
  return null;
}

async function setNextLessonsDate() {
  const dateSelector = document.querySelector("#dateSelector");
  let currentDate = new Date();
  if (localStorage.getItem("lastResource") !== null) {
    while (!(await haveLessons(currentDate))) {
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  dateSelector.valueAsDate = currentDate;

  setDays();

  await displayLessons(currentDate, localStorage.getItem("lastResource"));
}

async function haveLessons(date) {
  let result;
  if (LOCALHOST) {
    result = dayExample;
  } else {
    const request = await fetch(
      `${BASE_URL}?function=getEvents&resources=${localStorage.getItem(
        "lastResource"
      )}&projectId=${PORJECT_ID}&data=${PROJECT_DATA}&detail=8&date=${convertDate(
        date
      )}`
    );

    if (!request.ok) {
      console.error(
        `Une erreur est survenue lors du chargement de la page. Merci de prévenir le développeur à l'adresse ${DEV_MAIL} en indiquant le code erreur ER03-${request.status}.`
      );
      displayError("ER03", request);
      throw new Error(`HTTP error! Status: ${request.status}`);
    }

    result = await request.text();
  }
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(result, "text/xml");

  const events = xmlDoc.getElementsByTagName("event");
  if (events.length === 0) {
    return false;
  } else if (sameDay(date, new Date())) {
    let lastEndHour = events[0].getAttribute("endHour");
    for (let i = 1; i < events.length; i++) {
      if (events[i].getAttribute("endHour") > lastEndHour) {
        lastEndHour = events[i].getAttribute("endHour");
      }
    }
    if (lastEndHour.substring(0, 2) < date.getHours()) {
      return false;
    } else if (lastEndHour.substring(2, 4) < date.getMinutes()) {
      return false;
    }
  }

  return true;
}

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

async function displayLessons(date, resource) {
  if (localStorage.getItem("weekDisplay") == "true") {
    date.setDate(startWeekDate(date).getDate());
  }

  let frenchDate = convertFrenchDate(date);

  if (localStorage.getItem("weekDisplay") == "true") {
    let weekTree;
    if (LOCALHOST) {
      weekTree = weekExample;
    } else {
      const weekId = weekMap[frenchDate];
      const request = await fetch(
        `${BASE_URL}?function=getEvents&projectId=${PORJECT_ID}&data=${PROJECT_DATA}&weeks=${weekId}&resources=${resource}&detail=8`
      );

      if (!request.ok) {
        console.error(
          `Une erreur est survenue lors du chargement de la page. Merci de prévenir le développeur à l'adresse ${DEV_MAIL} en indiquant le code erreur ER04-${request.status}.`
        );
        displayError("ER04", request);
        throw new Error(`HTTP error! Status: ${request.status}`);
      }

      weekTree = await request.text();
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(weekTree, "text/xml");

    for (let i = 0; i < 5; i++) {
      const newFrenchDate = convertFrenchDate(
        i !== 0 ? date.setDate(date.getDate() + 1) : date
      );
      displayDay(xmlDoc, newFrenchDate, i + 1);
    }
  } else {
    let dayTree;
    if (LOCALHOST) {
      dayTree = dayExample;
    } else {
      const request = await fetch(
        `${BASE_URL}?function=getEvents&resources=${resource}&projectId=${PORJECT_ID}&data=${PROJECT_DATA}&detail=8&date=${convertDate(
          date
        )}`
      );

      if (!request.ok) {
        console.error(
          `Une erreur est survenue lors du chargement de la page. Merci de prévenir le développeur à l'adresse ${DEV_MAIL} en indiquant le code erreur ER05-${request.status}.`
        );
        displayError("ER05", request);
        throw new Error(`HTTP error! Status: ${request.status}`);
      }

      dayTree = await request.text();
    }
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(dayTree, "text/xml");

    displayDay(xmlDoc, frenchDate);
  }
}

function displayDay(xml, date, dayIndex = 1) {
  let events = Array.from(xml.getElementsByTagName("event"));

  events = events.filter((event) => {
    return event.getAttribute("date") === date;
  });

  if (events.length === 0) {
    displayBlankDay(dayIndex);
  } else {
    events.forEach((event) => {
      displayEvent(event, dayIndex);
    });
  }
}

function displayEvent(event, dayIndex) {
  let startHourId = `${event.getAttribute("startHour").substring(0, 2)}_${event
    .getAttribute("startHour")
    .substring(3, 5)}_${dayIndex}`;

  let shift = false;

  if (startHourId.substring(3, 5) == "15") {
    shift = true;
    startHourId =
      startHourId.substring(0, 3) + "00" + startHourId.substring(5, 8);
  } else if (startHourId.substring(3, 5) == "45") {
    shift = true;
    startHourId =
      startHourId.substring(0, 3) + "30" + startHourId.substring(5, 8);
  }

  const contentStartEvent = document.getElementById(startHourId);
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event");

  if (localStorage.getItem("weekDisplay") == "true") {
    eventDiv.classList.add("weekEvent");
  } else {
    eventDiv.classList.add("dayEvent");
  }

  const infos = event.getElementsByTagName("resource");

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = event.getAttribute("name");
  eventDiv.appendChild(name);

  const teacher = document.createElement("p");
  name.classList.add("teacher");
  const classroom = document.createElement("p");
  name.classList.add("classroom");
  const group = document.createElement("p");
  name.classList.add("group");
  const resource = document.createElement("p");
  name.classList.add("resource");

  for (let i = 0; i < infos.length; i++) {
    if (infos[i].getAttribute("category") === "trainee") {
      group.textContent = `${
        group.textContent.length === 0
          ? infos[i].getAttribute("name")
          : `${group.textContent}, ${infos[i].getAttribute("name")}`
      }`;
    } else if (infos[i].getAttribute("category") === "instructor") {
      teacher.textContent = `${
        teacher.textContent.length === 0
          ? infos[i].getAttribute("name")
          : `${teacher.textContent}, ${infos[i].getAttribute("name")}`
      }`;
    } else if (infos[i].getAttribute("category") === "category5") {
      resource.textContent = `${
        resource.textContent.length === 0
          ? infos[i].getAttribute("name")
          : `${resource.textContent}, ${infos[i].getAttribute("name")}`
      }`;
    } else if (infos[i].getAttribute("category") === "classroom") {
      classroom.textContent = `${
        classroom.textContent.length === 0
          ? infos[i].getAttribute("name")
          : `${classroom.textContent}, ${infos[i].getAttribute("name")}`
      }`;
    }
  }

  if (classroom.textContent.length != 0) {
    eventDiv.appendChild(classroom);
  }
  if (teacher.textContent.length != 0) {
    eventDiv.appendChild(teacher);
  }
  if (group.textContent.length != 0) {
    eventDiv.appendChild(group);
  }
  // if (resource.textContent.length != 0) {
  //   eventDiv.appendChild(resource);
  // }

  eventDiv.style.backgroundColor = `rgb(${checkColor(
    event.getAttribute("color")
  )})`;

  eventDiv.style.height = `${
    (parseInt(event.getAttribute("duration")) / 2) * 50 - 1
  }px`;

  if (shift) eventDiv.style.top = "25px";

  contentStartEvent.appendChild(eventDiv);
}

function displayBlankDay(dayIndex) {
  const startHourId = `07_30_${dayIndex}`;

  const contentStartEvent = document.getElementById(startHourId);
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event");
  eventDiv.classList.add("blankEvent");

  if (localStorage.getItem("weekDisplay") == "true") {
    eventDiv.classList.add("weekEvent");
  } else {
    eventDiv.classList.add("dayEvent");
  }

  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = "Aucun cours";
  eventDiv.appendChild(title);

  eventDiv.style.height = `${50 * 23 - 1}px`;

  if (localStorage.getItem("mode") == "dark") {
    eventDiv.style.backgroundColor = `rgba(55, 55, 55, 1)`;
  } else {
    eventDiv.style.backgroundColor = `rgba(200, 200, 200, 1)`;
  }

  contentStartEvent.appendChild(eventDiv);
}

async function refreshData() {
  const errorDiv = document.querySelector("#error");
  errorDiv.style.display = "none";

  document.querySelector("#scheduleGrid").remove();
  displayScheduleGrid();

  loader(true);

  const resourceInput = document.querySelector("#resourceSelector");
  const dateInput = document.querySelector("#dateSelector");
  if (resourceInput.value in resourcesMap) {
    localStorage.setItem("lastResource", resourcesMap[resourceInput.value]);
  } else if (parseInt(resourceInput.value)) {
    const resourceId = parseInt(resourceInput.value);
    const resourceName = getResourceName(resourceId);
    if (resourceName !== null) {
      resourceInput.value = resourceName;
    }
    localStorage.setItem("lastResource", resourceId);
  } else {
    localStorage.setItem("lastResource", null);
  }
  setDays();
  await displayLessons(
    new Date(dateInput.value),
    localStorage.getItem("lastResource")
  );
  loader(false);
  dragTimetableToChangeDate();
}

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
  const favoriteButton = document.querySelector("#favoriteButton");
  favoriteButton.addEventListener("click", favoriteResource);

  // Key Events
  addEventListener("keydown", (event) => keyPressed(event));

  // Drag timetable to change date
  dragTimetableToChangeDate();
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

async function nextLessons() {
  const date = new Date();
  while (!(await haveLessons(date))) {
    date.setDate(date.getDate() + 1);
  }
  document.querySelector("#dateSelector").valueAsDate = date;
  refreshData();
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

function setDays() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormatter = new Intl.DateTimeFormat("fr-FR", options);
  const date = document.querySelector("#dateSelector").valueAsDate;
  const days = document.querySelectorAll(".day");
  let startDate = date;
  if (localStorage.getItem("weekDisplay") == "true") {
    startDate = startWeekDate(date);
  }
  for (
    let i = 0;
    localStorage.getItem("weekDisplay") == "true" ? i < 5 : i < 1;
    i++
  ) {
    const day = days[i];
    i != 0 ? startDate.setDate(startDate.getDate() + 1) : startDate;

    day.textContent = dateFormatter.format(startDate);
  }
}

function startWeekDate(date) {
  let startDate = new Date(date);
  startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
  return startDate;
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

function dragTimetableToChangeDate() {
  let startX = 0;
  let currentX = 0;

  const scheduleGrid = document.querySelector("#scheduleGrid");

  scheduleGrid.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
    currentX = event.touches[0].clientX;
  });

  scheduleGrid.addEventListener("touchmove", (event) => {
    currentX = event.touches[0].clientX;
  });

  scheduleGrid.addEventListener("touchend", () => {
    const translateX = currentX - startX;
    if (Math.abs(translateX) > 200) {
      if (currentX > startX) {
        previousDate();
      } else {
        nextDate();
      }
    }
  });
}

function displayError(code, error) {
  const emailLink = document.querySelector("#linkForErrorMail");
  emailLink.setAttribute(
    "href",
    `mailto:${DEV_MAIL}?subject=[${code}-${error.status}]%20J%27ai%20rencontré%20une%20erreur%20sur%20${document.location.host}&body=J%27ai%20rencontré%20une%20erreur%20lors%20de%20ma%20navigation%20sur%20le%20site%20${document.location.origin}.%20J%27étais%20sur%20la%20page%20${document.location.pathname}%20et%20j%27ai%20obtenu%20une%20erreur%20${error.status}%20avec%20le%20code%20${code}.`
  );

  const errorCodeDisplay = document.querySelector("#errorCode");
  errorCodeDisplay.textContent = `${code}-${error.status}`;

  const errorDiv = document.querySelector("#error");
  errorDiv.style.display = "flex";
}

function loader(visible) {
  const loaderDiv = document.querySelector("#loader");
  if (visible) {
    loaderDiv.style.display = "flex";
  } else {
    loaderDiv.style.display = "none";
  }
}

function checkColor(color) {
  const rgb = color.split(",").map(Number);
  const [r, g, b] = rgb;

  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  const luminance = a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;

  const threshold = 0.25;

  const mode = localStorage.getItem("mode");
  if (mode == "light" && luminance < threshold) return lightenColor(color, 0.5);
  else if (mode == "dark" && luminance > 0.4) return darkenColor(color, 0.5);

  return color;
}

function lightenColor(color, percent) {
  const rgb = color.split(",");
  for (let i = 0; i < rgb.length; i++) {
    rgb[i] = Math.min(
      255,
      Math.floor(parseInt(rgb[i]) + (255 - parseInt(rgb[i])) * percent)
    );
  }
  return rgb.join(",");
}

function darkenColor(color, percent) {
  const rgb = color.split(",");
  for (let i = 0; i < rgb.length; i++) {
    rgb[i] = Math.max(0, Math.floor(parseInt(rgb[i]) * (1 - percent)));
  }
  return rgb.join(",");
}
