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
        if (window.innerWidth > 800 && !IS_IT_CLASSROOMS_PAGE) {
            localStorage.setItem("weekDisplay", true);
        } else {
            localStorage.setItem("weekDisplay", false);
        }
    }
    const weekDayDisplaySidebarButton = document.querySelector(
        "#weekDayDisplaySidebarButton > span",
    );
    const weekDayDisplayButton = document.querySelector(
        "#weekDayDisplayButton",
    );

    if (localStorage.getItem("weekDisplay") == "true") {
        weekDayDisplaySidebarButton.textContent = "Afficher un seul jour";
        weekDayDisplayButton.textContent = "Vue jour";
    } else {
        weekDayDisplaySidebarButton.textContent =
            "Afficher la semaine complète";
        weekDayDisplayButton.textContent = "Vue semaine";
    }
}

async function displayScheduleGrid() {
    if (IS_IT_CLASSROOMS_PAGE) {
        await getITClassrooms();
    }

    const oldSpacer = document.querySelector(".hourSpacer");
    if (oldSpacer) oldSpacer.remove();

    const days = document.querySelectorAll(".day");
    days.forEach((day) => {
        day.remove();
    });

    const displayDiv = document.querySelector("#display");
    const scheduleGrid = document.createElement("div");
    scheduleGrid.id = "scheduleGrid";
    const daysDiv = document.querySelector("#days");

    let nbColumns;
    if (IS_IT_CLASSROOMS_PAGE) {
        nbColumns = itClassrooms.length;
    } else {
        const weekDisplay = localStorage.getItem("weekDisplay");
        nbColumns = weekDisplay == "true" ? 5 : 1;
    }

    for (let i = 7; i <= 19; i++)
        for (let j = 0; j <= 1; j++) {
            if (!(i == 7 && j == 0) && !(i == 19 && j == 1)) {
                const halfHourDiv = document.createElement("div");
                halfHourDiv.classList.add("halfHour");
                scheduleGrid.appendChild(halfHourDiv);

                const hourDiv = document.createElement("div");
                hourDiv.classList.add("hour");
                const hourText = `${i < 10 ? `0${i}` : i}h${j === 0 ? "00" : "30"}`;
                hourDiv.dataset.hour = hourText;
                halfHourDiv.appendChild(hourDiv);

                for (let k = 1; k <= nbColumns; k++) {
                    const content = document.createElement("div");
                    const idHour = `${i < 10 ? `0${i}` : i}_${
                        j === 0 ? "00" : "30"
                    }_${k}`;
                    content.classList.add("content");
                    content.classList.add("mode");
                    content.classList.add(
                        `${localStorage.getItem("mode")}Mode`,
                    );
                    content.id = idHour;
                    if (IS_IT_CLASSROOMS_PAGE) {
                        content.style.minWidth =
                            IT_CLASSROOMS_MIN_COL_WIDTH + "px";
                    }
                    halfHourDiv.appendChild(content);

                    if (i === 7 && j === 1) {
                        const dayDiv = document.createElement("div");
                        dayDiv.classList.add("day");
                        dayDiv.textContent = "";
                        if (IS_IT_CLASSROOMS_PAGE) {
                            dayDiv.style.minWidth =
                                IT_CLASSROOMS_MIN_COL_WIDTH + "px";
                            dayDiv.style.flex = "1";
                        }
                        daysDiv.appendChild(dayDiv);
                    }
                }
            }
        }
    if (IS_IT_CLASSROOMS_PAGE) {
        daysDiv.style.justifyContent = "flex-start";
        daysDiv.style.marginLeft = "0";

        // Spacer invisible collé à gauche : même classe que .hour pour avoir
        // la même largeur, il masque les en-têtes qui scrolleraient par-dessus
        const hourSpacer = document.createElement("div");
        hourSpacer.classList.add("hour", "hourSpacer");
        hourSpacer.dataset.hour = "00h00"; // donne la bonne largeur via ::after
        hourSpacer.style.color = "transparent";
        hourSpacer.setAttribute("aria-hidden", "true");
        daysDiv.prepend(hourSpacer);

        // Wrapper commun : #days et #scheduleGrid partagent la même largeur
        let scheduleWrapper = displayDiv.querySelector("#scheduleWrapper");
        if (!scheduleWrapper) {
            scheduleWrapper = document.createElement("div");
            scheduleWrapper.id = "scheduleWrapper";
            displayDiv.appendChild(scheduleWrapper);
        }
        scheduleWrapper.prepend(daysDiv);
        scheduleWrapper.appendChild(scheduleGrid);
    } else {
        displayDiv.appendChild(scheduleGrid);
    }
}
