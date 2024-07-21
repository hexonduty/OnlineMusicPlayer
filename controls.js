export function playPause(audio, playPauseButton) {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

export function changeTrack(audio, track, imgElement, titleElement, artistElement) {
    imgElement.src = track.img;
    audio.src = track.src;
    titleElement.textContent = track.title;
    artistElement.textContent = track.artist;
    audio.load();
}
