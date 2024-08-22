window.addEventListener("load", () => {
  // Set the mode
  setMode(localStorage.getItem("mode"));

  switchMode();
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

  // Set/Change the mode on mode switch button
  switchModeButton = document.querySelector("#switchDarkLightMode");
  switchModeButton.setAttribute(
    "src",
    `/assets/switchDarkLightMode/${mode}Mode.svg`
  );
}

function switchMode() {
  switchModeButton = document.querySelector("#switchDarkLightMode");

  // Set the pressed image on mouse down
  switchModeButton.addEventListener("mousedown", () => {
    switchModeButton.setAttribute(
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
}
