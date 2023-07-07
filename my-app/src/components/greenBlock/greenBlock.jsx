import './greenBlock.scss';

const GreenBlock = (props) => {
  const { width, height, onGreenBlockClick } = props;
  // onGreenBlockClick = () => handleGreenBlockClick();

  const handleClick = () => {
    onGreenBlockClick();
  };

  return (
    <div
      onClick={(e) => handleClick()}
      // onClick={onGreenBlockClick}
      className="green-block"
      style={{ width: `${width}px`, height: `${height}px` }}
    ></div>
  );
};


export default GreenBlock;