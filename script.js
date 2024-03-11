function copyToClipboard() {
  const textToCopy = "95.82.185.15:25565";
  const dummyInput = document.createElement("textarea");
  document.body.appendChild(dummyInput);
  dummyInput.value = textToCopy;
  dummyInput.select();
  document.execCommand("copy");
  document.body.removeChild(dummyInput);

  const message = document.getElementById("Popup");
  message.style.display = "block";

  setTimeout(function() {
    message.style.display = "none";
  }, 1000);
};

function Popup() {
  const message = document.getElementById("Popup");
  message.style.display = "block";

  setTimeout(function() {
    message.style.display = "none";
  }, 1500);
};

function getPlayerCount() {
  const serverIP = '95.82.185.15:25565';
  const url = `https://api.mcsrvstat.us/2/${serverIP}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.online) {
      const playerCount = data.players.online;
      document.getElementById('playerCount').innerText = `Počet aktivních hráčů: ${playerCount}`;
      document.getElementById('circle').style.background='#4CFF00';
      document.getElementById('version').innerText = `Minecadsdadraft java ${data.version}`;
    } else {
      document.getElementById('playerCount').innerText = 'Server je offline';
      document.getElementById('circle').style.background='#FF0000';
    }
  })
  .catch(error => {
    console.log('Chyba hledání počtu hráčů:', error);
    document.getElementById('playerCount').innerText = 'Chyba hledání počtu hráčů';
    document.getElementById('version').innerText = `Minecadsdadraft java ${data.version}`;
  });
}

// Call getPlayerCount function when the page loads
window.onload = getPlayerCount;