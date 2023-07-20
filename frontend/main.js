// Importing necessary modules
import * as auth from './auth.js';
import * as webrtc from './webrtc.js';

// DOM Elements
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');
const podcastContainer = document.getElementById('podcastContainer');
const editPodcastButton = document.getElementById('editPodcastButton');
const publishPodcastButton = document.getElementById('publishPodcastButton');
const sharePodcastButton = document.getElementById('sharePodcastButton');
const searchPodcastInput = document.getElementById('searchPodcastInput');

// Variables
let userProfile = null;
let podcastList = [];
let currentPodcast = null;
let authToken = null;

// Event Listeners
loginButton.addEventListener('click', loginUser);
signupButton.addEventListener('click', signupUser);
editPodcastButton.addEventListener('click', editPodcast);
publishPodcastButton.addEventListener('click', publishPodcast);
sharePodcastButton.addEventListener('click', sharePodcast);
searchPodcastInput.addEventListener('keyup', searchPodcast);

// Functions
function loginUser() {
  auth.login().then(token => {
    authToken = token;
    // TODO: Fetch user profile and podcasts
  });
}

function signupUser() {
  auth.signup().then(token => {
    authToken = token;
    // TODO: Create new user profile
  });
}

function editPodcast() {
  if (currentPodcast) {
    // TODO: Open podcast editing interface
  }
}

function publishPodcast() {
  if (currentPodcast) {
    // TODO: Publish current podcast
  }
}

function sharePodcast() {
  if (currentPodcast) {
    // TODO: Share current podcast
  }
}

function searchPodcast() {
  const query = searchPodcastInput.value;
  // TODO: Search podcasts based on query
}

// WebRTC setup
webrtc.setup().then(stream => {
  // TODO: Handle real-time communication
});