//I STOLE THIS JAVASCRIPT FROM https://marlee-go.at/ !!!!!!!!!

var sounds = {
  "splat" : {
    url : "../misc/sfx/splat.ogg",
    volume : 0.3
  },
  "bigsplat" : {
    url : "../misc/sfx/big_splat.ogg",
    volume : 0.3
  },
  "burp" : {
    url : "../misc/sfx/ultrabitter.wav",
    volume : 0.3
  },
  "bass" : {
    url : "../misc/sfx/bass.wav",
    volume : 0.3
  },
};

var soundContext = new AudioContext();

for(var key in sounds) {
  loadSound(key);
}

function loadSound(name){
  var sound = sounds[name];

  var url = sound.url;
  var buffer = sound.buffer;

  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    soundContext.decodeAudioData(request.response, function(newBuffer) {
      sound.buffer = newBuffer;
    });
  }

  request.send();
}

function playSound(name, event, wait, banner,  options,){
  const e = event 

  if (event != null) {
  e.preventDefault(); 
    }

  var musicst = window.localStorage.getItem('musicState');
  var sound = sounds[name];
  var soundVolume = sounds[name].volume || 1;

  var buffer = sound.buffer;
  if(buffer){
    var source = soundContext.createBufferSource();
    source.buffer = buffer;

    var volume = soundContext.createGain();

    if(options) {
      if(options.volume) {
        volume.gain.value = soundVolume * options.volume;
      }
    } else {
      volume.gain.value = soundVolume;
    }

    if (event != null){
      var link = e.currentTarget.href;
    }

    if (musicst == 'dislike'){
        volume.gain.value = 0
        window.location.href = link
    }

    volume.connect(soundContext.destination);
    source.connect(volume);
    source.start(0);

    if(banner) {
        
        const bannesr = document.getElementById("banner");
        bannesr.src = "./images/fox.gif"
    }

    if (wait !== null) {
        setTimeout(() => {
            window.location.href = link
        }, wait); 
    } else {
        source.addEventListener('ended', () => window.location.href= link)
    }    
  }
}