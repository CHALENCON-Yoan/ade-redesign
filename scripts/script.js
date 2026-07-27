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
const PROJECT_ID = "2";
const PROJECT_DATA =
    "51278da58f6a6c7ad5fcd549aa2f4a9c34de0dcc7e6cb24620e53cf126d92d3fc34cfa7aa7219893fea211191e62f25c1626fc70ebe695d3e9443b957ae71d752040ad8c0ef361b6dac81cd684a15da7611d8cae932951ebf652274408fff92849eabbf8221cc6a5d6208bdd05050567,1";
const MAX_DATE = new Date("2027-07-31");
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
