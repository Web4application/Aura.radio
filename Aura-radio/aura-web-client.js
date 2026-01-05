const audio = document.getElementById("player-audio");
const nowPlaying = document.getElementById("now-playing");
const ws = new WebSocket("ws://localhost:9000");

ws.onmessage = (msg)=>{
  const data = JSON.parse(msg.data);

  if(data.type==="track") {
    audio.src = data.track.url;
    audio.play();
    nowPlaying.textContent = `Now Playing: ${data.track.title} - ${data.track.artist}`;
  }

  if(data.type==="listeners") {
    document.getElementById("listener-count").textContent = `Listeners: ${data.count}`;
  }
};
