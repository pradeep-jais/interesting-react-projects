import Section from "../../components/ui/Section";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import useProjectsFilter from "../../hooks/useProjectsFilter";

const Projects = () => {
  const { filters, toggleTags, setSearch, filteredProjects, allTags } =
    useProjectsFilter();

  return (
    <Section title={"Explore projects"} styles={"bg-slate-200 px-6"}>
      <div className="flex gap-4 items-center bg-slate-100 mb-4 rounded-md py-1 px-4">
        <div className="w-[65%] md:w-[75%] overflow-x-scroll no-scrollbar">
          <ul className=" flex gap-2 p-2 ">
            {allTags.map((tag) => {
              return (
                <li key={tag}>
                  <button
                    onClick={() => toggleTags(tag)}
                    className={`border border-solid py-1 px-2 capitalize rounded-md hover:bg-slate-50 hover:border-slate-500/30  cursor-pointer 
                  ${filters.tags.includes(tag) ? "bg-blue-50 text-blue-900 border-blue-500/30" : "bg-transparent border-transparent"}
                  `}
                  >
                    {tag}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="group flex-1 flex items-stretch relative py-1 px-2 gap-1 border border-solid border-slate-700/30 rounded-3xl focus-within:outline focus-within:outline-2 
             focus-within:outline-offset-1 focus-within:outline-indigo-500 focus-within:border-transparent"
        >
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="py-0.5 px-2 w-full bg-transparent flex-1 text-ellipsis border-none focus:outline-none text-slate-900 placeholder:text-slate-500"
          />
          <Search
            className="text-slate-600 group-focus-within:text-indigo-500 "
            size={20}
          />
        </div>
      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProjects.map((project) => {
          const { id, name, description, path, tags } = project;
          return (
            <li key={id}>
              <Link
                to={path}
                className="block h-full bg-slate-100 p-5 rounded-md shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-lg text-slate-900 font-semibold capitalize mb-1">
                  {name}
                </h3>
                <p className="text-sm text-slate-700 mb-4">{description}</p>
                <div className="flex gap-2.5">
                  {tags.map((tag, i) => {
                    return (
                      <span
                        key={i}
                        className="text-sm text-slate-700 py-0.5 px-4 bg-slate-50 shadow-sm rounded-lg"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
export default Projects;
