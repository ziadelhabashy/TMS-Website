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
    var errorBox = document.getElementById("form-error");
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (successBox) successBox.classList.remove("show");
      if (errorBox) errorBox.classList.remove("show");
      if (submitBtn) submitBtn.disabled = true;

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            if (successBox) successBox.classList.add("show");
            form.reset();
            if (successBox) successBox.scrollIntoView({ behavior: "smooth", block: "center" });
          } else {
            if (errorBox) { errorBox.classList.add("show"); errorBox.scrollIntoView({ behavior: "smooth", block: "center" }); }
          }
        })
        .catch(function () {
          if (errorBox) { errorBox.classList.add("show"); errorBox.scrollIntoView({ behavior: "smooth", block: "center" }); }
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }
})();
