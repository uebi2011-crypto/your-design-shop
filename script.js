
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
