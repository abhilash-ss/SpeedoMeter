interface Props {}

const SpeedoMeter = (props: Props) => {
  return (
    <div>
      <div className="speedo">
        <div className="face">
          <div className="needle"></div>
        </div>
      </div>

      <h3>Choose your speed...</h3>

      <form>
        <input className="speed" name="speed" type="radio" value="slow" /> Slow
        <br />
        <input
          className="speed"
          name="speed"
          type="radio"
          value="medium"
        />{" "}
        Medium
        <br />
        <input className="speed" name="speed" type="radio" value="fast" /> Fast
      </form>
    </div>
  );
};

export default SpeedoMeter;
