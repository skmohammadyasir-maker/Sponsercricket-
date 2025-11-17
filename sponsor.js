// 🔹 Firebase Config (নিজের Firebase প্রজেক্ট অনুযায়ী বদলাতে হবে)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// স্পনসর লিস্ট
const sponsors = [
  "শেখ আজিম",
  "শেখ সোইদুল",
  "ফিরোজ মল্লিক",
  "বোরহান মল্লিক",
  "সানি মোল্লা",
  "বারেক মল্লিক",
  "রহমান মল্লিক",
  "শেখ সমীর",
  "শেখ বাবুসোনা",
  "শেখ আক্তার",
  "শেখ হাসিবুল",
  "শেখ রিজুয়ান",
  "শেখ মহসিন মিদ্দা",
  "শেখ আফসার"
];

const sponsorListDiv = document.getElementById('sponsor-list');

// স্পনসর লোড ও রিয়েলটাইম স্টার আপডেট
sponsors.forEach(name => {
  const div = document.createElement('div');
  div.className = 'sponsor';
  div.innerHTML = `
    <span class="sponsor-name">${name}</span>
    <span class="stars" id="stars-${name}">⭐ 0</span>
    <button onclick="giveStar('${name}')">🌟 Star দিন</button>
  `;
  sponsorListDiv.appendChild(div);

  // রিয়েলটাইম লিসনার
  db.ref('sponsors/' + name).on('value', snapshot => {
    const count = snapshot.val() || 0;
    document.getElementById('stars-' + name).innerText = `⭐ ${count}`;
  });
});

// স্টার ফাংশন
function giveStar(name) {
  const starRef = db.ref('sponsors/' + name);
  starRef.transaction(current => (current || 0) + 1);
}
