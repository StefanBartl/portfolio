// Game Constants
export const GRAVITY = 0.7;
export const CANVAS_WIDTH = 1024;
export const CANVAS_HEIGHT = 576;
export const GROUND_LEVEL = CANVAS_HEIGHT - 96;

// Types
export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  x: number;
  y: number;
}

export interface SpriteConfig {
  position: Position;
  imageSrc: string;
  scale?: number;
  framesMax?: number;
  offset?: Position;
}

export interface FighterConfig extends SpriteConfig {
  velocity: Velocity;
  sprites: SpriteImages;
  attackBox: {
    offset: Position;
    width: number;
    height: number;
  };
}

export interface SpriteImages {
  idle: { imageSrc: string; framesMax: number };
  run: { imageSrc: string; framesMax: number };
  jump: { imageSrc: string; framesMax: number };
  fall: { imageSrc: string; framesMax: number };
  attack1: { imageSrc: string; framesMax: number };
  takeHit: { imageSrc: string; framesMax: number };
  death: { imageSrc: string; framesMax: number };
}

// Sprite Base Class
export class Sprite {
  position: Position;
  width: number;
  height: number;
  image: HTMLImageElement;
  scale: number;
  framesMax: number;
  framesCurrent: number;
  framesElapsed: number;
  framesHold: number;
  offset: Position;

  constructor(config: SpriteConfig) {
    this.position = config.position;
    this.width = 50;
    this.height = 150;
    this.image = new Image();
    this.image.src = config.imageSrc;
    this.scale = config.scale ?? 1;
    this.framesMax = config.framesMax ?? 1;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
    this.offset = config.offset ?? { x: 0, y: 0 };
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }

  animateFrames(): void {
    this.framesElapsed++;
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }

  update(ctx: CanvasRenderingContext2D): void {
    this.draw(ctx);
    this.animateFrames();
  }
}

// Fighter Class
export class Fighter extends Sprite {
  velocity: Velocity;
  health: number;
  lastKeyDown: string;
  attackBox: {
    position: Position;
    offset: Position;
    width: number;
    height: number;
  };
  isAttacking: boolean;
  sprites: { [key: string]: { image: HTMLImageElement; framesMax: number } };
  dead: boolean;

  constructor(config: FighterConfig) {
    super(config);

    this.velocity = config.velocity;
    this.health = 100;
    this.lastKeyDown = '';
    this.attackBox = {
      position: { ...config.position },
      offset: config.attackBox.offset,
      width: config.attackBox.width,
      height: config.attackBox.height,
    };
    this.isAttacking = false;
    this.dead = false;

    // Load sprite images
    this.sprites = {};
    Object.entries(config.sprites).forEach(([key, sprite]) => {
      const img = new Image();
      img.src = sprite.imageSrc;
      this.sprites[key] = {
        image: img,
        framesMax: sprite.framesMax,
      };
    });
  }

  update(ctx: CanvasRenderingContext2D): void {
    this.draw(ctx);

    if (!this.dead) this.animateFrames();

    // Update attack box position
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

    // Update position
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Apply gravity
    if (this.position.y + this.height + this.velocity.y >= GROUND_LEVEL) {
      this.velocity.y = 0;
      this.position.y = GROUND_LEVEL - this.height;
    } else {
      this.velocity.y += GRAVITY;
    }
  }

  attack(): void {
    this.switchSprite('attack1');
    this.isAttacking = true;
  }

  takeHit(): void {
    this.health -= 20;

    if (this.health <= 0) {
      this.switchSprite('death');
    } else {
      this.switchSprite('takeHit');
    }
  }

  switchSprite(sprite: string): void {
    // Don't interrupt death animation
    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1) {
        this.dead = true;
      }
      return;
    }

    // Don't interrupt attack animation
    if (
      this.image === this.sprites.attack1.image &&
      this.framesCurrent < this.sprites.attack1.framesMax - 1
    ) {
      return;
    }

    // Don't interrupt takeHit animation
    if (
      this.image === this.sprites.takeHit.image &&
      this.framesCurrent < this.sprites.takeHit.framesMax - 1
    ) {
      return;
    }

    const spriteData = this.sprites[sprite];
    if (spriteData && this.image !== spriteData.image) {
      this.image = spriteData.image;
      this.framesMax = spriteData.framesMax;
      this.framesCurrent = 0;
    }
  }
}

// Collision Detection
export function rectangularCollision(fighter1: Fighter, fighter2: Fighter): boolean {
  return (
    fighter1.attackBox.position.x + fighter1.attackBox.width >= fighter2.position.x &&
    fighter1.attackBox.position.x <= fighter2.position.x + fighter2.width &&
    fighter1.attackBox.position.y + fighter1.attackBox.height >= fighter2.position.y &&
    fighter1.attackBox.position.y <= fighter2.position.y + fighter2.height
  );
}

// Determine Winner
export function determineWinner(
  player: Fighter,
  enemy: Fighter,
  onGameEnd: (winner: string) => void
): void {
  let result = 'Tie';

  if (player.health > enemy.health) {
    result = 'Player 1 Wins';
  } else if (player.health < enemy.health) {
    result = 'Player 2 Wins';
  }

  onGameEnd(result);
}
