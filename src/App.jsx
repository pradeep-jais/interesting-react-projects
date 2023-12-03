import Navbar from './components/Navbar';
import Carousel from './projects/01Carousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
