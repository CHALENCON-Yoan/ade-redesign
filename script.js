window.addEventListener("load", () => {
  // Set the mode
  setMode(localStorage.getItem("mode"));

  switchMode();

  sidebar();
});

function getOppositeMode(mode) {
  if (mode === "dark") {
    return "light";
  }
  return "dark";
}

function setMode(mode) {
  // If mode is null, set it to light (default value)
  if (mode === null) {
    mode = "light";
  }

  const oppositeMode = getOppositeMode(mode);

  // Save the mode in local storage
  localStorage.setItem("mode", mode);

  // Set/Change the mode on global elements
  modeElements = document.querySelectorAll(".mode");
  modeElements.forEach((element) => {
    element.classList.remove(`${oppositeMode}Mode`);
    element.classList.add(`${mode}Mode`);
  });

  // Set/Change the mode on input elements
  inputElements = document.querySelectorAll(".inputMode");
  inputElements.forEach((element) => {
    element.classList.remove(`${oppositeMode}ModeInput`);
    element.classList.add(`${mode}ModeInput`);
  });

  // Set/Change the mode on button elements
  buttonElements = document.querySelectorAll(".buttonMode");
  buttonElements.forEach((element) => {
    element.classList.remove(`${oppositeMode}ModeButton`);
    element.classList.add(`${mode}ModeButton`);
  });

  // Display right elements to match the mode
  modeDisplayElements = document.querySelectorAll(`.${mode}ModeDisplay`);
  modeDisplayElements.forEach((element) => {
    element.style.display = "block";
  });

  // Hide wrong elements that don't match the mode
  oppositeModeDisplayElements = document.querySelectorAll(
    `.${oppositeMode}ModeDisplay`
  );
  oppositeModeDisplayElements.forEach((element) => {
    element.style.display = "none";
  });

  // Set/Change the mode on mode switch buttons
  switchModeButton = document.querySelector("#switchDarkLightMode");
  switchModeButton.setAttribute(
    "src",
    `/assets/switchDarkLightMode/${mode}Mode.svg`
  );

  switchModeSidebar = document.querySelector(
    "#sidebarSwitchDarkLightMode > img"
  );
  switchModeSidebar.setAttribute(
    "src",
    `/assets/switchDarkLightMode/${mode}Mode.svg`
  );

  // Set the mode on the open sidebar button
  openSidebarButton = document.querySelector("#openSidebar");
  const oppositeModeWithUpperCase =
    oppositeMode.charAt(0).toUpperCase() + oppositeMode.slice(1);
  openSidebarButton.setAttribute(
    "src",
    `/assets/icons/openSidebar${oppositeModeWithUpperCase}.svg`
  );

  // Set the mode on the close sidebar button
  closeSidebarButton = document.querySelector("#closeSidebar");
  closeSidebarButton.setAttribute(
    "src",
    `/assets/icons/closeSidebar${oppositeModeWithUpperCase}.svg`
  );
}

function switchMode() {
  switchModeButton = document.querySelector("#switchDarkLightMode");
  switchModeSidebarButton = document.querySelector(
    "#sidebarSwitchDarkLightMode"
  );

  // Set the pressed image on mouse down
  switchModeButton.addEventListener("mousedown", () => {
    switchModeButton.setAttribute(
      "src",
      `/assets/switchDarkLightMode/${localStorage.getItem(
        "mode"
      )}ModePressed.svg`
    );
  });

  switchModeSidebarButton.addEventListener("mousedown", () => {
    document
      .querySelector("#sidebarSwitchDarkLightMode > img")
      .setAttribute(
        "src",
        `/assets/switchDarkLightMode/${localStorage.getItem(
          "mode"
        )}ModePressed.svg`
      );
  });

  // Switch the mode on click
  switchModeButton.addEventListener("click", () => {
    setMode(getOppositeMode(localStorage.getItem("mode")));
  });

  switchModeSidebarButton.addEventListener("click", () => {
    setMode(getOppositeMode(localStorage.getItem("mode")));
  });
}

function dragSidebarToClose() {
  let startX = 0;
  let currentX = 0;

  const sidebar = document.querySelector("#sidebar");

  sidebar.addEventListener("touchstart", (event) => {
    console.log("touchstart");
    startX = event.touches[0].clientX;
    sidebar.style.transition = "none";
  });

  sidebar.addEventListener("touchmove", (event) => {
    console.log("touchmove");
    currentX = event.touches[0].clientX;
    const translateX = Math.max(0, currentX - startX);
    sidebar.style.transform = `translateX(${translateX}px)`;
  });

  sidebar.addEventListener("touchend", (event) => {
    const translateX = currentX - startX;
    sidebar.style.transition = "transform 0.3s ease-in-out";

    if (translateX > 100) {
      closeSidebar();
    } else {
      sidebar.style.transform = "translateX(0)";
    }
  });
}

function openSidebar() {
  const sidebar = document.querySelector("#sidebar");
  const backgroundBlur = document.querySelector("#backgroundBlur");

  sidebar.classList.add("sidebarActive");
  sidebar.style.transform = "translateX(0)";
  backgroundBlur.classList.add("backgroundBlurActive");

  dragSidebarToClose();
}

function closeSidebar() {
  const sidebar = document.querySelector("#sidebar");
  const backgroundBlur = document.querySelector("#backgroundBlur");

  sidebar.classList.remove("sidebarActive");
  sidebar.style.transform = "translateX(100%)";
  backgroundBlur.classList.remove("backgroundBlurActive");
}

function sidebar() {
  openSidebarButton = document.querySelector("#openSidebar");
  backgroundBlur = document.querySelector("#backgroundBlur");
  closeSidebarButton = document.querySelector("#closeSidebar");

  // To open the sidebar
  openSidebarButton.addEventListener("click", openSidebar);

  // To close the sidebar
  closeSidebarButton.addEventListener("click", closeSidebar);
  backgroundBlur.addEventListener("click", closeSidebar);
}
