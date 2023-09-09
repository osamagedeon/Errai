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
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }
  
  // Login
  function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
  
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
