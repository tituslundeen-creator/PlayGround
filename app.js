const BREEDS = {
  labrador: {
    id: "labrador",
    number: "001",
    name: "Labrador",
    fullName: "Labrador Retriever",
    group: "Sporting group",
    rarity: "common",
    unlocked: true,
    portrait: "assets/labrador.jpg",
    cardPosition: "50% 50%",
    profilePosition: "50% 46%",
    traits: ["Loyal", "Gentle", "Eager to please"],
    stats: {
      speed: 7,
      strength: 6,
      size: 7,
      bite: 5,
      intelligence: 5,
    },
    dna: {
      labrador: 100,
    },
  },
  goldenRetriever: {
    id: "goldenRetriever",
    number: "002",
    name: "Golden Retriever",
    fullName: "Golden Retriever",
    group: "Sporting group",
    rarity: "rare",
    unlocked: false,
    portrait: "assets/golden-retriever.jpg",
    cardPosition: "50% 28%",
    profilePosition: "50% 30%",
    traits: ["Friendly", "Patient", "Devoted"],
    stats: {
      speed: 7,
      strength: 6,
      size: 7,
      bite: 4,
      intelligence: 9,
    },
    dna: {
      goldenRetriever: 100,
    },
  },
  corgi: {
    id: "corgi",
    number: "003",
    name: "Corgi",
    fullName: "Pembroke Welsh Corgi",
    group: "Herding group",
    rarity: "epic",
    unlocked: false,
    portrait: "assets/corgi.jpg",
    cardPosition: "50% 30%",
    profilePosition: "50% 32%",
    traits: ["Bold", "Playful", "Clever"],
    stats: {
      speed: 7,
      strength: 5,
      size: 3,
      bite: 6,
      intelligence: 8,
    },
    dna: {
      corgi: 100,
    },
  },
};

const RARITIES = {
  starter: { label: "Starter", color: "#4fd1c5", soft: "rgba(79, 209, 197, 0.18)" },
  common: { label: "Common", color: "#a5b9ad", soft: "rgba(165, 185, 173, 0.18)" },
  rare: { label: "Rare", color: "#6aa9ff", soft: "rgba(106, 169, 255, 0.2)" },
  epic: { label: "Epic", color: "#b49cff", soft: "rgba(180, 156, 255, 0.2)" },
  legendary: { label: "Legendary", color: "#f4b942", soft: "rgba(244, 185, 66, 0.24)" },
};

