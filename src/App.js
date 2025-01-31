import './App.css';

import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import Beer from './components/Beer';

import { Route, Routes } from 'react-router-dom';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beer/:beerID" element={<Beer />} />
        <Route path="/random-beer" element={<Beer />} />
        <Route path="/new-beer" element={<NewBeer />}/>
      </Routes>
    </div>
  );
}

export default App;
