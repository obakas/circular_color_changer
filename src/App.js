import Circle from './Circle'
import Input from './Input'
import { useState } from 'react'

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText]= useState(true)

  return (
    <div className="App">
      <Circle 
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}/>
      <Input 
        colorValue={colorValue} 
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        setIsDarkText={setIsDarkText}/>
    </div>
  );
}

export default App;
