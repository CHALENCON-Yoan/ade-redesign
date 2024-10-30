const DEV_MAIL = "yoan@ade-edt.fr";
let LOCALHOST =
  location.hostname == "127.0.0.1" || location.hostname == "192.168.1.10";
const BASE_URL = LOCALHOST ? "https://dev.ade-edt.fr/localRequest" : "/request";
LOCALHOST = false;
// "https://cors-anywhere.herokuapp.com/https://ade-uga-ro-vs.grenet.fr/jsp/webapi";
const PORJECT_ID = "3";
const PROJECT_DATA =
  "08281677eda1e7f64e2d372185934117103d4fbbeeae8daf5feb097f6d188a31fa91aec4c63f8a2413abf3eb0200af77893b24c3f0ea376490a4df59bbd7d7dac1ce1c636bfed8c261cddb98478bb779bd1ac4646cfd5693729bf4b8e78c59567ae83326afa226fea9096e273cc145b91561414a3d67e17424890a31962d0e88c0e824b72ad3aea61e43ef842c9e91c3,1";
const MAX_DATE = new Date(1753912800000);

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
