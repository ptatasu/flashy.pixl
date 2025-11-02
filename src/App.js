import './App.css';
import Main from './Main';
import Error from './Error';
import Capture from './Capture';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} errorElement={<Error />}/>
        <Route path ='/capture' element={<Capture />} />
        <Route path =':id' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
