import Container from './components/Container'
import './App.css';
import { SongProvider} from './context/useContext'

function App() {
  return (
    <div className="App">
      <SongProvider>
     <Container />
     </SongProvider>
    </div>
  );
}

export default App;
