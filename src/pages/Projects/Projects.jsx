import Section from "../../components/ui/Section";
import ProjectLinkCard from "./ProjectLinkCard";
import FilterTags from "./FilterTags";
import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";

import useProjectsFilter from "../../hooks/useProjectsFilter";

const Projects = () => {
  const { filters, toggleTags, setSearch, filteredProjects, allTags } =
    useProjectsFilter();

  return (
    <Section title={"Explore projects"} styles={"bg-slate-200 px-6"}>
      <div className="flex gap-4 items-center bg-slate-100 mb-4 rounded-md py-1 px-4">
        <FilterTags
          allTags={allTags}
          toggleTags={toggleTags}
          filters={filters}
        />
        <SearchBar filters={filters} setSearch={setSearch} />
      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProjects.map((project) => {
          return (
            <li key={project.id}>
              <ProjectLinkCard {...project} />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
export default Projects;
