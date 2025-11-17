# Black Force 007 Cricket Championship 🏏

Welcome to the **Black Force 007 Cricket Championship** live website!  
This project uses **HTML, CSS, JavaScript** along with **Firebase Realtime Database** to display:

- Live Countdown to the event  
- Match schedule  
- Sponsor information  
- Real-time score updates  

---

## 🔹 Features

- Fully responsive and premium design  
- Real-time Countdown using Firebase  
- Real-time Score update using Firebase Realtime Database  
- Sponsor & VIP sections with colorful badges  
- Contact & social media buttons  
- Hosted on **GitHub Pages**

---

## 🔹 Firebase Setup

1. Create a Firebase project: [Firebase Console](https://console.firebase.google.com/)  
2. Enable **Realtime Database** and start in **Test Mode** (remember to update rules later).  
3. Copy your Firebase configuration from your project settings:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
