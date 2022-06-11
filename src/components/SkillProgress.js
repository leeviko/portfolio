const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress green" style={{ width: progress }}></div>
    </div>
  );
};

export default ProgressBar;
