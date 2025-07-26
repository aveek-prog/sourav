let count = 0; document.getElementById('counter').onclick = () => { count++; 
  document.getElementById('counter').textContent = `Clicks: ${count}`;
};
