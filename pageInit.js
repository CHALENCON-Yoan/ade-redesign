function copyrightDate() {
  const copyrightDateSpan = document.querySelector("#copyrightDate");
  const date = new Date();
  if (date.getFullYear() != copyrightDateSpan.textContent) {
    copyrightDateSpan.textContent =
      copyrightDateSpan.textContent + " - " + date.getFullYear();
  }
}
