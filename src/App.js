import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive'
import Home from './home.js';
import SearchBar from './searchbar.js';

function App() {

  return (
    <div className="App">
      <div style={{
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <SearchBar />
      </div>

    </div>
  );
}

export default App;
