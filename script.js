/* ------------------------------------------------
CHANNEL LIST
-------------------------------------------------*/
const channels = [
{
"title": "2026 NBA Draft",
"category": "Basketball",
"service": "NBA",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw9c_LcceLpFhiy0lyhO3_F2jkPwIURiqexIRjB2lyw&s",
"page": "nba1.html",
"date": "2026-06-25",
"endDate": "2026-06-25",
"startTime": "8:00 AM",
"endTime": "1:30 PM"
},
{
"title": "Cleveland Cavaliers vs New York Knicks",
"category": "Basketball",
"service": "NBA",
"logo": "https://i.imgur.com/916TTeF.jpeg",
"page": "nba1.html",
"date": "2026-05-26",
"endDate": "2026-05-26",
"startTime": "8:00 AM",
"endTime": "12:30 PM"
},
{
  "title": "Argentina vs. Egypt",
"category": "FIFA World Cup",
"service": "FIFA World Cup",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "fifa1.html",
"date": "2026-07-8",
"endDate": "2026-07-8",
"startTime": "12:00 AM",
"endTime": "4:00 AM"
},
{
"title": "Switzerland vs. Colombia",
"category": "FIFA World Cup",
"service": "FIFA World Cup",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "fifa1.html",
"date": "2026-07-8",
"endDate": "2026-07-8",
"startTime": "4:00 AM",
"endTime": "8:00 AM"
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
"title": "Xander Zayas vs. Jaron 'Boots' Ennis",
"category": "UFC",
"service": "UFC",
"logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png",
"page": "ufc1.html",
"date": "2026-06-28",
"endDate": "2026-06-28",
"startTime": "12:00 AM",
"endTime": "3:59 AM"
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
"title": "Xander Zayas vs. Jaron 'Boots' Ennis",
"category": "Boxing",
"service": "Boxing",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1AZaSDYMS504vJynWmug5VhjiqGuW3v5zlZM92D8huJ48GBjsTYFlqQ&s=10",
"page": "boxing1.html",
"date": "2026-06-28",
"endDate": "2026-06-28",
"startTime": "9:00 AM",
"endTime": "5:59 PM"
},
{
"title": "France vs. Morocco",
"category": "FIFA World Cup",
"service": "FIFA World Cup",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "fifa1.html",
"date": "2026-07-10",
"endDate": "2026-07-10",
"startTime": "4:00 AM",
"endTime": "8:00 AM"
},
{
  "title": "Milwaukee Brewers vs St. Louis Cardinals",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb1.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "2:15 AM",
  "endTime": "6:15 AM"
},
{
  "title": "Chicago Cubs vs Baltimore Orioles",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb2.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "6:35 AM",
  "endTime": "10:35 AM"
},
{
  "title": "Athletics vs Detroit Tigers",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb3.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "6:40 AM",
  "endTime": "10:40 AM"
},
{
  "title": "Atlanta Braves vs Pittsburgh Pirates",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb4.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "6:40 AM",
  "endTime": "10:40 AM"
},
{
  "title": "Seattle Mariners vs Miami Marlins",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb5.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "6:40 AM",
  "endTime": "10:40 AM"
},
{
  "title": "New York Yankees vs Tampa Bay Rays",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb6.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "6:40 AM",
  "endTime": "10:40 AM"
},
{
  "title": "Houston Astros vs Washington Nationals",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb7.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "6:45 AM",
  "endTime": "10:45 AM"
},
{
  "title": "Kansas City Royals vs New York Mets",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb8.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "7:10 AM",
  "endTime": "11:10 AM"
},
{
  "title": "Philadelphia Phillies vs Cincinnati Reds",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb9.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "7:10 AM",
  "endTime": "11:10 AM"
},
{
  "title": "Cleveland Guardians vs Minnesota Twins",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb10.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "7:40 AM",
  "endTime": "11:40 AM"
},
{
  "title": "Boston Red Sox vs Chicago White Sox",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb11.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "7:40 AM",
  "endTime": "11:40 AM"
},
{
  "title": "Milwaukee Brewers vs St. Louis Cardinals",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb1.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "7:45 AM",
  "endTime": "11:59 AM"
},
{
  "title": "Los Angeles Angels vs Texas Rangers",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb13.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "8:05 AM",
  "endTime": "12:05 PM"
},
{
  "title": "Arizona Diamondbacks vs San Diego Padres",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb14.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "9:40 AM",
  "endTime": "1:40 PM"
},
{
  "title": "Toronto Blue Jays vs San Francisco Giants",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb15.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "9:45 AM",
  "endTime": "1:45 PM"
},
{
  "title": "Colorado Rockies vs Los Angeles Dodgers",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb16.html",
  "date": "2026-07-08",
  "endDate": "2026-07-08",
  "startTime": "10:10 AM",
  "endTime": "2:10 PM"
},
{
 "title": "British Grand Prix - Practice 1",
"category": "F1",
"service": "F1",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
"page": "f1.html",
"date": "2026-07-03",
"endDate": "2026-07-03",
"startTime": "7:30 PM",
"endTime": "11:59 PM"
},
{
"title": "British Grand Prix - Sprint Qualifying",
"category": "F1",
"service": "F1",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
"page": "f1.html",
"date": "2026-07-03",
"endDate": "2026-07-04",
"startTime": "11:30 PM",
"endTime": "3:59 AM"
},
{
"title": "British Grand Prix - Sprint",
"category": "F1",
"service": "F1",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
"page": "f1.html",
"date": "2026-07-04",
"endDate": "2026-07-04",
"startTime": "7:00 PM",
"endTime": "11:59 PM"
},
{
"title": "British Grand Prix - Qualifying",
"category": "F1",
"service": "F1",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
"page": "f1.html",
"date": "2026-07-04",
"endDate": "2026-07-05",
"startTime": "10:00 PM",
"endTime": "3:59 AM"
},
{
"title": "British Grand Prix - Race",
"category": "F1",
"service": "F1",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
"page": "f1.html",
"date": "2026-07-05",
"endDate": "2026-07-06",
"startTime": "9:00 PM",
"endTime": "2:59 AM"
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
