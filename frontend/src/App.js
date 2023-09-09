import logo from './logo.svg';
import './App.css';
import Resume from './Reg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Resume/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
