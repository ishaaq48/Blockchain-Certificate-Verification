// app.js
// Switching between sign in and sign up
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// REGISTER User
const registerForm = document.querySelector(".sign-up-form");
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector(".name-register").value;
  const email = document.querySelector(".email-register").value;
  const password = document.querySelector(".password-register").value;
  const role = document.querySelector(".text-register").value;

  try {
    const response = await fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password, role })
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.msg || "Registered Successfully!");
      container.classList.remove("sign-up-mode"); // Switch to login after register
    } else {
      alert(data.msg || "Registration Failed");
    }
  } catch (error) {
    console.error("Register Error:", error);
    alert("Registration Error. Please try again.");
  }
});

// LOGIN User
const loginForm = document.querySelector(".sign-in-form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelectorAll(".role-login")[0].value;
  const password = document.querySelector(".password-login").value;
  // const role = document.querySelectorAll(".role-login")[1].value; // optional if role needed in login
  console.log(email , " " , password)
  try {
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include", // ⬅️ Important! To save cookie
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    console.log(data.user.role)
    if (response.ok) {
      alert(data.msg || "Login Successful!");
      if(data.user.role === "issuer"){
        window.location.href = "/issuer.html";
      }
      if(data.user.role === "verifier"){
        window.location.href = "/verifier.html";
      }
       // ✅ Redirect after login (you can create dashboard.html)
    } else {
      alert(data.msg || "Login Failed");
    }
  } catch (error) {
    console.error("Login Error:", error);
    alert("Login Error. Please try again.");
  }
});

