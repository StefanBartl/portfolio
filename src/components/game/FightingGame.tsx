import { useEffect, useRef, useState } from 'react';
import {
  Sprite,
  Fighter,
  rectangularCollision,
  determineWinner,
  CANVAS_WIDTH,
  CANVAS_HEIGHT
} from './classes';

interface GameProps {
  onGameEnd?: (winner: string) => void;
}

export default function FightingGame({ onGameEnd }: GameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'ended'>('menu');
  const [winner, setWinner] = useState<string>('');
  const [timer, setTimer] = useState(60);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);

  const gameLoopRef = useRef<number>();
  const timerIntervalRef = useRef<number>();
  const keysRef = useRef({
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
    ArrowUp: { pressed: false },
  });

  useEffect(() => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create background
    const background = new Sprite({
      position: { x: 0, y: 0 },
      imageSrc: '/game-assets/img/background.png',
    });

    // Create shop
    const shop = new Sprite({
      position: { x: 600, y: 160 },
      imageSrc: '/game-assets/img/shop.png',
      scale: 2.5,
      framesMax: 6,
    });

    // Create player
    const player = new Fighter({
      position: { x: 100, y: 0 },
      velocity: { x: 0, y: 0 },
      imageSrc: '/game-assets/img/samuraiMack/Idle.png',
      scale: 2.5,
      framesMax: 8,
      offset: { x: 215, y: 157 },
      sprites: {
        idle: { imageSrc: '/game-assets/img/samuraiMack/Idle.png', framesMax: 8 },
        run: { imageSrc: '/game-assets/img/samuraiMack/Run.png', framesMax: 8 },
        jump: { imageSrc: '/game-assets/img/samuraiMack/Jump.png', framesMax: 2 },
        fall: { imageSrc: '/game-assets/img/samuraiMack/Fall.png', framesMax: 2 },
        attack1: { imageSrc: '/game-assets/img/samuraiMack/Attack1.png', framesMax: 6 },
        takeHit: { imageSrc: '/game-assets/img/samuraiMack/Take Hit.png', framesMax: 4 },
        death: { imageSrc: '/game-assets/img/samuraiMack/Death.png', framesMax: 6 },
      },
      attackBox: {
        offset: { x: 100, y: 50 },
        width: 160,
        height: 50,
      },
    });

    // Create enemy
    const enemy = new Fighter({
      position: { x: 700, y: 100 },
      velocity: { x: 0, y: 0 },
      imageSrc: '/game-assets/img/kenji/Idle.png',
      scale: 2.5,
      framesMax: 4,
      offset: { x: 215, y: 167 },
      sprites: {
        idle: { imageSrc: '/game-assets/img/kenji/Idle.png', framesMax: 4 },
        run: { imageSrc: '/game-assets/img/kenji/Run.png', framesMax: 8 },
        jump: { imageSrc: '/game-assets/img/kenji/Jump.png', framesMax: 2 },
        fall: { imageSrc: '/game-assets/img/kenji/Fall.png', framesMax: 2 },
        attack1: { imageSrc: '/game-assets/img/kenji/Attack1.png', framesMax: 4 },
        takeHit: { imageSrc: '/game-assets/img/kenji/Take Hit.png', framesMax: 3 },
        death: { imageSrc: '/game-assets/img/kenji/Death.png', framesMax: 7 },
      },
      attackBox: {
        offset: { x: -170, y: 50 },
        width: 170,
        height: 50,
      },
    });

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;

      gameLoopRef.current = requestAnimationFrame(animate);

      // Clear canvas
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw background
      background.update(ctx);
      shop.update(ctx);

      // Overlay
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update fighters
      player.update(ctx);
      enemy.update(ctx);

      // Player movement
      player.velocity.x = 0;
      if (keysRef.current.a.pressed && player.lastKeyDown === 'a') {
        player.velocity.x = -5;
        player.switchSprite('run');
      } else if (keysRef.current.d.pressed && player.lastKeyDown === 'd') {
        player.velocity.x = 5;
        player.switchSprite('run');
      } else {
        player.switchSprite('idle');
      }

      if (player.velocity.y < 0) {
        player.switchSprite('jump');
      } else if (player.velocity.y > 0) {
        player.switchSprite('fall');
      }

      // Enemy movement
      enemy.velocity.x = 0;
      if (keysRef.current.ArrowLeft.pressed && enemy.lastKeyDown === 'ArrowLeft') {
        enemy.velocity.x = -5;
        enemy.switchSprite('run');
      } else if (keysRef.current.ArrowRight.pressed && enemy.lastKeyDown === 'ArrowRight') {
        enemy.velocity.x = 5;
        enemy.switchSprite('run');
      } else {
        enemy.switchSprite('idle');
      }

      if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump');
      } else if (enemy.velocity.y > 0) {
        enemy.switchSprite('fall');
      }

      // Collision detection - Player hits Enemy
      if (
        rectangularCollision(player, enemy) &&
        player.isAttacking &&
        player.framesCurrent === 4
      ) {
        enemy.takeHit();
        player.isAttacking = false;
        setEnemyHealth(enemy.health);
      }

      if (player.isAttacking && player.framesCurrent === 4) {
        player.isAttacking = false;
      }

      // Collision detection - Enemy hits Player
      if (
        rectangularCollision(enemy, player) &&
        enemy.isAttacking &&
        enemy.framesCurrent === 2
      ) {
        player.takeHit();
        enemy.isAttacking = false;
        setPlayerHealth(player.health);
      }

      if (enemy.isAttacking && enemy.framesCurrent === 2) {
        enemy.isAttacking = false;
      }

      // Check for game end
      if (player.health <= 0 || enemy.health <= 0) {
        determineWinner(player, enemy, (result) => {
          setWinner(result);
          setGameState('ended');
          if (onGameEnd) onGameEnd(result);
        });
      }
    }

    // Start timer
    timerIntervalRef.current = window.setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          determineWinner(player, enemy, (result) => {
            setWinner(result);
            setGameState('ended');
            if (onGameEnd) onGameEnd(result);
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Keyboard controls
    const handleKeyDown = (e: KeyboardEvent) => {
      if (player.dead || enemy.dead) return;

      const keys = keysRef.current;

      switch (e.key) {
        case 'd':
          keys.d.pressed = true;
          player.lastKeyDown = 'd';
          break;
        case 'a':
          keys.a.pressed = true;
          player.lastKeyDown = 'a';
          break;
        case 'w':
          player.velocity.y = -20;
          break;
        case ' ':
          e.preventDefault();
          player.attack();
          break;
        case 'ArrowRight':
          keys.ArrowRight.pressed = true;
          enemy.lastKeyDown = 'ArrowRight';
          break;
        case 'ArrowLeft':
          keys.ArrowLeft.pressed = true;
          enemy.lastKeyDown = 'ArrowLeft';
          break;
        case 'ArrowUp':
          enemy.velocity.y = -20;
          break;
        case 'ArrowDown':
          enemy.attack();
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const keys = keysRef.current;

      switch (e.key) {
        case 'd':
          keys.d.pressed = false;
          break;
        case 'a':
          keys.a.pressed = false;
          break;
        case 'ArrowRight':
          keys.ArrowRight.pressed = false;
          break;
        case 'ArrowLeft':
          keys.ArrowLeft.pressed = false;
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState, onGameEnd]);

  const startGame = () => {
    setGameState('playing');
    setTimer(60);
    setPlayerHealth(100);
    setEnemyHealth(100);
    setWinner('');
  };

  const resetGame = () => {
    setGameState('menu');
    setTimer(60);
    setPlayerHealth(100);
    setEnemyHealth(100);
    setWinner('');
  };

  return (
    <div className="relative">
      {/* Game Menu */}
      {gameState === 'menu' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 rounded-lg">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-terminal-accent glitch" data-text="SAMURAI DUEL">
              SAMURAI DUEL
            </h2>
            <div className="space-y-2 text-terminal-text/70 text-sm">
              <p>Player 1: WASD + Space</p>
              <p>Player 2: Arrow Keys + Down Arrow</p>
            </div>
            <button
              onClick={startGame}
              className="btn-primary text-lg px-8 py-3 animate-pulse-glow"
            >
              START GAME
            </button>
          </div>
        </div>
      )}

      {/* Game Over Screen */}
      {gameState === 'ended' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 rounded-lg">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-terminal-accent">{winner}</h2>
            <button
              onClick={resetGame}
              className="btn-primary text-lg px-8 py-3"
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}

      {/* Game UI */}
      <div className="border border-terminal-accent/30 rounded-lg overflow-hidden bg-black">
        {/* Health Bars & Timer */}
        <div className="flex items-center gap-4 p-4 bg-terminal-bg border-b border-terminal-accent/20">
          {/* Player Health */}
          <div className="flex-1">
            <div className="relative h-8 bg-game-health-bg rounded border-2 border-white/20">
              <div
                className="absolute top-0 right-0 bottom-0 bg-game-health transition-all duration-300 rounded"
                style={{ width: `${playerHealth}%` }}
              />
            </div>
          </div>

          {/* Timer */}
          <div className="w-24 h-12 bg-game-timer border-4 border-white flex items-center justify-center">
            <span className="text-white font-bold text-xl">{timer}</span>
          </div>

          {/* Enemy Health */}
          <div className="flex-1">
            <div className="relative h-8 bg-game-health-bg rounded border-2 border-white/20">
              <div
                className="absolute top-0 left-0 bottom-0 bg-game-health transition-all duration-300 rounded"
                style={{ width: `${enemyHealth}%` }}
              />
            </div>
          </div>
        </div>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="w-full h-auto"
        />
      </div>

      {/* Controls Info */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-terminal-text/60">
        <div className="terminal-window p-3">
          <div className="font-bold text-terminal-accent mb-2">Player 1</div>
          <div>Move: A/D</div>
          <div>Jump: W</div>
          <div>Attack: Space</div>
        </div>
        <div className="terminal-window p-3">
          <div className="font-bold text-terminal-accent mb-2">Player 2</div>
          <div>Move: ← / →</div>
          <div>Jump: ↑</div>
          <div>Attack: ↓</div>
        </div>
      </div>
    </div>
  );
}
