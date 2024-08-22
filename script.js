const BASE_URL = "request";
const PORJECT_ID = "3";
const PROJECT_DATA =
  "08281677eda1e7f64e2d372185934117103d4fbbeeae8daf5feb097f6d188a31fa91aec4c63f8a2413abf3eb0200af77893b24c3f0ea376490a4df59bbd7d7dac1ce1c636bfed8c261cddb98478bb779bd1ac4646cfd5693729bf4b8e78c5956e3959a1b8d7feaef71a4b247eddc63b2,1";

const scheduleData = `<?xml version="1.0" encoding="UTF-8"?>
<events>
	<event id="12698" activityId="10067" session="0" repetition="1" name="DÃ©veloppement d&apos;applications avec IHM" endHour="18:30" startHour="17:00" date="05/02/2024" absoluteSlot="3619" slot="19" day="0" week="24" additionalResources="0" duration="3" info="" note="" color="255,51,51" isLockPosition="false" oldDuration="3" oldSlot="4" oldDay="1" oldWeek="24" lastUpdate="01/25/2024 10:28" creation="07/18/2023 07:07" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="58424" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD1-TP1B" id="67"/>
			<resource fromWorkflow="false" nodeId="29027" nodeOrId="-1" quantity="1" category="instructor" name="MOKNI YANIS" id="6268"/>
			<resource fromWorkflow="false" nodeId="58421" nodeOrId="-1" quantity="1" category="category5" name="R2.02 DÃ©veloppement d&apos;applications avec IHM" id="623"/>
			<resource fromWorkflow="false" nodeId="58423" nodeOrId="58422" quantity="1" category="classroom" name="B102" id="60"/>
		</resources>
		<additional/>
	</event>
	<event id="10222" activityId="10072" session="0" repetition="1" name="DÃ©veloppement d&apos;applications avec IHM" endHour="17:00" startHour="16:00" date="05/02/2024" absoluteSlot="3617" slot="17" day="0" week="24" additionalResources="0" duration="2" info="" note="" color="255,51,51" isLockPosition="false" oldDuration="2" oldSlot="1" oldDay="0" oldWeek="23" lastUpdate="11/30/2023 11:02" creation="07/18/2023 07:07" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="58449" nodeOrId="-1" quantity="1" category="trainee" name="INFO1" id="24"/>
			<resource fromWorkflow="false" nodeId="34430" nodeOrId="-1" quantity="1" category="instructor" name="GENTHIAL DAMIEN" id="3689"/>
			<resource fromWorkflow="false" nodeId="58446" nodeOrId="-1" quantity="1" category="category5" name="R2.02 DÃ©veloppement d&apos;applications avec IHM" id="623"/>
			<resource fromWorkflow="false" nodeId="58454" nodeOrId="58450" quantity="1" category="classroom" name="C001" id="113"/>
		</resources>
		<additional/>
	</event>
	<event id="12810" activityId="705" session="0" repetition="1" name="DÃ©veloppement orientÃ© objet" endHour="12:30" startHour="11:00" date="05/02/2024" absoluteSlot="3607" slot="7" day="0" week="24" additionalResources="0" duration="3" info="" note="" color="0,0,255" isLockPosition="false" oldDuration="3" oldSlot="1" oldDay="0" oldWeek="24" lastUpdate="01/08/2024 10:08" creation="07/18/2023 07:07" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="20717" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD1" id="59"/>
			<resource fromWorkflow="false" nodeId="20378" nodeOrId="-1" quantity="1" category="instructor" name="OCCELLO MICHEL" id="5294"/>
			<resource fromWorkflow="false" nodeId="57466" nodeOrId="-1" quantity="1" category="category5" name="R2.01 DÃ©veloppement orientÃ© objets" id="1534"/>
			<resource fromWorkflow="false" nodeId="23633" nodeOrId="23424" quantity="1" category="classroom" name="B116" id="80"/>
		</resources>
		<additional/>
	</event>
	<event id="12674" activityId="2120" session="0" repetition="1" name="Communication technique" endHour="15:30" startHour="14:00" date="05/02/2024" absoluteSlot="3613" slot="13" day="0" week="24" additionalResources="0" duration="3" info="" note="" color="217,0,217" isLockPosition="false" oldDuration="3" oldSlot="7" oldDay="0" oldWeek="26" lastUpdate="07/19/2023 08:49" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="21159" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD1" id="59"/>
			<resource fromWorkflow="false" nodeId="20635" nodeOrId="-1" quantity="1" category="instructor" name="DE SAUZA GUILLAUME" id="2834"/>
			<resource fromWorkflow="false" nodeId="57607" nodeOrId="-1" quantity="1" category="category5" name="R2.13 Communication technique" id="1037"/>
			<resource fromWorkflow="false" nodeId="38065" nodeOrId="38026" quantity="1" category="classroom" name="B121" id="81"/>
		</resources>
		<additional/>
	</event>
	<event id="12630" activityId="1772" session="0" repetition="1" name="Anglais" endHour="11:00" startHour="09:30" date="05/02/2024" absoluteSlot="3604" slot="4" day="0" week="24" additionalResources="0" duration="3" info="" note="" color="255,51,153" isLockPosition="false" oldDuration="3" oldSlot="4" oldDay="4" oldWeek="24" lastUpdate="01/26/2024 08:34" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="21133" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD1" id="59"/>
			<resource fromWorkflow="false" nodeId="20623" nodeOrId="-1" quantity="1" category="instructor" name="METGE CECILE" id="4990"/>
			<resource fromWorkflow="false" nodeId="57598" nodeOrId="-1" quantity="1" category="category5" name="R2.12 Anglais" id="721"/>
			<resource fromWorkflow="false" nodeId="38004" nodeOrId="37967" quantity="1" category="classroom" name="B118" id="22"/>
		</resources>
		<additional/>
	</event>
</events>`;

