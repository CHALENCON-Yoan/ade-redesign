const LOCALHOST = true;
const BASE_URL = "request";
const PORJECT_ID = "3";
const PROJECT_DATA =
  "08281677eda1e7f64e2d372185934117103d4fbbeeae8daf5feb097f6d188a31fa91aec4c63f8a2413abf3eb0200af77893b24c3f0ea376490a4df59bbd7d7dac1ce1c636bfed8c261cddb98478bb779bd1ac4646cfd5693729bf4b8e78c5956e3959a1b8d7feaef71a4b247eddc63b2,1";

let touchStartX = 0;
let touchEndX = 0;

// Fonction appelée lorsqu'un utilisateur commence à toucher l'écran
function handleTouchStart(event) {
  console.log("touchstart");
  touchStartX = event.touches[0].clientX;
}

// Fonction appelée lorsqu'un utilisateur arrête de toucher l'écran
function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
}

// Fonction pour déterminer la direction du swipe et appeler la fonction appropriée
function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;
  const threshold = 100; // Seuil pour considérer un swipe comme valide

  const selectedDate = new Date(document.getElementById("dateSelector").value);

  if (swipeDistance > threshold) {
    // Swipe vers la droite
    if (weekDisplay) {
      const newDate = selectedDate;
      newDate.setDate(newDate.getDate() - 7);
      document.getElementById("dateSelector").valueAsDate = newDate;
      const selectedResource =
        document.getElementById("resourceSelector").value;
      launchDisplay(newDate, selectedResource);
    } else {
      const newDate = previousDate(selectedDate);
      document.getElementById("dateSelector").valueAsDate = newDate;
      const selectedResource =
        document.getElementById("resourceSelector").value;
      launchDisplay(newDate, selectedResource);
    }
  } else if (swipeDistance < -threshold) {
    // Swipe vers la gauche
    if (weekDisplay) {
      const newDate = selectedDate;
      newDate.setDate(newDate.getDate() + 7);
      document.getElementById("dateSelector").valueAsDate = newDate;
      const selectedResource =
        document.getElementById("resourceSelector").value;
      launchDisplay(newDate, selectedResource);
    } else {
      const newDate = nextDate(selectedDate);
      document.getElementById("dateSelector").valueAsDate = newDate;
      const selectedResource =
        document.getElementById("resourceSelector").value;
      launchDisplay(newDate, selectedResource);
    }
  }
}

function getSavedView() {
  if (localStorage.getItem("weekDisplay") === "true") {
    return true;
  } else {
    localStorage.setItem("weekDisplay", false);
    return false;
  }
}

let weekDisplay = getSavedView();

function datalistCondition() {
  const title = document.title;
  if (title === "Emploi du temps" || title === "EDT - Groups") {
    return "trainee";
  }
  if (title === "EDT - Classrooms") {
    return "classroom";
  }
  if (title === "EDT - Teachers") {
    return "instructor";
  }
  if (title === "EDT - Resources") {
    return "category5";
  }
}

async function makeDatalist() {
  let resourceTreeXml;
  if (LOCALHOST) {
    resourceTreeXml = xmlDataResourcesTree;
  } else {
    const request = await fetch(
      `${BASE_URL}?function=getResources&tree=true&detail=3&projectId=${PORJECT_ID}&data=${PROJECT_DATA}`
    );

    if (!request.ok) {
      throw new Error(`Erreur HTTP ! Statut : ${request.status}`);
    } else {
      console.log("Requête effectuée avec succès !");
    }
    resourceTreeXml = await request.text();
  }
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(resourceTreeXml, "text/xml");

  let leafs = Array.from(xmlDoc.getElementsByTagName("leaf"));
  console.log(leafs.length);

  leafs = leafs.filter((leaf) => {
    return (
      leaf.getAttribute("category") === "trainee" &&
      leaf.getAttribute("path").startsWith("CAMPUS Valence.VALENCE-IUT")
    );
  });
  console.log(leafs.length);
  leafs.sort((a, b) =>
    a.getAttribute("name").localeCompare(b.getAttribute("name"))
  );

  const datalist = document.getElementById("resourcesList");
  for (let i = 0; i < leafs.length; i++) {
    if (
      document.title === "EDT - All" ||
      leafs[i].getAttribute("category") === datalistCondition()
    ) {
      const option = document.createElement("option");
      option.value = leafs[i].getAttribute("id");
      option.textContent = leafs[i].getAttribute("name");
      datalist.appendChild(option);
    }
  }
}

