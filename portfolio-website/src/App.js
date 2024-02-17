import './App.css';
import { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Components
import HomePage from './components/home-page';

//Pages
import SpacedPage from './project-pages/spaced-project';
import Portfolio from './project-pages/portfolio-project';
import FanFindrW from './project-pages/fanfindrw-project';
import FanFindrM from './project-pages/fanfindrm-project';

export const ThemeContext = createContext(null);

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/spaced-project' exact Component={SpacedPage}/>
        <Route path='/fanfindrw-project' exact Component={FanFindrW}/>
        <Route path='/fanfindrm-project' exact Component={FanFindrM}/>
        <Route path='/portfolio-project' exact Component={Portfolio}/>
      </Routes>
    </Router>
  );
}

export default App;