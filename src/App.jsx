import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const number = 8;
  const name = 'Andrei';
  const age = 20;
  const city = 'Minsk';
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1>📋 My Tasks</h1>

      <p>Количество задач: {count}</p>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Горол: {city}</p>
      <p>{number ** 2}</p>

      <button onClick={() => setCount(count + 1)}>
        Добавить задачу
      </button>
      <button onClick={() => setCount(count - 1)}>
        Удалить задачу
      </button>
      <p>Rreact</p>
      {show && <p>ОФРВЛОЫЛФДЛВТФЫДВФДЫТДВЛФТЫДЛФЫ</p>}
      <button onClick={() => setShow(!show)}>{show && <p>Скрыть Описание</p>}{!show && <p> Открыть Описание</p>}</button>
    </div>
  );
}

export default App;