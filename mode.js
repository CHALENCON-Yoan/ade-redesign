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
      // mode = "light";
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
      refreshData();
    });
  
    switchModeSidebarButton.addEventListener("click", () => {
      setMode(getOppositeMode(localStorage.getItem("mode")));
      refreshData();
    });
  }