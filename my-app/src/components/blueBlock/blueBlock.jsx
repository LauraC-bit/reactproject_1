import './blueBlock.scss';
import YellowBlock from '../yellowBlock/yellowBlock.jsx';
import GreenBlock from '../greenBlock/greenBlock.jsx';
import RedCircle from '../redCircle/redCircle';
import { useState } from 'react';

const BlueBlock = (props) => {
  const { inputValue } = props;
  const [redColor, setRedColor] = useState(`hsl(0, 50%, 50%)`);

  const handleRedCircleClick = (color) => {
    console.log(color);
    setRedColor(color);
  };

  return (
    <div className="blue-block">
      <div className="flex-inblue">
        <YellowBlock
          width={130}
          height={130}
          greenWidth={96}
          greenHeight={96}
        />

        <GreenBlock
          width={140}
          height={12}
        />
      </div>
      <span>{inputValue}</span>
      <p>{redColor}</p>
      
      <RedCircle
        handleClickFromParent={(color) => handleRedCircleClick(color)}
        size={140}
      />
    </div>
  );
};

export default BlueBlock;