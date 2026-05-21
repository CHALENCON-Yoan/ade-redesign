const DEV_MAIL = "yoan@ade-edt.fr";
let LOCALHOST =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "192.168.1.10" ||
    location.hostname.includes("devtunnels.ms");

const BASE_URL = LOCALHOST ? "https://ade.yoanc.dev/localRequest" : "/request";
const API_URL = "https://api.ade-edt.fr";
LOCALHOST = false;
// "https://cors-anywhere.herokuapp.com/https://ade-uga-ro-vs.grenet.fr/jsp/webapi";
const PROJECT_ID = "1";
const PROJECT_DATA =
    "08281677eda1e7f64e2d372185934117103d4fbbeeae8daf5feb097f6d188a31fa91aec4c63f8a2413abf3eb0200af7710df8dec5d859664f2e9534343758872ea63fdddf2e0bb3bc6a427c07829845b2adf41a8f1c053f79442ee207709b605e9b4141706c3679ed859fefe34f0d7ea,1";
const MAX_DATE = new Date("2026-07-31");
const IS_IT_CLASSROOMS_PAGE = document.title.includes("Salles Informatiques");
const IT_CLASSROOMS_RESOURCE_ID = "64244%7C65202";

const IT_CLASSROOMS_MIN_COL_WIDTH = 60;

let resourcesMap = {};
let weekMap = {};
let itClassrooms = [];

window.addEventListener("load", async () => {
    // Load Lottie file
    loadLottie();

    // Update Copyright Date
    copyrightDate();

    // Set the mode
    setMode(localStorage.getItem("mode"));

    // Allow to switch the mode
    switchMode();

    // Allow to open and close the sidebar
    sidebar();

    // Set the correct display (week/day)
    setWeekDayDisplay();

    // Show announce
    displayAnnounce(true);

    // Display the schedule grid
    loader(true);
    await displayScheduleGrid();

    // Make the datalist for resources
    await makeDatalist();

    // Get week map
    await getCalendar();

    // Restore resource value, set the next lesson date and display next lessons
    await restoreResourceValue();
    loader(false);

    loadEventListeners();
});
