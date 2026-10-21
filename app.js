const BREEDS = {
  labrador: {
    id: "labrador",
    number: "001",
    name: "Labrador",
    fullName: "Labrador Retriever",
    group: "Sporting group",
    unlocked: true,
    portrait: "assets/labrador.jpg",
    cardPosition: "58% 34%",
    profilePosition: "58% 36%",
    traits: ["Loyal", "Gentle", "Eager to please"],
    bio: "Sunny, steady, and endlessly devoted, the Labrador is the kind of companion who turns every ordinary day into an adventure. Give this good dog a ball, a trail, or simply a spot by your side and they will give you their whole heart.",
    stats: {
      strength: 7,
      speed: 6,
      size: 8,
      intelligence: 9,
    },
    dna: {
      labrador: 100,
    },
  },
};

const DNA_BREEDS = {
  labrador: { label: "Labrador", color: "#f6c453", colorAlt: "#ee8b4c" },
  goldenRetriever: { label: "Golden Retriever", color: "#ffd98a", colorAlt: "#e9a84a" },
  germanShepherd: { label: "German Shepherd", color: "#b7855b", colorAlt: "#6f4b31" },
  borderCollie: { label: "Border Collie", color: "#78d9c4", colorAlt: "#2e9f8d" },
  poodle: { label: "Poodle", color: "#c9a7ff", colorAlt: "#8b6de0" },
  husky: { label: "Husky", color: "#8fc9ef", colorAlt: "#4a91c7" },
  corgi: { label: "Corgi", color: "#ffad7a", colorAlt: "#e27445" },
};

const STAT_META = {
  strength: { label: "Strength", color: "#f07f5a", colorAlt: "#ffb28f", icon: "strength" },
  speed: { label: "Speed", color: "#45cdbd", colorAlt: "#9df3e7", icon: "speed" },
  size: { label: "Size", color: "#a98cff", colorAlt: "#d7c8ff", icon: "size" },
  intelligence: { label: "Intelligence", color: "#f4b942", colorAlt: "#ffe39a", icon: "mind" },
};

const MIN_COLLECTION_SLOTS = 4;

const ICONS = {
  paw: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 13.5c-3.6 0-6.5 2.4-6.5 5.2 0 1.7 1.4 2.8 3.1 2.6 1.2-.2 2.1-.8 3.4-.8s2.2.6 3.4.8c1.7.2 3.1-.9 3.1-2.6 0-2.8-2.9-5.2-6.5-5.2Z"/><ellipse cx="6.2" cy="9.4" rx="2.1" ry="2.7"/><ellipse cx="17.8" cy="9.4" rx="2.1" ry="2.7"/><ellipse cx="9.5" cy="5.2" rx="2.2" ry="2.9"/><ellipse cx="14.5" cy="5.2" rx="2.2" ry="2.9"/></svg>`,
  check: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 6.8"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
  back: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="10" width="15" height="10.5" rx="3"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/></svg>`,
  strength: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7.5 16.5 9-9M5 14l5 5M14 5l5 5"/><path d="m14.5 6.5 3 3M6.5 14.5l3 3"/></svg>`,
  speed: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z"/></svg>`,
  size: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 15v5h-5M20 4l-6 6M4 20l6-6"/></svg>`,
  mind: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="3"/><path d="M9.5 2v3M14.5 2v3M9.5 19v3M14.5 19v3M2 9.5h3M2 14.5h3M19 9.5h3M19 14.5h3"/><circle cx="12" cy="12" r="2"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c.6 4.1 2.9 6.4 7 7-4.1.6-6.4 2.9-7 7-.6-4.1-2.9-6.4-7-7 4.1-.6 6.4-2.9 7-7Z"/><path d="M19 17c.2 1.4 1.1 2.3 2.5 2.5-1.4.2-2.3 1.1-2.5 2.5-.2-1.4-1.1-2.3-2.5-2.5 1.4-.2 2.3-1.1 2.5-2.5Z"/></svg>`,
};

const view = document.getElementById("view");

function icon(name) {
  return ICONS[name] || "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function unlockedDogs() {
  return Object.values(BREEDS).filter((dog) => dog.unlocked);
}

function updateCount() {
  const count = unlockedDogs().length;
  const el = document.getElementById("collected-count");
  if (el) el.textContent = String(count).padStart(2, "0");
  document.querySelector(".topbar-count")?.setAttribute("aria-label", `${count} companion${count === 1 ? "" : "s"} collected`);
}

function dogCard(dog) {
  return `
    <a class="dog-card" href="#/dog/${encodeURIComponent(dog.id)}" style="--focus:${dog.cardPosition};--accent:${dog.accent || "#f4b942"}">
      <img class="dog-photo" src="${dog.portrait}" alt="Portrait of ${escapeHtml(dog.name)}" loading="eager">
      <span class="card-shade"></span>
      <span class="card-sheen"></span>
      <span class="card-top">
        <span class="card-status">${icon("check")} Collected</span>
        <span class="card-number">#${escapeHtml(dog.number)}</span>
      </span>
      <span class="card-info">
        <span class="card-copy">
          <span class="card-kicker">${escapeHtml(dog.group)}</span>
          <span class="card-name">${escapeHtml(dog.name)}</span>
          <span class="card-sub">${escapeHtml(dog.fullName)}</span>
        </span>
        <span class="card-go">${icon("arrow")}</span>
      </span>
    </a>`;
}

