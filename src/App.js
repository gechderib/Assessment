
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AnnouncementOne from './pages/AnnouncementOne';
import AnnouncementTwo from './pages/AnnouncementTwo';

function App() {
  return (
    <div className="text-3xl">
      <Routes>
        <Route path='/' element={<AnnouncementOne/>}/>
        <Route path='/two' element={<AnnouncementTwo/>}/>
      </Routes>
    </div>
  );
}

export default App;