async function endHourCurrentDay(date, resource) {
  const dayScheduleXml = await xmlRequest(date, resource);
  // const dayScheduleXml = await scheduleData;
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(dayScheduleXml, "text/xml");
  const events = Array.from(xmlDoc.getElementsByTagName("event"));
  if (events.length != 0) {
    let endHourDay = events[0].getAttribute("endHour");
    for (let i = 1; i < events.length; i++) {
      if (events[i].getAttribute("endHour") > endHourDay) {
        endHourDay = events[i].getAttribute("endHour");
      }
    }
    return endHourDay;
  } else {
    return "23:59";
  }
}

async function nextDay() {
  const currentDate = new Date();
  const endHour = await endHourCurrentDay(
    currentDate,
    localStorage.getItem("selectedResource")
  );
  const endHours = `${endHour[0]}${endHour[1]}`;
  const endMinutes = `${endHour[3]}${endHour[4]}`;
  if (endHours < currentDate.getHours()) {
    return true;
  } else if (
    endHours == currentDate.getHours() &&
    endMinutes < currentDate.getMinutes()
  ) {
    return true;
  } else {
    return false;
  }
}

function scheduleGrid() {
  const displayDiv = document.getElementById("display");
  const timeline = document.createElement("div");
  timeline.setAttribute("id", "timeline");
  for (let i = 7; i <= 19; i++) {
    for (let j = 0; j <= 1; j++) {
      if (i != 7 || j != 0) {
        if (i != 19 || j != 1) {
          const halfHourDiv = document.createElement("div");
          halfHourDiv.classList.add("halfHour");
          timeline.appendChild(halfHourDiv);
          const hourDiv = document.createElement("div");
          hourDiv.classList.add("hour");
          hourDiv.textContent = i + "h" + (j === 0 ? "00" : "30");
          halfHourDiv.appendChild(hourDiv);
          for (let k = 1; weekDisplay ? k <= 5 : k <= 1; k++) {
            const content = document.createElement("div");
            const idHour = `${i < 10 ? `0${i}` : i}_${
              j === 0 ? "00" : "30"
            }_${k}`;
            content.classList.add("content");
            content.setAttribute("id", idHour);
            halfHourDiv.appendChild(content);
          }
        }
      }
    }
  }
  displayDiv.appendChild(timeline);
}

function addEvent(event, day) {
  const startHour = `${event.getAttribute("startHour")[0]}${
    event.getAttribute("startHour")[1]
  }_${event.getAttribute("startHour")[3]}${
    event.getAttribute("startHour")[4]
  }_${day}`;

  const contentStartEvent = document.getElementById(startHour);
  const divEvent = document.createElement("div");
  divEvent.classList.add("event");

  const infos = event.getElementsByTagName("resource");

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = event.getAttribute("name");
  divEvent.appendChild(name);

  const prof = document.createElement("p");
  name.classList.add("prof");
  const salle = document.createElement("p");
  name.classList.add("salle");
  const groupe = document.createElement("p");
  name.classList.add("groupe");
  const ressource = document.createElement("p");
  name.classList.add("ressource");

  for (let i = 0; i < infos.length; i++) {
    if (infos[i].getAttribute("category") == "trainee") {
      groupe.textContent = `${
        groupe.textContent.length === 0
          ? infos[i].getAttribute("name")
          : `${groupe.textContent}, ${infos[i].getAttribute("name")}`
      }`;
    } else if (infos[i].getAttribute("category") == "instructor") {
      prof.textContent = `${
        prof.textContent.length === 0
          ? infos[i].getAttribute("name")
          : `${prof.textContent}, ${infos[i].getAttribute("name")}`
      }`;
    } else if (infos[i].getAttribute("category") == "category5") {
      ressource.textContent = `${
        ressource.textContent.length === 0
          ? infos[i].getAttribute("name")
          : `${ressource.textContent}, ${infos[i].getAttribute("name")}`
      }`;
    } else if (infos[i].getAttribute("category") == "classroom") {
      salle.textContent = `${
        salle.textContent.length === 0
          ? infos[i].getAttribute("name")
          : `${salle.textContent}, ${infos[i].getAttribute("name")}`
      }`;
    }
  }
  if (prof.textContent.length != 0) {
    divEvent.appendChild(prof);
  }
  if (salle.textContent.length != 0) {
    divEvent.appendChild(salle);
  }
  if (groupe.textContent.length != 0) {
    divEvent.appendChild(groupe);
  }
  if (ressource.textContent.length != 0) {
    divEvent.appendChild(ressource);
  }

  // Vérifier la couleur
  const couleur = `rgb(${colorCheck(event.getAttribute("color"))})`;
  divEvent.style.backgroundColor = couleur;

  divEvent.style.height = `${
    (parseInt(event.getAttribute("duration")) / 2) * 50 - 1
  }px`;
  contentStartEvent.appendChild(divEvent);
}

