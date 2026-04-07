import React from 'react';

const stars = [
  { left: '8%', top: '14%', delay: '0s', duration: '12s' },
  { left: '18%', top: '34%', delay: '1.2s', duration: '11s' },
  { left: '31%', top: '18%', delay: '2.3s', duration: '10s' },
  { left: '44%', top: '28%', delay: '0.8s', duration: '13s' },
  { left: '58%', top: '16%', delay: '1.6s', duration: '9.5s' },
  { left: '71%', top: '24%', delay: '2.6s', duration: '12.5s' },
  { left: '86%', top: '18%', delay: '0.4s', duration: '10.5s' },
  { left: '12%', top: '58%', delay: '1.1s', duration: '14s' },
  { left: '27%', top: '72%', delay: '2.1s', duration: '11.5s' },
  { left: '49%', top: '64%', delay: '0.7s', duration: '13.5s' },
  { left: '68%', top: '76%', delay: '1.9s', duration: '12s' },
  { left: '83%', top: '60%', delay: '2.8s', duration: '10.8s' },
];

const shootingStars = [
  {
    top: '9%',
    left: '101%',
    delay: '4s',
    duration: '42s',
    length: '180px',
    thickness: '2px',
    travelX: '-1450px',
    travelY: '820px',
    opacity: '.76',
    angle: '-22deg',
  },
  {
    top: '21%',
    left: '100%',
    delay: '18s',
    duration: '42s',
    length: '150px',
    thickness: '2px',
    travelX: '-1320px',
    travelY: '760px',
    opacity: '.62',
    angle: '-18deg',
  },
  {
    top: '31%',
    left: '102%',
    delay: '32s',
    duration: '42s',
    length: '205px',
    thickness: '2px',
    travelX: '-1580px',
    travelY: '900px',
    opacity: '.8',
    angle: '-25deg',
  },
];

export function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="grid-bg" />
      <div className="edge-glow" />

      <div className="starfield">
        {stars.map((star, index) => (
          <span
            key={`star-${index}`}
            className="ambient-star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}

        {shootingStars.map((star, index) => (
          <span
            key={`shooting-${index}`}
            className="shooting-star"
            style={{
              top: star.top,
              left: star.left,
              width: star.length,
              height: star.thickness,
              opacity: star.opacity,
              animationDelay: star.delay,
              animationDuration: star.duration,
              '--travel-x': star.travelX,
              '--travel-y': star.travelY,
              '--shooting-angle': star.angle,
            }}
          />
        ))}
      </div>
    </div>
  );
}
