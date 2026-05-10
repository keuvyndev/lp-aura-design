(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var mobile = document.getElementById("menu-mobile");
  var yearEl = document.getElementById("year");
  var form = document.getElementById("form-contato");
  var statusEl = document.getElementById("form-status");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setHeaderSolid() {
    if (!header) return;
    var y = window.scrollY || document.documentElement.scrollTop;
    header.classList.toggle("is-solid", y > 24);
  }

  setHeaderSolid();
  window.addEventListener("scroll", setHeaderSolid, { passive: true });

  function closeMobileNav() {
    if (!toggle || !mobile) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    mobile.hidden = true;
    document.body.style.overflow = "";
  }

  function openMobileNav() {
    if (!toggle || !mobile) return;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    mobile.hidden = false;
    document.body.style.overflow = "hidden";
  }

  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      if (open) closeMobileNav();
      else openMobileNav();
    });

    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileNav);
    });

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMobileNav();
    });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealEls = document.querySelectorAll(".reveal");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var delay = parseInt(el.getAttribute("data-delay") || "0", 10);
          window.setTimeout(function () {
            el.classList.add("is-visible");
          }, delay);
          io.unobserve(el);
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    revealEls.forEach(function (el, i) {
      el.setAttribute("data-delay", String(Math.min(i * 40, 240)));
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Subtle parallax on hero video (transform only) */
  if (!reduceMotion) {
    var heroVideo = document.querySelector(".hero__video");
    var ticking = false;

    function parallaxHero() {
      ticking = false;
      if (!heroVideo) return;
      var rect = heroVideo.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      var p = 1 - (rect.top + rect.height / 2) / (window.innerHeight + rect.height);
      var y = (p - 0.5) * 18;
      heroVideo.style.transform = "scale(1.04) translate3d(0, " + y.toFixed(2) + "px, 0)";
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(parallaxHero);
        }
      },
      { passive: true }
    );
    parallaxHero();
  }

  function showFieldError(id, msg) {
    var err = document.getElementById(id);
    if (err) err.textContent = msg || "";
  }

  function clearErrors() {
    ["nome-erro", "email-erro", "telefone-erro", "mensagem-erro"].forEach(function (id) {
      showFieldError(id, "");
    });
    if (statusEl) {
      statusEl.textContent = "";
      statusEl.classList.remove("is-error");
    }
  }

  if (form && statusEl) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors();

      var nome = form.nome.value.trim();
      var email = form.email.value.trim();
      var telefone = form.telefone.value.trim();
      var mensagem = form.mensagem.value.trim();
      var ok = true;

      if (!nome) {
        showFieldError("nome-erro", "Informe seu nome.");
        ok = false;
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFieldError("email-erro", "Informe um e-mail válido.");
        ok = false;
      }
      if (!telefone || telefone.replace(/\D/g, "").length < 10) {
        showFieldError("telefone-erro", "Informe um telefone com DDD.");
        ok = false;
      }
      if (!mensagem || mensagem.length < 12) {
        showFieldError("mensagem-erro", "Descreva o projeto com pelo menos 12 caracteres.");
        ok = false;
      }

      if (!ok) {
        statusEl.textContent = "Revise os campos destacados.";
        statusEl.classList.add("is-error");
        return;
      }

      statusEl.classList.remove("is-error");
      statusEl.textContent =
        "Mensagem recebida. Em um ambiente real, isto enviaria para o CRM. Por ora, use o WhatsApp para resposta imediata.";
      form.reset();
    });
  }
})();
