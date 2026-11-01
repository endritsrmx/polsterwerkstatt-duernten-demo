(() => {
  const d = document, w = window, root = d.documentElement;
  const reduce = w.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = w.matchMedia("(pointer: fine)").matches;
  root.classList.add("js");
  d.querySelectorAll("[data-year]").forEach(e => e.textContent = new Date().getFullYear());

  // Intro
  const intro = d.querySelectorAll(".intro");
  requestAnimationFrame(() => requestAnimationFrame(() => intro.forEach(e => e.classList.add("is-in"))));

  // Reveal
  const rv = d.querySelectorAll(".rv");
  if ("IntersectionObserver" in w && !reduce) {
    const io = new IntersectionObserver(ents => {
      let k = 0;
      ents.forEach(en => { if (!en.isIntersecting) return; en.target.style.setProperty("--d", (k++ * 60) + "ms"); en.target.classList.add("is-in"); io.unobserve(en.target); });
    }, { rootMargin: "0px 0px -8% 0px" });
    rv.forEach(e => io.observe(e));
  } else rv.forEach(e => e.classList.add("is-in"));

  // Header, Parallax, WhatsApp-Button
  const hdr = d.querySelector("[data-hdr]"), fab = d.querySelector("[data-fab]"), foot = d.querySelector("[data-footer]");
  const par = d.querySelector("[data-parallax]");
  let lastY = w.scrollY, ticking = false, menuOpen = false;
  const onScroll = () => {
    ticking = false;
    const y = w.scrollY, dy = y - lastY; lastY = y;
    hdr.classList.toggle("is-scrolled", y > 40);
    if (!menuOpen) { if (y > 240 && dy > 2) hdr.classList.add("is-hidden"); else if (dy < -2) hdr.classList.remove("is-hidden"); }
    fab.classList.toggle("is-on", y > 600 && foot.getBoundingClientRect().top > w.innerHeight - 40);
    if (par && !reduce) {
      const r = par.parentElement.getBoundingClientRect();
      if (r.bottom > 0) { const p = Math.min(1, Math.max(0, -r.top / r.height)); par.style.transform = `translate3d(0,${p * 8}%,0) scale(${1 + p * .04})`; }
    }
  };
  w.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // Mobile-Menü
  const burger = d.querySelector("[data-burger]"), menu = d.querySelector("[data-menu]");
  const setMenu = open => {
    menuOpen = open; menu.hidden = !open; burger.setAttribute("aria-expanded", open); burger.textContent = open ? "Schliessen" : "Menü";
    hdr.classList.remove("is-hidden"); hdr.classList.toggle("is-scrolled", open || w.scrollY > 40);
    d.body.style.overflow = open ? "hidden" : "";
    if (open) menu.querySelector("a").focus(); else burger.focus();
  };
  burger.addEventListener("click", () => setMenu(!menuOpen));
  menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  d.addEventListener("keydown", e => {
    if (!menuOpen) return;
    if (e.key === "Escape") setMenu(false);
    if (e.key === "Tab") {
      const f = [burger, ...menu.querySelectorAll("a")], i = f.indexOf(d.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });

  // Vorher/Nachher
  d.querySelectorAll("[data-ba]").forEach(box => {
    const h = box.querySelector(".ba__h"); let v = 50;
    const set = n => { v = Math.max(0, Math.min(100, n)); box.style.setProperty("--p", v + "%"); h.setAttribute("aria-valuenow", Math.round(v)); };
    const fromX = x => { const r = box.getBoundingClientRect(); set((x - r.left) / r.width * 100); };
    h.addEventListener("pointerdown", e => {
      e.preventDefault(); h.focus(); h.setPointerCapture(e.pointerId);
      const mv = ev => fromX(ev.clientX);
      const up = () => { h.removeEventListener("pointermove", mv); h.removeEventListener("pointerup", up); };
      h.addEventListener("pointermove", mv); h.addEventListener("pointerup", up);
    });
    box.addEventListener("click", e => { if (e.target === box || e.target.tagName === "IMG") fromX(e.clientX); });
    h.addEventListener("keydown", e => {
      const s = e.shiftKey ? 10 : 2, k = e.key;
      if (k === "ArrowLeft" || k === "ArrowDown") set(v - s); else if (k === "ArrowRight" || k === "ArrowUp") set(v + s);
      else if (k === "Home") set(0); else if (k === "End") set(100); else return;
      e.preventDefault();
    });
  });

  // Zähler + Sofa-Linienzeichnung
  const cnt = d.querySelector("[data-count]"), svg = d.querySelector("[data-draw]");
  const paths = svg ? [...svg.querySelectorAll("path")] : [];
  if (!reduce && "IntersectionObserver" in w) {
    if (cnt) cnt.textContent = "0";
    paths.forEach(p => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
    const io2 = new IntersectionObserver(ents => ents.forEach(en => {
      if (!en.isIntersecting) return; io2.unobserve(en.target);
      if (en.target === cnt) {
        const n = +cnt.dataset.count, t0 = performance.now();
        const step = t => { const p = Math.min(1, (t - t0) / 1400); cnt.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      } else paths.forEach((p, i) => { p.style.transition = `stroke-dashoffset 1600ms cubic-bezier(0.22,1,0.36,1) ${i * 120}ms`; p.style.strokeDashoffset = "0"; });
    }), { threshold: .4 });
    cnt && io2.observe(cnt); svg && io2.observe(svg);
  }

  // Magnetische Buttons
  if (fine && !reduce) d.querySelectorAll("[data-magnet]").forEach(el => {
    el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) / (r.width / 2) * 6}px,${(e.clientY - r.top - r.height / 2) / (r.height / 2) * 6}px)`; });
    el.addEventListener("pointerleave", () => el.style.transform = "");
  });

  // Formular → E-Mail
  const form = d.querySelector("[data-form]");
  form && form.addEventListener("submit", e => {
    e.preventDefault(); const f = new FormData(form);
    const body = `Name: ${f.get("name")}\nTelefon: ${f.get("tel")}\n\n${f.get("msg") || ""}`;
    location.href = "mailto:info@polsterwerkstatt.ch?subject=" + encodeURIComponent("Anfrage Neubezug – " + f.get("name")) + "&body=" + encodeURIComponent(body);
  });
})();
