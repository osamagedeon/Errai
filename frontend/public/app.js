// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAUaebjrpKS0n8dnKumLNPl3rwphqW6M6I",
  authDomain: "errai-art.firebaseapp.com",
  projectId: "errai-art",
  storageBucket: "errai-art.appspot.com",
  messagingSenderId: "498292153565",
  appId: "1:498292153565:web:dc072e8d3c3543b5dccf34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// Signup
function signup(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // TODO: Redirect or update UI
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // TODO: Show error message to the user
      });
  }
  
  // Login
  function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // TODO: Redirect or update UI
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // TODO: Show error message to the user
      });
  }

  

  document.getElementById('signup-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signup(email, password);  // Call the signup function
  });
  
  document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);  // Call the login function
  });
  
  
  
var app = new Vue({
  el: '#app',
  data() {
    return { pictures: [] }
  },
  mounted() {
    axios
      .get('/api/pictures')
      .then(response => { this.pictures = response.data })
  }
})
