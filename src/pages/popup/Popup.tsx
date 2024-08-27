import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onButtonClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
      <p className="text-2xl text-center">Check Spell</p>
      <button onClick={onButtonClick}>클릭!</button>
      {isClicked && <div>클릭됨</div>}
    </div>
  );
}

export default App;
