import React, { useState, useEffect } from "react";

interface ICircleConfig {
  viewBox: string;
  x: string;
  y: string;
  radio: string;
}

const INITIAL_OFFSET = 65;
const circleConfig: ICircleConfig = {
  viewBox: "0 0 38 38",
  x: "19",
  y: "19",
  radio: "15.91549430918954",
};

interface IProps {
  className?: string;
  strokeColor: string;
  strokeWidth?: number;
  innerText: string;
  legendText?: string;
  percentage: number;
  trailStrokeWidth?: number;
  trailStrokeColor: string;
  trailSpaced?: boolean;
  speed?: number;
}

const SpeedoMeterBase = ({
  className,
  strokeColor,
  strokeWidth = 1,
  innerText,
  legendText = "",
  percentage = 0,
  trailStrokeWidth = 1,
  trailStrokeColor,
  trailSpaced,
  speed = 0.1,
}: IProps) => {
  const [progressBar, setProgressBar] = useState(0);
  const [count, setCount] = useState(0);
  const pace = percentage / speed;
  const updatePercentage = () => {
    setTimeout(() => {
      setProgressBar(progressBar + 0.2);
      setCount(count + 1);
    }, pace);
  };

  useEffect(() => {
    if (percentage > 0) updatePercentage();
  }, [percentage]);

  useEffect(() => {
    if (progressBar < percentage) updatePercentage();
  }, [progressBar]);

  return (
    <figure className={className}>
      <svg viewBox={circleConfig.viewBox}>
        <circle
          className="donut-ring"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke={trailStrokeColor}
          strokeWidth={trailStrokeWidth}
          strokeDasharray={trailSpaced ? 1 : 0}
        />

        <circle
          className="donut-segment"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progressBar} ${100 - progressBar}`}
          strokeDashoffset={INITIAL_OFFSET}
        />

        <g className="chart-text">
          <text x="50%" y="50%" className="chart-number">
            {/* {Number(progressBar)*10} */}
            {count}
          </text>
          <text x="50%" y="50%" className="chart-label">
            {innerText}
          </text>
        </g>
      </svg>
      {legendText && (
        <figcaption className="figure-key">
          <ul
            className="figure-key-list"
            aria-hidden="true"
            role="presentation"
          >
            <li>
              <span className="shape-circle" />
              <span>{legendText}</span>
            </li>
          </ul>
        </figcaption>
      )}
    </figure>
  );
};

export default SpeedoMeterBase;
