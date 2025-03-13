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
import QuizApp from './projects/09-quiz-game';
import MultiSelectSearch from './projects/10-multi-select-search';
import FormValidation from './projects/11.form-validation-yup';
import MemoryGame from './projects/12-memory-game';
import ChatBot from './projects/13-AI_chatbot';
import SnakeGame from './projects/14-snake-game';
import TicTackToe from './projects/15-tic-tack-toe';

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
          <Route path="projects/quiz/*" element={<QuizApp />} />
          <Route
            path="projects/multiSelectSearch"
            element={<MultiSelectSearch />}
          />
          <Route path="projects/formValidation" element={<FormValidation />} />
          <Route path="projects/memoryGame" element={<MemoryGame />} />
          <Route path="projects/chatbot" element={<ChatBot />} />
          <Route path="projects/snakeGame" element={<SnakeGame />} />
          <Route path="projects/ticTackToe" element={<TicTackToe />} />
          <Route path="*" element={<Error errorMessage="Url not found!" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