const scheduleDataNoLesson = `<?xml version="1.0" encoding="UTF-8"?>
<events>
</events>`;

const scheduleDataDoubleResource = `<?xml version="1.0" encoding="UTF-8"?>
<events>
	<event id="12866" activityId="717" session="0" repetition="0" name="DÃ©veloppement orientÃ© objet" endHour="11:00" startHour="09:30" date="06/02/2024" absoluteSlot="3629" slot="4" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="0,0,255" isLockPosition="false" oldDuration="3" oldSlot="13" oldDay="1" oldWeek="23" lastUpdate="07/18/2023 11:53" creation="07/18/2023 07:07" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="20714" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD2-TP2D" id="72"/>
			<resource fromWorkflow="false" nodeId="20384" nodeOrId="-1" quantity="1" category="instructor" name="OCCELLO MICHEL" id="5294"/>
			<resource fromWorkflow="false" nodeId="57469" nodeOrId="-1" quantity="1" category="category5" name="R2.01 DÃ©veloppement orientÃ© objets" id="1534"/>
			<resource fromWorkflow="false" nodeId="14243" nodeOrId="13841" quantity="1" category="classroom" name="B101" id="58"/>
		</resources>
		<additional/>
	</event>
	<event id="12871" activityId="710" session="0" repetition="0" name="DÃ©veloppement orientÃ© objet" endHour="12:30" startHour="11:00" date="06/02/2024" absoluteSlot="3632" slot="7" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="0,0,255" isLockPosition="false" oldDuration="3" oldSlot="16" oldDay="1" oldWeek="23" lastUpdate="07/18/2023 11:53" creation="07/18/2023 07:07" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="7370" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD2-TP2C" id="70"/>
			<resource fromWorkflow="false" nodeId="20382" nodeOrId="-1" quantity="1" category="instructor" name="OCCELLO MICHEL" id="5294"/>
			<resource fromWorkflow="false" nodeId="57468" nodeOrId="-1" quantity="1" category="category5" name="R2.01 DÃ©veloppement orientÃ© objets" id="1534"/>
			<resource fromWorkflow="false" nodeId="14291" nodeOrId="14290" quantity="1" category="classroom" name="B102" id="60"/>
		</resources>
		<additional/>
	</event>
	<event id="13256" activityId="7224" session="0" repetition="3" name="MÃ©thodes d&apos;optimisation" endHour="17:00" startHour="15:30" date="06/02/2024" absoluteSlot="3641" slot="16" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="153,51,255" isLockPosition="false" oldDuration="3" oldSlot="18" oldDay="1" oldWeek="24" lastUpdate="09/19/2023 09:53" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="27866" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD2-TP2J" id="197"/>
			<resource fromWorkflow="false" nodeId="27851" nodeOrId="-1" quantity="1" category="instructor" name="CHARENSOL SYLVAIN" id="2404"/>
			<resource fromWorkflow="false" nodeId="62961" nodeOrId="-1" quantity="1" category="category5" name="R4.04 : MÃ©thodes d&apos;optimisation" id="4375"/>
			<resource fromWorkflow="false" nodeId="27855" nodeOrId="27852" quantity="1" category="classroom" name="B122" id="63"/>
		</resources>
		<additional/>
	</event>
	<event id="12877" activityId="1522" session="0" repetition="1" name="Outils numÃ©riques pour les statistiques descriptives" endHour="11:00" startHour="09:30" date="06/02/2024" absoluteSlot="3629" slot="4" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="124,0,166" isLockPosition="false" oldDuration="3" oldSlot="13" oldDay="1" oldWeek="23" lastUpdate="07/19/2023 09:53" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="20973" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD1-TP1A" id="62"/>
			<resource fromWorkflow="false" nodeId="20580" nodeOrId="-1" quantity="1" category="instructor" name="CHARENSOL SYLVAIN" id="2404"/>
			<resource fromWorkflow="false" nodeId="57567" nodeOrId="-1" quantity="1" category="category5" name="R2.08 Outils numÃ©riques pour les statistiques descriptives" id="708"/>
			<resource fromWorkflow="false" nodeId="26792" nodeOrId="26790" quantity="1" category="classroom" name="B122" id="63"/>
		</resources>
		<additional/>
	</event>
	<event id="12593" activityId="10069" session="0" repetition="1" name="DÃ©veloppement d&apos;applications avec IHM" endHour="18:30" startHour="17:00" date="06/02/2024" absoluteSlot="3644" slot="19" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="255,51,51" isLockPosition="false" oldDuration="3" oldSlot="19" oldDay="1" oldWeek="23" lastUpdate="11/06/2023 16:39" creation="07/18/2023 07:07" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="58442" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD2-TP2D" id="72"/>
			<resource fromWorkflow="false" nodeId="35714" nodeOrId="-1" quantity="1" category="instructor" name="GAUCHE SYLVAIN" id="1555"/>
			<resource fromWorkflow="false" nodeId="58430" nodeOrId="-1" quantity="1" category="category5" name="R2.02 DÃ©veloppement d&apos;applications avec IHM" id="623"/>
			<resource fromWorkflow="false" nodeId="58432" nodeOrId="58431" quantity="1" category="classroom" name="B122" id="63"/>
		</resources>
		<additional/>
	</event>
	<event id="12497" activityId="1705" session="0" repetition="0" name="Introduction Ã  la GSI" endHour="11:00" startHour="09:30" date="06/02/2024" absoluteSlot="3629" slot="4" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="153,255,51" isLockPosition="false" oldDuration="3" oldSlot="7" oldDay="1" oldWeek="23" lastUpdate="07/19/2023 08:43" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="21104" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD2-TP2C" id="70"/>
			<resource fromWorkflow="false" nodeId="20616" nodeOrId="-1" quantity="1" category="instructor" name="CONSTANT BLANDINE" id="2611"/>
			<resource fromWorkflow="false" nodeId="62731" nodeOrId="-1" quantity="1" category="category5" name="R2.10 Introduction Ã  la gestion des systÃ¨mes..." id="4380"/>
			<resource fromWorkflow="false" nodeId="19043" nodeOrId="18830" quantity="1" category="classroom" name="B102" id="60"/>
		</resources>
		<additional/>
	</event>
	<event id="20375" activityId="5413" session="0" repetition="0" name="rattrapage BUT 2 FI" endHour="17:30" startHour="13:30" date="06/02/2024" absoluteSlot="3637" slot="12" day="1" week="24" additionalResources="0" duration="8" info="" note="" color="255,255,255" isLockPosition="false" oldDuration="-1" oldSlot="-1" oldDay="-1" oldWeek="-1" lastUpdate="01/29/2024 17:22" creation="01/29/2024 17:21" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="33143" nodeOrId="-1" quantity="1" category="classroom" name="B011" id="167"/>
			<resource fromWorkflow="false" nodeId="33151" nodeOrId="-1" quantity="1" category="classroom" name="B103" id="61"/>
		</resources>
		<additional/>
	</event>
	<event id="13274" activityId="12903" session="0" repetition="3" name="SAÃ‰-S4.A.01 - 2J" endHour="12:30" startHour="11:00" date="06/02/2024" absoluteSlot="3632" slot="7" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="0,217,108" isLockPosition="false" oldDuration="3" oldSlot="13" oldDay="0" oldWeek="24" lastUpdate="12/04/2023 09:50" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="60370" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD2-TP2J" id="197"/>
			<resource fromWorkflow="false" nodeId="63035" nodeOrId="-1" quantity="1" category="category5" name="S4.A.01 : DÃ©veloppement d&apos;une application complexe" id="4341"/>
			<resource fromWorkflow="false" nodeId="60384" nodeOrId="60374" quantity="1" category="classroom" name="A105" id="161"/>
			<resource fromWorkflow="false" nodeId="60385" nodeOrId="60374" quantity="1" category="classroom" name="B103" id="61"/>
		</resources>
		<additional/>
	</event>
	<event id="12580" activityId="1655" session="0" repetition="0" name="Introduction Ã  la GSI" endHour="12:30" startHour="11:00" date="06/02/2024" absoluteSlot="3632" slot="7" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="153,255,51" isLockPosition="false" oldDuration="3" oldSlot="16" oldDay="0" oldWeek="23" lastUpdate="07/19/2023 08:43" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="21105" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD2-TP2D" id="72"/>
			<resource fromWorkflow="false" nodeId="20617" nodeOrId="-1" quantity="1" category="instructor" name="CONSTANT BLANDINE" id="2611"/>
			<resource fromWorkflow="false" nodeId="62739" nodeOrId="-1" quantity="1" category="category5" name="R2.10 Introduction Ã  la gestion des systÃ¨mes..." id="4380"/>
			<resource fromWorkflow="false" nodeId="18829" nodeOrId="18826" quantity="1" category="classroom" name="B101" id="58"/>
		</resources>
		<additional/>
	</event>
	<event id="13271" activityId="12901" session="0" repetition="3" name="SAÃ‰-S4.A.01 - 1G" endHour="17:00" startHour="15:30" date="06/02/2024" absoluteSlot="3641" slot="16" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="0,217,108" isLockPosition="false" oldDuration="3" oldSlot="22" oldDay="1" oldWeek="24" lastUpdate="01/17/2024 08:50" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="60367" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1-TP1G" id="90"/>
			<resource fromWorkflow="false" nodeId="63032" nodeOrId="-1" quantity="1" category="category5" name="S4.A.01 : DÃ©veloppement d&apos;une application complexe" id="4341"/>
			<resource fromWorkflow="false" nodeId="60375" nodeOrId="60371" quantity="1" category="classroom" name="A105" id="161"/>
			<resource fromWorkflow="false" nodeId="60379" nodeOrId="60371" quantity="1" category="classroom" name="B102" id="60"/>
		</resources>
		<additional/>
	</event>
	<event id="12931" activityId="1253" session="0" repetition="1" name="QualitÃ© de dÃ©veloppement outils" endHour="11:00" startHour="09:30" date="06/02/2024" absoluteSlot="3629" slot="4" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="0,255,255" isLockPosition="false" oldDuration="3" oldSlot="1" oldDay="3" oldWeek="24" lastUpdate="01/08/2024 15:38" creation="07/18/2023 15:09" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="20783" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD1-TP1B" id="67"/>
			<resource fromWorkflow="false" nodeId="20463" nodeOrId="-1" quantity="1" category="instructor" name="JEAN SEBASTIEN" id="4191"/>
			<resource fromWorkflow="false" nodeId="57513" nodeOrId="-1" quantity="1" category="category5" name="R2.03 QualitÃ© de dÃ©veloppement" id="574"/>
			<resource fromWorkflow="false" nodeId="17257" nodeOrId="17203" quantity="1" category="classroom" name="B103" id="61"/>
		</resources>
		<additional/>
	</event>
</events>`;

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
  const request = await fetch(
    `?function=getResources&tree=true&detail=3&projectId=${PORJECT_ID}&data=${PROJECT_DATA}`
  );

  if (!request.ok) {
    throw new Error(`Erreur HTTP ! Statut : ${request.status}`);
  } else {
    console.log("Requête effectuée avec succès !");
  }
  const resourceTreeXml = await request.text();
  //   const resourceTreeXml = xmlDataResourcesTree;
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
    parseInt(event.getAttribute("duration")) * 50 - 1
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

  // Réalisation de la requête
  const loadingDiv = document.getElementById("loading");
  loadingDiv.style.display = "block";
  const request = await fetch(
    `${BASE_URL}?function=getEvents&resources=${resource}&detail=8&date=${dateFormatted}&projectId=3&data=08281677eda1e7f64e2d372185934117103d4fbbeeae8daf5feb097f6d188a31fa91aec4c63f8a2413abf3eb0200af77893b24c3f0ea376490a4df59bbd7d7da460b0a6f56ac411319d64d8dfed64bea6c3bb0668c65d66a0d04db19746a31243d4cd04053e5151dbcfd0202341bc6b0961a5eb55e848bb1842c028822a1362d63f944f8541da5410375de3669ac42ea,1`
  );

  if (!request.ok) {
    throw new Error(`Erreur HTTP ! Statut : ${request.status}`);
  } else {
    console.log("Requête effectuée avec succès !");
    loadingDiv.style.display = "none";
  }

  const xml = await request.text();

  // En local :
  // const xml = scheduleData;
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
