import { useState } from 'react';
export default function Content() {
  const [name, setName] = useState<string>('random');
  const [count, setCount] = useState<number>(0);

  const handleName = (): void => {
    const names: string[] = ['Ada', 'Tata', 'Rada'];
    const int = Math.floor(Math.random() * names.length);
    setName(names[int]);
  };

  const handleCountChange = (): void => {
    setCount(count + 1);
    console.log(`Count: ${count}`);
  };

  const handleCount = (): void => {
    console.log(`Current Count State: ${count}`);
  };

  const handleEventClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(`CurrentTarget.outerHTML: `, evt.currentTarget.outerHTML);
    console.log(`CurrentTarget: `, evt.currentTarget);
    console.log(`Target: `, evt.target);
  };

  return (
    <>
      <p>Learn React, {name} </p>
      <p>Count: {count}</p>
      <button onClick={handleName}>Change Name</button>
      <button onClick={handleCountChange}> Change Count</button>
      <button onClick={handleEventClick}>Click Event</button>
    </>
  );
}
