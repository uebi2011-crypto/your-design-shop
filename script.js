/* ========================================
   PRINTX
   SCRIPT.JS
======================================== */


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    if (nav) {
        nav.classList.toggle("active");
    }

}


/* =========================
   PRODUKT AUSWÄHLEN
========================= */

function selectProduct(productName) {

    const productSelect =
        document.getElementById("product");

    if (!productSelect) {
        return;
    }

    productSelect.value = productName;

    updatePositions();

    const custom =
        document.getElementById("custom");

    if (custom) {

        custom.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================
   DRUCKPOSITIONEN
========================= */

function updatePositions() {

    const product =
        document.getElementById("product");

    const position =
        document.getElementById("position");


    if (!product || !position) {
        return;
    }


    position.innerHTML = "";


    /* CAP */

    if (product.value === "Cap") {

        position.innerHTML = `
            <option value="">Position wählen</option>
            <option value="Vorne">Vorne</option>
            <option value="Seite">Seite</option>
            <option value="Hinten">Hinten</option>
        `;

    }


    /* T-SHIRT */

    else if (product.value === "T-Shirt") {

        position.innerHTML = `
            <option value="">Position wählen</option>
            <option value="Brust vorne">Brust vorne</option>
            <option value="Groß vorne">Groß vorne</option>
            <option value="Rücken">Rücken</option>
            <option value="Ärmel">Ärmel</option>
        `;

    }


    /* HOODIE */

    else if (product.value === "Hoodie") {

        position.innerHTML = `
            <option value="">Position wählen</option>
            <option value="Brust vorne">Brust vorne</option>
            <option value="Groß vorne">Groß vorne</option>
            <option value="Rücken">Rücken</option>
            <option value="Ärmel">Ärmel</option>
        `;

    }


    /* PULLOVER */

    else if (product.value === "Pullover") {

        position.innerHTML = `
            <option value="">Position wählen</option>
            <option value="Brust vorne">Brust vorne</option>
            <option value="Groß vorne">Groß vorne</option>
            <option value="Rücken">Rücken</option>
            <option value="Ärmel">Ärmel</option>
        `;

    }


    /* KEIN PRODUKT */

    else {

        position.innerHTML = `
            <option value="">
                Erst Produkt auswählen
            </option>
        `;

    }

}


/* =========================
   DATEI AUSWÄHLEN
========================= */

function showFileName() {

    const input =
        document.getElementById("designFile");

    const fileName =
        document.getElementById("fileName");


    if (!input || !fileName) {
        return;
    }


    if (input.files.length > 0) {

        fileName.textContent =
            "✓ " +
            input.files[0].name +
            " – bitte im E-Mail-Fenster als Anhang hinzufügen.";

    }

    else {

        fileName.textContent =
            "Optional – du kannst auch ohne Datei fortfahren.";

    }

}


/* =========================
   PRODUKT-WECHSEL
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const product =
        document.getElementById("product");


    if (product) {

        product.addEventListener(
            "change",
            updatePositions
        );

    }


    /* Navigation schließen */

    const links =
        document.querySelectorAll(".nav-links a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            const nav =
                document.querySelector(".nav-links");

            if (nav) {
                nav.classList.remove("active");
            }

        });

    });

});


/* =========================
   ANFRAGE ABSENDEN
========================= */

function submitOrder(event) {

    event.preventDefault();


    /* Daten */

    const product =
        document.getElementById("product")?.value || "";

    const color =
        document.getElementById("color")?.value || "";

    const size =
        document.getElementById("size")?.value || "";

    const position =
        document.getElementById("position")?.value || "";

    const quantity =
        document.getElementById("quantity")?.value || "";

    const name =
        document.getElementById("name")?.value || "";

    const email =
        document.getElementById("email")?.value || "";

    const message =
        document.getElementById("message")?.value || "";


    /* Datei */

    const fileInput =
        document.getElementById("designFile");


    let fileText =
        "Keine Datei ausgewählt.";


    if (
        fileInput &&
        fileInput.files.length > 0
    ) {

        fileText =
            fileInput.files[0].name +
            "\n\n" +
            "WICHTIG: Bitte die ausgewählte " +
            "Datei im E-Mail-Fenster manuell " +
            "als Anhang hinzufügen.";

    }


    /* E-Mail */

    const receiver =
        "uebi2011@gmail.com";


    const subject =
        "PrintX Anfrage - " +
        (product || "Neue Anfrage");


    const body =

        "Hallo PrintX,\n\n" +

        "ich möchte folgende Anfrage senden:\n\n" +

        "--------------------------------\n" +

        "BESTELLUNG\n\n" +

        "Produkt: " +
        product +
        "\n" +

        "Farbe: " +
        color +
        "\n" +

        "Größe: " +
        size +
        "\n" +

        "Druckposition: " +
        position +
        "\n" +

        "Anzahl: " +
        quantity +
        "\n\n" +

        "--------------------------------\n" +

        "KUNDE\n\n" +

        "Name: " +
        name +
        "\n" +

        "E-Mail: " +
        email +
        "\n\n" +

        "--------------------------------\n" +

        "DESIGN\n\n" +

        fileText +
        "\n\n" +

        "--------------------------------\n" +

        "NACHRICHT\n\n" +

        (
            message.trim()
                ? message
                : "Keine zusätzliche Nachricht."
        ) +

        "\n\n" +

        "--------------------------------\n\n" +

        "Vielen Dank!";


    /* E-Mail-Fenster öffnen */

    window.location.href =
        "mailto:" +
        receiver +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

}
