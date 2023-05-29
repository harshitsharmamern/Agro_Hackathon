import logo from './logo.svg';
import './App.css';
import Home from './Component/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Component/Helper/Signup';
import Page from './Component/Page';

function App() {
  return (<>

    <Router>
      <Routes>

        <Route path='/'element={<Page />} />
        <Route path='/home'element={<Home />} />
        <Route path='/signup'element={<Signup />} />


      </Routes>
    </Router>

  </>

  );
}

export default App;
