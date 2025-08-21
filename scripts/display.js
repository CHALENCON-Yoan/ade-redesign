async function displayLessons(date, resource) {
  if (localStorage.getItem("weekDisplay") == "true") {
    date = weekStartkDate(date);
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
    startDate = weekStartkDate(date);
    days.forEach((day) => {
      day.style.width = "20%";
    });
  } else {
    days.forEach((day) => {
      day.style.width = "100%";
    });
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
