
/* ------------------------------------------------
   CHANNEL LIST
-------------------------------------------------*/
const channels = [
   {
  title: "🇵🇭 PBA - Miralco vs Columbia Dyip",
  category: "Basketball",
  service: "PBA",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbE-ZuKDsv9kPybK5feb0-iqW9wmnxgLGR6RsVTgKLg&s=10",
  page: "pba1.html",
  date: "2025-12-10",
  time: "5:15 PM"
},
{
  title: "🇵🇭 PBA - Genebra vs Blackwater",
  category: "Basketball",
  service: "PBA",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRz_VofiH7s6O2Q-s6Cr1yfEde8BxQUjRxXVGsHxzJbiN7-Z3aDaEkM432&s=10",
  page: "pba2.html",
  date: "2025-12-10",
  time: "7:30 PM"
},
{
  title: "NBA - Los Angeles Clippers vs. Houston Rockets",
  category: "Basketball",
  service: "NBA",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4xKmG0KlPqh1xXr4lR0-UVnLYUn4eIj5pEReo7dvJg&s=10",
  page: "nba1.html",
  date: "2025-12-12",
  time: "9:00 AM"
},
{
  title: "NBA - Boston Celtics vs. Milwaukee Bucks",
  category: "Basketball",
  service: "NBA",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4xKmG0KlPqh1xXr4lR0-UVnLYUn4eIj5pEReo7dvJg&s=10",
  page: "nba2.html",
  date: "2025-12-12",
  time: "9:00 AM"
},
{
  title: "NBA - Portland Trail Blazers vs. New Orleans Pelicans",
  category: "Basketball",
  service: "NBA",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4xKmG0KlPqh1xXr4lR0-UVnLYUn4eIj5pEReo7dvJg&s=10",
  page: "nba3.html",
  date: "2025-12-12",
  time: "9:00 AM"
},
{
  title: "NBA - Denver Nuggets vs. Sacramento Kings",
  category: "Basketball",
  service: "NBA",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4xKmG0KlPqh1xXr4lR0-UVnLYUn4eIj5pEReo7dvJg&s=10",
  page: "nba4.html",
  date: "2025-12-12",
  time: "11:00 AM"
   },
{
  title: "World Darts Championship",
  category: "Darts",
  service: "Darts",
  logo: "https://api.ppvs.su/assets/thumb/4e218218e0ba40cac4b0d2867873c96a-thumbnail.jpg",
  page: "darts.html",
  date: "2025-12-12",
  time: "2:30 AM"
},
{   
  title: "WWE: NXT",
  category: "WWE",
  service: "WWE",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZr5Kf-2nSHJw7LJXM_57RfmwVkcXo-pFrQ&usqp=CAU",
  page: "nxt.html",
  date: "2025-12-10",
  time: "9:00 AM"
},
{
  title: "AEW: Wednesday Night Dynamite",
  category: "WWE",
  service: "WWE",
  logo: "https://api.ppvs.su/assets/thumb/b406ff9100d91b9210600260350246ff-thumbnail.jpg",
  page: "nxt.html",
  date: "2025-12-11",
  time: "9:00 AM"
},
{
  title: "TNA: Impact",
  category: "WWE",
  service: "WWE",
  logo: "https://api.ppvs.su/assets/thumb/78f581ee61589a76f6bcdeb095f95c12-thumbnail.jpg",
  page: "nxt.html",
  date: "2025-12-12",
  time: "9:00 AM"
},
{
  title: "WWE: Friday Night Smackdown",
  category: "WWE",
  service: "WWE",
  logo: "https://api.ppvs.su/assets/thumb/ec7810b68fc39115ce3510bcf9687a63-thumbnail.jpg",
  page: "nxt.html",
  date: "2025-12-13",
  time: "9:00 AM"
},
{
  title: "WWE: Saturday Night Collision",
  category: "WWE",
  service: "WWE",
  logo: "https://api.ppvs.su/assets/thumb/6e29b1bb679dd5133c85bbaadc2c4b13-thumbnail.jpg",
  page: "nxt.html",
  date: "2025-12-14",
  time: "9:00 AM"
},
{
  title: "WWE: Saturday Night's Main Event",
  category: "WWE",
  service: "WWE",
  logo: "https://api.ppvs.su/assets/thumb/880a048062dc9e403943d35cd58747b4-thumbnail.jpg",
  page: "nxt.html",
  date: "2025-12-14",
  time: "9:00 AM"
  },
{
  title: "UFC Fight Night: Royval vs. Kape",
  category: "UFC",
  service: "UFC",
  logo: "https://www.ufc.com/images/styles/background_image_sm_2x/s3/2025-11/121325-ufc-fight-night-royval-vs-kape-EVENT-ART.jpg?h=d1cb525d&itok=bzaxRKhC",
  page: "ufc1.html",
  date: "2025-12-14",
  time: "11:00 AM" 
}
];

