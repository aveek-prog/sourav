// Ambient Sound Toggle
const soundToggle = document.getElementById('sound-toggle');
const ambientSound = document.getElementById('ambient-sound');

soundToggle.addEventListener('click', () => {
  if (ambientSound.paused) {
    ambientSound.play();
    soundToggle.textContent = '🔇 Pause Sound';
  } else {
    ambientSound.pause();
    soundToggle.textContent = '🔊 Play Ambient Sound';
  }
});

// Interactive Map
const regions = document.querySelectorAll('.map-region');
const mapStory = document.getElementById('map-story');

regions.forEach(region => {
  region.addEventListener('click', () => {
    const regionName = region.querySelector('.region-tooltip').textContent;
    const audioFile = region.getAttribute('data-audio');
    
    // In a real site, load audio dynamically
    mapStory.innerHTML = `
      <h3>${regionName}</h3>
      <p>Playing greeting from community...</p>
      <audio controls>
        <source src="${audioFile}" type="audio/mpeg">
      </audio>
    `;
  });
});

// Two-Eyed Seeing Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    
    // Update active tab
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Show correct pane
    tabPanes.forEach(pane => pane.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});
