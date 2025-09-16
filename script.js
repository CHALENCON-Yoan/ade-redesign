window.addEventListener("load", () => {
    // Set the mode
    setMode(localStorage.getItem("mode"));

    // Allow to switch the mode
    switchMode();
});
