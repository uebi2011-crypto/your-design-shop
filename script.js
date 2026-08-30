/* ========================================
   PRINTX
   SCRIPT.JS
======================================== */


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");

}


/* =========================
   PRODUKT AUSWÄHLEN
========================= */

function selectProduct(productName) {

    const productSelect =
        document.getElementById("product");

    productSelect.value = productName;

    updatePositions();

    document
        .getElementById("custom")
        .scrollIntoView({
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


    positionSelect.innerHTML = "";


    if (product === "Cap") {

        positionSelect.innerHTML = `
            <option value="">Position wählen</option>
            <option value="Vorne">Vorne</option>
            <option value="Seite">Seite</option>
            <option value="Hinten">Hinten</option>
        `;

    } else {

        positionSelect.innerHTML = `
            <option value="">Position wählen</option>
            <option value="Brust vorne">Brust vorne</option>
            <option value="Groß vorne">Groß vorne</option>
            <option value="Rücken">Rücken</option>
            <option value="Ärmel">Ärmel</option>
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


    if (input.files.length > 0) {

        const file = input.files[0];

        fileName.textContent =
            "✓ " + file.name;

    } else {

        fileName.textContent = "";

    }

}


/* =========================
   ANFRAGE PER E-MAIL
========================= */

function submitOrder(event) {

    event.preventDefault();


    /* Bestelldaten */

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

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    /* Datei */

    const file =
        document.getElementById("designFile").files[0];


    let fileName = "Keine Datei ausgewählt";


    if (file) {

        fileName = file.name;

    }


    /* Deine E-Mail */

    const emailAddress =
        "uebi2011@gmail.com";


    /* Betreff */

    const subject =
        encodeURIComponent(
            "PrintX Anfrage – " + product
        );


    /* E-Mail-Inhalt */

    const body =
        encodeURIComponent(

            "Hallo PrintX,\n\n" +

            "ich möchte folgende Bestellung anfragen:\n\n" +

            "━━━━━━━━━━━━━━━━━━━━\n" +

            "PRODUKT\n" +
            "Produkt: " + product + "\n" +
            "Farbe: " + color + "\n" +
            "Größe: " + size + "\n" +
            "Druckposition: " + position + "\n" +
            "Anzahl: " + quantity + "\n\n" +

            "KUNDE\n" +
            "Name: " + name + "\n" +
            "E-Mail: " + email + "\n\n" +

            "DESIGN\n" +
            "Datei: " + fileName + "\n\n" +

            "NACHRICHT\n" +
            message + "\n\n" +

            "━━━━━━━━━━━━━━━━━━━━\n\n" +

            "WICHTIG:\n" +
            "Bitte füge meine Design-Datei als Anhang " +
            "zu dieser E-Mail hinzu.\n\n" +

            "Vielen Dank!"

        );


    /* E-Mail öffnen */

    window.location.href =
        "mailto:" +
        emailAddress +
        "?subject=" +
        subject +
        "&body=" +
        body;

}


/* =========================
   PRODUKT-WECHSEL
========================= */

document
    .getElementById("product")
    .addEventListener(
        "change",
        updatePositions
    );


/* =========================
   NAVIGATION SCHLIESSEN
========================= */

document.querySelectorAll(".nav-links a")
    .forEach(function(link) {

        link.addEventListener("click", function() {

            document
                .querySelector(".nav-links")
                .classList.remove("active");

        });

    });