const CRATES = {
  runt: {
    id: "runt",
    name: "Runt Crate",
    rarity: "starter",
    cost: 100,
    currency: "Bones",
    companions: 0,
    available: true,
    event: null,
    startsAt: null,
    endsAt: null,
    description: "A compact starter crate waiting to be stocked. Its first companions will appear here soon.",
    rewards: [],
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
  speed: { label: "Speed", color: "#45cdbd", colorAlt: "#9df3e7", icon: "speed" },
  strength: { label: "Strength", color: "#f07f5a", colorAlt: "#ffb28f", icon: "strength" },
  size: { label: "Size", color: "#a98cff", colorAlt: "#d7c8ff", icon: "size" },
  bite: { label: "Bite", color: "#f27059", colorAlt: "#ffb4a1", icon: "bite" },
  intelligence: { label: "Intelligence", color: "#f4b942", colorAlt: "#ffe39a", icon: "mind" },
};

const MIN_COLLECTION_SLOTS = 4;
const STARTING_BONES = 300;
const SAVE_KEY = "pawpacks-save-v1";

const ICONS = {
  paw: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 13.5c-3.6 0-6.5 2.4-6.5 5.2 0 1.7 1.4 2.8 3.1 2.6 1.2-.2 2.1-.8 3.4-.8s2.2.6 3.4.8c1.7.2 3.1-.9 3.1-2.6 0-2.8-2.9-5.2-6.5-5.2Z"/><ellipse cx="6.2" cy="9.4" rx="2.1" ry="2.7"/><ellipse cx="17.8" cy="9.4" rx="2.1" ry="2.7"/><ellipse cx="9.5" cy="5.2" rx="2.2" ry="2.9"/><ellipse cx="14.5" cy="5.2" rx="2.2" ry="2.9"/></svg>`,
  check: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 6.8"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
  back: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="10" width="15" height="10.5" rx="3"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/></svg>`,
  strength: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7.5 16.5 9-9M5 14l5 5M14 5l5 5"/><path d="m14.5 6.5 3 3M6.5 14.5l3 3"/></svg>`,
  speed: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z"/></svg>`,
  size: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 15v5h-5M20 4l-6 6M4 20l6-6"/></svg>`,
  bite: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7.5C5 6.1 6.1 5 7.5 5h9C17.9 5 19 6.1 19 7.5v1C19 13.4 15.9 18 12 18s-7-4.6-7-9.5v-1Z"/><path d="M5 10h14M9 5v5M15 5v5"/></svg>`,
  mind: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="3"/><path d="M9.5 2v3M14.5 2v3M9.5 19v3M14.5 19v3M2 9.5h3M2 14.5h3M19 9.5h3M19 14.5h3"/><circle cx="12" cy="12" r="2"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c.6 4.1 2.9 6.4 7 7-4.1.6-6.4 2.9-7 7-.6-4.1-2.9-6.4-7-7 4.1-.6 6.4-2.9 7-7Z"/><path d="M19 17c.2 1.4 1.1 2.3 2.5 2.5-1.4.2-2.3 1.1-2.5 2.5-.2-1.4-1.1-2.3-2.5-2.5 1.4-.2 2.3-1.1 2.5-2.5Z"/></svg>`,
  bone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/></svg>`,
  crate: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  volume: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  volumeOff: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="m22 9-6 6M16 9l6 6"/></svg>`,
};

const view = document.getElementById("view");
const overlay = document.getElementById("pack-overlay");
const toast = document.getElementById("toast");

const gameState = loadGame();
applyUnlocks();

let audioContext = null;
let opening = false;
let openingTimers = [];
let lastFocusedElement = null;
let toastTimer = null;

function defaultGame() {
  return {
    bones: STARTING_BONES,
    unlocked: ["labrador"],
    duplicates: {},
    sound: true,
  };
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return defaultGame();
    const saved = JSON.parse(raw);
    const unlocked = Array.isArray(saved.unlocked)
      ? saved.unlocked.filter((id) => BREEDS[id])
      : ["labrador"];
    if (!unlocked.includes("labrador")) unlocked.unshift("labrador");
    const duplicates =
      saved.duplicates && typeof saved.duplicates === "object" ? saved.duplicates : {};
    return {
      bones: Number.isFinite(saved.bones) ? Math.max(0, Math.floor(saved.bones)) : STARTING_BONES,
      unlocked: [...new Set(unlocked)],
      duplicates,
      sound: saved.sound !== false,
    };
  } catch {
    return defaultGame();
  }
}

function saveGame() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
  } catch {
    return;
  }
}

function applyUnlocks() {
  Object.values(BREEDS).forEach((dog) => {
    dog.unlocked = gameState.unlocked.includes(dog.id);
  });
}

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

function overallRating(dog) {
  const values = Object.values(dog.stats);
  if (!values.length) return 0;
  const maximum = values.length * 10;
  return Math.round((values.reduce((total, value) => total + value, 0) / maximum) * 100);
}

function rarityMeta(key) {
  return RARITIES[key] || RARITIES.common;
}

function updateHud(bumpBones = false) {
  const count = unlockedDogs().length;
  const countEl = document.getElementById("collected-count");
  if (countEl) countEl.textContent = String(count).padStart(2, "0");

  const countPill = document.querySelector(".topbar-count");
  if (countPill) {
    countPill.setAttribute(
      "aria-label",
      `${count} companion${count === 1 ? "" : "s"} collected`
    );
  }

  const boneText = gameState.bones.toLocaleString("en-US");
  ["bone-balance", "wallet-bones"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = boneText;
  });

  document.querySelectorAll(".bone-pill").forEach((el) => {
    el.setAttribute("aria-label", `${gameState.bones} Bones`);
  });

  if (bumpBones) {
    const nodes = document.querySelectorAll(".bone-pill, .bone-wallet");
    nodes.forEach((node) => {
      node.classList.remove("is-bumping");
      void node.offsetWidth;
      node.classList.add("is-bumping");
    });
    window.setTimeout(() => {
      nodes.forEach((node) => node.classList.remove("is-bumping"));
    }, 620);
  }
}

function setBones(value) {
  gameState.bones = Math.max(0, Math.round(value));
  saveGame();
  updateHud(true);
  syncCrateAffordability();
}

function setActiveNav(section) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const active = link.dataset.nav === section;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function showToast(message, tone = "info") {
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.className = `toast is-visible${tone === "error" ? " is-error" : ""}`;
  toastTimer = window.setTimeout(() => {
    toast.className = "toast";
  }, 2800);
}

