/* ------------------------------------------------
CHANNEL LIST
-------------------------------------------------*/
const channels = [
  {
    "title": "Sacramento Kings vs Charlotte Hornets",
    "category": "NBA",
    "service": "NBA Summer League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/0/03/National_Basketball_Association_logo.svg",
    "page": "nba1.html",
    "date": "2026-07-18",
    "endDate": "2026-07-18",
    "startTime": "06:30 AM",
    "endTime": "09:00 AM"
  },
  {
    "title": "Chicago Bulls vs Cleveland Cavaliers",
    "category": "NBA",
    "service": "NBA Summer League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/0/03/National_Basketball_Association_logo.svg",
    "page": "nba2.html",
    "date": "2026-07-18",
    "endDate": "2026-07-18",
    "startTime": "07:00 AM",
    "endTime": "09:30 AM"
  },
  {
    "title": "Dallas Mavericks vs New York Knicks",
    "category": "NBA",
    "service": "NBA Summer League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/0/03/National_Basketball_Association_logo.svg",
    "page": "nba3.html",
    "date": "2026-07-18",
    "endDate": "2026-07-18",
    "startTime": "08:30 AM",
    "endTime": "11:00 AM"
  },
  {
    "title": "Detroit Pistons vs Miami Heat",
    "category": "NBA",
    "service": "NBA Summer League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/0/03/National_Basketball_Association_logo.svg",
    "page": "nba4.html",
    "date": "2026-07-18",
    "endDate": "2026-07-18",
    "startTime": "09:00 AM",
    "endTime": "11:30 AM"
  },
  {
    "title": "Portland Trail Blazers vs Utah Jazz",
    "category": "NBA",
    "service": "NBA Summer League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/0/03/National_Basketball_Association_logo.svg",
    "page": "nba5.html",
    "date": "2026-07-18",
    "endDate": "2026-07-18",
    "startTime": "10:30 AM",
    "endTime": "01:00 PM"
  },
  {
    "title": "Minnesota Timberwolves vs Los Angeles Clippers",
    "category": "NBA",
    "service": "NBA Summer League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/0/03/National_Basketball_Association_logo.svg",
    "page": "nba6.html",
    "date": "2026-07-18",
    "endDate": "2026-07-18",
    "startTime": "11:00 AM",
    "endTime": "01:30 PM"
  },
{
  "title": "England vs. France",
"category": "FIFA World Cup",
"service": "FIFA World Cup",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "fifa1.html",
"date": "2026-07-19",
"endDate": "2026-07-19",
"startTime": "5:00 AM",
"endTime": "9:00 AM"
},
  {
  "title": "Spain vs. Argentina",
  "title": "France vs. Spain",
"category": "FIFA World Cup",
"service": "FIFA World Cup",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "fifa1.html",
"date": "2026-07-20",
"endDate": "2026-07-20",
"startTime": "3:00 AM",
"endTime": "7:00 AM"
},
{
"title": "Gilas Pilipinas vs New Zealand",
"category": "Basketball",
"service": "Fiba World Cup",
"logo": "https://i.imgur.com/ajaAfO5.png",
"page": "pba1.html",
"date": "2026-07-3",
"endDate": "2026-07-3",
"startTime": "3:00 PM",
"endTime": "6:30 PM"
},
{
"title": "UFC 329: McGregor vs. Holloway 2",
"category": "UFC",
"service": "UFC",
"logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png",
"page": "ufc1.html",
"date": "2026-07-12",
"endDate": "2026-07-12",
"startTime": "5:00 AM",
"endTime": "3:59 PM"
},
{
"title": "UFC - PANCRASE 363",
"category": "UFC",
"service": "UFC",
"logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png",
"page": "ufc1.html",
"date": "2026-06-28",
"endDate": "2026-06-28",
"startTime": "11:30 AM",
"endTime": "7:00 PM"
},
{
"title": "Gassiev vs. Kadiru",
"category": "Boxing",
"service": "Boxing",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1AZaSDYMS504vJynWmug5VhjiqGuW3v5zlZM92D8huJ48GBjsTYFlqQ&s=10",
"page": "boxing1.html",
"date": "2026-07-12",
"endDate": "2026-07-12",
"startTime": "2:30 AM",
"endTime": "11:59 AM"
},
{
"title": "Norway vs. England",
"category": "FIFA World Cup",
"service": "FIFA World Cup",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "fifa1.html",
"date": "2026-07-12",
"endDate": "2026-07-12",
"startTime": "5:00 AM",
"endTime": "9:00 AM"
},
{
  "title": "Argentina vs. Switzerland",
"category": "FIFA World Cup",
"service": "FIFA World Cup",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "fifa1.html",
"date": "2026-07-12",
"endDate": "2026-07-12",
"startTime": "9:00 AM",
"endTime": "11:00 AM"
},
{
  "title": "Atlanta Braves vs Pittsburgh Pirates",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb1.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "12:40 AM",
  "endTime": "4:40 AM"
},
{
  "title": "Kansas City Royals vs New York Mets",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb2.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "1:15 AM",
  "endTime": "5:15 AM"
},
{
  "title": "New York Yankees vs Tampa Bay Rays",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb3.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "1:15 AM",
  "endTime": "5:15 AM"
},
{
  "title": "Chicago Cubs vs Baltimore Orioles",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb4.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "1:40 AM",
  "endTime": "5:40 AM"
},
{
  "title": "Cleveland Guardians vs Minnesota Twins",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb5.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "1:45 AM",
  "endTime": "5:45 AM"
},
{
  "title": "Boston Red Sox vs Chicago White Sox",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb6.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "2:15 AM",
  "endTime": "6:15 AM"
},
{
  "title": "Athletics vs Detroit Tigers",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb7.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "6:45 AM",
  "endTime": "10:45 AM"
},
{
  "title": "Seattle Mariners vs Miami Marlins",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb8.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "6:45 AM",
  "endTime": "10:45 AM"
},
{
  "title": "Philadelphia Phillies vs Cincinnati Reds",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb9.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "7:15 AM",
  "endTime": "11:15 AM"
},
{
  "title": "Milwaukee Brewers vs St. Louis Cardinals",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb10.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "7:50 AM",
  "endTime": "11:50 AM"
},
{
  "title": "Los Angeles Angels vs Texas Rangers",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb11.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "8:10 AM",
  "endTime": "12:10 PM"
},
{
  "title": "Arizona Diamondbacks vs San Diego Padres",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb12.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "9:45 AM",
  "endTime": "1:45 PM"
},
{
  "title": "Colorado Rockies vs San Francisco Giants",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb13.html",
  "date": "2026-07-10",
  "endDate": "2026-07-10",
  "startTime": "10:15 AM",
  "endTime": "2:15 PM"
},
{
  "title": "Belgian Grand Prix - Practice 1",
  "category": "F1",
  "service": "F1",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  "page": "f1.html",
  "date": "2026-07-17",
  "endDate": "2026-07-17",
  "startTime": "7:30 PM",
  "endTime": "11:59 PM"
},
{
  "title": "Belgian Grand Prix - Practice 2",
  "category": "F1",
  "service": "F1",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  "page": "f1.html",
  "date": "2026-07-17",
  "endDate": "2026-07-18",
  "startTime": "11:00 PM",
  "endTime": "3:59 AM"
},
{
  "title": "Belgian Grand Prix - Practice 3",
  "category": "F1",
  "service": "F1",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  "page": "f1.html",
  "date": "2026-07-18",
  "endDate": "2026-07-18",
  "startTime": "6:30 PM",
  "endTime": "10:59 PM"
},
{
  "title": "Belgian Grand Prix - Qualifying",
  "category": "F1",
  "service": "F1",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  "page": "f1.html",
  "date": "2026-07-18",
  "endDate": "2026-07-18",
  "startTime": "10:00 PM",
  "endTime": "11:59 PM"
},
{
  "title": "Belgian Grand Prix - Race",
  "category": "F1",
  "service": "F1",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  "page": "f1.html",
  "date": "2026-07-19",
  "endDate": "2026-07-19",
  "startTime": "9:00 PM",
  "endTime": "11:59 PM"
}
];

