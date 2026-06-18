import { Routes, Route } from "react-router-dom";
import { projectsConfig } from "../data/projectsConfig";
import { Home, Projects, Error } from "../pages";
import Section from "../components/ui/Section";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      {projectsConfig.map((data) => {
        const { id, path, name, component: Component } = data;

        return (
          <Route
            key={id}
            path={`projects/${path}`}
            element={
              <Section title={name}>
                <Component />
              </Section>
            }
          />
        );
      })}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRoutes;
