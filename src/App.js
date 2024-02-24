
import './App.css';
import MyComponent from './component/MyComponent';

function App() {
  const text = "Котик, я тобі набрехала(( мені потрібна була твоя увага, щоб ти задонатилв(ла) і обов'язково зробив(ла) репост 3:";

  return (
    <div>
      <MyComponent text={text} 
     />
    </div>
  );
}

export default App;
