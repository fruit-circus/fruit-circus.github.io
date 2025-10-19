
function bikaipoArcadeGame() {
    arcadeGameContainer.style.display = "block";
    startArcadeGame();
    letsCreateProjectilesWithMama();
    restartGameWithoutKeypress();
    dialogue.arcadeGameActive = true;
}


function closeTheArcadeGame() {
                eightBitTune.pause();
                doihmot.play();
                arcadeshell.style.display = "none";
                arcadeshell.style.zIndex = "-100";
                arcadecloseup.style.display = "block";
                dialogue.blockArrowTravel = false;
                dialogue.allowEscape = false;
                dialogue.arcadeGameActive = false;
                timer.style.display = "none";
                arcadeGameContainer.style.display = "none";
                sprite.style.display = "none";
                score.style.display = "none";
}


    //Create projectiles at regular intervals
    function letsCreateProjectilesWithMama() {
        if (!isGameOver && dialogue.arcadeGameActive){
    setInterval(function() {
      var projectileSize = 8;
      var speed = 3;
      for (var i = 0; i < 4; i++) {
        var x = Math.random() * gameSquare.size;
        var y = Math.random() * gameSquare.size;
        var direction = Math.floor(Math.random() * 8);
        var projectile = {
          x: x,
          y: y,
          size: projectileSize,
          speedX: 0,
          speedY: 0
        };
        switch (direction) {
          case 0: // from west to east
            projectile.x = -projectileSize;
            projectile.speedX = speed;
            projectile.speedY = 0;
            break;
          case 1: // from east to west
            projectile.x = gameSquare.size;
            projectile.speedX = -speed;
            projectile.speedY = 0;
            break;
          case 2: // from north to south
            projectile.y = -projectileSize;
            projectile.speedX = 0;
            projectile.speedY = speed;
            break;
          case 3: // from south to north
            projectile.y = gameSquare.size;
            projectile.speedX = 0;
            projectile.speedY = -speed;
            break;
          case 4: // from west to east
            projectile.x = projectileSize;
            projectile.speedX = speed;
            projectile.speedY = 0;
            break;
          case 5: // from east to west
            projectile.x = -projectileSize;
            projectile.speedX = -speed;
            projectile.speedY = 0;
            break;
          case 6: // from north to south
            projectile.y = projectileSize;
            projectile.speedX = 0;
            projectile.speedY = speed;
            break;
          case 7: // from south to north
            projectile.y = -projectileSize;
            projectile.speedX = 0;
            projectile.speedY = -speed;
            break;}
        projectiles.push(projectile);}}, 700);}}


    function updateTimer() {
        if (dialogue.arcadeGameActive && dialogue.intervalActive && !isGameOver) {
        survivalTime += 0.02;
      timer.innerHTML = 'Score: ' + survivalTime.toFixed(0) * 10;
      arcadeGame.score = survivalTime.toFixed(0) * 10;
      checkScore();
        }
    }


    // Move projectiles
    function moveProjectiles() {
        if (dialogue.arcadeGameActive && dialogue.intervalActive) {
      for (var i = 0; i < projectiles.length; i++) {
        var projectile = projectiles[i];
        // Calculate the direction vector from projectile to player
        var dx = playerX - projectile.x;
        var dy = playerY - projectile.y;
        // Calculate the distance between projectile and player
        var distance = Math.sqrt(dx * dx + dy * dy);
        // Normalize the direction vector
        var normalizedDirX = dx / distance;
        var normalizedDirY = dy / distance;
        //increase the attraction force for a stronger arc
        var attractionForce = 2;
        // Calculate the original trajectory vector
        var originalTrajectoryX = projectile.speedX;
        var originalTrajectoryY = projectile.speedY;
        // Calculate the combined trajectory vector with stronger arc
        var combinedTrajectoryX = originalTrajectoryX + normalizedDirX * attractionForce;
        var combinedTrajectoryY = originalTrajectoryY + normalizedDirY * attractionForce;
        // Update the projectile's position with the combined trajectory
        projectile.x += combinedTrajectoryX;
        projectile.y += combinedTrajectoryY;
        // Remove projectiles that are off-screen
        if (projectile.x < 0 || projectile.x > gameSquare.size ||
          projectile.y < 0 || projectile.y > gameSquare.size) {
          projectiles.splice(i, 1);
          i--;}}}}

    // Check collision between projectiles and player
    function checkCollision() {
            if (dialogue.arcadeGameActive && dialogue.intervalActive) {
      for (var i = 0; i < projectiles.length; i++) {
        var projectile = projectiles[i];
        // Check if projectile collides with the player
        if (projectile.x < playerX + playerSize &&
          projectile.x + projectile.size > playerX &&
          projectile.y < playerY + playerSize &&
          projectile.y + projectile.size > playerY) {
          decreaseHealth();
          // Remove the projectile
          projectiles.splice(i, 1);
          i--;}}

      if (playerHealth <= 0) {
        gameOver();}}
      }

    function decreaseHealth() {
        if (dialogue.arcadeGameActive && dialogue.intervalActive) {
            playerHealth -= 1;}
        }

    
    function drawGame() {
                if (dialogue.arcadeGameActive && dialogue.intervalActive) {
      // Clear the canvas
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      // Draw the player
      canvasContext.fillStyle = 'red';
      canvasContext.fillRect(playerX, playerY, playerSize, playerSize);
      //draw projectiles
      canvasContext.fillStyle = 'yellow';
      for (var i = 0; i < projectiles.length; i++) {
        var projectile = projectiles[i];
        canvasContext.beginPath();
        canvasContext.arc(projectile.x, projectile.y, projectile.size, 0, Math.PI * 2, false);
        canvasContext.fill();}
      //draw the health bar
      var healthBarWidth = (playerHealth / maxPlayerHealth) * canvas.width;
      canvasContext.fillStyle = 'cyan';
      canvasContext.fillRect(0, 0, healthBarWidth, 10);
      // Draw "game over"
      if (isGameOver) {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = 'white';
        timer.style.display = "block";
        eightBitTune.pause();
        if (!dialogue.gameBlooped) {gameOverBloop();}
        canvasContext.font = '16px Arial';
        canvasContext.fillText('Game Over', 140, 100);
        canvasContext.fillText('Press R to restart', 120, 120);
    }}}

        function gameOverBloop() {
            gameover.play();
            dialogue.gameBlooped = true;
        }

    function gameOver() {
      isGameOver = true;
      if (dialogue.arcadeGameActive && dialogue.intervalActive){
      document.addEventListener('keydown', restartGame);
      }
    }

    function restartGame(event) {
        if (dialogue.arcadeGameActive && dialogue.intervalActive) {
      if (event.key === 'r' || event.key === 'R') {
        isGameOver = false;
        dialogue.gameBlooped = false;
        playerX = 150;
        playerY = 150;
        playerHealth = maxPlayerHealth;
        projectiles = [];
        survivalTime = 0;
        timer.style.display = "none";
        eightBitTune.currentTime = 0;
        eightBitTune.play();
        doihmot.pause();
        document.removeEventListener('keydown', restartGame);
      }
    }
}