/* ------------------------------------------------
BASE TIMEZONE (PHILIPPINES UTC+8)
-------------------------------------------------*/
const BASE_TIMEZONE_OFFSET = 8;

// Updated to support separate endDate for multi-day events
function getEventTimestamp(dateStr, timeStr) {
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  hours = parseInt(hours, 10);
  minutes = parseInt(minutes, 10);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  const parts = dateStr.split("-");
  return Date.UTC(
    parseInt(parts[0], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[2], 10),
    hours - BASE_TIMEZONE_OFFSET,
    minutes
  );
}

/* ------------------------------------------------
CHANNEL STATUS
-------------------------------------------------*/
function getChannelStatus(channel) {
  const now = Date.now();
  const start = getEventTimestamp(channel.date, channel.startTime);
  const end = getEventTimestamp(channel.endDate, channel.endTime);
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
  container.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.onclick = () => {
      document.getElementById(`section-${cat}`)?.scrollIntoView({ behavior: "smooth" });
    };
    container.appendChild(btn);
  });
}

/* ------------------------------------------------
RENDER CHANNELS
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
    grouped[category].sort((a, b) =>
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
          <img src="${c.logo}" class="channel-logo" alt="${c.service}">
          <div>
            <div class="channel-title">${c.title}</div>
            <small>${c.service} • ${c.date} ${c.startTime} – ${c.endDate !== c.date ? c.endDate + " " : ""}${c.endTime}</small>
          </div>
        </div>
        <div class="countdown" 
          data-date="${c.date}" 
          data-end-date="${c.endDate}"
          data-start="${c.startTime}" 
          data-end="${c.endTime}">
          Loading...
        </div>
      `;
      card.onclick = () => window.location.href = c.page;
      section.appendChild(card);
    });
    container.appendChild(section);
  }
}

/* ------------------------------------------------
COUNTDOWN TIMER
-------------------------------------------------*/
function updateCountdown() {
  const now = Date.now();
  let changed = false;

  document.querySelectorAll(".countdown").forEach(el => {
    const start = getEventTimestamp(el.dataset.date, el.dataset.start);
    const end = getEventTimestamp(el.dataset.endDate || el.dataset.date, el.dataset.end);

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

/* ------------------------------------------------
DEBUG TIMEZONE
-------------------------------------------------*/
console.log("User Timezone:", Intl.DateTimeFormat().resolvedOptions().timeZone);
