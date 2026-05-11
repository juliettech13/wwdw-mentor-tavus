'use client';

import { type Allocation } from '@/lib/quiz-data';

interface QuizDonutChartProps {
  allocations: Allocation[];
  colors: string[];
  size?: number;
  strokeWidth?: number;
}

export function QuizDonutChart({
  allocations,
  colors,
  size = 220,
  strokeWidth = 44,
}: QuizDonutChartProps) {
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulative = 0;
  const segments = allocations.map((a, i) => {
    const start = cumulative;
    cumulative += a.percentage;
    return {
      color: colors[i % colors.length],
      dasharray: `${(a.percentage / 100) * circumference} ${circumference}`,
      offset: -((start / 100) * circumference),
    };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Portfolio allocation donut chart"
      style={{ display: 'block' }}
    >
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke="rgba(23, 53, 45, 0.08)"
        strokeWidth={strokeWidth}
      />
      <g transform={`rotate(-90 ${cx} ${cy})`}>
        {segments.map((seg, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth={strokeWidth}
            strokeDasharray={seg.dasharray}
            strokeDashoffset={seg.offset}
            style={{
              transition: 'stroke-dasharray 600ms ease, stroke-dashoffset 600ms ease',
            }}
          />
        ))}
      </g>
    </svg>
  );
}