function soundContext() {
  if (!gameState.sound) return null;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  if (!audioContext) audioContext = new AudioCtor();
  if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
  return audioContext;
}

function tone(ctx, frequency, start, duration, type, volume) {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function noise(ctx, start, duration, volume, filterFrequency) {
  const length = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  source.buffer = buffer;
  filter.type = "lowpass";
  filter.frequency.value = filterFrequency;
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start(start);
}

function playSfx(name) {
  const ctx = soundContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  if (name === "rattle") {
    [0, 0.15, 0.3].forEach((offset, index) => {
      noise(ctx, now + offset, 0.1, 0.045, 1000);
      tone(ctx, 130 + index * 18, now + offset, 0.08, "triangle", 0.025);
    });
  } else if (name === "break") {
    noise(ctx, now, 0.32, 0.11, 1800);
    tone(ctx, 190, now, 0.26, "sawtooth", 0.045);
    tone(ctx, 90, now + 0.03, 0.32, "sine", 0.065);
  } else if (name === "reward") {
    [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
      tone(ctx, frequency, now + index * 0.085, 0.24, "sine", 0.05);
    });
  } else if (name === "error") {
    tone(ctx, 180, now, 0.14, "square", 0.03);
    tone(ctx, 120, now + 0.12, 0.18, "square", 0.028);
  } else if (name === "click") {
    tone(ctx, 520, now, 0.06, "sine", 0.018);
  }
}

function updateSoundButton() {
  const button = document.getElementById("sound-toggle");
  if (!button) return;
  button.innerHTML = gameState.sound ? ICONS.volume : ICONS.volumeOff;
  button.setAttribute("aria-pressed", String(gameState.sound));
  button.setAttribute("aria-label", gameState.sound ? "Sound on" : "Sound off");
}

function formatPercent(value) {
  return Number.isInteger(value) ? `${value}%` : `${value.toFixed(1)}%`;
}

function isCrateAvailable(crate) {
  if (!crate || crate.available === false) return false;
  const now = Date.now();
  if (crate.startsAt && now < Date.parse(crate.startsAt)) return false;
  if (crate.endsAt && now > Date.parse(crate.endsAt)) return false;
  return true;
}

function availableCrates() {
  return Object.values(CRATES).filter(isCrateAvailable);
}

function crateHasCompanions(crate) {
  return Boolean(crate) && crate.rewards.some((reward) => BREEDS[reward.breedId]);
}

function rollCrate(crate) {
  const pool = crate.rewards.filter((reward) => BREEDS[reward.breedId]);
  const total = pool.reduce((sum, reward) => sum + Math.max(0, reward.chance), 0);
  if (!pool.length || total <= 0) return null;
  let roll = Math.random() * total;
  for (const reward of pool) {
    roll -= Math.max(0, reward.chance);
    if (roll <= 0) return reward;
  }
  return pool[pool.length - 1];
}

