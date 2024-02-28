import Box from './Box';
import Input from './Input'
import { useState } from 'react';
function App() {
  const [color, setColor] = useState('')
  const [hexValue, setHexValue] = useState('')
  return (
    <div>
    <Box 
    color={color}
    hexValue={hexValue}/>
    <Input 
    color={color}
    setColor={setColor}
    setHexValue={setHexValue}
    hexValue={hexValue}
    />
    </div>
    
    
  );
}

export default App;
