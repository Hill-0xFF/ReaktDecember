import { useState } from 'react';

import './css/styles.css';
import Canvas from './components/Canvas';
import SetColor from './components/SetColor';

export default function App() {
  const [color, setColor] = useState<string>('');

  return (
    <>
      {<Canvas color={color} />}
      <SetColor color={color} setColor={setColor} />
    </>
  );
}
