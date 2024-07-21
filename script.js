import { playPause, changeTrack } from './controls.js';

const audio = document.getElementById('audio');
const audioImages = document.getElementById('img');
const playPauseButton = document.getElementById('play-pause-button');
const volume = document.getElementById('volume-control');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");
const forwardButton = document.getElementById('forwardButton');
const backButton = document.getElementById('backButton');
const trackTitle = document.getElementById('track-title');
const artistName = document.getElementById('artist-name');

let isPlaying = false;

const tracks = [
    {
        title: 'PRIDE.',
        artist: 'Kendrick Lamar',
        src: './music/PRIDE..mp3',
        img: './images/pride.jpg'
    },
    {
        title: '505',
        artist: 'Arctic Monkeys',
        src: './music/505.mp3',
        img: './images/505.jpeg'
    },
    {
        title: 'Stargirl Interlude',
        artist: 'The Weeknd - Lana Del Rey',
        src: './music/stargirl.mp3',
        img:'./images/stargirl.jpg'
    }
        
];

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = tracks[index];
    changeTrack(audio, track, audioImages, trackTitle, artistName);
}

loadTrack(currentTrackIndex);

playPauseButton.addEventListener('click', function () {
    playPause(audio, playPauseButton);
    isPlaying = !isPlaying;
});

forwardButton.addEventListener('click', function () {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audio.play();
    }
});

backButton.addEventListener('click', function () {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audio.play();
    }
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener('timeupdate', function () {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);

    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
    totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;

    const progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;
});
