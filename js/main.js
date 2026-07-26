(function () {
  "use strict";

  var yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var burger = document.querySelector(".nav-burger");
  var nav = document.querySelector(".main-nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    var closeNav = function () {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    };
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
    document.querySelectorAll(".lang-toggle").forEach(function (toggleBtn) {
      toggleBtn.addEventListener("click", closeNav);
    });
  }

  var form = document.getElementById("contact-form");
  if (form) {
    var successBox = document.getElementById("form-success");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (successBox) successBox.classList.add("show");
      form.reset();
      if (successBox) successBox.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
})();
