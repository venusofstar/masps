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
  "title": "Denver Nuggets vs. New York Knicks",
  "category": "Basketball",
  "service": "NBA",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  "page": "nba1.html",
  "date": "2026-02-05",
  "time": "8:00 AM"
},
{
  "title": "Minnesota Timberwolves vs. Toronto Raptors",
  "category": "Basketball",
  "service": "NBA",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  "page": "nba2.html",
  "date": "2026-02-05",
  "time": "8:30 AM"
},
{
  "title": "Boston Celtics vs. Houston Rockets",
  "category": "Basketball",
  "service": "NBA",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  "page": "nba3.html",
  "date": "2026-02-05",
  "time": "9:00 AM"
},
{
  "title": "New Orleans Pelicans vs. Milwaukee Bucks",
  "category": "Basketball",
  "service": "NBA",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  "page": "nba4.html",
  "date": "2026-02-05",
  "time": "9:00 AM"
},
{
  "title": "Oklahoma City Thunder vs. San Antonio Spurs",
  "category": "Basketball",
  "service": "NBA",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  "page": "nba5.html",
  "date": "2026-02-05",
  "time": "10:30 AM"
},
{
  "title": "Memphis Grizzlies vs. Sacramento Kings",
  "category": "Basketball",
  "service": "NBA",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  "page": "nba6.html",
  "date": "2026-02-05",
  "time": "11:00 AM"
},
{
  "title": "Cleveland Cavaliers vs. LA Clippers",
  "category": "Basketball",
  "service": "NBA",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  "page": "nba7.html",
  "date": "2026-02-05",
  "time": "11:30 AM"
},
   {
                         title: "🇵🇭 PBA- Genebra vs San Miguel",
    category: "Basketball",
    service: "PBA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Philippine_Basketball_Association_%28logo%29.svg/1200px-Philippine_Basketball_Association_%28logo%29.svg.png",
    page: "pba1.html",
    date: "2026-1-11",
    time: "5:15 PM"
  },
  {
    title: "🇵🇭 PBA - TNT vs Meralco",
    category: "Basketball",
    service: "PBA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Philippine_Basketball_Association_%28logo%29.svg/1200px-Philippine_Basketball_Association_%28logo%29.svg.png",
    page: "pba2.html",
    date: "2026-1-11",
    time: "7:30 PM"
  },
  {
    title: "World Darts Championship",
    category: "Darts",
    service: "Darts",
    logo: "https://api.ppvs.su/assets/thumb/4e218218e0ba40cac4b0d2867873c96a-thumbnail.jpg",
    page: "darts.html",
    date: "2025-12-31",
    time: "8:30 PM"
       },
  {
    title: "Ring V: Night of the Samurai: Inoue vs. Picasso",
    category: "Boxing",
    service: "Boxing",
    logo: "https://i.ytimg.com/vi/nFTU-T7huDE/maxresdefault.jpg",
    page: "boxing1.html",
    date: "2025-12-27",
    time: "8:30 PM"
  },
  {
    title: "WWE: NXT",
    category: "WWE",
    service: "WWE",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZr5Kf-2nSHJw7LJXM_57RfmwVkcXo-pFrQ&usqp=CAU",
    page: "nxt.html",
    date: "2025-12-31",
    time: "9:00 AM"
  },
  {
    title: "AEW: Wednesday Night Dynamite",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/b406ff9100d91b9210600260350246ff-thumbnail.jpg",
    page: "nxt.html",
    date: "2026-1-1",
    time: "9:00 AM"
  },
  {
    title: "TNA: Impact",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/78f581ee61589a76f6bcdeb095f95c12-thumbnail.jpg",
    page: "nxt.html",
    date: "2026-1-2",
    time: "9:00 AM"
  },
  {
    title: "WWE: Friday Night Smackdown",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/ec7810b68fc39115ce3510bcf9687a63-thumbnail.jpg",
    page: "nxt.html",
    date: "2026-1-3",
    time: "9:00 AM"
  },
  {
    title: "WWE: Saturday Night Collision",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/6e29b1bb679dd5133c85bbaadc2c4b13-thumbnail.jpg",
    page: "nxt.html",
    date: "2026-2-1",
    time: "9:00 AM"
  },
  {
    title: "WWE: Saturday Night's Main Event",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/880a048062dc9e403943d35cd58747b4-thumbnail.jpg",
    page: "wwe-event.html",
    date: "2026-1-1",
    time: "9:00 AM"
  },
  {
         title: "WWE: Royal Rumble",
    category: "WWE",
    service: "WWE",
    logo: "https://api.ppvs.su/assets/thumb/c69e6c0aec8f7f56e2e12c67a0d0d32d-thumbnail.jpg",
    page: "wwe-event.html",
    date: "2026-2-1",
    time: "3:00 AM"
       },
  {
    title: "Teofimo Lopez vs Shakur Stevenson",
    category: "Boxing",
    service: "Boxing",
    logo: "https://api.ppvs.su/assets/thumb/67c090f1b8ba28977641444966cb44e3-thumbnail.jpg",
    page: "boxing1.html",
    date: "2026-2-1",
    time: "1:00 PM"
  },
  {
    title: "UFC 325: Volkanovski vs. Lopes 2",
    category: "UFC",
    service: "UFC",
    logo: "https://api.ppvs.su/assets/thumb/49ff6d9c50f12a66e31590661fa2ff8a-thumbnail.jpg",
    page: "ufc1.html",
    date: "2026-2-1",
    time: "1:00 PM"
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
