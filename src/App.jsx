import Navbar from './components/Navbar';
import ViewProject from './components/Projects';
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
import Footer from './components/Footer/';
import Projects from './components/Projects';
import LoginUI from './projects/08otpLoginUI';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main">
        <Breadcrumbs />
        <Routes>
          <Route exact path="/" element={<Carousel />} />
          <Route path="projects" element={<Projects />} />
          <Route exact path="projects/carousel" element={<Carousel />} />
          <Route path="projects/likeButton" element={<LikeButton />} />
          <Route path="projects/pagination" element={<Pagination />} />
          <Route path="projects/progressBar" element={<ProgressBar />} />
          <Route path="projects/folders" element={<FolderStructure />} />
          <Route path="projects/pwGenerator" element={<PasswordGenerator />} />
          <Route path="projects/gridLights" element={<GridLights />} />
          <Route path="projects/loginUI" element={<LoginUI />} />
          <Route path="*" element={<Error errorMessage="Url not found!" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
