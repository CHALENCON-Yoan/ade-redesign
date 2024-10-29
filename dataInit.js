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

async function setNextLessonsDate() {
  const dateSelector = document.querySelector("#dateSelector");
  let currentDate = new Date();
  if (localStorage.getItem("lastResource") !== null) {
    while (!(await haveLessons(currentDate))) {
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  const adjustedDate = new Date(
    Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    )
  );
  dateSelector.valueAsDate = adjustedDate;

  setDays();

  await displayLessons(currentDate, localStorage.getItem("lastResource"));
}
