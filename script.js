/* ------------------------------------------------
   CHANNEL LIST
-------------------------------------------------*/
const channels = [
  {
    title: "🇵🇭 NCAA -Basketball Tournament - December 13, 2025 | NCAA Season 101",
    category: "Basketball",
    service: "NCAA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Philippine_Basketball_Association_%28logo%29.svg/1200px-Philippine_Basketball_Association_%28logo%29.svg.png",
    page: "ncaa.html",
    date: "2025-12-13",
    time: "2:15 PM"
  },
  {
    title: "🇵🇭 PBA - TNT vs NLEX",
    category: "Basketball",
    service: "PBA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Philippine_Basketball_Association_%28logo%29.svg/1200px-Philippine_Basketball_Association_%28logo%29.svg.png",
    page: "pba1.html",
    date: "2025-12-13",
    time: "5:15 PM"
  },
  {
    title: "🇵🇭 PBA - Blackwater vs Beermen",
    category: "Basketball",
    service: "PBA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Philippine_Basketball_Association_%28logo%29.svg/1200px-Philippine_Basketball_Association_%28logo%29.svg.png",
    page: "pba2.html",
    date: "2025-12-13",
    time: "7:30 PM"
  },
  {
    title: "San Antonio Spurs vs. New York Knicks",
    category: "Basketball",
    service: "NBA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4xKmG0KlPqh1xXr4lR0-UVnLYUn4eIj5pEReo7dvJg&s=10",
    page: "nba_cup_final.html",
    date: "2025-12-17",
    time: "9:30 AM"
  },
  {
    title: "Cleveland Cavaliers vs. Chicago Bulls",
    category: "Basketball",
    service: "NBA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4xKmG0KlPqh1xXr4lR0-UVnLYUn4eIj5pEReo7dvJg&s=10",
    page: "nba_cavs_bulls.html",
    date: "2025-12-18",
    time: "9:00 AM"
  },
  {
    title: "Memphis Grizzlies vs. Minnesota Timberwolves",
    category: "Basketball",
    service: "NBA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4xKmG0KlPqh1xXr4lR0-UVnLYUn4eIj5pEReo7dvJg&s=10",
    page: "nba_grizzlies_wolves.html",
    date: "2025-12-18",
    time: "9:00 AM"
  },
  {
    title: "World Darts Championship",
    category: "Darts",
    service: "Darts",
    logo: "https://api.ppvs.su/assets/thumb/4e218218e0ba40cac4b0d2867873c96a-thumbnail.jpg",
    page: "darts.html",
    date: "2025-12-14",
    time: "8:30 PM"
  },
  {
    title: "WWE: NXT",
    category: "WWE",
    service: "WWE",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZr5Kf-2nSHJw7LJXM_57RfmwVkcXo-pFrQ&usqp=CAU",
    page: "nxt.html",
    date: "2025-12-17",
    time: "9:00 AM"
  },
  {
    title: "AEW: Wednesday Night Dynamite",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/b406ff9100d91b9210600260350246ff-thumbnail.jpg",
    page: "nxt.html",
    date: "2025-12-18",
    time: "9:00 AM"
  },
  {
    title: "TNA: Impact",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/78f581ee61589a76f6bcdeb095f95c12-thumbnail.jpg",
    page: "nxt.html",
    date: "2025-12-19",
    time: "9:00 AM"
  },
  {
    title: "WWE: Friday Night Smackdown",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/ec7810b68fc39115ce3510bcf9687a63-thumbnail.jpg",
    page: "nxt.html",
    date: "2025-12-20",
    time: "9:00 AM"
  },
  {
    title: "WWE: Saturday Night Collision",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/6e29b1bb679dd5133c85bbaadc2c4b13-thumbnail.jpg",
    page: "nxt.html",
    date: "2025-12-21",
    time: "9:00 AM"
  },
  {
    title: "WWE: Saturday Night's Main Event",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/880a048062dc9e403943d35cd58747b4-thumbnail.jpg",
    page: "wwe-event.html",
    date: "2025-12-10",
    time: "9:00 AM"
  },
  {
    title: "UFC Fight Night: Royval vs. Kape",
    category: "UFC",
    service: "UFC",
    logo: "https://www.ufc.com/images/styles/background_image_sm_2x/s3/2025-11/121325-ufc-fight-night-royval-vs-kape-EVENT-ART.jpg",
    page: "ufc1.html",
    date: "2025-12-14",
    time: "8:00 AM"
  }
];

