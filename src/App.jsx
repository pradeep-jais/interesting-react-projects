import Navbar from "./components/Navbar";
import ViewProject from "./components/Projects";
import Error from "./components/Error";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer/";
import Projects from "./components/Projects";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Carousel,
  LikeButton,
  Pagination,
  ProgressBar,
  FolderStructure,
  PasswordGenerator,
  GridLights,
  OtpLoginUI,
  QuizGame,
  MultiSelectSearch,
  FormValidationYup,
  MemoryGame,
  AiChatbot,
  SnakeGame,
  TicTackToe,
} from "./projects";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main">
        <Breadcrumbs />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route exact path="projects/carousel" element={<Carousel />} />
          <Route path="projects/likeButton" element={<LikeButton />} />
          <Route path="projects/pagination" element={<Pagination />} />
          <Route path="projects/progressBar" element={<ProgressBar />} />
          <Route path="projects/folders" element={<FolderStructure />} />
          <Route path="projects/pwGenerator" element={<PasswordGenerator />} />
          <Route path="projects/gridLights" element={<GridLights />} />
          <Route path="projects/loginUI" element={<OtpLoginUI />} />
          <Route path="projects/quiz/*" element={<QuizGame />} />
          <Route
            path="projects/multiSelectSearch"
            element={<MultiSelectSearch />}
          />
          <Route
            path="projects/formValidation"
            element={<FormValidationYup />}
          />
          <Route path="projects/memoryGame" element={<MemoryGame />} />
          <Route path="projects/chatbot" element={<AiChatbot />} />
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
