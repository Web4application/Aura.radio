const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 9000 });

let listenerCount = 0;
let currentTrack = {title:"Live Radio", artist:"DJ Live", cover:"https://web4application.github.io/Aura.radio/cover.jpg", url:"http://icecast:8000/live.ogg"};

wss.on('connection', ws => {
  listenerCount++;
  ws.send(JSON.stringify({ type:"track", track: currentTrack }));
  broadcast({ type:"listeners", count: listenerCount });

  ws.on('close', () => {
    listenerCount--;
    broadcast({ type:"listeners", count: listenerCount });
  });
});

function broadcast(msg) {
  const data = JSON.stringify(msg);
  wss.clients.forEach(client => {
    if(client.readyState===WebSocket.OPEN) client.send(data);
  });
}

// Simulate track updates every 60s
setInterval(()=>{
  currentTrack.title = "Live Track "+Math.floor(Math.random()*100);
  broadcast({type:"track", track:currentTrack});
}, 60000);
