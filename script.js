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
  title: "Xander Zayas vs. Jaron 'Boots' Ennis",
  category: "UFC",
  service: "UFC",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png",
  page: "ufc1.html",
  date: "2026-06-28",
  startTime: "12:00 AM",
  endTime: "3:59 AM"
},
{
  title: "UFC - PANCRASE 363",
  category: "UFC",
  service: "UFC",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png",
  page: "ufc1.html",
  date: "2026-06-28",
  startTime: "11:30 AM",
  endTime: "7:00 PM"
},
{
  title: "Xander Zayas vs. Jaron 'Boots' Ennis",
  category: "Boxing",
  service: "Boxing",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1AZaSDYMS504vJynWmug5VhjiqGuW3v5zlZM92D8huJ48GBjsTYFlqQ&s=10",
  page: "boxing1.html",
  date: "2026-06-28",
  startTime: "9:00 AM",
  endTime: "5:59 PM"
},
{
     title: "Austrian Grand Prix - Practice 3",
  category: "F1",
  service: "F1",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  page: "f1.html",
  date: "2026-06-27",
  startTime: "6:30 PM",
  endTime: "9:59 PM"
},
{
     title: "Austrian Grand Prix - Qualifying",
  category: "F1",
  service: "F1",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  page: "f1.html",
  date: "2026-06-27",
  startTime: "10:00 PM",
  endTime: "11:59 PM"
        },
{
   title: "Austrian Grand Prix - Race",
  category: "F1",
  service: "F1",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
  page: "f1.html",
  date: "2026-06-28",
  startTime: "9:00 PM",
  endTime: "11:59 PM"
   },
{
  "title": "Croatia vs. Ghana",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa1.html",
  "date": "2026-06-28",
  "startTime": "5:00 AM",
  "endTime": "8:00 AM"
},
{
  "title": "Panama vs. England",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa2.html",
  "date": "2026-06-28",
  "startTime": "5:00 AM",
  "endTime": "8:00 AM"
},
{
  "title": "Colombia vs. Portugal",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa1.html",
  "date": "2026-06-28",
  "startTime": "7:30 AM",
  "endTime": "10:00 PM"
},
{
  "title": "Congo DR vs. Uzbekistan",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa2.html",
  "date": "2026-06-28",
  "startTime": "7:30 AM",
  "endTime": "10:00 PM"
},
{
  "title": "Algeria vs. Austria",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa1.html",
  "date": "2026-06-28",
  "startTime": "10:00 AM",
  "endTime": "2:00 PM"
   },
{
  "title": "Jordan vs. Argentina",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa2.html",
  "date": "2026-06-28",
  "startTime": "10:00 AM",
  "endTime": "2:00 PM"
},
{
  "title": "Miami Marlins vs Pittsburgh Pirates",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb1.html",
  "date": "2026-06-13",
  "startTime": "6:40 AM",
  "endTime": "10:59 AM"
},
{
  "title": "Seattle Mariners vs Washington Nationals",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb2.html",
  "date": "2026-06-13",
  "startTime": "6:45 AM",
  "endTime": "10:59 AM"
},
{
  "title": "San Diego Padres vs Baltimore Orioles",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb3.html",
  "date": "2026-06-13",
  "startTime": "7:05 AM",
  "endTime": "11:50 AM"
},
{
  "title": "Detroit Tigers vs Cleveland Guardians",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb4.html",
  "date": "2026-06-13",
  "startTime": "7:10 AM",
  "endTime": "11:59 AM"
},
{
  "title": "Texas Rangers vs Boston Red Sox",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb5.html",
  "date": "2026-06-13",
  "startTime": "7:10 AM",
  "endTime": "11:59 AM"
},
{
  "title": "Arizona Diamondbacks vs Cincinnati Reds",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb6.html",
  "date": "2026-06-13",
  "startTime": "7:15 AM",
  "endTime": "11:59 AM"
},
{
  "title": "Atlanta Braves vs New York Mets",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb7.html",
  "date": "2026-06-13",
  "startTime": "7:15 AM",
  "endTime": "2:30 PM"
},
{
  "title": "New York Yankees vs Toronto Blue Jays",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb8.html",
  "date": "2026-06-13",
  "startTime": "7:37 AM",
  "endTime": "2:30 PM"
},
{
  "title": "Los Angeles Dodgers vs Chicago White Sox",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb9.html",
  "date": "2026-06-13",
  "startTime": "7:40 AM",
  "endTime": "1:30 PM"
},
{
  "title": "Philadelphia Phillies vs Milwaukee Brewers",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb10.html",
  "date": "2026-06-13",
  "startTime": "7:40 AM",
  "endTime": "1:30 PM"
},
{
  "title": "Houston Astros vs Kansas City Royals",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb11.html",
  "date": "2026-06-13",
  "startTime": "8:10 AM",
  "endTime": "3:29 PM"
},
{
  "title": "St. Louis Cardinals vs Minnesota Twins",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb12.html",
  "date": "2026-06-13",
  "startTime": "8:10 AM",
  "endTime": "3:29 PM"
},
{
  "title": "Tampa Bay Rays vs Los Angeles Angels",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb13.html",
  "date": "2026-06-13",
  "startTime": "9:38 AM",
  "endTime": "2:30 PM"
},
{
  "title": "Colorado Rockies vs Athletics",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb14.html",
  "date": "2026-06-13",
  "startTime": "10:05 AM",
  "endTime": "3:24 PM"
},
{
  "title": "Chicago Cubs vs San Francisco Giants",
  "category": "MLB",
  "service": "MLB",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9hOX1yLWzVP93gXWKnNtF12_Fa_iJgbb_46gtJtsFA&s=10",
  "page": "mlb15.html",
  "date": "2026-06-13",
  "startTime": "10:15 AM",
  "endTime": "3:30 PM"
},
{
  "title": "Norway vs. France",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa1.html",
  "date": "2026-06-27",
  "startTime": "3:00 AM",
  "endTime": "6:29 AM"
},
{
  "title": "Senegal vs. Iraq",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa2.html",
  "date": "2026-06-27",
  "startTime": "3:00 AM",
  "endTime": "6:29 AM"
},
{
  "title": "Cape Verde vs. Saudi Arabia",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa1.html",
  "date": "2026-06-27",
  "startTime": "8:00 AM",
  "endTime": "11:29 AM"
},
{
  "title": "Uruguay vs. Spain",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa2.html",
  "date": "2026-06-27",
  "startTime": "8:00 AM",
  "endTime": "11:29 AM"
},
{
  "title": "Egypt vs. Iran",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa1.html",
  "date": "2026-06-27",
  "startTime": "11:00 AM",
  "endTime": "1:29 PM"
},
{
  "title": "New Zealand vs. Belgium",
  "category": "FIFA World Cup",
  "service": "FIFA World Cup",
  "logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
  "page": "fifa2.html",
  "date": "2026-06-27",
  "startTime": "11:00 AM",
  "endTime": "1:29 PM"
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
