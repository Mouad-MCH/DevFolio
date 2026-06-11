interface LevelBarsProps {
  filled: number;
}

const LevelBars = ({ filled }: LevelBarsProps) => {
  return (
    <span className="level_bars">
      {[1, 2, 3].map((i) => (
        <i key={i} className={`level_bar${i <= filled ? " on" : ""}`} />
      ))}
    </span>
  );
};

export default LevelBars;
