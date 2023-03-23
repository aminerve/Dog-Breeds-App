import { Route, Routes} from 'react-router-dom';

import Main from './pages/Main';
import Breeds from './pages/Breeds';
import About from './pages/About';
import Dog from './pages/Dog';
import NavBar from './components/NavBar';

import './App.css';


function App() {
  return (

    <div className="App">
      <NavBar/>
      <Routes>
       <Route path='/' element={<Main/>}/>
       <Route path='/breeds' element={<Breeds/>}/>
       <Route path='/dog' element={<Dog/>} />
       <Route path='/about' element={<About/>} />
      </Routes>
      

    </div>
  );
}

export default App;
