import Navbar from './components/Navbar';
import Carousel from './projects/01Carousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LikeButton from './projects/02-likeButton';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Carousel />} />
        <Route path="/likeButton" element={<LikeButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
