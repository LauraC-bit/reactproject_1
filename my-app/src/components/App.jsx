
import './App.scss';
import YellowBlock from './yellowBlock/yellowBlock';
import BlueBlock from './blueBlock/blueBlock.jsx';
import RedCircle from './redCircle/redCircle';
import { useState } from 'react';

function App() {
  const [inputValue, setinputValue] = useState("something")

  const UpdateValue = (value) => {
    setinputValue(value)
  }

  return (
    <div className="container">
      <input type="text" value={inputValue} onChange={(e) => UpdateValue(e.target.value)} />
      <div className="flex">
        <YellowBlock
          width={200}
          height={200}
        />

        <YellowBlock
          width={200}
          height={200}
          greenWidth={170}
          greenHeight={30}
        />
      </div>

      <BlueBlock inputValue={inputValue} />

      <RedCircle size={200} />
    </div>
  );
}

export default App;


