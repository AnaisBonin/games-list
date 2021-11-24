import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </Router>

  );
}

export default App;