function mysteryCard() {
  return `
    <div class="dog-card mystery-card" aria-hidden="true">
      <span class="mystery-tag">Undiscovered</span>
      <span class="mystery-icon">${icon("lock")}</span>
      <span class="mystery-name">???</span>
      <span class="mystery-copy">Keep exploring</span>
    </div>`;
}

function renderMenu() {
  const dogs = unlockedDogs();
  const slots = Math.max(MIN_COLLECTION_SLOTS, dogs.length);
  const mysteries = Math.max(0, slots - dogs.length);
  const label = `${dogs.length} unlocked`;

  document.title = "Dog Collection — Pawcraft";
  view.innerHTML = `
    <section class="screen menu-screen">
      <div class="menu-hero">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-line"></span>Your companions</p>
          <h1>Dog <span class="grad">Collection</span></h1>
          <p class="hero-lede">Every great adventure begins with a loyal friend. Meet the dogs who call your pack home.</p>
        </div>
        <div class="pack-status">
          <div class="pack-status-ring">
            <span class="pack-status-paw">${icon("paw")}</span>
          </div>
          <div class="pack-status-copy">
            <span>Pack status</span>
            <strong>Ready to explore</strong>
          </div>
        </div>
      </div>

      <div class="collection-head">
        <div>
          <h2>Collected breeds</h2>
          <p>New companions will appear here as you grow your pack.</p>
        </div>
        <span class="collection-chip"><span class="chip-dot"></span>${label}</span>
      </div>

      <div class="dog-grid">
        ${dogs.map(dogCard).join("")}
        ${Array.from({ length: mysteries }, mysteryCard).join("")}
      </div>

      <div class="collection-note">
        <span class="note-icon">${icon("sparkle")}</span>
        <span>More breeds are waiting to be discovered. Your collection grows with every adventure.</span>
      </div>
    </section>`;
  updateCount();
}

function formatPercent(value) {
  return Number.isInteger(value) ? `${value}%` : `${value.toFixed(1)}%`;
}

function dnaData(dog) {
  return Object.entries(dog.dna)
    .filter(([, percent]) => percent > 0)
    .map(([id, percent]) => {
      const meta = DNA_BREEDS[id] || { label: id, color: "#f4b942", colorAlt: "#ee8b4c" };
      return { id, percent, ...meta };
    })
    .sort((a, b) => b.percent - a.percent);
}

function dnaChart(entries) {
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  const gradients = [];
  const segments = [];

  entries.forEach((entry, index) => {
    const length = (entry.percent / 100) * circumference;
    const gap = entries.length > 1 ? Math.min(5, length * 0.12) : 0;
    const dash = Math.max(length - gap, 0.8);
    gradients.push(`
      <linearGradient id="dna-gradient-${index}" x1="10%" y1="0%" x2="90%" y2="100%">
        <stop offset="0%" stop-color="${entry.color}"/>
        <stop offset="100%" stop-color="${entry.colorAlt}"/>
      </linearGradient>`);
    segments.push(`
      <circle class="dna-slice" cx="100" cy="100" r="${radius}" fill="none"
        stroke="url(#dna-gradient-${index})" stroke-width="30"
        stroke-dasharray="${dash} ${circumference - dash}"
        stroke-dashoffset="${-offset}"
        transform="rotate(-90 100 100)"></circle>`);
    offset += length;
  });

  const top = entries[0];
  const label = entries.length === 1 ? top.label : `${entries.length} breed blend`;
  const aria = entries.map((entry) => `${entry.label} ${formatPercent(entry.percent)}`).join(", ");

  return `
    <div class="dna-visual">
      <div class="chart-glow"></div>
      <div class="chart-shell" role="img" aria-label="DNA composition: ${aria}">
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <defs>${gradients.join("")}</defs>
          <circle cx="100" cy="100" r="93" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="1" stroke-dasharray="2 7"></circle>
          <circle cx="100" cy="100" r="${radius}" fill="none" stroke="rgba(255,255,255,.055)" stroke-width="30"></circle>
          ${segments.join("")}
          <circle cx="100" cy="100" r="51" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="1"></circle>
        </svg>
        <div class="chart-center">
          <strong>${formatPercent(top.percent)}</strong>
          <span>${escapeHtml(label)}</span>
        </div>
      </div>
    </div>`;
}

