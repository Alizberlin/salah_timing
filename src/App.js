import Dashboard from "./components/pages/Dashboard";
import Settings from './components/pages/Settings'
import {Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { UserProvider } from "./components/stateManager";

function App() {
  return (
    <div >
      <UserProvider>
      <Routes>
        <Route path='/salah_timing' element={<Dashboard />} />
        <Route path='/settings' element={<Settings />} />


        <Route path='*' element={<Dashboard />} />

      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
