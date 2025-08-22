function displayError(code, error) {
    if (error.status === 504) {
        const emailLink = document.querySelector("#linkForTimeOutMail");
        emailLink.setAttribute(
            "href",
            `mailto:${DEV_MAIL}?subject=%5B${code}-${error.status}%5D%20Impossible%20d%27afficher%20les%20emplois%20du%20temps%20sur%20${document.location.host}&body=Bonjour%2C%0AJe%20n%27arrive%20pas%20à%20afficher%20les%20emplois%20du%20temps%20sur%20${document.location.host}.%20J%27obtiens%20une%20erreur%20504%20depuis%20plusieurs%20minutes.%0AJ%27étais%20sur%20la%20page%20${document.location.pathname}%20et%20j%27ai%20obtenu%20l%27erreur%20avec%20le%20code%20${code}.`
        );

        const timeOutDiv = document.querySelector("#timeOut");
        timeOutDiv.style.display = "flex";
        setTimeout(() => {
            location.reload();
        }, 10000);
    } else {
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
}

function loader(visible) {
    const loaderDiv = document.querySelector("#loader");
    if (visible) {
        loaderDiv.style.display = "flex";
    } else {
        loaderDiv.style.display = "none";
    }
}

async function displayAnnounce(visible) {
    const announceDiv = document.querySelector("#announce");
    if (visible) {
        if (await setAnnouce()) {
            announceDiv.style.display = "flex";
            const hideAnnounceButton = document.querySelector(
                "#hideAnnounceButton"
            );
            hideAnnounceButton.addEventListener("click", () =>
                displayAnnounce(false)
            );
        }
    } else {
        announceDiv.style.display = "none";
        const annouceId = document
            .querySelector("#hideAnnounceButton")
            .getAttribute("announceId");
        if (annouceId && annouceId !== "") {
            localStorage.setItem("lastSeenAnnounceId", annouceId);
        }
    }
}

async function setAnnouce() {
    const res = await fetch(`${API_URL}/message`);

    if (!res.ok) {
        console.error(
            `Une erreur est survenue lors de la récupération du message.`
        );
        return false;
    } else {
        const data = await res.json();

        const active = data.active;
        const title = data.title;
        const content = data.content;
        const buttonText = data.buttonText;
        const emoji = data.emoji;
        const id = data.id;

        const lastSeenAnnounceId = localStorage.getItem("lastSeenAnnounceId");
        if (
            typeof active === "undefined" ||
            !active ||
            id == lastSeenAnnounceId ||
            typeof title === "undefined" ||
            title === "" ||
            typeof content === "undefined" ||
            content === ""
        ) {
            return false;
        } else {
            const announceTitle = document.querySelector("#announceTitle");
            announceTitle.textContent = title;

            const announceContent = document.querySelector("#announceContent");
            announceContent.innerHTML = content;

            const announceButton = document.querySelector(
                "#hideAnnounceButton"
            );
            if (buttonText && buttonText !== "") {
                announceButton.textContent = buttonText;
            }
            announceButton.setAttribute("announceId", id);

            const announceImage = document.querySelector("#announceImage");
            if (emoji && emoji !== "") {
                const imgPath = `/assets/emojis/${emoji}.svg`;

                const imgRes = await fetch(imgPath, { method: "HEAD" });
                if (imgRes.ok) {
                    announceImage.src = imgPath;
                }
            }

            return true;
        }
    }
}
