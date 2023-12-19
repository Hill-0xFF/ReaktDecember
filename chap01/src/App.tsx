import './App.css';

export default function App() {
  const name: string = 'Ada';
  const handleName = (): string => {
    const names: string[] = ['Ada', 'Tata', 'Rada'];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  };
  return (
    <>
      <p>Learn React, {name} </p>
      Hello, {handleName()}
    </>
  );
}
