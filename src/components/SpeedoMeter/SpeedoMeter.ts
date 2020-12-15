import styled from "styled-components";

import SpeedoMeterBase from "./SpeedoMeterBase";

interface IProps {
  textColor?: string;
  strokeColor: string;
  maxSize?: string;
}

const SpeedoMeter = styled(SpeedoMeterBase)`
  max-width: ${(props: IProps) => props.maxSize};
  vertical-align: middle;

  .chart-text {
    fill: ${(props: IProps) => props.textColor};
    transform: translateY(0.25em);
  }

  .chart-number {
    font-size: 0.6em;
    line-height: 1;
    text-anchor: middle;
    transform: translateY(-0.25em);
  }

  .chart-label {
    font-size: 0.2em;
    text-transform: uppercase;
    text-anchor: middle;
    transform: translateY(0.7em);
  }

  .figure-key [class*="shape-"] {
    margin-right: 8px;
  }

  .figure-key-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  .figure-key-list li {
    margin: 5px auto;
  }

  .shape-circle {
    display: inline-block;
    vertical-align: middle;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${(props: IProps) => props.strokeColor};
    text-transform: capitalize;
  }
`;

SpeedoMeter.defaultProps = {
  textColor: "white",
  strokeColor: "blueviolet",
  maxSize: "100vh",
};

export default SpeedoMeter;
