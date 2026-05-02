/* ------------------------------------------------
   CHANNEL LIST
-------------------------------------------------*/
const channels = [
{
  title: "Philadelphia 76ers vs Boston Celtics",
  category: "Basketball",
  service: "NBA",
  logo: "https://i.imgur.com/916TTeF.jpeg",
  page: "nba1.html",
  date: "2026-05-03",
  startTime: "7:30 AM",
  endTime: "10:30 AM"
},
{
  title: "Cleveland Cavaliers vs. Toronto Raptors",
  category: "Basketball",
  service: "NBA",
  logo: "https://i.imgur.com/916TTeF.jpeg",
  page: "nba2.html",
  date: "2026-05-02",
  startTime: "7:30 AM",
  endTime: "11:00 AM"
},
{
  title: "Los Angeles Lakers vs. Houston Rockets",
  category: "Basketball",
  service: "NBA",
  logo: "https://i.imgur.com/916TTeF.jpeg",
  page: "nba3.html",
  date: "2026-05-02",
  startTime: "9:30 AM",
  endTime: "1:00 PM"
},
{
  title: "🇵🇭 PBA - Ginebra vs San Miguel",
  category: "Basketball",
  service: "PBA",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Philippine_Basketball_Association_%28logo%29.svg/1200px-Philippine_Basketball_Association_%28logo%29.svg.png",
  page: "pba1.html",
  date: "2026-01-12",
  startTime: "5:15 PM",
  endTime: "8:30 PM"
},
{
  title: "🇵🇭 PBA - TNT vs Meralco",
  category: "Basketball",
  service: "PBA",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Philippine_Basketball_Association_%28logo%29.svg/1200px-Philippine_Basketball_Association_%28logo%29.svg.png",
  page: "pba2.html",
  date: "2026-01-11",
  startTime: "7:30 PM",
  endTime: "10:00 PM"
},
{
  title: "UFC Fight Night: Sterling vs Zalal",
  category: "UFC",
  service: "UFC",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png",
  page: "ufc1.html",
  date: "2026-04-26",
  startTime: "5:00 AM",
  endTime: "12:30 PM"
},
{
  title: "Fundora vs Thurman",
  category: "Boxing",
  service: "Boxing",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8CQhoXPv9Q8fvjnugRAihFJNgHUSyqynHqO4YX1VvA&s=10",
  page: "boxing1.html",
  date: "2026-03-29",
  startTime: "9:00 AM",
  endTime: "2:30 PM"
},
{
  title: "WWE: NXT",
  category: "WWE",
  service: "WWE",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZr5Kf-2nSHJw7LJXM_57RfmwVkcXo-pFrQ&usqp=CAU",
  page: "nxt.html",
  date: "2025-12-31",
  startTime: "9:00 AM",
  endTime: "11:00 AM"
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
