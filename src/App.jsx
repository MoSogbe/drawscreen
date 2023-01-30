import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './Pages/Root';
import DrawScreen from './Pages/DrawScreen';
function App() {
  return (
   <Router>
    <Routes>
    <Route  path="/" element={<Root />}/>
    <Route  path="/draw_screen" element={<DrawScreen />}/>
    </Routes>
   </Router>
  );
}

export default App;
