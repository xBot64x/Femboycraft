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
    } else {
      document.getElementById('playerCount').innerText = 'Server je offline';
    }
  })
  .catch(error => {
    console.log('Chyba hledání počtu hráčů:', error);
    document.getElementById('playerCount').innerText = 'Chyba hledání počtu hráčů';
  });
}

// Call getPlayerCount function when the page loads
window.onload = getPlayerCount;