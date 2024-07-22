// Function to calculate weight on different planets
function astroCalculator() {
    document.querySelector("#calculate-button").addEventListener("click", astroCalculator);
    const weight = +document.querySelector("#user-weight").value;
    const planet = document.querySelector("#planets").value;

    if (!weight) {
        return alert("Fun fact: Penguins use pebbles to propose to their mates, however, I cannot propose anything to you without you giving me a weight!");
    }

    const weightMultipliers = {
        Mercury: 0.378,
        Venus: 0.9032,
        Earth: 1,
        Moon: 0.1655,
        Mars: 0.3895,
        Jupiter: 2.64,
        Saturn: 1.139,
        Uranus: 0.917,
        Neptune: 1.148,
        Pluto: 0.06,
        Sun: 27.9,
    };

    function calculateWeight(earthWeight, multiplier) {
        return earthWeight * multiplier;
    }

    let result;
    const calculatedWeight = calculateWeight(weight, weightMultipliers[planet]);

    switch (planet) {
        case "Pluto":
            result = "If you were on Pluto, your weight would be the heaviness of Pluto's broken heart";
            break;
        case "Sun":
        case "Jupiter":
        case "Earth":
            result = `If you were on ${planet}, you would weigh ${calculatedWeight.toFixed(0)}lbs!`;
            break;
        case "Mars":
        case "Moon":
        case "Venus":
            result = `If you were on ${planet}, you would weigh ${calculatedWeight.toFixed(2)}lbs!`;
            break;
        default:
            result = `If you were on ${planet}, you would weigh ${calculatedWeight.toFixed(1)}lbs!`;
            break;
    }

    document.querySelector("#output").textContent = result;
}

// Function to play audio
function playAudio() {
    document.querySelector("#playAudioButton").addEventListener("click", playAudio);
    const audioElement = document.getElementById('myAudio');
    audioElement.currentTime = 23;
    audioElement.play().catch(error => {
        console.error('Playback error:', error);
    });
}

// YouTube Player setup
let player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'kpz8lpoLvrA',  // Replace with your video ID
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'kpz8lpoLvrA',
            start: 20,  // Start at 20 seconds
            controls: 0,  // Hide player controls
            showinfo: 0,  // Hide video title and uploader info
            rel: 0,       // Do not show related videos at the end
            mute: 0       // Unmute the video
        },
        events: {
            'onReady': function() {
                player.mute(); // Ensure video is muted
            }
        }
    });
    //Penguin mp4
    document.addEventListener("DOMContentLoaded", function() {
        const video = document.getElementById("background-video");
    
        // Example function to play video
        function playVideo() {
            video.play();
        }
    
        // Example function to pause video
        function pauseVideo() {
            video.pause();
        }
    
        // Add event listeners if needed
        document.getElementById("playAudioButton").addEventListener("click", playVideo);
    });

    //make sure video has enough time to load for 65 second playing 
    window.addEventListener('load', function() {
        var video = document.getElementById('myVideo');
        video.addEventListener('loadedmetadata', function() {
            video.currentTime = 65; // 1 minute and 5 seconds
        });
    });
    
}
// Ensure YouTube API script is included in your HTML
