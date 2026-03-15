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
  startTime: "2:15 PM",
  endTime: "5:30 PM"
},
{
  title: "Brooklyn Nets vs. Philadelphia 76ers",
  category: "Basketball",
  service: "NBA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  page: "nba1.html",
  date: "2026-03-15",
  startTime: "1:00 AM",
  endTime: "4:00 AM"
},
{
  title: "Milwaukee Bucks vs. Atlanta Hawks",
  category: "Basketball",
  service: "NBA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  page: "nba2.html",
  date: "2026-03-15",
  startTime: "3:00 AM",
  endTime: "6:00 AM"
},
{
  title: "Charlotte Hornets vs. San Antonio Spurs",
  category: "Basketball",
  service: "NBA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  page: "nba3.html",
  date: "2026-03-15",
  startTime: "3:30 AM",
  endTime: "6:30 AM"
},
{
  title: "Washington Wizards vs. Boston Celtics",
  category: "Basketball",
  service: "NBA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  page: "nba4.html",
  date: "2026-03-15",
  startTime: "6:00 AM",
  endTime: "9:00 AM"
},
{
  title: "Orlando Magic vs. Miami Heat",
  category: "Basketball",
  service: "NBA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  page: "nba5.html",
  date: "2026-03-15",
  startTime: "8:00 AM",
  endTime: "11:00 AM"
},
{
  title: "Denver Nuggets vs. Los Angeles Lakers",
  category: "Basketball",
  service: "NBA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  page: "nba6.html",
  date: "2026-03-15",
  startTime: "8:30 AM",
  endTime: "11:30 AM"
},
{
  title: "Sacramento Kings vs. LA Clippers",
  category: "Basketball",
  service: "NBA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/NBA_League_Pass_Logo_%282017%29.png",
  page: "nba7.html",
  date: "2026-03-15",
  startTime: "10:30 AM",
  endTime: "1:30 PM"
},
{
  title: "🇵🇭 PBA- Genebra vs San Miguel",
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
  title: "UFC 326: Holloway vs. Oliveira 2",
  category: "UFC",
  service: "UFC",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhhIipDjTUWUhtdOKIi_qliq9Vxp_Nxr9nR542I48iCi0JjhsmXtVFjdc&s=10",
  page: "ufc1.html",
  date: "2026-03-08",
  startTime: "8:40 AM",
  endTime: "12:30 PM"
},
   {
  title: "Chinese Grand Prix - Practice 1",
  category: "F1",
  service: "F1",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt81CczBXQyyfo9Ue5iP_Y2FPOYa8WjhG7TmjGrFsCynixHFFCUPST4mr_&s=10",
  page: "f1.html",
  date: "2026-03-15",
  startTime: "3:00 M",
  endTime: "9:30 PM"
},
    {
  title: "Chinese Grand Prix - Sprint Qualifying",
  category: "F1",
  service: "F1",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt81CczBXQyyfo9Ue5iP_Y2FPOYa8WjhG7TmjGrFsCynixHFFCUPST4mr_&s=10",
  page: "f1.html",
  date: "2026-03-13",
  startTime: "3:30 PM",
  endTime: "9:30 PM"
},  
   {
  title: "UFC- Emmett vs Vallejos",
  category: "UFC",
  service: "UFC",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png",
  page: "ufc1.html",
  date: "2026-03-15",
  startTime: "7:30 AM",
  endTime: "5:30 PM"
},
{
  title: "Nonito Donaire vs. Riku Masuda",
  category: "Boxing",
  service: "Boxing",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHGVyO8knsTLMCR4_Jo95AM_8FONTK23yJTdThIk11Q&s=10",
  page: "boxing1.html",
  date: "2026-03-15",
  startTime: "3:30 PM",
  endTime: "11:30 PM"
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
},
{
  title: "AEW: Wednesday Night Dynamite",
  category: "WWE",
  service: "WWE",
  logo: "https://api.ppvs.su/assets/thumb/b406ff9100d91b9210600260350246ff-thumbnail.jpg",
  page: "nxt.html",
  date: "2026-01-01",
  startTime: "9:00 AM",
  endTime: "11:00 AM"
},
{
  title: "TNA: Impact",
  category: "WWE",
  service: "WWE",
  logo: "https://api.ppvs.su/assets/thumb/78f581ee61589a76f6bcdeb095f95c12-thumbnail.jpg",
  page: "nxt.html",
  date: "2026-01-02",
  startTime: "9:00 AM",
  endTime: "11:00 AM"
},
{
  title: "WWE: Friday Night Smackdown",
  category: "WWE",
  service: "WWE",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaZHJg-QWJf9QqQoxudGrlWjiKelqkIgq3pmHr0Qbkdop45j5P07U-DQ&s=10",
  page: "nxt.html",
  date: "2026-03-07",
  startTime: "9:00 AM",
  endTime: "11:00 AM"
},
{
  title: "WWE: Saturday Night Collision",
  category: "WWE",
  service: "WWE",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bf-Tv7mr4R5vSi8hzCiL7YVQbwAWemQTdAclsG6hQaPtyiYtYX3GLrGA&s=10",
  page: "nxt.html",
  date: "2026-03-08",
  startTime: "9:00 AM",
  endTime: "3:00 PM"
}
];

/* ------------------------------------------------
   PHILIPPINES TIME
-------------------------------------------------*/
function getPhilippinesTimestamp(dateStr, timeStr) {
  return new Date(`${dateStr} ${timeStr} GMT+0800`).getTime();
}

/* ------------------------------------------------
   CHANNEL STATUS
-------------------------------------------------*/
function getChannelStatus(channel) {

  const now = Date.now();

  const start = getPhilippinesTimestamp(
    channel.date,
    channel.startTime
  );

  const end = getPhilippinesTimestamp(
    channel.date,
    channel.endTime
  );

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
      document
        .getElementById(`section-${cat}`)
        ?.scrollIntoView({ behavior: "smooth" });
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

      card.onclick = () => window.location.href = c.page;

      section.appendChild(card);

    });

    container.appendChild(section);

  }

}

/* ------------------------------------------------
   COUNTDOWN
-------------------------------------------------*/
function updateCountdown() {

  const now = Date.now();

  let changed = false;

  document.querySelectorAll(".countdown").forEach(el => {

    const start = getPhilippinesTimestamp(
      el.dataset.date,
      el.dataset.start
    );

    const end = getPhilippinesTimestamp(
      el.dataset.date,
      el.dataset.end
    );

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

    }
    else if (now <= end) {

      let diff = end - now;

      const h = Math.floor(diff / 3600000);

      diff %= 3600000;

      const m = Math.floor(diff / 60000);

      const s = Math.floor((diff % 60000) / 1000);

      el.textContent = `LIVE • Ends in ${h}h ${m}m ${s}s`;

      el.style.color = "#00ff6a";

    }
    else {

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