function dnaPanel(dog) {
  const entries = dnaData(dog);
  const purebred = entries.length === 1 && entries[0].percent === 100;
  const legend = entries
    .map(
      (entry) => `
      <li class="legend-item">
        <span class="legend-swatch" style="--swatch-a:${entry.color};--swatch-b:${entry.colorAlt}"></span>
        <span class="legend-name">${escapeHtml(entry.label)}</span>
        <span class="legend-percent">${formatPercent(entry.percent)}</span>
      </li>`
    )
    .join("");

  return `
    <div class="dna-card">
      <div class="dna-chart-column">
        ${dnaChart(entries)}
      </div>
      <div class="dna-info">
        <div class="dna-heading">
          <div>
            <p class="eyebrow">Ancestry</p>
            <h2>DNA composition</h2>
          </div>
          <span class="dna-badge">${purebred ? icon("sparkle") : ""}${purebred ? "Purebred" : "Mixed breed"}</span>
        </div>
        <p class="dna-description">${purebred ? `${escapeHtml(dog.name)} carries one clear lineage. This chart will grow into a colorful blend as new breeds join future companions.` : "This companion's ancestry is a blend of breeds, shown by percentage in the chart."}</p>
        <ul class="dna-legend">${legend}</ul>
        <p class="dna-note">${purebred ? "All other breeds account for 0% of this companion's DNA." : "DNA percentages always total 100%."}</p>
      </div>
    </div>`;
}

function statRow(name, value) {
  const meta = STAT_META[name];
  return `
    <div class="stat-row" style="--stat:${meta.color};--stat-alt:${meta.colorAlt}">
      <span class="stat-icon">${icon(meta.icon)}</span>
      <span class="stat-label">${meta.label}</span>
      <span class="stat-track" role="meter" aria-label="${meta.label}" aria-valuemin="1" aria-valuemax="10" aria-valuenow="${value}">
        <span class="stat-fill" data-value="${value}"></span>
      </span>
      <span class="stat-value">${value}<small>/10</small></span>
    </div>`;
}

function renderProfile(dog) {
  document.title = `${dog.name} — Dog Profile`;
  view.innerHTML = `
    <section class="screen profile-screen">
      <div class="profile-topline">
        <a class="back-link" href="#/">${icon("back")}<span>Back to collection</span></a>
        <span class="profile-index">Companion #${escapeHtml(dog.number)}</span>
      </div>

      <div class="profile-head">
        <div>
          <p class="eyebrow"><span class="eyebrow-line"></span>Breed profile</p>
          <div class="profile-title-row">
            <h1>${escapeHtml(dog.name)}</h1>
            <span class="rank-badge">#${escapeHtml(dog.number)}</span>
          </div>
          <p class="profile-sub">${escapeHtml(dog.fullName)}<span>•</span>${escapeHtml(dog.group)}</p>
        </div>
        <div class="profile-head-side">
          <span class="collected-badge">${icon("check")} Collected</span>
          <span class="companion-label">Your companion</span>
        </div>
      </div>

      <div class="profile-hero">
        <div class="portrait-panel">
          <div class="portrait-frame" style="--focus:${dog.profilePosition}">
            <img src="${dog.portrait}" alt="Large portrait of ${escapeHtml(dog.name)}">
            <span class="portrait-vignette"></span>
            <span class="portrait-badge">${icon("paw")} Unlocked</span>
          </div>
          <div class="portrait-meta">
            <span>Official companion portrait</span>
            <span>#${escapeHtml(dog.number)}</span>
          </div>
        </div>

        <div class="profile-panel">
          <p class="profile-bio">${escapeHtml(dog.bio)}</p>
          <div class="tag-row">
            ${dog.traits.map((trait) => `<span class="trait">${escapeHtml(trait)}</span>`).join("")}
          </div>
          <div class="stats-card">
            <div class="stats-heading">
              <h2>Core stats</h2>
              <span>out of 10</span>
            </div>
            <div class="stat-list">
              ${Object.entries(dog.stats).map(([name, value]) => statRow(name, value)).join("")}
            </div>
          </div>
        </div>
      </div>

      ${dnaPanel(dog)}
    </section>`;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll(".stat-fill").forEach((bar) => {
        bar.style.width = `${Number(bar.dataset.value) * 10}%`;
      });
    });
  });
  updateCount();
}

function renderNotFound() {
  document.title = "Companion not found — Pawcraft";
  view.innerHTML = `
    <section class="screen not-found">
      <span class="not-found-paw">${icon("paw")}</span>
      <p class="eyebrow">Lost trail</p>
      <h1>Companion not found</h1>
      <p>This dog has not joined your pack yet. Head back and meet the companions you have collected.</p>
      <a class="primary-link" href="#/">${icon("back")} Back to collection</a>
    </section>`;
  updateCount();
}

function route() {
  const path = location.hash.replace(/^#\/?/, "");
  const [section, id] = path.split("/").filter(Boolean);

  if (section === "dog" && id) {
    const dog = BREEDS[decodeURIComponent(id)];
    if (dog && dog.unlocked) renderProfile(dog);
    else renderNotFound();
  } else {
    renderMenu();
  }

  window.scrollTo(0, 0);
  requestAnimationFrame(() => view.focus({ preventScroll: true }));
}

window.addEventListener("hashchange", route);
route();
