import { useState } from "react";
import { projectsConfig } from "../data/projectsConfig";

const useProjectsFilter = () => {
  const [filters, setFilters] = useState({ tags: [], search: "" });

  const toggleTags = (tag) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const setSearch = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const filteredProjects = projectsConfig.filter((project) => {
    // Tag filter - Return all for empty tags []
    const tagMatched =
      filters.tags.length === 0
        ? true
        : project.tags.some((t) => filters.tags.includes(t));

    // Search filter on name - case insensitive
    const searchResultFound = project.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    // Combine different filters - AND operation
    return tagMatched && searchResultFound;
  });

  //   Get all tags - dynamic
  const tagsSet = new Set();
  projectsConfig.forEach((project) => {
    project.tags.forEach((tag) => tagsSet.add(tag));
  });
  const allTags = [...tagsSet];

  return { filters, toggleTags, setSearch, filteredProjects, allTags };
};

export default useProjectsFilter;
