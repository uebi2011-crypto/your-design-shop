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

    document
        .getElementById("custom")
        .scrollIntoView({
            behavior: "smooth"
        });

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
   FORMULAR ABSENDEN
========================= */

function submitOrder(event) {

    event.preventDefault();


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


    const file =
        document.getElementById("designFile").files[0];


    let fileName = "Keine Datei";


    if (file) {

        fileName = file.name;

    }


    /*
       TEMPORÄRE LÖSUNG

       Da GitHub Pages keine Datenbank
       und kein Backend bereitstellt,
       erstellen wir zunächst eine
       E-Mail-Anfrage.

       Deine E-Mail unten ersetzen!
    */


    const emailAddress =
        "DEINE-EMAIL@BEISPIEL.AT";


    const subject =
        encodeURIComponent(
            "Neue PrintX Anfrage – " + product
        );


    const body =
        encodeURIComponent(

            "Hallo PrintX,\n\n" +

            "ich möchte folgendes bestellen:\n\n" +

            "Produkt: " + product + "\n" +
            "Farbe: " + color + "\n" +
            "Größe: " + size + "\n" +
            "Druckposition: " + position + "\n" +
            "Anzahl: " + quantity + "\n\n" +

            "Name: " + name + "\n" +
            "E-Mail: " + email + "\n\n" +

            "Design-Datei: " + fileName + "\n\n" +

            "Nachricht:\n" +
            message

        );


    /*
       E-Mail-Programm öffnen
    */

    window.location.href =
        "mailto:" +
        emailAddress +
        "?subject=" +
        subject +
        "&body=" +
        body;


    /*
       Hinweis
    */

    setTimeout(function() {

        alert(
            "Deine Anfrage wurde vorbereitet. " +
            "Bitte sende die E-Mail in deinem E-Mail-Programm ab."
        );

    }, 500);

}


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
