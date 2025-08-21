const DEV_MAIL = "yoan@ade-edt.fr";
let LOCALHOST =
    location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "192.168.1.10";
const BASE_URL = LOCALHOST ? "https://dev.ade-edt.fr/localRequest" : "/request";
LOCALHOST = false;
// "https://cors-anywhere.herokuapp.com/https://ade-uga-ro-vs.grenet.fr/jsp/webapi";
const PROJECT_ID = "1";
const PROJECT_DATA =
  "51278da58f6a6c7ad5fcd549aa2f4a9cd0fdf1bdade3448b5e9400c4e4311a3aaf5892c4f26a6a95b2be9815c8d857a2533823d5748e25e65116564f1a3e9953bfee61b8973d94f85031bb73a57c6000da7dc82411a94d7de68c82ab46db4fa8,1";
const MAX_DATE = new Date('2026-07-31');

let resourcesMap = {};
let weekMap = {};

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
