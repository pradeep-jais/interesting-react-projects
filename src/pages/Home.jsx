import { Link } from "react-router-dom";
import {
  Carousel,
  LikeButton,
  ProgressBar,
  PasswordGenerator,
  GridLights,
  MultiSelectSearch,
  MemoryGame,
  TicTackToe,
} from "../projects";

const Home = () => {
  return (
    <section className="text-center p-8">
      <h1>Welcome Developers</h1>
      <p className="mx-auto">
        This project is a collection of various{" "}
        <strong>Interesting React Functional Components</strong> structured as{" "}
        <strong>Professional Dashboard App</strong> for learning, inspiration
        and fun.
      </p>
      <p className="mx-auto">
        You'll find solution for various{" "}
        <strong>Machine Coding Challenges</strong> and learn React concepts like
        components, state, hooks, API integration, routing, folder structure,
        and many more.
      </p>
      <Link to="/projects" className="btn text-xl mt-8 mb-16">
        Explore Projects
      </Link>
      <h2>have fun with these projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-300">
          <Carousel />
        </div>
        <div className="p-4 bg-slate-300">
          <GridLights />
        </div>
        <div className="p-4 bg-slate-300">
          <PasswordGenerator />
        </div>
        <div className="p-4 bg-slate-300">
          <LikeButton />
        </div>

        <div className="p-4 bg-slate-300">
          <MultiSelectSearch />
        </div>

        <div className="p-4 bg-slate-300">
          <MemoryGame />
        </div>
        <div className="p-4 bg-slate-500">
          <TicTackToe />
        </div>
        <div className="p-4 bg-slate-300">
          <ProgressBar />
        </div>
      </div>
    </section>
  );
};
export default Home;
