import './redCircle.scss';
import { useState } from 'react';

const RedCircle = (props) => {
  const { size, handleClickFromParent } = props;
  // const handleClickFromParent = (color) => {
  //   handleRedCircleClick(color)
  // }

  const [color, setColor] = useState(0);

  const handleClick = () => {
    const rdm = Math.floor(Math.random() * 361);
    setColor(rdm);
    if (!handleClickFromParent) return;
    handleClickFromParent(`hsl(${rdm}, 50%, 50%)`);
  };

  return (
    <div
      onClick={(e) => handleClick()}
      className="red-circle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `hsl(${color}, 50%, 50%)`,
      }}
    ></div>
  );
};

export default RedCircle;