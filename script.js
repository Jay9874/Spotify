 console.log("welcome to Spotify");

 //initialize the variables
 let songIndex = 0;
 let audioElement = new Audio('Faded.mp3');
 let masterPlay = document.getElementById('masterPlay');
 let myProgressBar = document.getElementById('myProgressBar');
 let gif = document.getElementById('gif');
 let songItems = Array.from(document.getElementsByClassName('songItems'));

 let songs = [
     { songName: "Faded", filePath: "Faded.mp3", coverPath: "cover1.jpg" },
     { songName: "lily", filePath: "Lily.mp3", coverPath: "lily.jpg" },
     { songName: "Man On The Moon", filePath: "Man On The Moon.mp3", coverPath: "man cover4.jpg" },
     { songName: "Are you Lonely", filePath: "Are you Lonely.mp3", coverPath: "cover2.jpg" },
     { songName: "Darkside", filePath: "Darkside.mp3", coverPath: "dark cover6.jpg" },
     { songName: "Diamond Heart", filePath: "Diamond Heart.mp3", coverPath: "diamond 3.jpg" },
     { songName: "I Dont Wanna Go", filePath: "I Dont Wanna Go.mp3", coverPath: "i dont2.jpg" },
     { songName: "Alone", filePath: "Alone.mp3", coverPath: "alon.jpg" },
     { songName: "Avem", filePath: "Avem.mp3", coverPath: "avem.jpg" },
     { songName: "Sweet Dreams", filePath: "Sweet Dreams.mp3", coverPath: "sweet.jpg" },
     { songName: "All Falls Down", filePath: "All Falls Down.mp3", coverPath: "all cover5.jpg" },
     { songName: "Sing Me To Sleep", filePath: "Sing Me To Sleep.mp3", coverPath: "cover3.jpg" },
     { songName: "Force", filePath: "Force.mp3", coverPath: "force3.jpg" },
 ]

 songItems.forEach((element, i) => {
     console.log(element, i);

     element.getElementsByTagName('img')[0].src = songs[i].coverPath;
     element.getElementsByClassName('Banner')[0].innerText = songs[i].songName;

 })

 //audioElement.play()

 //handle play/pause click
 masterPlay.addEventListener('click', () => {
     if (audioElement.paused || audioElement.currentTime <= 0) {
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         gif.style.opacity = 1;
     } else {
         audioElement.pause();
         masterPlay.classList.remove('fa-pause-circle');
         masterPlay.classList.add('fa-play-circle');
         gif.style.opacity = 0;
     }
 })

 //Listen to events
 audioElement.addEventListener('timeupdate', () => {

     //update Seekbar
     progress = parseInt((audioElement.currentTime / audioElement.duration) * 10000000000);

     myProgressBar.value = progress;
 })

 myProgressBar.addEventListener('change', () => {
     audioElement.currentTime = myProgressBar.value * audioElement.duration / 10000000000;
 })

 const makeAllPlays = () => {
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
         element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');
     })
 }

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
     element.addEventListener('click', (e) => {
         makeAllPlays();
         index = parseInt(e.target.id);
         console.log(e.target);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src = `${index}.mp3`;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle')
         masterPlay.classList.add('fa-pause-circle')
     })
 })

 document.getElementById('next').addEventListener('click', () => {
     if (songIndex >= 9) {
         songIndex = 0
     } else {
         songIndex += 1;
     }
     audioElement.src = `${index}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle')
     masterPlay.classList.add('fa-pause-circle')


 })

 document.getElementById('previous').addEventListener('click', () => {
     if (songIndex < 09) {
         songIndex = 0
     } else {
         songIndex -= 1;
     }
     audioElement.src = `${index}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle')
     masterPlay.classList.add('fa-pause-circle')


 })