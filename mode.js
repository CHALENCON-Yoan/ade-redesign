function getOppositeMode(mode) {
  if (mode === "dark") {
    return "light";
  }
  return "dark";
}

function setMode(mode) {
  // If mode is null, set it to default browser theme
  if (mode === null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      mode = "dark";
    else mode = "light";
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

  // Set/Change the mode on icons
  icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    icon.setAttribute(
      "src",
      `/assets/icons/externalLink${
        oppositeMode.charAt(0).toUpperCase() + oppositeMode.slice(1)
      }.svg`
    );
  });

  //Set/Change the mode on plus if index page
  if (document.title.startsWith("Accueil")) {
    plusText = document.querySelector("#plusText");
    plusText.classList.add(
      `plusText${mode.charAt(0).toUpperCase() + mode.slice(1)}`
    );
    plusText.classList.remove(
      `plusText${oppositeMode.charAt(0).toUpperCase() + oppositeMode.slice(1)}`
    );

    plusIcon = document.querySelector("#plusIcon");
    plusIcon.classList.add(
      `plusIcon${mode.charAt(0).toUpperCase() + mode.slice(1)}`
    );
    plusIcon.classList.remove(
      `plusIcon${oppositeMode.charAt(0).toUpperCase() + oppositeMode.slice(1)}`
    );
  }
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
    refreshData();
  });
}
