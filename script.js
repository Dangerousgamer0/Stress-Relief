// 1. Bubble Pop
function startBubblePop() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';
    let bubblesLeft = 10;
  
    for (let i = 0; i < bubblesLeft; i++) {
      const bubble = document.createElement('div');
      bubble.style.position = 'absolute';
      bubble.style.width = '50px';
      bubble.style.height = '50px';
      bubble.style.background = '#007acc';
      bubble.style.borderRadius = '50%';
      bubble.style.left = `${Math.random() * 250}px`;
      bubble.style.top = `${Math.random() * 250}px`;
      bubble.style.cursor = 'pointer';
  
      bubble.onclick = () => {
        bubble.remove();
        bubblesLeft--;
        if (bubblesLeft === 0) {
          alert('🎉 You popped all the bubbles! Great job!');
        }
      };
  
      gameContainer.appendChild(bubble);
    }
  }
    
  // 2. Catch the Smiley
  function startCatchSmiley() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';
    let catchCount = 0;
  
    const smiley = document.createElement('div');
    smiley.textContent = '😊';
    smiley.style.position = 'absolute';
    smiley.style.fontSize = '30px';
    smiley.style.cursor = 'pointer';
    smiley.style.left = `${Math.random() * 250}px`;
    smiley.style.top = `${Math.random() * 250}px`;
  
    smiley.onclick = () => {
      catchCount++;
      if (catchCount === 3) {
        alert('🎉 You caught the smiley 3 times! You win!');
      }
      smiley.style.left = `${Math.random() * 250}px`;
      smiley.style.top = `${Math.random() * 250}px`;
    };
  
    gameContainer.appendChild(smiley);
  }
   
  // 3. Color Splash
  function startColorSplash() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';
    gameContainer.style.cursor = 'crosshair';
  
    let clickCount = 0;
  
    gameContainer.onclick = (e) => {
      clickCount++;
      const splash = document.createElement('div');
      splash.style.position = 'absolute';
      splash.style.width = '20px';
      splash.style.height = '20px';
      splash.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      splash.style.borderRadius = '50%';
      splash.style.left = `${e.offsetX}px`;
      splash.style.top = `${e.offsetY}px`;
      gameContainer.appendChild(splash);
  
      if (clickCount === 10) {
        alert('🎉 You created 10 splashes! Great job!');
        gameContainer.onclick = null; // Disable further clicks
      }
    };
  }
   
  // 4. Memory Tiles
  function startMemoryTiles() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';
    const tiles = ['😀', '😀', '🎉', '🎉']; // Pair of emojis
    tiles.sort(() => 0.5 - Math.random());
  
    let firstTile = null;
    let matches = 0;
  
    tiles.forEach((tile) => {
      const button = document.createElement('button');
      button.textContent = '❓';
      button.style.fontSize = '20px';
      button.style.margin = '5px';
      button.onclick = () => {
        button.textContent = tile;
        if (firstTile === null) {
          firstTile = button;
        } else {
          if (firstTile.textContent === tile && firstTile !== button) {
            matches++;
            firstTile = null;
            if (matches === 2) {
              alert('🎉 You matched all pairs! You win!');
            }
          } else {
            setTimeout(() => {
              button.textContent = '❓';
              firstTile.textContent = '❓';
              firstTile = null;
            }, 500);
          }
        }
      };
      gameContainer.appendChild(button);
    });
  }
  
  //5. Calm Counter
  function startCalmCounter() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '<button id="counter-btn">Click Me!</button>';
    const button = document.getElementById('counter-btn');
    let count = 0;
  
    button.onclick = () => {
      count++;
      button.textContent = `Clicked ${count} times`;
      if (count === 5) {
        alert('🎉 You reached 5 clicks! You win!');
      }
    };
  }
  
  
  