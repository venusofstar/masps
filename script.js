/* ------------------------------------------------
   CHANNEL LIST
-------------------------------------------------*/
const channels = [
{
  "title": "New York Knicks vs San Antonio Spurs",
  "category": "Basketball",
  "service": "NBA",
  "logo": "https://i.imgur.com/916TTeF.jpeg",
  "page": "nba1.html",
  "date": "2026-06-9",
  "startTime": "8:30 AM",
  "endTime": "12:00 PM"
},
{
  "title": "Cleveland Cavaliers vs New York Knicks",
  "category": "Basketball",
  "service": "NBA",
  "logo": "https://i.imgur.com/916TTeF.jpeg",
  "page": "nba1.html",
  "date": "2026-05-26",
  "startTime": "8:00 AM",
  "endTime": "12:30 PM"
},
{
  title: "🇵🇭 PBA - San Miguel vs Terrafirma",
  category: "Basketball",
  service: "PBA",
  logo: "https://cdn.manilastandard.net/wp-content/uploads/2023/08/PBA.png",
  page: "pba2.html",
  date: "2026-05-06",
  startTime: "8:30 PM",
  endTime: "11:30 PM"
},
{
  title: "🇵🇭 PBA - Macau black knights vs Phoenix",
  category: "Basketball",
  service: "PBA",
  logo: "https://cdn.manilastandard.net/wp-content/uploads/2023/08/PBA.png",
  page: "pba1.html",
  date: "2026-05-06",
  startTime: "5:15 PM",
  endTime: "8:00 PM"
},
{
  title: "UFC Fight Night: Muhammad vs. Bonfim",
  category: "UFC",
  service: "UFC",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png",
  page: "ufc1.html",
  date: "2026-06-7",
  startTime: "5:00 AM",
  endTime: "11:59 AM"
},
{
  title: "nery vs casimero",
  category: "Boxing",
  service: "Boxing",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1AZaSDYMS504vJynWmug5VhjiqGuW3v5zlZM92D8huJ48GBjsTYFlqQ&s=10",
  page: "boxing1.html",
  date: "2026-06-5",
  startTime: "4:00 PM",
  endTime: "7:30 PM"
},
{
  title: "Monaco Grand Prix - Practice 3",
  category: "F1",
  service: "F1",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  page: "f1.html",
  date: "2026-06-6",
  startTime: "6:30 PM",
  endTime: "9:30 PM"
},
{
  title: "Monaco Grand Prix - Qualifying",
  category: "F1",
  service: "F1",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  page: "f1.html",
  date: "2026-06-6",
  startTime: "10:00 PM",
  endTime: "11:59 PM"
   },
{
  title: "Monaco Grand Prix - Race",
  category: "F1",
  service: "F1",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  page: "f1.html",
  date: "2026-06-7",
  startTime: "9:00 PM",
  endTime: "3:00 AM"
},
{
  title: "Mexico vs. South Africa",
  category: "FIFA World Cup",
  service: "FIFA World Cup",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTh_lXTlh8GQBSdngWkMMwHeEqsSxO0qW_bYSemB8TefHj1LD7j7WE0E5&s=10",
  page: "fifa1.html",
  date: "2026-06-12",
  startTime: "3:00 AM",
  endTime: "7:00 AM"
},
{
  title: "South Korea vs. Czechia",
  category: "FIFA World Cup",
  service: "FIFA World Cup",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTh_lXTlh8GQBSdngWkMMwHeEqsSxO0qW_bYSemB8TefHj1LD7j7WE0E5&s=10",
  page: "fifa2.html",
  date: "2026-06-12",
  startTime: "10:00 AM",
  endTime: "11:59 AM"
}
];

/* ------------------------------------------------
   BASE TIMEZONE (PHILIPPINES UTC+8)
-------------------------------------------------*/
const BASE_TIMEZONE_OFFSET = 8;

function getEventTimestamp(dateStr, timeStr){

  const [time,modifier] = timeStr.split(" ");
  let [hours,minutes] = time.split(":");

  hours = parseInt(hours);

  if(modifier === "PM" && hours !== 12) hours += 12;
  if(modifier === "AM" && hours === 12) hours = 0;

  const parts = dateStr.split("-");

  const eventDate = new Date(Date.UTC(
    parseInt(parts[0]),
    parseInt(parts[1]) - 1,
    parseInt(parts[2]),
    hours - BASE_TIMEZONE_OFFSET,
    minutes
  ));

  return eventDate.getTime();
}