function colorCheck(color) {
  const rgb = color.split(",");
  const brightness =
    (parseInt(rgb[0]) * 0.299 +
      parseInt(rgb[1]) * 0.587 +
      parseInt(rgb[2]) * 0.114) /
    255;
  if (brightness < 0.3) {
    // console.log("Couleur de base :", color);
    // console.log("Luminostié :", brightness);
    const newColor = rgb;
    for (let i = 0; i < 3; i++) {
      newColor[i] =
        parseInt(newColor[i]) + 80 > 255
          ? "255"
          : (parseInt(newColor[i]) + 80).toString();
    }
    // console.log("Nouvelle couleur :", newColor.join(","));
    return newColor.join(",");
  } else {
    return color;
  }
}

function displayNoLesson(day) {
  const startEvent = document.getElementById(`07_30_${day}`);
  const noLesson = document.createElement("div");
  noLesson.classList.add("noLesson", "event");
  noLesson.style.height = "1150px";
  const noLessonText = document.createElement("p");
  const noLessonEmote1 = document.createElement("p");
  const noLessonEmote2 = document.createElement("p");
  noLessonText.textContent = "Aucun cours aujourd'hui !";
  noLessonEmote1.textContent = "🥳";
  noLessonEmote2.textContent = "💤";
  noLessonEmote1.classList.add("emote");
  noLessonEmote2.classList.add("emote");
  noLesson.appendChild(noLessonEmote1);
  noLesson.appendChild(noLessonText);
  noLesson.appendChild(noLessonEmote2);
  startEvent.appendChild(noLesson);
}

function displaySchedule(xmlData, day) {
  // Ajoute les événements
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, "text/xml");
  const events = xmlDoc.getElementsByTagName("event");
  if (events.length === 0) {
    displayNoLesson(day);
    console.warn("C'est ce qu'on appelle le chômage !");
  } else {
    for (let i = 0; i < events.length; i++) {
      addEvent(events[i], day);
    }
  }
}

