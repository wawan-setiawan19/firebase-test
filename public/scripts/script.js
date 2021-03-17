const firebaseConfig = {
  apiKey: "AIzaSyDl1EL64HdTrc2jC_lVrk3pSbSAG6b-bVE",
  authDomain: "my-test-project-89885.firebaseapp.com",
  databaseURL: "https://my-test-project-89885-default-rtdb.firebaseio.com",
  projectId: "my-test-project-89885",
  storageBucket: "my-test-project-89885.appspot.com",
  messagingSenderId: "292312429900",
  appId: "1:292312429900:web:e8110f147a79b40b0a0be9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Setup Google Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
// firebase auth
const auth = firebase.auth();

const btnRegister = document.querySelector("#register");
const btnLogin = document.querySelector("#login");
const btnLogout = document.querySelector("#logout");
const btnGoogle = document.querySelector("#google");

const displayElement = document.querySelector(".display");
const formElement = document.querySelector(".form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

let emailValue = "";
let passwordValue = "";