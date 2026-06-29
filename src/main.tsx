import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const generateSvgBackground = () => {
  const GRID_SIZE = 40;
  const COLS = 5;
  const ROWS = 5;
  const WIDTH = COLS * GRID_SIZE;
  const HEIGHT = ROWS * GRID_SIZE;
  
  const keyframes = `
    @keyframes drift-0 {
      0% { transform: translate(0px, 0px) scale(0.3); opacity: 0.15; }
      25% { transform: translate(3px, -5px) scale(0.65); opacity: 0.35; }
      50% { transform: translate(-6px, 4px) scale(1.0); opacity: 0.6; }
      75% { transform: translate(5px, 6px) scale(0.65); opacity: 0.35; }
      100% { transform: translate(0px, 0px) scale(0.3); opacity: 0.15; }
    }
    @keyframes drift-1 {
      0% { transform: translate(0px, 0px) scale(0.3); opacity: 0.15; }
      30% { transform: translate(-7px, 3px) scale(0.7); opacity: 0.4; }
      60% { transform: translate(5px, -6px) scale(1.0); opacity: 0.6; }
      80% { transform: translate(-2px, -4px) scale(0.5); opacity: 0.3; }
      100% { transform: translate(0px, 0px) scale(0.3); opacity: 0.15; }
    }
    @keyframes drift-2 {
      0% { transform: translate(0px, 0px) scale(0.3); opacity: 0.15; }
      20% { transform: translate(6px, 6px) scale(0.6); opacity: 0.35; }
      40% { transform: translate(-4px, -7px) scale(1.0); opacity: 0.6; }
      70% { transform: translate(-5px, 3px) scale(0.7); opacity: 0.4; }
      100% { transform: translate(0px, 0px) scale(0.3); opacity: 0.15; }
    }
    @keyframes drift-3 {
      0% { transform: translate(0px, 0px) scale(0.3); opacity: 0.15; }
      25% { transform: translate(-5px, -5px) scale(0.5); opacity: 0.3; }
      50% { transform: translate(7px, -3px) scale(1.0); opacity: 0.6; }
      75% { transform: translate(3px, 6px) scale(0.7); opacity: 0.4; }
      100% { transform: translate(0px, 0px) scale(0.3); opacity: 0.15; }
    }
    @keyframes drift-4 {
      0% { transform: translate(0px, 0px) scale(0.3); opacity: 0.15; }
      35% { transform: translate(5px, -7px) scale(0.7); opacity: 0.4; }
      70% { transform: translate(-6px, -2px) scale(1.0); opacity: 0.6; }
      90% { transform: translate(4px, 4px) scale(0.5); opacity: 0.3; }
      100% { transform: translate(0px, 0px) scale(0.3); opacity: 0.15; }
    }
  `;

  let circles = '';
  // Seeding simple pseudo-random sequence for deterministic output
  let seed = 42;
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cx = c * GRID_SIZE + GRID_SIZE / 2;
      const cy = r * GRID_SIZE + GRID_SIZE / 2;
      const animIdx = Math.floor(random() * 5);
      const duration = random() * 4 + 6; // 6s to 10s
      const delay = random() * -10; // offset start times

      circles += `  <circle cx="${cx}" cy="${cy}" r="3" fill="#737373" style="transform-origin: ${cx}px ${cy}px; animation: drift-${animIdx} ${duration.toFixed(2)}s ease-in-out ${delay.toFixed(2)}s infinite;" />\n`;
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
    <style>
      ${keyframes}
    </style>
    ${circles}
  </svg>`;

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div 
      className="fixed bg-black inset-0 -z-10 w-full bg-[size:100px_100px] lg:bg-[size:200px_200px]" 
      style={{ backgroundImage: generateSvgBackground() }}
    />
    <App />
  </StrictMode>,
)