function displayInfos(date, resource) {
  const currentDaysAlreadyPresent = Array.from(
    document.getElementsByClassName("currentDay")
  );
  currentDaysAlreadyPresent.forEach((day) => day.remove());

  const widthContent = document.getElementById("07_30_1").offsetWidth;

  const days = document.getElementById("days");
  const currentDate = weekDisplay ? startWeek(date) : new Date(date);
  for (let i = 1; weekDisplay ? i <= 5 : i <= 1; i++) {
    const currentDay = document.createElement("h1");
    currentDay.classList.add("currentDay");
    currentDay.textContent = currentDate.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    currentDay.style.width = `${widthContent}px`;
    days.appendChild(currentDay);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const h2_resource = document.getElementById("currentResource");
  h2_resource.textContent = `Ressource : ${resource}`;
}

async function xmlRequest(date, resource) {
  // Convertir la date en format MM/JJ/AAAA
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const dateFormatted = `${month < 10 ? `0${month}` : month}/${
    day < 10 ? `0${day}` : day
  }/${year}`;

  let xml;
  if (LOCALHOST) {
    // En local :
    xml = scheduleData;
  } else {
    // Réalisation de la requête
    const loadingDiv = document.getElementById("loading");
    loadingDiv.style.display = "block";
    const request = await fetch(
      `${BASE_URL}?function=getEvents&resources=${resource}&detail=8&date=${dateFormatted}&projectId=${PORJECT_ID}&data=${PROJECT_DATA}`
    );

    if (!request.ok) {
      throw new Error(`Erreur HTTP ! Statut : ${request.status}`);
    } else {
      console.log("Requête effectuée avec succès !");
      loadingDiv.style.display = "none";
    }

    xml = await request.text();
  }

  return xml;
}

function nextDate(date) {
  if (date.getDay() == 5) {
    date.setDate(date.getDate() + 3);
  } else if (date.getDay() == 6) {
    date.setDate(date.getDate() + 2);
  } else {
    date.setDate(date.getDate() + 1);
  }
  return date;
}

function previousDate(date) {
  if (date.getDay() == 1) {
    date.setDate(date.getDate() - 3);
  } else if (date.getDay() == 0) {
    date.setDate(date.getDate() - 2);
  } else {
    date.setDate(date.getDate() - 1);
  }
  return date;
}

async function firstDate() {
  const currentDate = new Date();
  if (currentDate.getDay() == 6) {
    currentDate.setDate(currentDate.getDate() + 2);
  } else if (currentDate.getDay() == 5 && (await nextDay())) {
    currentDate.setDate(currentDate.getDate() + 3);
  } else if (currentDate.getDay() == 0 || (await nextDay())) {
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return currentDate;
}

function startWeek(date) {
  if (date.getDay() == 1) {
    return date;
  } else if (date.getDay() == 0) {
    const startWeekDate = date;
    startWeekDate.setDate(startWeekDate.getDate() - 6);
    return startWeekDate;
  } else {
    const startWeekDate = date;
    startWeekDate.setDate(date.getDate() - (date.getDay() - 1));
    return startWeekDate;
  }
}

async function launchDisplay(date, resource) {
  // Supprime les cours présents
  const eventsAlreadyPresent = Array.from(
    document.getElementsByClassName("event")
  );
  eventsAlreadyPresent.forEach((event) => event.remove());
  displayInfos(date, resource);

  if (weekDisplay) {
    let currentDate = startWeek(date);
    for (let i = 1; i <= 5; i++) {
      const xmlContent = await xmlRequest(currentDate, resource);
      displaySchedule(xmlContent, i);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  } else {
    const xmlContent = await xmlRequest(date, resource);
    displaySchedule(xmlContent, 1);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  // Au chargement de la page
  makeDatalist();
  scheduleGrid();
  const selectedResource = localStorage.getItem("selectedResource")
    ? localStorage.getItem("selectedResource")
    : null;
  document.getElementById("resourceSelector").value = selectedResource;
  const displayDate = await firstDate();
  document.getElementById("dateSelector").valueAsDate = displayDate;
  launchDisplay(displayDate, selectedResource);

  // Au changement de la date dans le sélecteur
  document
    .getElementById("dateSelector")
    .addEventListener("change", async function () {
      const selectedResource =
        document.getElementById("resourceSelector").value;
      // xmlContent = await xmlRequest(new Date(this.value), selectedResource);
      // displaySchedule(xmlContent);
      // displayInfos(new Date(this.value), selectedResource);
      launchDisplay(new Date(this.value), selectedResource);
    });

  // Au clic sur le bouton précédent
  document
    .getElementById("previousDate")
    .addEventListener("click", async function () {
      const selectedDate = new Date(
        document.getElementById("dateSelector").value
      );
      if (weekDisplay) {
        const newDate = selectedDate;
        newDate.setDate(newDate.getDate() - 7);
        document.getElementById("dateSelector").valueAsDate = newDate;
        const selectedResource =
          document.getElementById("resourceSelector").value;
        launchDisplay(newDate, selectedResource);
      } else {
        const newDate = previousDate(selectedDate);
        document.getElementById("dateSelector").valueAsDate = newDate;
        const selectedResource =
          document.getElementById("resourceSelector").value;
        launchDisplay(newDate, selectedResource);
      }
      // xmlContent = await xmlRequest(selectedDate, selectedResource);
      // displaySchedule(xmlContent);
      // displayInfos(selectedDate, selectedResource);
    });

  // Au clic sur le bouton suivant
  document
    .getElementById("nextDate")
    .addEventListener("click", async function () {
      const selectedDate = new Date(
        document.getElementById("dateSelector").value
      );
      if (weekDisplay) {
        const newDate = selectedDate;
        newDate.setDate(newDate.getDate() + 7);
        document.getElementById("dateSelector").valueAsDate = newDate;
        const selectedResource =
          document.getElementById("resourceSelector").value;
        launchDisplay(newDate, selectedResource);
      } else {
        const newDate = nextDate(selectedDate);
        document.getElementById("dateSelector").valueAsDate = newDate;
        const selectedResource =
          document.getElementById("resourceSelector").value;
        launchDisplay(newDate, selectedResource);
      }
      // xmlContent = await xmlRequest(selectedDate, selectedResource);
      // displaySchedule(xmlContent);
      // displayInfos(selectedDate, selectedResource);
    });

  // Au clic sur le bouton today
  document.getElementById("today").addEventListener("click", async function () {
    const currentDate = await firstDate();
    document.getElementById("dateSelector").valueAsDate = currentDate;
    const selectedResource = document.getElementById("resourceSelector").value;
    // xmlContent = await xmlRequest(currentDate, selectedResource);
    // displaySchedule(xmlContent);
    // displayInfos(currentDate, selectedResource);
    launchDisplay(currentDate, selectedResource);
  });

  // Au changement de la ressource dans le sélecteur
  document
    .getElementById("resourceSelector")
    .addEventListener("change", async function () {
      localStorage.setItem("selectedResource", this.value);
      const selectedDate = new Date(
        document.getElementById("dateSelector").value
      );
      // xmlContent = await xmlRequest(selectedDate, this.value);
      // displaySchedule(xmlContent);
      // displayInfos(selectedDate, this.value);
      launchDisplay(selectedDate, this.value);
    });

  document.getElementById("1day").addEventListener("click", function () {
    localStorage.setItem("weekDisplay", "false");
    const timeline = document.getElementById("timeline");
    timeline.remove();
    weekDisplay = false;
    scheduleGrid();
    const selectedDate = new Date(
      document.getElementById("dateSelector").value
    );
    const selectedResource = document.getElementById("resourceSelector").value;
    launchDisplay(selectedDate, selectedResource);
  });

  document.getElementById("week").addEventListener("click", function () {
    localStorage.setItem("weekDisplay", "true");
    const timeline = document.getElementById("timeline");
    timeline.remove();
    weekDisplay = true;
    scheduleGrid();
    const selectedDate = new Date(
      document.getElementById("dateSelector").value
    );
    const selectedResource = document.getElementById("resourceSelector").value;
    launchDisplay(selectedDate, selectedResource);
  });

  // Au clic sur le bouton plein écran
  document
    .querySelector("#fullScreen")
    .addEventListener("click", () =>
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen()
    );

  // À l'appui sur les flèches
  addEventListener("keydown", (event) => {
    const selectedDate = new Date(
      document.getElementById("dateSelector").value
    );

    if (event.key === "ArrowLeft") {
      if (weekDisplay) {
        const newDate = selectedDate;
        newDate.setDate(newDate.getDate() - 7);
        document.getElementById("dateSelector").valueAsDate = newDate;
        const selectedResource =
          document.getElementById("resourceSelector").value;
        launchDisplay(newDate, selectedResource);
      } else {
        const newDate = previousDate(selectedDate);
        document.getElementById("dateSelector").valueAsDate = newDate;
        const selectedResource =
          document.getElementById("resourceSelector").value;
        launchDisplay(newDate, selectedResource);
      }
    } else if (event.key === "ArrowRight") {
      if (weekDisplay) {
        const newDate = selectedDate;
        newDate.setDate(newDate.getDate() + 7);
        document.getElementById("dateSelector").valueAsDate = newDate;
        const selectedResource =
          document.getElementById("resourceSelector").value;
        launchDisplay(newDate, selectedResource);
      } else {
        const newDate = nextDate(selectedDate);
        document.getElementById("dateSelector").valueAsDate = newDate;
        const selectedResource =
          document.getElementById("resourceSelector").value;
        launchDisplay(newDate, selectedResource);
      }
    }
    // xmlContent = await xmlRequest(selectedDate, selectedResource);
    // displaySchedule(xmlContent);
    // displayInfos(selectedDate, selectedResource);
  });
  document
    .getElementById("imageDownload")
    .addEventListener("click", function () {
      // Sélectionnez la div contenant l'emploi du temps
      const element = document.getElementById("display");

      // Utilisez html2canvas pour capturer l'élément en tant qu'image
      html2canvas(element).then(function (canvas) {
        // Convertissez le canevas en une URL de données
        const imgData = canvas.toDataURL("image/png");

        // Créez un élément <a> pour télécharger l'image
        const link = document.createElement("a");
        link.download = "emploiDuTemps.png";
        link.href = imgData;
        link.click();
      });
    });

  const timetableContainer = document.getElementById("display");
  timetableContainer.addEventListener("touchstart", handleTouchStart);
  timetableContainer.addEventListener("touchend", handleTouchEnd);
});
