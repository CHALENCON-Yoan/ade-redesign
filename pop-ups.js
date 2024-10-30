function displayError(code, error) {
  const emailLink = document.querySelector("#linkForErrorMail");
  emailLink.setAttribute(
    "href",
    `mailto:${DEV_MAIL}?subject=%5B${code}-${error.status}%5D%20J%27ai%20rencontré%20une%20erreur%20sur%20${document.location.host}&body=Bonjour%2C%0AJ%27ai%20rencontré%20une%20erreur%20lors%20de%20ma%20navigation%20sur%20le%20site%20${document.location.origin}.%0AJ%27étais%20sur%20la%20page%20${document.location.pathname}%20et%20j%27ai%20obtenu%20une%20erreur%20${error.status}%20avec%20le%20code%20${code}.`
  );

  const errorCodeDisplay = document.querySelector("#errorCode");
  errorCodeDisplay.textContent = `${code}-${error.status}`;

  const errorDiv = document.querySelector("#error");
  errorDiv.style.display = "flex";
}

function loader(visible) {
  const loaderDiv = document.querySelector("#loader");
  if (visible) {
    loaderDiv.style.display = "flex";
  } else {
    loaderDiv.style.display = "none";
  }
}