/* ------------------------------------------------
   PHILIPPINES TIME (UTC+8)
-------------------------------------------------*/
function getPhilippinesTimestamp(dateStr, timeStr) {
  return new Date(`${dateStr} ${timeStr} UTC+8`).getTime();
}

/* ------------------------------------------------
   DETERMINE CHANNEL STATUS
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
   RENDER CATEGORY BUTTONS
-------------------------------------------------*/
function renderCategoryButtons() {
  const categories = [...new Set(channels.map(c => c.category))];
  const container = document.getElementById("categoryButtons");

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;

    btn.onclick = () => {
      const section = document.getElementById(`section-${cat}`);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    container.appendChild(btn);
  });
}

/* ------------------------------------------------
   RENDER CHANNELS WITH SORT + HIDE ENDED
-------------------------------------------------*/
function renderChannels() {
  const container = document.getElementById("channels-container");
  container.innerHTML = "";

  const grouped = {};

  channels.forEach(c => {
    const status = getChannelStatus(c);
    if (status === "ended") return; // ❌ Hide ended channels

    if (!grouped[c.category]) grouped[c.category] = [];
    grouped[c.category].push(c);
  });

  for (const category in grouped) {
    // Sort: LIVE → UPCOMING
    grouped[category].sort((a, b) => {
      const sA = getChannelStatus(a);
      const sB = getChannelStatus(b);

      const order = { live: 0, upcoming: 1 };
      return order[sA] - order[sB];
    });

    // Create section
    const section = document.createElement("div");
    section.id = `section-${category}`;

    const title = document.createElement("h2");
    title.textContent = category;
    section.appendChild(title);

    grouped[category].forEach(c => {
      const card = document.createElement("div");
      card.className = "channel-card";

      const start = getPhilippinesTimestamp(c.date, c.time);
      const end = start + 3 * 60 * 60 * 1000;
      const now = Date.now();

      let countdownText = "";
      let countdownColor = "#8fd3fe";

      if (now < start) {
        countdownText = "Loading...";
      } else if (now >= start && now <= end) {
        countdownText = "LIVE";
        countdownColor = "#00ff6a";
      }

      card.innerHTML = `
        <div style="display:flex; align-items:center; gap:15px;">
          <img src="${c.logo}" class="channel-logo">
          <div style="display:flex; flex-direction:column;">
            <span style="font-size:18px; font-weight:600;">${c.title}</span>
            <small>${c.service}</small>
          </div>
        </div>

        <div class="countdown"
             data-date="${c.date}"
             data-time="${c.time}"
             style="color:${countdownColor}">
          ${countdownText}
        </div>
      `;

      card.onclick = () => window.location.href = c.page;

      section.appendChild(card);
    });

    container.appendChild(section);
  }
}

/* ------------------------------------------------
   UPDATE COUNTDOWN + AUTO REFRESH CHANNEL ORDER
-------------------------------------------------*/
function updateCountdown() {
  const now = Date.now();
  let changed = false;

  document.querySelectorAll(".countdown").forEach(el => {
    const date = el.dataset.date;
    const time = el.dataset.time;

    const start = getPhilippinesTimestamp(date, time);
    const end = start + 3 * 60 * 60 * 1000;

    if (now < start) {
      const diff = start - now;
      const hrs = Math.floor(diff / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);

      el.textContent = `Starts in ${hrs}h ${mins}m ${secs}s`;
      el.style.color = "#8fd3fe";
    }

    else if (now >= start && now <= end) {
      const diff = end - now;
      const hrs = Math.floor(diff / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);

      el.textContent = `LIVE • Ends in ${hrs}h ${mins}m ${secs}s`;
      el.style.color = "#00ff6a";
    }

    else {
      changed = true; // an ended channel needs to disappear
    }
  });

  if (changed) renderChannels(); // 🔄 auto-remove ended + auto-sort live to top
}

/* ------------------------------------------------
   INIT
-------------------------------------------------*/
renderCategoryButtons();
renderChannels();
updateCountdown();
setInterval(updateCountdown, 1000);
