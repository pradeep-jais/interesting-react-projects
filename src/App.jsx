import Navbar from './components/Navbar';
import ViewProject from './components/ProjectLists';
import Carousel from './projects/01Carousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LikeButton from './projects/02-likeButton';
import Pagination from './projects/03-pagination';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Carousel />} />
          <Route exact path="/carousel" element={<Carousel />} />
          <Route path="/likeButton" element={<LikeButton />} />
          <Route path="/pagination" element={<Pagination />} />
        </Routes>
        <ViewProject />
      </main>
    </BrowserRouter>
  );
}

export default App;
