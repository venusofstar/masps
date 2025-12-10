import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, onValue } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRSIJ1bnM5pvyDkWJYvwNJD90abNmEs-o",
  authDomain: "masports-cc8b8.firebaseapp.com",
  databaseURL: "https://masports-cc8b8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "masports-cc8b8",
  storageBucket: "masports-cc8b8.firebasestorage.app",
  messagingSenderId: "1010481765354",
  appId: "1:1010481765354:web:59f25ec985a99d66ebf093"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Generate or load device ID
let deviceId = localStorage.getItem("deviceId");
if (!deviceId) {
  deviceId = "user-" + Math.random().toString(36).substring(2, 10);
  localStorage.setItem("deviceId", deviceId);
}

// Load display name
let displayName = localStorage.getItem("displayName");

// Auto-show chat
if (displayName) {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("chatBox").style.display = "flex";
}

// Register user
window.registerUser = function () {
  const input = document.getElementById("displayNameInput");
  if (!input.value.trim()) {
    alert("Enter your display name.");
    return;
  }

  displayName = input.value.trim();
  localStorage.setItem("displayName", displayName);

  document.getElementById("registerForm").style.display = "none";
  document.getElementById("chatBox").style.display = "flex";
};

// Switch video server
window.switchServer = function (url) {
  document.getElementById("player").src = url;
};

// Send message
window.sendMessage = function () {
  if (!displayName) return;

  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  if (!message) return;

  push(ref(db, "chat"), {
    text: message,
    timestamp: Date.now(),
    user: displayName,
    device: deviceId
  });

  input.value = "";
};

// Display messages
const messagesDiv = document.getElementById("messages");
const chatRef = ref(db, "chat");

onValue(chatRef, (snapshot) => {
  messagesDiv.innerHTML = "";
  snapshot.forEach((child) => {
    const msg = child.val();
    const div = document.createElement("div");
    div.textContent = `[${msg.user}] ${msg.text}`;
    if (msg.device === deviceId) div.classList.add("self");
    messagesDiv.appendChild(div);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

onChildAdded(chatRef, (snapshot) => {
  const msg = snapshot.val();
  const div = document.createElement("div");
  div.textContent = `[${msg.user}] ${msg.text}`;
  if (msg.device === deviceId) div.classList.add("self");
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
