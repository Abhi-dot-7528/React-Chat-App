import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
