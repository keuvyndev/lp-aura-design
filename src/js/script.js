const portfolioItems = [
  {
    src: "src/assets/projeto-banheiro.png",
    title: "Residência Alto de Pinheiros",
    className: "card-tall",
  },
  {
    src: "src/assets/projeto-biblioteca.png",
    title: "Penthouse Itaim",
    className: "",
  },
  {
    src: "src/assets/projeto-cozinha.png",
    title: "Apartamento Jardins",
    className: "",
  },
  {
    src: "src/assets/projeto-quarto.png",
    title: "Suíte Master Panorama",
    className: "card-wide",
  },
  {
    src: "src/assets/projeto-sala.png",
    title: "Living Vila Nova Conceição",
    className: "",
  },
  {
    src: "src/assets/projeto-sala-2.png",
    title: "Cozinha Escultural",
    className: "",
  },
  {
    src: "src/assets/projeto-terracota.png",
    title: "Sala Executiva Corporativa",
    className: "card-wide",
  },
];

const portfolioGrid = document.getElementById("portfolio-grid");

function renderPortfolio() {
  if (!portfolioGrid) return;

  portfolioItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = `portfolio-card reveal ${item.className}`.trim();

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title;
    img.loading = index > 1 ? "lazy" : "eager";
    img.decoding = "async";
    img.onerror = () => {
      card.style.background = "linear-gradient(145deg, #242727, #141717)";
    };

    const caption = document.createElement("span");
    caption.textContent = item.title;

    card.append(img, caption);
    portfolioGrid.appendChild(card);
  });
}

function setupRevealAnimation() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
  );

  items.forEach((item) => observer.observe(item));
}

function setupReveal() {
  setupRevealAnimation();
}

function setupTestimonialSlider() {
  const slides = Array.from(document.querySelectorAll(".testimonial"));
  if (!slides.length) return;

  let activeIndex = 0;
  setInterval(() => {
    slides[activeIndex].classList.remove("active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("active");
  }, 5000);
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    nav.classList.toggle("open");
  });
}

function setupHeader() {
  setupMobileMenu();
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form || !feedback) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const fields = ["name", "email", "message"];
    let valid = true;

    fields.forEach((fieldName) => {
      const field = form.elements[fieldName];
      const error = field.parentElement.querySelector(".error-message");
      const value = String(data.get(fieldName) || "").trim();

      error.textContent = "";

      if (!value) {
        error.textContent = "Campo obrigatório.";
        valid = false;
        return;
      }

      if (fieldName === "email") {
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!isEmailValid) {
          error.textContent = "Informe um e-mail válido.";
          valid = false;
        }
      }
    });

    if (!valid) {
      feedback.textContent = "Revise os campos destacados antes de enviar.";
      return;
    }

    feedback.textContent = "Mensagem enviada. Em breve retornaremos o contato.";
    form.reset();
  });
}

function setupBuildSequence() {
  const section = document.getElementById("processo");
  const pinArea = document.getElementById("build-sequence-pin");
  const video = document.getElementById("build-sequence-video");
  const steps = Array.from(document.querySelectorAll("[data-build-step]"));

  if (!section || !pinArea || !video || steps.length !== 3) return;
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined")
    return;

  gsap.registerPlugin(ScrollTrigger);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  let duration = 0;
  let trigger = null;
  let sequenceTimeline = null;

  gsap.set(steps, { autoAlpha: 0, y: 24, x: 0 });
  gsap.set(steps[0], { x: -36 });
  gsap.set(steps[1], { x: 36 });
  gsap.set(steps[2], { x: -36 });

  const syncVideoFrame = (progress) => {
    if (!duration || Number.isNaN(duration)) return;
    const reverseProgress = 1 - clamp(progress, 0, 1);
    const targetTime = reverseProgress * duration;
    if (Math.abs(video.currentTime - targetTime) > 0.016) {
      video.currentTime = targetTime;
    }
  };

  const syncFromTrigger = () => {
    if (!trigger) return;
    syncVideoFrame(trigger.progress || 0);
  };

  const buildTimeline = () => {
    if (sequenceTimeline) {
      sequenceTimeline.kill();
      sequenceTimeline = null;
    }

    if (trigger) {
      trigger.kill();
      trigger = null;
    }

    sequenceTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: pinArea,
        start: "center center",
        end: "+=240%",
        pin: pinArea,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onEnter: () => {
          syncVideoFrame(0);
        },
        onEnterBack: () => {
          syncVideoFrame(1);
        },
        onUpdate: (self) => {
          syncVideoFrame(self.progress);
        },
        onLeave: () => {
          syncVideoFrame(1);
        },
        onLeaveBack: () => {
          syncVideoFrame(0);
        },
      },
    });

    trigger = sequenceTimeline.scrollTrigger;
    sequenceTimeline
      .to(
        steps[0],
        { autoAlpha: 1, x: 0, y: 0, duration: 0.18, ease: "power2.out" },
        0.06,
      )
      .to(
        steps[0],
        { autoAlpha: 0, y: -20, duration: 0.16, ease: "power2.in" },
        0.3,
      )
      .to(
        steps[1],
        { autoAlpha: 1, x: 0, y: 0, duration: 0.18, ease: "power2.out" },
        0.42,
      )
      .to(
        steps[1],
        { autoAlpha: 0, y: -20, duration: 0.16, ease: "power2.in" },
        0.62,
      )
      .to(
        steps[2],
        { autoAlpha: 1, x: 0, y: 0, duration: 0.18, ease: "power2.out" },
        0.76,
      )
      .to(
        steps[2],
        { autoAlpha: 0, y: -20, duration: 0.16, ease: "power2.in" },
        0.96,
      );

    requestAnimationFrame(() => {
      syncFromTrigger();
    });
  };

  const initWhenReady = () => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return false;
    duration = video.duration;
    video.pause();
    video.currentTime = duration;
    buildTimeline();
    return true;
  };

  if (!initWhenReady()) {
    const onMetaLoaded = () => {
      initWhenReady();
    };
    video.addEventListener("loadedmetadata", onMetaLoaded, { once: true });
  }

  const refreshAndResync = () => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      syncFromTrigger();
    });
  };

  window.addEventListener("load", refreshAndResync);
  window.addEventListener("pageshow", refreshAndResync);
}

renderPortfolio();
setupHeader();
setupReveal();
setupTestimonialSlider();
setupContactForm();
setupBuildSequence();
