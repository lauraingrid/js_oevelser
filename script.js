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
