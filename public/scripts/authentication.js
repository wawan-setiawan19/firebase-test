handleSignUp = (e) => {
  e.preventDefault();
  emailValue = email.value;
  passwordValue = password.value;
  auth
    .createUserWithEmailAndPassword(emailValue, passwordValue)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      display(err.message);
    });
};

// signIn
handleSignIn = (e) => {
  e.preventDefault();
  emailValue = email.value;
  passwordValue = password.value;
  auth
    .signInWithEmailAndPassword(emailValue, passwordValue)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      display(err.message);
    });
};

// logout
handleLogOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("Sign-Out");
    })
    .catch((err) => {
      console.error(err);
    });
};

// cek status auth
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    displayUser(user.email, user.displayName, user.photoURL);
    btnLogin.classList.add("hidden");
    btnRegister.classList.add("hidden");
    formElement.classList.add("hidden");
    btnLogout.classList.remove("hidden");
    btnGoogle.classList.add("hidden");

    if (!user.emailVerified) {
      displayElement.innerHTML += `<br> You're email is not verified`;
    }
  } else {
    console.log("you are not sign in");
    btnLogin.classList.remove("hidden");
    btnRegister.classList.remove("hidden");
    formElement.classList.remove("hidden");
    btnLogout.classList.add("hidden");
    displayElement.innerHTML = "";
  }
});

display = (message) => {
  setTimeout(() => {
    displayElement.innerHTML = "";
  }, 2000);
  displayElement.innerHTML = message;
};

handleGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      console.log(result.credential);
      console.log(result.user);
    })
    .catch((err) => {
      display(err.message);
    });
};

displayUser = (email, nama, picture) => {
  displayElement.innerHTML = `
    <img src='${picture}'>
    <div class="nama">${nama}</div>
    <div class="email">${email}</div>
  `;
};
