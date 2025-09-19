import "./Grid.css";

type Prop = {
  size?: number;
};

function Grid({ size = 9 }: Prop) {
  return (
    <div className="grid-container">
      {[...Array(size).keys()].map((n) => (
        <div className="square" key={n + 1}>
          {n + 1}
        </div>
      ))}
    </div>
  );
}

export default Grid;
