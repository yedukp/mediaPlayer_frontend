import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Header/>
     <Routes>
      <Route path={'/'} element= {<LandingPage/>}/>
      <Route path={'/home'} element= {<Home/>}/>
      <Route path={'/watch-history'} element= {<WatchHistory/>}/>
     </Routes>
     <hr/>
     <Footer/>
     
    </div>
  );
}

export default App;