function crateArtwork(uid) {
  const safe = `crate-${String(uid).replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return `
    <svg class="crate-svg" viewBox="0 0 360 360" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="${safe}-wood" x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0" stop-color="#d59a5b"/>
          <stop offset="0.5" stop-color="#a56735"/>
          <stop offset="1" stop-color="#6c3f20"/>
        </linearGradient>
        <linearGradient id="${safe}-wood-alt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e5b173"/>
          <stop offset="0.55" stop-color="#b97b42"/>
          <stop offset="1" stop-color="#7b4824"/>
        </linearGradient>
        <linearGradient id="${safe}-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f8e2a8"/>
          <stop offset="0.45" stop-color="#c49a55"/>
          <stop offset="1" stop-color="#896331"/>
        </linearGradient>
        <linearGradient id="${safe}-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#10261b" stop-opacity="0.9"/>
          <stop offset="0.45" stop-color="#07130e" stop-opacity="0.7"/>
          <stop offset="1" stop-color="#173526" stop-opacity="0.94"/>
        </linearGradient>
        <radialGradient id="${safe}-glow">
          <stop offset="0" stop-color="#ffd37a" stop-opacity="0.55"/>
          <stop offset="0.5" stop-color="#f4b942" stop-opacity="0.14"/>
          <stop offset="1" stop-color="#f4b942" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <ellipse cx="180" cy="318" rx="112" ry="16" fill="#020806" opacity="0.45"/>
      <circle cx="180" cy="178" r="148" fill="url(#${safe}-glow)"/>

      <g>
        <rect x="58" y="88" width="244" height="38" rx="12" fill="url(#${safe}-wood-alt)" stroke="#4c2b14" stroke-width="2"/>
        <rect x="94" y="67" width="172" height="27" rx="11" fill="url(#${safe}-wood)" stroke="#4c2b14" stroke-width="2"/>
        <path d="M156 67c0-16 9-27 24-27s24 11 24 27" fill="none" stroke="url(#${safe}-metal)" stroke-width="7" stroke-linecap="round"/>
        <rect x="70" y="122" width="220" height="176" rx="18" fill="url(#${safe}-wood)" stroke="#4c2b14" stroke-width="2"/>
        <rect x="82" y="132" width="196" height="156" rx="12" fill="url(#${safe}-glass)"/>
        <g stroke="url(#${safe}-metal)" stroke-width="5.5" stroke-linecap="round" opacity="0.92">
          <path d="M104 138v144"/>
          <path d="M132 138v144"/>
          <path d="M160 138v144"/>
          <path d="M188 138v144"/>
          <path d="M216 138v144"/>
          <path d="M244 138v144"/>
        </g>
        <rect x="56" y="118" width="24" height="182" rx="9" fill="url(#${safe}-wood-alt)" stroke="#4c2b14" stroke-width="2"/>
        <rect x="280" y="118" width="24" height="182" rx="9" fill="url(#${safe}-wood-alt)" stroke="#4c2b14" stroke-width="2"/>
        <rect x="56" y="286" width="248" height="20" rx="9" fill="url(#${safe}-wood)" stroke="#4c2b14" stroke-width="2"/>
        <rect x="82" y="124" width="196" height="4" rx="2" fill="#ffd37a" opacity="0.42"/>
        <g fill="url(#${safe}-metal)" opacity="0.92">
          <path d="M56 132h24v-10H56z"/>
          <path d="M280 132h24v-10h-24z"/>
          <path d="M56 284h24v10H56z"/>
          <path d="M280 284h24v10h-24z"/>
        </g>
        <g transform="translate(180 205)">
          <circle r="39" fill="#08150f" opacity="0.82" stroke="#f4b942" stroke-opacity="0.42" stroke-width="1.5"/>
          <g fill="#f6c453" opacity="0.95">
            <ellipse cy="9" rx="13" ry="10"/>
            <ellipse cx="-13" cy="-7" rx="4.8" ry="6.3" transform="rotate(-18 -13 -7)"/>
            <ellipse cx="13" cy="-7" rx="4.8" ry="6.3" transform="rotate(18 13 -7)"/>
            <ellipse cx="-5" cy="-16" rx="4.8" ry="6.3" transform="rotate(-8 -5 -16)"/>
            <ellipse cx="5" cy="-16" rx="4.8" ry="6.3" transform="rotate(8 5 -16)"/>
          </g>
        </g>
        <rect x="132" y="258" width="96" height="26" rx="8" fill="#1a1109" stroke="url(#${safe}-metal)" stroke-width="1.5"/>
        <text x="180" y="276" fill="#f6d896" font-family="Fredoka, sans-serif" font-size="12" font-weight="600" letter-spacing="3" text-anchor="middle">RUNT</text>
        <path d="M70 146c18 7 36 7 54 0M70 172c18 7 36 7 54 0" fill="none" stroke="#f0c188" stroke-width="1.4" opacity="0.24"/>
      </g>

      <g fill="#f3ddb0" opacity="0.62">
        <g transform="translate(76 86) rotate(-24)">
          <rect x="-17" y="-4" width="34" height="8" rx="4"/>
          <circle cx="-17" cy="-5" r="5.2"/>
          <circle cx="-17" cy="5" r="5.2"/>
          <circle cx="17" cy="-5" r="5.2"/>
          <circle cx="17" cy="5" r="5.2"/>
        </g>
        <g transform="translate(296 112) rotate(22) scale(0.78)">
          <rect x="-17" y="-4" width="34" height="8" rx="4"/>
          <circle cx="-17" cy="-5" r="5.2"/>
          <circle cx="-17" cy="5" r="5.2"/>
          <circle cx="17" cy="-5" r="5.2"/>
          <circle cx="17" cy="5" r="5.2"/>
        </g>
      </g>

      <g fill="#ffe3a3">
        <circle cx="72" cy="160" r="2.2" opacity="0.7"/>
        <circle cx="300" cy="198" r="1.6" opacity="0.55"/>
        <circle cx="118" cy="64" r="1.7" opacity="0.6"/>
        <circle cx="268" cy="70" r="2" opacity="0.45"/>
      </g>
    </svg>`;
}

function dogCard(dog) {
  const overall = overallRating(dog);
  const subtitle =
    dog.fullName === dog.name
      ? ""
      : `<span class="card-sub">${escapeHtml(dog.fullName)}</span>`;
  return `
    <a class="dog-card" href="#/dog/${encodeURIComponent(dog.id)}" style="--focus:${dog.cardPosition};--accent:${dog.accent || "#f4b942"}" aria-label="${escapeHtml(dog.name)}, overall ${overall}">
      <img class="dog-photo" src="${dog.portrait}" alt="Portrait of ${escapeHtml(dog.name)}" loading="eager">
      <span class="card-shade"></span>
      <span class="card-sheen"></span>
      <span class="card-top">
        <span class="card-status">${icon("check")} Collected</span>
        <span class="card-top-meta">
          <span class="card-number">#${escapeHtml(dog.number)}</span>
          <span class="card-overall" aria-hidden="true">
            <strong>${overall}</strong>
            <small>Overall</small>
          </span>
        </span>
      </span>
      <span class="card-info">
        <span class="card-copy">
          <span class="card-name">${escapeHtml(dog.name)}</span>
          ${subtitle}
        </span>
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

  document.title = "Dog Collection — PawPacks";
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
  updateHud();
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
  const overall = overallRating(dog);
  const subtitle =
    dog.fullName === dog.name
      ? ""
      : `<p class="profile-sub">${escapeHtml(dog.fullName)}</p>`;
  document.title = `${dog.name} — PawPacks`;
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
          ${subtitle}
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
          <div class="tag-row">
            ${dog.traits.map((trait) => `<span class="trait">${escapeHtml(trait)}</span>`).join("")}
          </div>
          <div class="stats-card">
            <div class="stats-heading">
              <h2>Core stats</h2>
              <span class="stats-overall">Overall <strong>${overall}</strong></span>
            </div>
            <div class="stat-list">
              ${Object.entries(dog.stats).map(([name, value]) => statRow(name, value)).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>`;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll(".stat-fill").forEach((bar) => {
        bar.style.width = `${Number(bar.dataset.value) * 10}%`;
      });
    });
  });
  updateHud();
}

function dropPreview(reward) {
  const dog = BREEDS[reward.breedId];
  if (!dog) return "";
  const rarity = rarityMeta(reward.rarity || dog.rarity);
  return `
    <span class="crate-drop" style="--rarity:${rarity.color};--rarity-soft:${rarity.soft}">
      <span class="crate-drop-thumb">
        <img src="${dog.portrait}" alt="" style="object-position:${dog.cardPosition}">
      </span>
      <span class="crate-drop-copy">
        <span class="crate-drop-name">${escapeHtml(dog.name)}</span>
        <span class="crate-drop-meta">${rarity.label} · <strong>${formatPercent(reward.chance)}</strong></span>
      </span>
    </span>`;
}

function crateCard(crate) {
  const tier = rarityMeta(crate.rarity);
  const hasCompanions = crateHasCompanions(crate);
  const affordable = hasCompanions && gameState.bones >= crate.cost;
  const drops = hasCompanions
    ? crate.rewards.map(dropPreview).join("")
    : `<span class="crate-drop-placeholder">${icon("paw")} Companions coming soon</span>`;
  const action = !hasCompanions
    ? "Coming soon"
    : affordable
      ? `Open Pack ${icon("arrow")}`
      : `Need ${crate.cost} Bones`;
  const guarantee = hasCompanions
    ? `${icon("check")} ${crate.companions} companion guaranteed`
    : `${icon("lock")} Awaiting companions`;
  const ariaLabel = !hasCompanions
    ? `${escapeHtml(crate.name)} is awaiting companions`
    : affordable
      ? `Open ${escapeHtml(crate.name)} for ${crate.cost} ${crate.currency}`
      : `${escapeHtml(crate.name)} requires ${crate.cost} ${crate.currency}`;
  return `
    <button type="button" class="crate-card${affordable ? "" : " is-unaffordable"}${hasCompanions ? "" : " is-empty"}" data-open-crate="${crate.id}" aria-label="${ariaLabel}" aria-disabled="${affordable ? "false" : "true"}">
      <span class="crate-art-panel">
        <span class="crate-art-halo"></span>
        ${crateArtwork(`card-${crate.id}`)}
        <span class="crate-art-label">${icon("sparkle")} Sealed crate</span>
      </span>
      <span class="crate-content">
        <span class="crate-topline">
          <span class="crate-tier" style="--rarity:${tier.color};--rarity-soft:${tier.soft}">${tier.label} crate</span>
          <span class="crate-guarantee">${guarantee}</span>
        </span>
        <span class="crate-name">${escapeHtml(crate.name)}</span>
        <span class="crate-description">${escapeHtml(crate.description)}</span>
        <span class="crate-drops">
          <span class="crate-drops-label">Possible companions</span>
          <span class="crate-drop-grid">${drops}</span>
        </span>
        <span class="crate-footer">
          <span class="crate-price">${icon("bone")} <strong>${crate.cost}</strong> <small>Bones</small></span>
          <span class="crate-cta">${action}</span>
        </span>
      </span>
    </button>`;
}

function renderCrates() {
  const crates = availableCrates();
  const total = Object.keys(BREEDS).length;
  const discovered = unlockedDogs().length;
  const progress = Math.round((discovered / total) * 100);
  const cheapest = Object.values(CRATES).reduce(
    (min, crate) => Math.min(min, crate.cost),
    Infinity
  );

  document.title = "Crates — PawPacks";
  view.innerHTML = `
    <section class="screen crates-screen">
      <div class="crates-hero">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-line"></span>Bone-powered drops</p>
          <h1>Crate <span class="grad">Bay</span></h1>
          <p class="hero-lede">Spend Bones, crack open a stocked crate, and meet the next companion waiting to join your pack.</p>
        </div>
        <div class="bone-wallet" aria-label="${gameState.bones} Bones available">
          <span class="bone-wallet-icon">${icon("bone")}</span>
          <span class="bone-wallet-copy">
            <span>Your Bone balance</span>
            <strong id="wallet-bones">${gameState.bones.toLocaleString("en-US")}</strong>
            <small>Bones · ${cheapest} per crate</small>
          </span>
        </div>
      </div>

      <div class="collection-head crate-section-head">
        <div>
          <h2>Available crates</h2>
          <p>Companion lists and drop details will appear here once a crate is stocked.</p>
        </div>
        <span class="collection-chip"><span class="chip-dot"></span>${crates.length} crate${crates.length === 1 ? "" : "s"}</span>
      </div>

      <div class="crates-layout">
        <div class="crate-list">
          ${crates.length ? crates.map(crateCard).join("") : `<div class="crate-empty">${icon("lock")} No crates available right now.</div>`}
        </div>
        <aside class="crate-sidebar">
          <div class="pack-info-card">
            <p class="eyebrow">How it works</p>
            <h2>A quick open</h2>
            <ol class="how-list">
              <li class="how-step"><span class="step-number">1</span><span><strong>Spend 100 Bones</strong><small>The cost is taken when the crate starts to open.</small></span></li>
              <li class="how-step"><span class="step-number">2</span><span><strong>Watch it crack</strong><small>A short rattle and break reveals your pull.</small></span></li>
              <li class="how-step"><span class="step-number">3</span><span><strong>Meet your companion</strong><small>New breeds join the collection. Duplicates are tracked for future conversion.</small></span></li>
            </ol>
          </div>
          <div class="pack-info-card">
            <p class="eyebrow">Collection progress</p>
            <div class="progress-heading">
              <strong>${discovered}<span>/${total}</span></strong>
              <small>discovered</small>
            </div>
            <div class="progress-track"><span style="width:${progress}%"></span></div>
            <p class="progress-note">${discovered === total ? "Every known breed has joined your pack." : "Open crates to complete your PawPack."}</p>
          </div>
        </aside>
      </div>
    </section>`;
  updateHud();
  syncCrateAffordability();
}

function syncCrateAffordability() {
  document.querySelectorAll("[data-open-crate]").forEach((card) => {
    const crate = CRATES[card.dataset.openCrate];
    if (!crate) return;
    const hasCompanions = crateHasCompanions(crate);
    const affordable = hasCompanions && gameState.bones >= crate.cost;
    card.classList.toggle("is-unaffordable", !affordable);
    card.classList.toggle("is-empty", !hasCompanions);
    card.setAttribute("aria-disabled", String(!affordable));
    const cta = card.querySelector(".crate-cta");
    if (cta) {
      cta.innerHTML = !hasCompanions
        ? "Coming soon"
        : affordable
          ? `Open Pack ${icon("arrow")}`
          : `Need ${crate.cost} Bones`;
    }
  });
}

function clearOpeningTimers() {
  openingTimers.forEach((timer) => window.clearTimeout(timer));
  openingTimers = [];
}

function showOpeningOverlay(crate) {
  lastFocusedElement = document.activeElement;
  clearOpeningTimers();
  overlay.innerHTML = `
    <div class="pack-modal" role="dialog" aria-modal="true" aria-labelledby="pack-dialog-title" tabindex="-1">
      <div class="pack-opening" id="pack-opening">
        <div class="opening-stage">
          <span class="opening-halo"></span>
          <span class="opening-ring"></span>
          <span class="crate-break" id="crate-break">${crateArtwork(`overlay-${crate.id}`)}</span>
          <span class="burst" aria-hidden="true">
            <span class="burst-flash"></span>
            ${Array.from({ length: 12 }, (_, index) => `<span class="shard" style="--i:${index}"></span>`).join("")}
          </span>
        </div>
        <p class="eyebrow opening-eyebrow">${escapeHtml(crate.name)}</p>
        <h2 class="opening-title" id="pack-dialog-title">Cracking it open...</h2>
        <p class="opening-copy">One companion is hiding inside.</p>
      </div>
    </div>`;
  overlay.hidden = false;
  overlay.classList.remove("is-open");
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => {
    overlay.classList.add("is-open");
    overlay.querySelector(".pack-modal")?.focus({ preventScroll: true });
  });
}

function showReward(crate, reward, duplicate, duplicateCount) {
  const dog = BREEDS[reward.breedId];
  const rarity = rarityMeta(reward.rarity || dog.rarity);
  const canOpenAgain = gameState.bones >= crate.cost;
  const chance = formatPercent(reward.chance);
  const modal = overlay.querySelector(".pack-modal");
  if (!modal) return;

  modal.classList.add("is-reward");
  modal.innerHTML = `
    <div class="pack-reward" style="--rarity:${rarity.color};--rarity-soft:${rarity.soft}">
      <button type="button" class="modal-close" data-close-overlay aria-label="Close reward">${icon("close")}</button>
      <div class="reward-status-row">
        <span class="reward-status ${duplicate ? "is-duplicate" : "is-new"}">${duplicate ? `${icon("check")} Already owned` : `${icon("sparkle")} New companion`}</span>
        <span class="reward-chance">${chance} drop chance</span>
      </div>

      <div class="reward-portrait">
        <img src="${dog.portrait}" alt="Portrait of ${escapeHtml(dog.name)}" style="object-position:${dog.profilePosition}">
        <span class="reward-glow"></span>
        <span class="reward-rarity">${rarity.label}</span>
      </div>

      <p class="reward-kicker">${escapeHtml(dog.group)}</p>
      <h2 class="reward-name" id="pack-dialog-title">${escapeHtml(dog.name)}</h2>
      <p class="reward-sub">${escapeHtml(dog.fullName)}</p>

      <div class="reward-facts">
        <span class="reward-fact"><span>Rarity</span><strong style="color:${rarity.color}">${rarity.label}</strong></span>
        <span class="reward-fact"><span>Drop chance</span><strong>${chance}</strong></span>
        <span class="reward-fact"><span>Status</span><strong>${duplicate ? "Duplicate" : "New"}</strong></span>
      </div>

      <p class="reward-note">${duplicate ? `Duplicate #${duplicateCount} saved to your pack. Duplicate conversion rewards are prepared for a future update.` : "Added to your collection. Your new companion is ready to meet you."}</p>

      <div class="reward-actions">
        <a class="primary-link reward-primary" href="#/dog/${encodeURIComponent(dog.id)}">${icon("paw")} View profile</a>
        <button type="button" class="ghost-button" data-open-again="${crate.id}"${canOpenAgain ? "" : " disabled"}>${canOpenAgain ? `Open another · ${crate.cost} Bones` : `Need ${crate.cost - gameState.bones} more Bones`}</button>
      </div>
      <p class="reward-balance">Bones remaining <strong>${gameState.bones.toLocaleString("en-US")}</strong></p>
    </div>`;

  requestAnimationFrame(() => {
    overlay.querySelector(".reward-primary")?.focus({ preventScroll: true });
  });
}

function closePackOverlay(immediate = false) {
  clearOpeningTimers();
  opening = false;
  if (!overlay || overlay.hidden) return;
  overlay.classList.remove("is-open");
  document.body.classList.remove("no-scroll");

  const finish = () => {
    if (!overlay.classList.contains("is-open")) {
      overlay.hidden = true;
      overlay.innerHTML = "";
    }
  };

  if (immediate) finish();
  else window.setTimeout(finish, 260);

  if (lastFocusedElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus({ preventScroll: true });
  }
  lastFocusedElement = null;
}

function openCrate(crateId) {
  const crate = CRATES[crateId];
  if (!crate || !isCrateAvailable(crate)) {
    showToast("That crate is not available right now.", "error");
    return;
  }
  if (!crateHasCompanions(crate)) {
    playSfx("error");
    showToast("This crate has no companions yet.", "error");
    return;
  }
  if (opening) return;
  if (gameState.bones < crate.cost) {
    playSfx("error");
    showToast(`Not enough Bones. You need ${crate.cost - gameState.bones} more.`, "error");
    return;
  }

  const reward = rollCrate(crate);
  if (!reward) {
    playSfx("error");
    showToast("This crate is empty for now.", "error");
    return;
  }

  const dog = BREEDS[reward.breedId];
  const duplicate = dog.unlocked;
  let duplicateCount = 0;

  opening = true;
  setBones(gameState.bones - crate.cost);

  if (duplicate) {
    duplicateCount = (gameState.duplicates[dog.id] || 0) + 1;
    gameState.duplicates[dog.id] = duplicateCount;
  } else {
    dog.unlocked = true;
    gameState.unlocked = [...new Set([...gameState.unlocked, dog.id])];
  }
  saveGame();
  updateHud();
  playSfx("rattle");
  showOpeningOverlay(crate);

  openingTimers.push(
    window.setTimeout(() => {
      overlay.querySelector(".pack-opening")?.classList.add("is-burst");
      playSfx("break");
    }, 860)
  );

  openingTimers.push(
    window.setTimeout(() => {
      opening = false;
      showReward(crate, reward, duplicate, duplicateCount);
      playSfx("reward");
    }, 1330)
  );
}

function renderNotFound() {
  document.title = "Companion not found — PawPacks";
  view.innerHTML = `
    <section class="screen not-found">
      <span class="not-found-paw">${icon("paw")}</span>
      <p class="eyebrow">Lost trail</p>
      <h1>Companion not found</h1>
      <p>This dog has not joined your pack yet. Head back and meet the companions you have collected.</p>
      <a class="primary-link" href="#/">${icon("back")} Back to collection</a>
    </section>`;
  updateHud();
}

function route() {
  if (overlay && !overlay.hidden) closePackOverlay(true);
  const path = location.hash.replace(/^#\/?/, "");
  const [section, id] = path.split("/").filter(Boolean);

  if (section === "dog" && id) {
    const dog = BREEDS[decodeURIComponent(id)];
    if (dog && dog.unlocked) {
      setActiveNav("collection");
      renderProfile(dog);
    } else {
      setActiveNav("collection");
      renderNotFound();
    }
  } else if (section === "crates") {
    setActiveNav("crates");
    renderCrates();
  } else {
    setActiveNav("collection");
    renderMenu();
  }

  window.scrollTo(0, 0);
  requestAnimationFrame(() => view.focus({ preventScroll: true }));
}

document.getElementById("sound-toggle")?.addEventListener("click", () => {
  gameState.sound = !gameState.sound;
  saveGame();
  updateSoundButton();
  if (gameState.sound) playSfx("click");
});

view.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-crate]");
  if (!trigger) return;
  event.preventDefault();
  openCrate(trigger.dataset.openCrate);
});

overlay.addEventListener("click", (event) => {
  const closeTrigger = event.target.closest("[data-close-overlay]");
  if (closeTrigger) {
    event.preventDefault();
    closePackOverlay();
    return;
  }

  const again = event.target.closest("[data-open-again]");
  if (again) {
    event.preventDefault();
    if (again.disabled) return;
    const crateId = again.dataset.openAgain;
    closePackOverlay(true);
    openCrate(crateId);
    return;
  }

  if (event.target === overlay && !opening) closePackOverlay();
});

document.addEventListener("keydown", (event) => {
  if (overlay && !overlay.hidden && event.key === "Tab") {
    const focusable = [
      ...overlay.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ),
    ];
    if (!focusable.length) {
      event.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    } else if (!overlay.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    }
  }

  if (event.key === "Escape" && overlay && !overlay.hidden && !opening) {
    closePackOverlay();
  }
});

window.addEventListener("hashchange", route);
updateSoundButton();
route();
