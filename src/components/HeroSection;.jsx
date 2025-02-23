import React, { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [missionLog, setMissionLog] = useState('');
  const gameState = useRef({
    ship: { x: 0, y: 0, width: 40, height: 40, speed: 5 },
    bullets: [],
    aliens: [],
    alienBullets: [],
    score: 0,
    gameOver: false,
    alienSpeed: 2,
    direction: 1,
  });

  // Sound effects
  const sounds = {
    shoot: new Howl({ src: ['https://cdn.zapsplat.com/8-bit_laser.mp3'] }),
    hit: new Howl({ src: ['https://cdn.zapsplat.com/8-bit_explosion.mp3'] }),
    gameOver: new Howl({ src: ['https://cdn.zapsplat.com/game_over.mp3'] }),
  };

  // Sprite assets from OpenGameArt
  const shipSprite = new Image();
  shipSprite.src = 'https://opengameart.org/sites/default/files/ship_0.png';

  const alienSprite = new Image();
  alienSprite.src = 'https://opengameart.org/sites/default/files/enemy_0.png';

  // Mission Log messages
  const missionLogs = [
    "Code a bot at Portal!",
    "Join forces on Team page!",
    "Learn circuits in Educational!",
    "Explore creations in Projects!",
    "Enlist now—Join Us!",
    "Test skills in Simulator!",
    "Defend the grid—visit Portal!",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size dynamically
    const updateCanvasSize = () => {
      const width = Math.min(800, window.innerWidth * 0.9); // 90% of viewport, max 800px
      const height = width * 0.75; // 4:3 aspect ratio for TV feel
      canvas.width = width;
      canvas.height = height;
      gameState.current.ship.x = width / 2; // Center ship initially
      gameState.current.ship.y = height - 60; // Near bottom
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize aliens
    const initAliens = () => {
      gameState.current.aliens = [];
      const alienWidth = 40;
      const alienHeight = 40;
      const cols = Math.floor(canvas.width / 60) - 1; // Adjust based on canvas width
      const rows = 5;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          gameState.current.aliens.push({
            x: 50 + j * 60,
            y: 50 + i * 60,
            width: alienWidth,
            height: alienHeight,
            alive: true,
            direction: 1,
          });
        }
      }
    };
    initAliens();

    // Keyboard controls
    const handleKeyDown = (e) => {
      if (!isGameStarted && (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === ' ')) {
        setIsGameStarted(true);
      }
      if (!isGameStarted || gameState.current.gameOver) return;

      if (e.key === 'ArrowLeft' && gameState.current.ship.x > 20) {
        gameState.current.ship.x -= gameState.current.ship.speed;
      } else if (e.key === 'ArrowRight' && gameState.current.ship.x < canvas.width - 20) {
        gameState.current.ship.x += gameState.current.ship.speed;
      } else if (e.key === ' ') {
        gameState.current.bullets.push({
          x: gameState.current.ship.x,
          y: gameState.current.ship.y - 20,
          width: 4,
          height: 10,
        });
        sounds.shoot.play();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Game loop
    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw TV scanlines
      ctx.fillStyle = 'rgba(0, 255, 255, 0.05)';
      for (let i = 0; i < canvas.height; i += 4) {
        ctx.fillRect(0, i, canvas.width, 1);
      }

      // Draw ship
      ctx.drawImage(
        shipSprite,
        gameState.current.ship.x - gameState.current.ship.width / 2,
        gameState.current.ship.y - gameState.current.ship.height / 2,
        gameState.current.ship.width,
        gameState.current.ship.height
      );

      if (isGameStarted && !gameState.current.gameOver) {
        // Move and draw bullets
        gameState.current.bullets = gameState.current.bullets.filter(b => b.y > -10);
        gameState.current.bullets.forEach(bullet => {
          bullet.y -= 5;
          ctx.fillStyle = '#FF6F61';
          ctx.fillRect(bullet.x - bullet.width / 2, bullet.y, bullet.width, bullet.height);

          // Collision with aliens
          gameState.current.aliens.forEach(alien => {
            if (
              alien.alive &&
              bullet.x > alien.x - alien.width / 2 &&
              bullet.x < alien.x + alien.width / 2 &&
              bullet.y < alien.y + alien.height / 2 &&
              bullet.y > alien.y - alien.height / 2
            ) {
              alien.alive = false;
              gameState.current.bullets = gameState.current.bullets.filter(b => b !== bullet);
              gameState.current.score += 10;
              sounds.hit.play();
            }
          });
        });

        // Move and draw aliens
        let moveDown = false;
        gameState.current.aliens.forEach(alien => {
          if (alien.alive) {
            alien.x += gameState.current.alienSpeed * alien.direction;
            if (alien.x > canvas.width - 40 || alien.x < 40) moveDown = true;
            ctx.drawImage(alienSprite, alien.x - alien.width / 2, alien.y - alien.height / 2, alien.width, alien.height);
          }
        });

        if (moveDown) {
          gameState.current.aliens.forEach(alien => {
            if (alien.alive) {
              alien.y += 20;
              alien.direction *= -1;
              if (alien.y > canvas.height - 60) {
                gameState.current.gameOver = true;
                sounds.gameOver.play();
                // Set random mission log on game over
                setMissionLog(missionLogs[Math.floor(Math.random() * missionLogs.length)]);
              }
            }
          });
        }

        // Alien bullets
        if (Math.random() < 0.01) {
          const aliveAliens = gameState.current.aliens.filter(a => a.alive);
          if (aliveAliens.length > 0) {
            const shooter = aliveAliens[Math.floor(Math.random() * aliveAliens.length)];
            gameState.current.alienBullets.push({
              x: shooter.x,
              y: shooter.y + 20,
              width: 4,
              height: 10,
            });
          }
        }

        // Move and draw alien bullets
        gameState.current.alienBullets = gameState.current.alienBullets.filter(b => b.y < canvas.height);
        gameState.current.alienBullets.forEach(bullet => {
          bullet.y += 3;
          ctx.fillStyle = '#00FFFF';
          ctx.fillRect(bullet.x - bullet.width / 2, bullet.y, bullet.width, bullet.height);

          // Collision with ship
          if (
            bullet.x > gameState.current.ship.x - gameState.current.ship.width / 2 &&
            bullet.x < gameState.current.ship.x + gameState.current.ship.width / 2 &&
            bullet.y > gameState.current.ship.y - gameState.current.ship.height / 2 &&
            bullet.y < gameState.current.ship.y + gameState.current.ship.height / 2
          ) {
            gameState.current.gameOver = true;
            sounds.gameOver.play();
            // Set random mission log on game over
            setMissionLog(missionLogs[Math.floor(Math.random() * missionLogs.length)]);
          }
        });
      }

      // Draw score (adjusted position)
      ctx.fillStyle = '#E0E0E0';
      ctx.font = `${Math.min(20, canvas.width * 0.025)}px Orbitron`;
      ctx.textAlign = 'left';
      ctx.fillText(`Score: ${gameState.current.score}`, Math.min(10, canvas.width * 0.02), Math.min(30, canvas.height * 0.05));

      // Start prompt or game over text with mission log
      ctx.fillStyle = '#FF6F61';
      ctx.font = `${Math.min(40, canvas.width * 0.05)}px Orbitron`;
      ctx.textAlign = 'center';
      if (!isGameStarted) {
        ctx.fillText('Press Any Key to Start', canvas.width / 2, canvas.height / 2);
      } else if (gameState.current.gameOver) {
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - Math.min(40, canvas.height * 0.07));
        if (missionLog) {
          ctx.fillStyle = '#00FFFF';
          ctx.font = `${Math.min(20, canvas.width * 0.025)}px Orbitron`;
          ctx.fillText(`Mission Log: ${missionLog}`, canvas.width / 2, canvas.height / 2 + Math.min(40, canvas.height * 0.07));
        }
      }

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isGameStarted, missionLog]);

  return (
    <section className="relative bg-[var(--rf-primary)] min-h-[80vh] flex flex-col items-center justify-center p-4">
      {/* TV Screen Effect */}
      <div className="relative w-full max-w-[800px] bg-[var(--rf-secondary)] rounded-lg border-4 border-[var(--rf-link)] shadow-[0_0_15px_var(--rf-link)] overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-auto"
          style={{ background: '#1A1A1A' }}
        />
        {/* TV Frame Overlay */}
        <div className="absolute inset-0 pointer-events-none border-8 border-[var(--rf-secondary)] rounded-lg shadow-inner" />
      </div>

      {/* Instructions */}
      <div className="mt-4 text-center text-[var(--rf-link)] font-[Orbitron] text-sm md:text-base opacity-90 animate-flicker">
        Use ← → to move, Space to shoot. Press any key to start!
      </div>
    </section>
  );
};

export default HeroSection;