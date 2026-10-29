
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#gallery img");

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    Object.assign(lightbox.style, {
        display: "none",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: "9999",
        cursor: "pointer"
    });

    const largeImage = document.createElement("img");

    Object.assign(largeImage.style, {
        maxWidth: "90%",
        maxHeight: "80%",
        objectFit: "contain",
        cursor: "default"
    });

    const closeButton = document.createElement("button");
    closeButton.textContent = "\u00D7";
    closeButton.setAttribute("aria-label", "Close image");

    Object.assign(closeButton.style, {
        position: "absolute",
        top: "15px",
        right: "30px",
        color: "white",
        background: "transparent",
        border: "none",
        fontSize: "45px",
        cursor: "pointer"
    });

    lightbox.appendChild(closeButton);
    lightbox.appendChild(largeImage);
    document.body.appendChild(lightbox);

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    images.forEach(function (image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function () {
            largeImage.src = image.dataset.full || image.src;
            largeImage.alt = image.alt;
            lightbox.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
});
