import './App.css';
import TodoWrapper from './components/todoWrapper';

function App() {
  const title = 'Todo app'
  return (
    <div className="App">
      <header className="App-header">
        <h2>{title}</h2>
      </header>
      <TodoWrapper></TodoWrapper>

    </div>
  );
}

export default App;
