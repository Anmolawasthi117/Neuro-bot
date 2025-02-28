import React, { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import shoot from "/assets/audio/Shoot_00.mp3"
import hit from "/assets/audio/Hit_00.mp3"
import gameOver from "/assets/audio/Jingle_Lose_00.mp3"
const HeroSection = () => {
  const canvasRef = useRef(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [missionLog, setMissionLog] = useState('');
  const gameState = useRef({
    ship: { x: 0, y: 0, width: 40, height: 40, speed: 10 },
    bullets: [],
    aliens: [],
    alienBullets: [],
    score: 0,
    gameOver: false,
    alienSpeed: 1,
    direction: 1,
  });

  // Updated sound effects with open-source URLs
  const sounds = useRef({
    shoot: new Howl({
      src: [shoot], 
      preload: true,
      volume: 0.5,
    }),
    hit: new Howl({
      src: [hit], 
      preload: true,
      volume: 0.5,
    }),
    gameOver: new Howl({
      src: [gameOver], 
      preload: true,
      volume: 0.5,
    }),
  });

  const shipSprite = new Image();
  shipSprite.src = 'https://opengameart.org/sites/default/files/ship_0.png';

  const alienSprite = new Image();
  alienSprite.src = 'https://opengameart.org/sites/default/files/enemy_0.png';

  const missionLogs = [
    "Code a bot at Portal!",
    "Join forces on Team page!",
    "Learn circuits in Educational!",
    "Explore creations in Projects!",
    "Enlist now—Join Us!",
    "Test skills in Simulator!",
    "Defend the grid—visit Portal!",
  ];

  const resetGame = () => {
    gameState.current = {
      ship: { x: 0, y: 0, width: 40, height: 40, speed: 10 },
      bullets: [],
      aliens: [],
      alienBullets: [],
      score: 0,
      gameOver: false,
      alienSpeed: 1,
      direction: 1,
    };
    setIsGameStarted(true);
    setMissionLog('');
    initAliens();
  };

  const initAliens = () => {
    const canvas = canvasRef.current;
    gameState.current.aliens = [];
    const alienWidth = 40;
    const alienHeight = 40;
    const cols = Math.floor(canvas.width / 60) - 1;
    const rows = 3;
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      const width = Math.min(800, window.innerWidth * 0.9);
      const height = width * 0.75;
      canvas.width = width;
      canvas.height = height;
      gameState.current.ship.x = width / 2;
      gameState.current.ship.y = height - 60;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    if (!gameState.current.aliens.length) initAliens();

    const handleKeyDown = (e) => {
      if (!isGameStarted && !gameState.current.gameOver) {
        setIsGameStarted(true);
        return;
      }
      if (!isGameStarted || gameState.current.gameOver) return;

      if (e.key === 'A' && gameState.current.ship.x > 20) {
        gameState.current.ship.x -= gameState.current.ship.speed;
      } else if (e.key === 'D' && gameState.current.ship.x < canvas.width - 20) {
        gameState.current.ship.x += gameState.current.ship.speed;
      } else if (e.key === 'W' || e.key === ' ') {
        gameState.current.bullets.push({
          x: gameState.current.ship.x,
          y: gameState.current.ship.y - 20,
          width: 4,
          height: 10,
        });
        sounds.current.shoot.play();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(0, 255, 255, 0.05)';
      for (let i = 0; i < canvas.height; i += 4) {
        ctx.fillRect(0, i, canvas.width, 1);
      }

      ctx.drawImage(
        shipSprite,
        gameState.current.ship.x - gameState.current.ship.width / 2,
        gameState.current.ship.y - gameState.current.ship.height / 2,
        gameState.current.ship.width,
        gameState.current.ship.height
      );

      if (isGameStarted && !gameState.current.gameOver) {
        gameState.current.bullets = gameState.current.bullets.filter(b => b.y > -10);
        gameState.current.bullets.forEach(bullet => {
          bullet.y -= 5;
          ctx.fillStyle = '#FF6F61';
          ctx.fillRect(bullet.x - bullet.width / 2, bullet.y, bullet.width, bullet.height);

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
              sounds.current.hit.play();
            }
          });
        });

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
                sounds.current.gameOver.play();
                setMissionLog(missionLogs[Math.floor(Math.random() * missionLogs.length)]);
              }
            }
          });
        }

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

        gameState.current.alienBullets = gameState.current.alienBullets.filter(b => b.y < canvas.height);
        gameState.current.alienBullets.forEach(bullet => {
          bullet.y += 3;
          ctx.fillStyle = '#00FFFF';
          ctx.fillRect(bullet.x - bullet.width / 2, bullet.y, bullet.width, bullet.height);

          if (
            bullet.x > gameState.current.ship.x - gameState.current.ship.width / 2 &&
            bullet.x < gameState.current.ship.x + gameState.current.ship.width / 2 &&
            bullet.y > gameState.current.ship.y - gameState.current.ship.height / 2 &&
            bullet.y < gameState.current.ship.y + gameState.current.ship.height / 2
          ) {
            gameState.current.gameOver = true;
            sounds.current.gameOver.play();
            setMissionLog(missionLogs[Math.floor(Math.random() * missionLogs.length)]);
          }
        });
      }

      ctx.fillStyle = '#E0E0E0';
      ctx.font = `${Math.min(20, canvas.width * 0.025)}px Orbitron`;
      ctx.textAlign = 'left';
      ctx.fillText(`Score: ${gameState.current.score}`, Math.min(10, canvas.width * 0.02), Math.min(30, canvas.height * 0.05));

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
      <div className="relative w-full max-w-[800px] bg-[var(--rf-secondary)] rounded-lg border-4 border-[var(--rf-link)] shadow-[0_0_15px_var(--rf-link)] overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-auto"
          style={{ background: '#1A1A1A' }}
        />
        <div className="absolute inset-0 pointer-events-none border-8 border-[var(--rf-secondary)] rounded-lg shadow-inner" />
      </div>

      {gameState.current.gameOver && (
        <button
          onClick={resetGame}
          className="mt-4 px-6 py-2 bg-[var(--rf-link)] text-[var(--rf-secondary)] font-[Orbitron] text-sm md:text-base rounded border-2 border-[var(--rf-secondary)] shadow-[0_0_10px_var(--rf-link)] hover:bg-[var(--rf-secondary)] hover:text-[var(--rf-link)] transition-all duration-300 animate-flicker"
        >
          Restart Mission
        </button>
      )}

      <div className="mt-4 text-center text-[var(--rf-link)] font-[Orbitron] text-sm md:text-base opacity-90 animate-flicker">
        Use A,D to move, W or Space to shoot. Press any key to start!
      </div>
    </section>
  );
};

export default HeroSection;