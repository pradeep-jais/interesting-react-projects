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
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main">
        <Breadcrumbs />
        <Routes>
          <Route exact path="/" element={<Carousel />} />
          <Route exact path="projects/carousel" element={<Carousel />} />
          <Route path="projects/likeButton" element={<LikeButton />} />
          <Route path="projects/pagination" element={<Pagination />} />
          <Route path="projects/progressBar" element={<ProgressBar />} />
          <Route path="projects/folders" element={<FolderStructure />} />
          <Route path="projects/pwGenerator" element={<PasswordGenerator />} />
          <Route path="projects/gridLights" element={<GridLights />} />
          <Route path="*" element={<Error errorMessage="Url not found!" />} />
        </Routes>
      </main>
      <ViewProject />
    </BrowserRouter>
  );
}

export default App;