function restartGameWithoutKeypress() {
        isGameOver = false;
        dialogue.gameBlooped = false;
        playerX = 150;
        playerY = 150;
        playerHealth = maxPlayerHealth;
        projectiles = [];
        survivalTime = 0;
        timer.style.display = "none";
        eightBitTune.currentTime = 0;
        eightBitTune.play();
        doihmot.pause();
        document.removeEventListener('keydown', restartGame);
}


    // Update the game state
    function updateGame() {
        if (dialogue.intervalActive) {
            movePlayer();
            moveProjectiles();
            checkCollision();
            updateTimer();
            drawGame();
        }
    }

    // Handle player movement
    function movePlayer() {
        if (dialogue.arcadeGameActive && dialogue.intervalActive) {
        var newPlayerX = playerX;
      var newPlayerY = playerY;
      if (heldKeys['ArrowUp']) {
        newPlayerY -= playerSpeed;}
      if (heldKeys['ArrowDown']) {
        newPlayerY += playerSpeed;}
      if (heldKeys['ArrowLeft']) {
        newPlayerX -= playerSpeed;}
      if (heldKeys['ArrowRight']) {
        newPlayerX += playerSpeed;}
      // Check if the new player position is within the game square boundaries
      if (newPlayerX >= gameSquare.x && newPlayerX + playerSize <= gameSquare.x + gameSquare.size) {
        playerX = newPlayerX;}
      if (newPlayerY >= gameSquare.y && newPlayerY + playerSize <= gameSquare.y + gameSquare.size) {
        playerY = newPlayerY;}
   
        }
       }


    // Initialize the game
    function startArcadeGame() { 
      dialogue.blockArrowTravel = true;
      dialogue.allowEscape = true;
      dialogue.arcadeGameActive = true;
      canvas = document.getElementById('gameCanvas');
      canvasContext = canvas.getContext('2d');
      canvas.width = gameSquare.size;
      canvas.height = gameSquare.size;
      eightBitTune.play();
      eightBitTune.currentTime = 0;
      doihmot.pause();
      arcadecloseup.style.display = "block";
      arcadeshell.style.display = "block";
            arcadeshell.style.zIndex = "99";
const interval = setInterval(() => {
    if (!dialogue.arcadeGameActive) {
    clearInterval(interval)
    dialogue.intervalActive = false;
    return
} updateGame();
dialogue.intervalActive = true;
}, 20)
      // Player controls
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    };
