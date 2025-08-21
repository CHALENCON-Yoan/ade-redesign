function getResourceName(id) {
  for (const resource in resourcesMap) {
    if (resourcesMap[resource] == id) {
      return resource;
    }
  }
  return null;
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
    const [lastEndHourHours, lastEndHourMinutes] = lastEndHour
      .split(":")
      .map(Number);
    if (
      (lastEndHourHours == date.getHours() &&
        lastEndHourMinutes <= date.getMinutes()) ||
      lastEndHourHours < date.getHours()
    ) {
      return false;
    }
  }

  return true;
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
