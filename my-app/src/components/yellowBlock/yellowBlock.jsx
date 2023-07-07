import GreenBlock from '../greenBlock/greenBlock.jsx';
import './yellowBlock.scss';
import { useState } from 'react';

const YellowBlock = (props) => {
  const { width, height, greenWidth, greenHeight } = props;
  const [showGreenBlock, setShowGreenBlock] = useState(true);

  const handleGreenBlockClick = () => {
    setShowGreenBlock(false);
  };

  const handleClick = (target) => {
    if (!target.classList.contains("yellow-block")) return;
    setShowGreenBlock(true);
  };

  return (
    <div
      className="yellow-block"
      onClick={(e) => handleClick(e.target)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {greenWidth > 0 && greenHeight > 0 && showGreenBlock && (
        <GreenBlock
          width={greenWidth}
          height={greenHeight}
          onGreenBlockClick={() => handleGreenBlockClick()}
        />
      )}
    </div>
  );
};



export default YellowBlock;