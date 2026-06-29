import Section from "../../components/ui/Section";
import { projectsConfig } from "../../data/projectsConfig";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [filters, setFilters] = useState({ tags: [], search: "" });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Project, query:", filters.search);
  };

  const toggleTags = (tag) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const filteredProjects = projectsConfig.filter((project) => {
    const tagMatched =
      filters.tags.length > 0
        ? project.tags.some((t) => filters.tags.includes(t))
        : projectsConfig;

    const searchResultFound = project.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return tagMatched && searchResultFound;
  });

  let allTags = new Set();

  projectsConfig.forEach((project) => {
    project.tags.forEach((tag) => allTags.add(tag));
  });
  allTags = [...allTags];
  console.log(allTags);

  console.log(filters);

  return (
    <Section title={"Explore projects"} styles={"bg-slate-200 px-6"}>
      <div className="flex gap-4 items-center bg-slate-100 mb-4 rounded-md py-1 px-4">
        <div className="max-w-full">
          <ul className=" flex gap-2 p-2 overflow-hidden">
            {allTags.map((tag) => {
              return (
                <li key={tag}>
                  <button
                    onClick={() => toggleTags(tag)}
                    className={`bg-transparent border border-solid border-transparent py-1 px-2 capitalize rounded-md hover:bg-slate-50 hover:border-slate-500/30  cursor-pointer 
                  ${filters.tags.includes(tag) ? "bg-slate-50 border-slate-500/30" : ""}
                  `}
                  >
                    {tag}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <form
          onSubmit={handleSearch}
          className="group flex items-center relative py-0.5 px-2 gap-2 border border-solid border-slate-700/30 rounded-3xl min-w-12 focus-within:outline focus-within:outline-2 
             focus-within:outline-offset-1 focus-within:outline-indigo-500 focus-within:border-transparent"
        >
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value.trim() }))
            }
            placeholder="Search projects..."
            className="py-0.5 px-2 flex-1 border-none bg-transparent focus:outline-none text-slate-900 placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="bg-inherit pt-1 cursor-pointer border-none"
          >
            <Search
              className="text-slate-600 group-focus-within:text-indigo-500 "
              size={20}
            />
          </button>
        </form>
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
