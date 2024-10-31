window.addEventListener("load", () => {
  // Update Copyright Date
  copyrightDate();

  // Set the mode
  setMode(localStorage.getItem("mode"));

  // Allow to switch the mode
  switchMode();

  if (document.title.startsWith("Accueil")) {
    // Set the hover effect on plus
    plusHover();
  }
});
