import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2-ZDnZ1evdT49oJ9qxI_owj98yi270fg",
  authDomain: "nov-b4b40.firebaseapp.com",
  projectId: "nov-b4b40",
  storageBucket: "nov-b4b40.firebasestorage.app",
  messagingSenderId: "675431101532",
  appId: "1:675431101532:web:b152dc96976ab7b54a6299",
  measurementId: "G-M8RH93MESH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("good")


// Signup Function
function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Check if both fields are filled
    if (email === '' || password === '') {
      alert('Please fill out both email and password fields.');
      return;
    }
  
    // Optional: Add more password validation (e.g., length, special characters)
    if (password.length < 6) {
      alert('Password should be at least 6 characters long.');
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log('User signed up:', user);
        alert('Sign up successful! Welcome, ' + user.email);
        window.location.pathname = 'login.html'
      })
      .catch((error) => {
        // Handle sign-up errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing up:', errorCode, errorMessage);
  
        // Display a user-friendly error message
        alert('Error: ' + errorMessage);
      });
  }
  
  // Attach event listener to button
  document.getElementById('signupButton')?.addEventListener('click', signup);

console.log("ok")