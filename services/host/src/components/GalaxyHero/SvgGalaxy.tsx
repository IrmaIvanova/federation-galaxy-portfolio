import React, { useState, useEffect, useRef } from 'react';
import './SVGGalaxy.styles.css'
import { useNavigate } from 'react-router-dom';
import { planetsData } from './planetData'
import { starsData } from './starsData';


const STAR_COLORS = [
  '#ffffff', // белый
  '#bcd7ff', // холодно-голубой
  '#ffe9a3', // тёпло-жёлтый
  '#ffd1dc', // розоватый
  '#c7f0ff', // неоновый голубой
];

export const FlatSolarSystem: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState<boolean>(true);
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [animationSpeed, setAnimationSpeed] = useState<number>(1);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false); // Состояние для отслеживания наведения

  const svgRef = useRef<SVGSVGElement>(null);

  const navigate = useNavigate()

  // Обработчик клика по солнцу
  const handleSunClick = () => {
    setIsSpinning(!isSpinning);
  };

  // Обработчик изменения скорости
  const handleSpeedChange = (speed: number) => {
    setAnimationSpeed(speed);
  };

  // Применяем скорость анимации ко всем планетам
  useEffect(() => {
    const planetGroups = document.querySelectorAll('.planet-group');
    planetGroups.forEach(group => {
      (group as HTMLElement).style.animationDuration = `${6 / animationSpeed}s`;
    });
  }, [animationSpeed]);


  return (<>

    <svg
      ref={svgRef}
      className="w-full h-[60vh] max-h-[600px] min-h-[400px]"
      // viewBox="450 150 900 400"
      viewBox="300 100 1200 500"
      // viewBox="0 0 1800 700"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flat solar system illustration"
      style={{
        '--animation-play-state': isSpinning ? 'running' : 'paused'
      } as React.CSSProperties}
    >
      {/* Фон */}
      <rect x="0" y="0" width="1800" height="700" className="fill-light-background dark:fill-dark-background" />

      {/* Орбиты */}
      <g id="orbits" transform="translate(900,350)">
        {planetsData.map(planet => (
          <circle
            key={`orbit-${planet.id}`}
            className="stroke-light-gray-400 dark:stroke-dark-gray-700 opacity-30 transition-colors duration-300"
            strokeWidth="2"
            fill="none"
            r={planet.orbitRadius}
            onClick={() => setSelectedPlanet(planet.id)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </g>
      {/* Градиенты */}
      <defs>
        <radialGradient id="earth-grad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#3aa0ff" />
          <stop offset="100%" stopColor="#0b6ad6" />
        </radialGradient>
        <radialGradient id="neptune-grad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#3aa0ff" />
          <stop offset="100%" stopColor="#180bd6ff" />
        </radialGradient>
        <radialGradient id="saturn-grad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ffca3a" />
          <stop offset="8%" stopColor="#ffca3a" />
          <stop offset="12%" stopColor="#d67b0b" />
          <stop offset="18%" stopColor="#d67b0b" />

          <stop offset="22%" stopColor="#ffca3a" />
          <stop offset="28%" stopColor="#ffca3a" />
          <stop offset="32%" stopColor="#d67b0b" />
          <stop offset="38%" stopColor="#d67b0b" />

          <stop offset="42%" stopColor="#ffca3a" />
          <stop offset="48%" stopColor="#ffca3a" />
          <stop offset="52%" stopColor="#d67b0b" />
          <stop offset="58%" stopColor="#d67b0b" />

          <stop offset="62%" stopColor="#ffca3a" />
          <stop offset="68%" stopColor="#ffca3a" />
          <stop offset="72%" stopColor="#d67b0b" />
          <stop offset="78%" stopColor="#d67b0b" />

          <stop offset="82%" stopColor="#ffca3a" />
          <stop offset="88%" stopColor="#ffca3a" />
          <stop offset="92%" stopColor="#d67b0b" />
          <stop offset="100%" stopColor="#d67b0b" />
        </radialGradient>





      </defs>
      {/* Звёзды */}

      <g id="stars">
        {starsData.map(([cx, cy, r, animation, color], i) => {
          // Настраиваем длительность в зависимости от типа анимации
          let duration;
          switch (animation) {
            case 'flicker':
              duration = 2 + Math.random() * 2; // 2-4 секунды
              break;
            case 'quick-flicker':
              duration = 1 + Math.random() * 1.5; // 1-2.5 секунды
              break;
            case 'subtle-flicker':
              duration = 3 + Math.random() * 3; // 3-6 секунд
              break;
            case 'neon-flicker':
              duration = 3.5 + Math.random() * 2.5; // 3.5-6 секунд
              break;
            case 'neon-pulse':
              duration = 4 + Math.random() * 3; // 4-7 секунд
              break;
            default:
              duration = 3 + Math.random() * 2; // 3-5 секунд по умолчанию
          }

          const delay = Math.random() * 5;

          return (
            <circle
              key={`star-${i}`}
              cx={cx}
              cy={cy}
              r={r}
              fill={color as string}
              style={{
                animation: `${animation} ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                opacity: animation === 'subtle-flicker' ? 0.8 : 0.9,
                transformOrigin: `${cx}px ${cy}px`,
              } as React.CSSProperties}
            />
          )
        })}
      </g>

      {/* Солнце */}
      <g
        id="sun"
        transform="translate(900,350)"
        onClick={handleSunClick}
        style={{ cursor: 'pointer' }}
      >
        <circle
          className="fill-light-accent-400 dark:fill-dark-accent-400 transition-colors duration-300"
          r="100"
        />
        <circle
          className="fill-light-accent-300 dark:fill-dark-accent-300 opacity-50 transition-colors duration-300"
          r="90"
        />
        {/* Анимация пульсации */}
         {/* <circle
          className="fill-light-accent-400 dark:fill-dark-accent-400 opacity-30 animate-ping transition-colors duration-300"
          r="110"
        /> */}
      </g>

      {/* Планеты */}
      {planetsData.map(planet => {
        if (planet.id === "neptune") {
          return <a href={planet.link} target="_blank">
            <g
              className="planet-group p-fast"
              style={planet.link && { cursor: 'pointer' }}
            >
              {planet.element}
            </g>
          </a>
        } else {
          return <g
            className="planet-group p-fast"
            onClick={() => planet.link && navigate(planet.link)}
            style={planet.link && { cursor: 'pointer' }}
          >
            {planet.element}
          </g>
        }
      })}
    </svg>



  </>
  );
};