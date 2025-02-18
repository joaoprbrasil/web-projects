function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

function stopAllAudios() {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => audio.pause());
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'a':
            playAudio('audio1');
            break;
        case 'b':
            playAudio('audio2');
            break;
        case 'c':
            playAudio('audio3');
            break;
        case '1':
            playAudio('audio4');
            break;
        default:
            break;
    }
});