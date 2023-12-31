import Navbar from './components/Navbar';
import ViewProject from './components/ProjectLists';
import Carousel from './projects/01Carousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LikeButton from './projects/02-likeButton';
import Pagination from './projects/03-pagination';
import Error from './components/Error';
import ProgressBar from './projects/04-progressBar';
import FolderStructure from './projects/05-folder-structure';
import PasswordGenerator from './projects/06-password-generator';
import GridLights from './projects/07-grid-lights';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<Carousel />} />
          <Route exact path="/carousel" element={<Carousel />} />
          <Route path="/likeButton" element={<LikeButton />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/progressBar" element={<ProgressBar />} />
          <Route path="/folders" element={<FolderStructure />} />
          <Route path="/pwGenerator" element={<PasswordGenerator />} />
          <Route path="/gridlights" element={<GridLights />} />
          <Route path="*" element={<Error errorMessage="Url not found!" />} />
        </Routes>
      </main>
      <ViewProject />
    </BrowserRouter>
  );
}

export default App;
