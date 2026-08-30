/* ========================================
   PRINTX
   SCRIPT.JS
======================================== */


/* =========================
   WENN SEITE GELADEN IST
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


    const links =
        document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                const nav =
                    document.querySelector(".nav-links");

                nav.classList.remove("active");

            }
        );

    });

});


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav =
        document.querySelector(".nav-links");

    nav.classList.toggle("active");

}


/* =========================
   PRODUKT AUSWÄHLEN
========================= */

function selectProduct(productName) {

    const productSelect =
        document.getElementById("product");


    productSelect.value =
        productName;


    updatePositions();


    const custom =
        document.getElementById("custom");


    custom.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   DRUCKPOSITIONEN
========================= */

function updatePositions() {

    const product =
        document.getElementById("product").value;


    const positionSelect =
        document.getElementById("position");


    if (!positionSelect) {
        return;
    }


    positionSelect.innerHTML = "";


    /* CAP */

    if (product === "Cap") {

        positionSelect.innerHTML = `

            <option value="">
                Position wählen
            </option>

            <option value="Vorne">
                Vorne
            </option>

            <option value="Seite">
                Seite
            </option>

            <option value="Hinten">
                Hinten
            </option>

        `;

        return;

    }


    /* T-SHIRT */

    if (product === "T-Shirt") {

        positionSelect.innerHTML = `

            <option value="">
                Position wählen
            </option>

            <option value="Brust vorne">
                Brust vorne
            </option>

            <option value="Groß vorne">
                Groß vorne
            </option>

            <option value="Rücken">
                Rücken
            </option>

            <option value="Ärmel">
                Ärmel
            </option>

        `;

        return;

    }


    /* HOODIE */

    if (product === "Hoodie") {

        positionSelect.innerHTML = `

            <option value="">
                Position wählen
            </option>

            <option value="Brust vorne">
                Brust vorne
            </option>

            <option value="Groß vorne">
                Groß vorne
            </option>

            <option value="Rücken">
                Rücken
            </option>

            <option value="Ärmel">
                Ärmel
            </option>

        `;

        return;

    }


    /* PULLOVER */

    if (product === "Pullover") {

        positionSelect.innerHTML = `

            <option value="">
                Position wählen
            </option>

            <option value="Brust vorne">
                Brust vorne
            </option>

            <option value="Groß vorne">
                Groß vorne
            </option>

            <option value="Rücken">
                Rücken
            </option>

            <option value="Ärmel">
                Ärmel
            </option>

        `;

        return;

    }


    /* KEIN PRODUKT */

    positionSelect.innerHTML = `

        <option value="">
            Erst Produkt auswählen
        </option>

    `;

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

        const file =
            input.files[0];


        fileName.textContent =
            "✓ " +
            file.name +
            " – bitte im E-Mail-Fenster als Anhang hinzufügen.";


    } else {

        fileName.textContent =
            "Optional – du kannst auch ohne Datei fortfahren.";

    }

}


/* =========================
   ANFRAGE ABSENDEN
========================= */

function submitOrder(event) {

    event.preventDefault();


    /* =====================
       DATEN AUSLESEN
    ===================== */

    const product =
        document.getElementById("product").value;


    const color =
        document.getElementById("color").value;


    const size =
        document.getElementById("size").value;


    const position =
        document.getElementById("position").value;


    const quantity =
        document.getElementById("quantity").value;


    const name =
        document.getElementById("name").value;


    const customerEmail =
        document.getElementById("email").value;


    const message =
        document.getElementById("message").value;


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
            "WICHTIG: Bitte diese Datei im " +
            "E-Mail-Fenster als Anhang hinzufügen.";

    }


    /* =====================
       E-MAIL
    ===================== */

    const receiver =
        "uebi2011@gmail.com";


    const subject =
        "PrintX Anfrage – " +
        product;


    const body =

        "Hallo PrintX,\n\n" +

        "ich möchte gerne eine Anfrage " +
        für folgende Bestellung senden:\n\n" +

        "==============================\n" +

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

        "==============================\n" +

        "KUNDE\n\n" +

        "Name: " +
        name +
        "\n" +

        "E-Mail: " +
        customerEmail +
        "\n\n" +

        "==============================\n" +

        "DESIGN\n\n" +

        fileText +
        "\n\n" +

        "==============================\n" +

        "NACHRICHT\n\n" +

        (
            message.trim() !== ""
                ? message
                : "Keine zusätzliche Nachricht."
        ) +

        "\n\n" +

        "==============================\n\n" +

        "Vielen Dank!";


    /* =====================
       MAILTO
    ===================== */

    const mailto =
        "mailto:" +
        receiver +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);


    /*
       E-MAIL-PROGRAMM ÖFFNEN
    */

    window.location.href =
        mailto;

}