/* ------------------------------------------------
   CHANNEL STATUS
-------------------------------------------------*/
function getChannelStatus(channel){

  const now = Date.now();

  const start = getEventTimestamp(channel.date,channel.startTime);
  const end = getEventTimestamp(channel.date,channel.endTime);

  if(now < start) return "upcoming";
  if(now >= start && now <= end) return "live";

  return "ended";
}

/* ------------------------------------------------
   CATEGORY BUTTONS
-------------------------------------------------*/
function renderCategoryButtons(){

  const categories = [...new Set(channels.map(c=>c.category))];

  const container = document.getElementById("categoryButtons");

  container.innerHTML = "";

  categories.forEach(cat=>{

    const btn = document.createElement("button");

    btn.textContent = cat;

    btn.onclick = ()=>{
      document
      .getElementById(`section-${cat}`)
      ?.scrollIntoView({behavior:"smooth"});
    };

    container.appendChild(btn);

  });

}

/* ------------------------------------------------
   RENDER CHANNELS
-------------------------------------------------*/
function renderChannels(){

  const container = document.getElementById("channels-container");

  container.innerHTML = "";

  const grouped = {};

  channels.forEach(c=>{

    if(getChannelStatus(c) === "ended") return;

    grouped[c.category] ??= [];
    grouped[c.category].push(c);

  });

  for(const category in grouped){

    grouped[category].sort(
      (a,b)=>
      ({live:0,upcoming:1}[getChannelStatus(a)]) -
      ({live:0,upcoming:1}[getChannelStatus(b)])
    );

    const section = document.createElement("div");

    section.id = `section-${category}`;

    section.innerHTML = `<h2>${category}</h2>`;

    grouped[category].forEach(c=>{

      const card = document.createElement("div");

      card.className = "channel-card";

      card.innerHTML = `
      <div class="channel-left">
        <img src="${c.logo}" class="channel-logo">
        <div>
          <div class="channel-title">${c.title}</div>
          <small>${c.service} • ${c.startTime} - ${c.endTime}</small>
        </div>
      </div>

      <div class="countdown"
        data-date="${c.date}"
        data-start="${c.startTime}"
        data-end="${c.endTime}">
        Loading...
      </div>
      `;

      card.onclick = ()=> window.location.href = c.page;

      section.appendChild(card);

    });

    container.appendChild(section);

  }

}

/* ------------------------------------------------
   COUNTDOWN TIMER
-------------------------------------------------*/
function updateCountdown(){

  const now = Date.now();
  let changed = false;

  document.querySelectorAll(".countdown").forEach(el=>{

    const start = getEventTimestamp(el.dataset.date,el.dataset.start);
    const end = getEventTimestamp(el.dataset.date,el.dataset.end);

    if(now < start){

      let diff = start - now;

      const d = Math.floor(diff/86400000);
      diff %= 86400000;

      const h = Math.floor(diff/3600000);
      diff %= 3600000;

      const m = Math.floor(diff/60000);
      const s = Math.floor((diff%60000)/1000);

      el.textContent = `Starts in ${d}d ${h}h ${m}m ${s}s`;
      el.style.color = "#8fd3fe";

    }
    else if(now <= end){

      let diff = end - now;

      const h = Math.floor(diff/3600000);
      diff %= 3600000;

      const m = Math.floor(diff/60000);
      const s = Math.floor((diff%60000)/1000);

      el.textContent = `LIVE • Ends in ${h}h ${m}m ${s}s`;
      el.style.color = "#00ff6a";

    }
    else{

      changed = true;

    }

  });

  if(changed) renderChannels();

}

/* ------------------------------------------------
   INIT
-------------------------------------------------*/

renderCategoryButtons();
renderChannels();
updateCountdown();

setInterval(updateCountdown,1000);

/* ------------------------------------------------
   DEBUG TIMEZONE
-------------------------------------------------*/
console.log(
"User Timezone:",
Intl.DateTimeFormat().resolvedOptions().timeZone
);