/* ------------------------------------------------
   PHILIPPINES TIME (UTC+8)
-------------------------------------------------*/
function getPhilippinesTimestamp(dateStr, timeStr) {
  return new Date(`${dateStr} ${timeStr} UTC+8`).getTime();
}

/* ------------------------------------------------
   CHANNEL STATUS
-------------------------------------------------*/
function getChannelStatus(channel) {
  const now = Date.now();
  const start = getPhilippinesTimestamp(channel.date, channel.time);
  const end = start + 3 * 60 * 60 * 1000;

  if (now < start) return "upcoming";
  if (now >= start && now <= end) return "live";
  return "ended";
}

/* ------------------------------------------------
   CATEGORY BUTTONS
-------------------------------------------------*/
function renderCategoryButtons() {
  const categories = [...new Set(channels.map(c => c.category))];
  const container = document.getElementById("categoryButtons");

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.onclick = () =>
      document
        .getElementById(`section-${cat}`)
        ?.scrollIntoView({ behavior: "smooth" });

    container.appendChild(btn);
  });
}

/* ------------------------------------------------
   RENDER CHANNELS (SORT + HIDE ENDED)
-------------------------------------------------*/
function renderChannels() {
  const container = document.getElementById("channels-container");
  container.innerHTML = "";

  const grouped = {};

  channels.forEach(c => {
    if (getChannelStatus(c) === "ended") return;
    grouped[c.category] ??= [];
    grouped[c.category].push(c);
  });

  for (const category in grouped) {
    grouped[category].sort(
      (a, b) =>
        ({ live: 0, upcoming: 1 }[getChannelStatus(a)]) -
        ({ live: 0, upcoming: 1 }[getChannelStatus(b)])
    );

    const section = document.createElement("div");
    section.id = `section-${category}`;

    section.innerHTML = `<h2>${category}</h2>`;

    grouped[category].forEach(c => {
      const card = document.createElement("div");
      card.className = "channel-card";

      card.innerHTML = `
        <div class="channel-left">
          <img src="${c.logo}" class="channel-logo">
          <div>
            <div class="channel-title">${c.title}</div>
            <small>${c.service}</small>
          </div>
        </div>
        <div class="countdown"
             data-date="${c.date}"
             data-time="${c.time}">
          Loading...
        </div>
      `;

      card.onclick = () => (window.location.href = c.page);
      section.appendChild(card);
    });

    container.appendChild(section);
  }
}

/* ------------------------------------------------
   COUNTDOWN (WITH DAYS)
-------------------------------------------------*/
function updateCountdown() {
  const now = Date.now();
  let changed = false;

  document.querySelectorAll(".countdown").forEach(el => {
    const start = getPhilippinesTimestamp(
      el.dataset.date,
      el.dataset.time
    );
    const end = start + 3 * 60 * 60 * 1000;

    if (now < start) {
      let diff = start - now;

      const d = Math.floor(diff / 86400000);
      diff %= 86400000;
      const h = Math.floor(diff / 3600000);
      diff %= 3600000;
      const m = Math.floor(diff / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      el.textContent = `Starts in ${d}d ${h}h ${m}m ${s}s`;
      el.style.color = "#8fd3fe";
    } else if (now <= end) {
      let diff = end - now;

      const h = Math.floor(diff / 3600000);
      diff %= 3600000;
      const m = Math.floor(diff / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      el.textContent = `LIVE • Ends in ${h}h ${m}m ${s}s`;
      el.style.color = "#00ff6a";
    } else {
      changed = true;
    }
  });

  if (changed) renderChannels();
}

/* ------------------------------------------------
   INIT
-------------------------------------------------*/
renderCategoryButtons();
renderChannels();
updateCountdown();
setInterval(updateCountdown, 1000);
