/* øvelse 1 */

document.addEventListener("DOMContentLoaded", function () {
  const produkter = document.querySelectorAll(".produkt");

  produkter.forEach(function (produkt) {
    produkt.addEventListener("click", function () {
      tjekAlko(produkt);
    });
  });

  function tjekAlko(element) {
    if (element.alt === "fynsk") {
      console.log("Indeholder Alkohol");
    } else if (element.alt === "bornholmsk_snaps") {
      console.log("Indeholder Alkohol");
    } else {
      console.log("alkoholfri");
    }
  }
});

/* øvelse 2 */

document.addEventListener("DOMContentLoaded", function () {
  const klokken = document.querySelector(".klokken");

  klokken.addEventListener("click", function () {
    var randomTime = Math.random() * 24;

    function hilsen(time) {
      if (time >= 5 && time < 10) {
        console.log("Godmorgen");
      } else if (time >= 10 && time < 18) {
        console.log("Goddag");
      } else if (time >= 18 && time < 24) {
        console.log("Godaften");
      } else {
        console.log("Godnat");
      }
    }

    hilsen(randomTime);
    console.log("Klokken er " + randomTime.toFixed(2) + ": ");
  });
});

/* øvelse 3 */
